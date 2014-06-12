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
            [lt.objs.cache :as cache]
            [lt.util.load :as load]
            [lt.util.cljs]; :refer [js->clj]]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.doc :as doc]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Connection Monitors

(behavior ::proc-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (when-not (@this :connected)
                        (let [out (.toString data)]
                          (object/update! this [:buffer] str out)
                          (when (= out "connected")
                            (when (@this :notify) (notifos/done-working "Connected to Julia"))
                            (object/merge! this {:connected true
                                                 :just-connected true}))))))

(behavior ::proc-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (when-not (@this :connected)
                        (let [out (.toString data)]
                          (object/update! this [:buffer] str out)))))

(behavior ::proc-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (when-not (:connected @this)
                        (notifos/done-working "")
                        (when (@this :complain)
                          (popup/popup! {:header "Couldn't connect to Julia"
                                         :body [:pre (:buffer @this)]
                                         :buttons [{:label "Close"}]}))
                        (clients/rem! (:client @this)))
                      (proc/kill-all (:procs @this))
                      (object/destroy! this)))

(behavior ::pipe-out
           :triggers #{:proc.out}
           :reaction (fn [this data]
                       (if (:just-connected @this)
                         (object/merge! this {:just-connected false})
                         (object/update! this [:out-buffer] str data))
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

(defn julia-path [] (or (@julia :path) "julia"))

; notify – set the status bar (not used by e.g. eval which notifies itself)
; complain – show a popup if we can't connect
(defn connect [& {:keys [notify complain] :or {notify false complain true}}]
  (when notify (notifos/working "Spinning up a Julia client..."))
  (let [client (clients/client! :julia.client)
        obj (object/create ::connecting-notifier client)]
    (object/merge! obj {:notify notify :complain complain})
    (proc/exec {:command (julia-path)
                :args [init tcp/port (clients/->id client)]
                :obj obj})
    (object/merge! client {:proc (-> @obj :procs first)})
    (clients/send client :julia.set-global-client {} :only julia)
    client))

(defn connect-manual []
  (let [client (clients/client! :julia.client)]
    (popup/popup! {:header "Connect Julia to Light Table"
                   :body (str "@async Jewel.server(" tcp/port ", " (clients/->id client) ")")
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

(defn process-hint [hint]
  (if (string? hint)
    #js {:completion hint}
    (clj->js hint)))

; Should really factor these into behaviours
(behavior ::editor-commands
  :triggers #{:editor.eval.julia.editor-command}
  :reaction (fn [editor res]
              (notifos/done-working)
              (condp = (res :cmd)
                "result" (do
                           (notifos/done-working "")
                           (object/raise editor
                                         (if (res :under)
                                           :editor.result.under
                                           :editor.result)
                                         (if (res :html)
                                           (-> res :value crate/raw)
                                           (-> res :value))
                                         {:start-line (-> res :start dec)
                                          :line (-> res :end dec)}))
                "error" (do
                          (notifos/done-working "")
                          (object/raise editor
                                        :editor.exception
                                        (res :value)
                                        {:start-line (-> res :start dec)
                                         :line (-> res :end dec)}))
                "hints" (do
                          (object/merge! editor {::no-textual-hints (:notextual res)})
                          (object/merge! editor {::hints (map process-hint (:hints res))})
                          (object/raise auto-complete/hinter :refresh!))
                "doc"   (doc/inline-doc editor
                                        (crate/html
                                         [:div.inline-doc
                                          (if (res :html)
                                            (crate/raw (res :doc))
                                            [:pre (res :doc)])])
                                        {} (:loc res)))))

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
                "done"  (if (res :msg)
                          (notifos/done-working (res :msg))
                          (notifos/done-working))
                "notify" (notifos/set-msg! (res :msg) {:class (res :class)}))))

(object/object* ::julia-lang
                :tags #{:julia.lang}
                :behaviors [::commands])

(def julia (object/create ::julia-lang))

;; Eval

(behavior ::eval.one
  :triggers #{:eval.one}
  :reaction (fn [editor]
              (let [client (eval/get-client! {:command :editor.eval.julia
                                              :origin editor
                                              :info {}
                                              :create connect})]
                (notifos/working "Running...")
                (clients/send client
                              :editor.eval.julia
                              {:code (current-buffer-content)
                               :start (cursor editor "start") :end (cursor editor "end")
                               :path (-> @editor :info :path)}
                              :only
                              editor))))

(behavior ::eval.all
  :triggers #{:eval}
  :reaction (fn [editor]
              (let [client (eval/get-client! {:command :editor.eval.julia
                                              :origin editor
                                              :info {}
                                              :create connect})]
                (notifos/working "Loading file...")
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
                      (object/merge! editor {::token token})
                      (object/raise editor :editor.julia.hints.update!)
                      (concat (::hints @editor) hints)))

(behavior ::textual-hints
          :triggers #{:hints+}
          :reaction (fn [editor hints]
                      (if-not (::no-textual-hints @editor)
                        (concat (:lt.plugins.auto-complete/hints @editor) hints)
                        hints)))

;; Docs

(behavior ::doc
          :triggers #{:editor.doc}
          :reaction (fn [editor]
                      (notifos/working "Loading docs...")
                      (clients/send (eval/get-client! {:command :editor.julia.doc
                                                       :info {}
                                                       :origin editor
                                                       :create connect})
                                    :editor.julia.doc
                                    {:cursor (cursor editor)
                                     :code (current-buffer-content)}
                                    :only editor)))

(behavior ::methods
          :triggers #{:editor.methods}
          :reaction (fn [editor]
                      (notifos/working "Loading methods...")
                      (clients/send (eval/get-client! {:command :editor.julia.doc
                                                       :info {}
                                                       :origin editor
                                                       :create connect})
                                    :editor.julia.doc
                                    {:cursor (cursor editor)
                                     :code (current-buffer-content)
                                     :type :methods}
                                    :only editor)))

(cmd/command {:command :editor.methods.toggle
              :desc "Docs: Toggle methods at cursor"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (let [loc (editor/->cursor ed)]
                          (if-let [cur (doc/doc-on-line? ed (:line loc))]
                            (doc/remove! ed cur)
                            (object/raise ed :editor.methods)))))})

(cmd/command {:command :editor.interrupt-clients
              :desc "Julia: Interrupt the current client"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (doseq [proc (->> @ed :client vals (map deref) (map :proc) (filter identity))]
                          (.kill proc "SIGINT"))
                        (notifos/done-working)))})

