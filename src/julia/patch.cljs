(ns lt.objs.langs.julia.patch
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.editor :as editor]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defui ->inline-exception [this info]
  [:div {:class (bound this eval/->exception-class)}
   [:span.spacer (eval/->spacing (editor/line (:ed info) (-> info :loc :line)))]
   (if (string? (:ex info)) [:pre (:ex info)] [:div (:ex info)])]
  :click (fn []
           (object/raise this :click))
  :contextmenu (fn [e]
                 (object/raise this :menu! e))
  :dblclick (fn []
              (object/raise this :double-click)))

(set! eval/->inline-exception ->inline-exception)
