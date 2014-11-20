(ns lt.objs.langs.julia
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
            [lt.objs.console :as console]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.popup :as popup]
            [lt.objs.notifos :as notifos]
            [lt.util.dom :as dom]
            [crate.core :as crate])
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

(behavior ::popup
          :triggers #{:popup}
          :reaction (fn [this res]
                      (popup/popup! {:header  (res :header)
                                       :body    (res :body)
                                       :buttons (res :buttons)})))

(object/object* ::julia-lang
                :tags #{:julia.lang}
                :behaviors [::commands ::popup])

(def julia (object/create ::julia-lang))

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

(behavior ::dark-theme
          :triggers #{:object.instant}
          :desc "Julia: Use a dark theme"
          :type :user
          :exclusive [::light-theme]
          :reaction (fn [app]
                      (dom/add-class (dom/$ :body) :julia-dark)))

(behavior ::light-theme
          :triggers #{:object.instant}
          :desc "Julia: Use a light theme"
          :type :user
          :exclusive [::dark-theme]
          :reaction (fn [app]
                      (dom/remove-class (dom/$ :body) :julia-dark)))

(defn process [node]
  (-> node lt.objs.file-links/process! lt.plugins.runmode/process!))
