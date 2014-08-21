(ns lt.objs.langs.julia.display
  (:require [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn process-one! [dom]
  (let [header (dom/$ :.collapsible-header dom)
        content (js/$ (dom/$ :.collapsible-content dom))]
    (.hide content)
    (set! (.-onclick header)
          #(.toggle content 200))))

(defn process! [dom]
  (doseq [collapsible (dom/$$ :.collapsible dom)]
    (process-one! collapsible)))
