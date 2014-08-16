(ns lt.objs.langs.julia
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
            [lt.objs.console :as console]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.popup :as popup]
            [lt.objs.notifos :as notifos])
  (:require-macros [lt.macros :refer [behavior]]))

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
                            (let [val (-> res :value crate/raw)
                                  scripts (util/get-scripts val)]
                              (console/verbatim val)
                              (util/eval-scripts scripts))
                            (-> res :value console/log)))))

(object/object* ::julia-lang
                :tags #{:julia.lang}
                :behaviors [::commands])

(def julia (object/create ::julia-lang))

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