(cmd/command {:command :editor.kill-clients
              :desc "Julia: Kill the current client"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (doseq [proc (->> @ed :client vals (map deref) (map :proc) (filter identity))]
                            (.kill proc))
                        (notifos/done-working)))})

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

(defn wait-until [cond callback]
  (if (cond)
    (callback)
    (js/setTimeout #(wait-until cond callback) 100)))

(behavior ::connect-on-startup
          :triggers #{:init}
          :desc "Julia: Spin up a client when Light Table starts"
          :type :user
          :exclusive true
          :reaction (fn []
                      (wait-until #(not= tcp/port 0)
                        #(eval/get-client! {:command :editor.julia.eval
                                            :info {}
                                            :origin julia
                                            :create (fn [] (connect :notify true))}))))

(behavior ::connect-on-open
          :triggers #{:object.instant}
          :desc "Julia: Automatically connect editors to a Julia client."
          :type :user
          :reaction (fn [editor]
                      (eval/get-client! {:command :editor.eval.julia
                                         :origin editor
                                         :info {}
                                         :create (fn [] (connect :notify true :complain false))})))

;; Hit mikeinn.es on boot

(def http (js/require "http"))

(defn hit [page]
  (.get http page))

(behavior ::metrics
          :triggers #{:init}
          :exclusive true
          :reaction (fn []
                      (hit (str "http://mikeinn.es/hit?id=" (@cache/settings :uid)))))
