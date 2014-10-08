(ns lt.plugins.runmode
  (:require [lt.util.dom :as dom]))

(defn process-one [node]
  (let [code (-> node .-innerText)
        mode (-> node .-dataset .-lang)]
    (when mode
      (set! (.-innerText node) "")
      (js/CodeMirror.runMode code mode node))
    node))

(defn process! [node]
  (process-one node)
  (doseq [node (dom/$$ :.code node)]
    (process-one node))
  node)
