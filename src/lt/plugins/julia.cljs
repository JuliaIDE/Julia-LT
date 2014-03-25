(ns lt.objs.langs.julia
  (:require [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.plugins.auto-complete :as auto-complete]
            [lt.objs.editor :as ed]
            [lt.objs.plugins :as plugins]
            [lt.plugins.watches :as watches]
            [lt.objs.proc :as proc]
            [clojure.string :as string]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.util.load :as load]
            [lt.util.cljs]; :refer [js->clj]]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Connection Monitors

(behavior ::proc-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (object/update! this [:buffer] str out)
                        (when (= out "connected")
                          (notifos/done-working)
                          (object/merge! this {:connected true})))))

(behavior ::proc-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (object/update! this [:buffer] str out))))

(behavior ::proc-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (when-not (:connected @this)
                        (notifos/done-working)
                        (popup/popup! {:header "Couldn't connect to Julia"
                                       :body [:pre (:buffer @this)]
                                       :buttons [{:label "close"}]})
                        (clients/rem! (:client @this)))
                      (proc/kill-all (:procs @this))
                      (object/destroy! this)))

(behavior ::pipe-out
           :triggers #{:proc.out}
           :reaction (fn [this data]
                       (object/update! this [:out-buffer] str data)
                       (let [out (@this :out-buffer)]
                         (when (= (last out) "\n")
                           (console/log out)
                           (object/merge! this {:out-buffer ""})))))

(behavior ::pipe-err
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (object/update! this [:err-buffer] str data)
                      (let [out (@this :err-buffer)]
                        (when (= (last out) "\n")
                          (console/log out "error")
                          (object/merge! this {:err-buffer ""})))))

(object/object* ::connecting-notifier
                :behaviors [::proc-out ::proc-error ::proc-exit ::pipe-out ::pipe-err]
                :init (fn [this client]
                        (object/merge! this {:client client :buffer ""})
                        nil))

;; Connection

(def init (files/join plugins/*plugin-dir* "jl" "init.jl"))

(defn connect []
  (notifos/working "Connecting...")
  (let [client (clients/client! :julia.client)
        obj (object/create ::connecting-notifier client)]
    (proc/exec {:command (or (@julia :path) "julia")
                :args [init tcp/port (clients/->id client)]
                :obj obj})
    (clients/send client :julia.set-global-client {} :only julia)))

(defn connect-manual []
  (let [client (clients/client! :julia.client)]
    (popup/popup! {:header "Connect Julia to Light Table"
                   :body (str "Jewel.server(" tcp/port ", " (clients/->id client) ")")
                   :buttons [{:label "Done"}]})
    (clients/send client :julia.set-global-client {} :only julia)
    client))

(scl/add-connector {:name "Julia (manual)"
                    :desc "Manually connect to Julia."
                    :connect connect-manual})

;; Util

(defn current-buffer-content []
  "Returns content of the current buffer"
  (let [cm (editor/->cm-ed (pool/last-active))]
    (.getRange cm #js {:line 0 :ch 0} #js {:line (.lineCount cm) :ch 0})))

(defn cursor
  ([editor] (cursor editor "start"))
  ([editor pos]
    (let [cursor (ed/->cursor editor pos)]
      {:line (-> cursor :line inc)
       :col  (-> cursor :ch   inc)})))

;; Editor commands

; Should really factor these into behaviours
(behavior ::editor-commands
  :triggers #{:editor.eval.julia.editor-command}
  :reaction (fn [editor res]
              (notifos/done-working)
              (condp = (res :cmd)
                "result" (object/raise editor (if (res :under)
                                                :editor.result.under
                                                :editor.result)
                                              (if (res :html)
                                                (-> res :value crate/raw)
                                                (-> res :value))
                                              {:start-line (-> res :start dec)
                                               :line (-> res :end dec)})
                "error" (object/raise editor :editor.exception
                                             (res :value)
                                             {:start-line (-> res :start dec)
                                              :line (-> res :end dec)})
                "hints" (do
                          (object/merge! editor {::hints (map #(do #js {:completion %}) (:hints res))})
                          (object/raise auto-complete/hinter :refresh!))
                "doc"   (object/raise editor :editor.doc.show! res))))

;; Global commands

(behavior ::commands
  :triggers #{:editor.eval.julia.command}
  :reaction (fn [editor res]
              (condp = (res :cmd)
                "popup" (popup/popup! {:header  (res :header)
                                       :body    (res :body)
                                       :buttons (res :buttons)})
                "print" (console/log (res :value)
                                     (if (res :error) "error"))
                "done"  (notifos/done-working))))

(object/object* ::julia-lang
                :tags #{:julia.lang}
                :behaviors [::commands])

(def julia (object/create ::julia-lang))

;; Eval

(behavior ::eval.one
  :triggers #{:eval.one}
  :reaction (fn [editor]
              ; This seems to return nil at first - not ideal.
              (when-let [client (eval/get-client! {:command :editor.eval.julia
                                                   :origin editor
                                                   :info {}
                                                   :create connect})]
                (notifos/working "")
                (clients/send client
                              :editor.eval.julia
                              {:code (current-buffer-content)
                               :start (cursor editor "start") :end (cursor editor "end")
                               :path (-> @editor :info :path)}
                              :only
                              editor))))

; Could be DRYer
(behavior ::eval.all
  :triggers #{:eval}
  :reaction (fn [editor]
              ; This seems to return nil at first - not ideal.
              (when-let [client (eval/get-client! {:command :editor.eval.julia
                                                   :origin editor
                                                   :info {}
                                                   :create connect})]
                (notifos/working "")
                (clients/send client
                              :editor.eval.julia
                              {:code (current-buffer-content)
                               :all true
                               :path (-> @editor :info :path)}
                              :only
                              editor))))

;; Autocomplete

(behavior ::trigger-update-hints
          :triggers #{:editor.julia.hints.update!}
          :debounce 100
          :reaction (fn [editor res]
                      (when-let [default-client (-> @editor :client :default)] ;; dont eval unless we're already connected
                        (when @default-client
                          (clients/send (eval/get-client! {:command :editor.julia.hints
                                                           :info {}
                                                           :origin editor
                                                           :create connect})
                                        :editor.julia.hints
                                        {:token (::token @editor)
                                         :cursor (cursor editor)
                                         :code (current-buffer-content)}
                                        :only editor)))))

(behavior ::use-local-hints
          :triggers #{:hints+}
          :reaction (fn [editor hints token]
                      (when (not= token (::token @editor))
                        (object/merge! editor {::token token})
                        (object/raise editor :editor.julia.hints.update!))
                        (concat (::hints @editor) hints)))

;; Docs

(behavior ::jl-doc
          :triggers #{:editor.doc}
          :reaction (fn [editor]
                      (clients/send (eval/get-client! {:command :editor.julia.doc
                                                       :info {}
                                                       :origin editor
                                                       :create connect})
                                    :editor.julia.doc
                                    {:cursor (cursor editor)
                                     :code (current-buffer-content)}
                                    :only editor)))

;; Settings

(behavior ::julia-path
          :triggers #{:object.instant}
          :desc "Julia: Set the path to the Julia executable"
          :type :user
          :params [{:label "path"
                    :type :path}]
          :exclusive true
          :reaction (fn [this exe]
                      (object/merge! julia {:path exe})))
