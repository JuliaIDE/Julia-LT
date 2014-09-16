(ns lt.objs.langs.julia.util
  (:require [crate.core :as crate]
            [lt.objs.editor :as editor]))

;; Editors

; Use 1-based indexing for Julia
(defn cursor
  ([editor] (cursor editor "start"))
  ([editor pos]
    (let [cursor (editor/->cursor editor pos)]
      {:line (-> cursor :line inc)
       :col  (-> cursor :ch   inc)})))

(defn module [editor]
  (@editor :lt.objs.langs.julia.module/module))

(defn widget [editor line & [type]]
  (-> @editor :widgets (get [(editor/line-handle editor (dec line)) (or type :inline)])))

;; Script evaluation

(defn inner-text [dom]
  (let [children (.-childNodes dom)]
    (if (> (.-length children) 0)
      (.-wholeText (nth children 0))
      "")))

(defn get-scripts [dom]
  (let [scripts (if (#{js/HTMLScriptElement js/SVGScriptElement} (type dom))
                  [dom]
                  (.querySelectorAll dom "script"))]
    (->> scripts (filter #(contains? #{"text/javascript" ""} (.-type %)))
                 (map inner-text))))

(defn eval-scripts [scripts]
  (doseq [script scripts]
    (js/window.eval script)))

;; DOM manipulation

(defn into-div [dom]
  (crate/html [:div dom]))

(defn parse-div [html]
  (-> html crate/raw into-div))
