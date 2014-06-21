(ns lt.objs.langs.julia
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
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

;; Editor commands

; Should really factor these into behaviours
(behavior ::editor-commands
  :triggers #{:editor.eval.julia.editor-command}
  :reaction (fn [editor res]
              (notifos/done-working)
              (condp = (res :cmd)
                "result" (do
                           (notifos/done-working "")
                           (let [val (if (res :html)
                                       (-> res :value crate/raw)
                                       (-> res :value))]
                             (object/raise editor
                                           (if (res :under)
                                             :editor.result.underline
                                             :editor.result)
                                           val
                                           {:start-line (-> res :start dec)
                                            :line (-> res :end dec)}))
                           ; We have to reparse because DocumentFragment children are removed
                           (if (res :html) (-> res :value crate/raw eval-scripts)))
                "error" (do
                          (notifos/done-working "")
                          (object/raise editor
                                        :editor.exception
                                        (res :value)
                                        {:start-line (-> res :start dec)
                                         :line (-> res :end dec)}))
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
                "notify" (notifos/set-msg! (res :msg) {:class (res :class)})
                "console" (if (res :html)
                            (let [val (-> res :value crate/raw)]
                              (console/verbatim val)
                              ; Reparse, DocumentFragment nodes will be moved
                              (eval-scripts (-> res :value crate/raw)))
                            (-> res :value console/log)))))

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
                              {:code (editor/->val editor)
                               :start (util/cursor editor "start") :end (util/cursor editor "end")
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
                              {:code (editor/->val editor)
                               :all true
                               :path (-> @editor :info :path)}
                              :only
                              editor))))

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
                                    {:cursor (util/cursor editor)
                                     :code (editor/->val editor)}
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
                                    {:cursor (util/cursor editor)
                                     :code (editor/->val editor)
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

(defn html-string [dom]
  (let [el (js/document.createElement "div")]
    (.appendChild el dom)
    (.-innerHTML el)))

(defn eval-scripts [dom]
  (let [scripts (if (= (type dom) js/HTMLScriptElement)
                  [dom]
                  (.querySelectorAll dom "script"))]
    (doseq [script scripts]
      (when (contains? #{"text/javascript" ""} (.-type script))
        (js/window.eval (.-text script))))))
