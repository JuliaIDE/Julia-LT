(ns lt.objs.langs.julia.menu
  (:require [lt.objs.menu :as menu :refer [cmd-item]]
            [lt.objs.platform :as platform]
            [lt.objs.editor :as editor]
            [lt.objs.sidebar.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

(behavior ::ed-menu+
          :triggers #{:menu+}
          :reaction (fn [this items]
                      (conj items
                            {:label "Evaluate"
                             :order -2
                             :enabled (not (editor/selection? this))
                             :click #(cmd/exec! :eval-editor-form)}
                            {:type "separator"
                             :order -1}
                            {:label "Show methods"
                             :order 0.15
                             :enabled (not (editor/selection? this))
                             :click #(cmd/exec! :editor.methods.toggle)})))
