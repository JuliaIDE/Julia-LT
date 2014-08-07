(ns lt.objs.langs.julia.util
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

;; Editors

; Use 1-based indexing for Julia
(defn cursor
  ([editor] (cursor editor "start"))
  ([editor pos]
    (let [cursor (ed/->cursor editor pos)]
      {:line (-> cursor :line inc)
       :col  (-> cursor :ch   inc)})))

(defn module [editor]
  (@editor :lt.objs.langs.julia.module/module))

(defn widget [editor line & [type]]
  (-> @editor :widgets (get [(editor/line-handle editor line) (or type :inline)])))

;; DOM manipulation

(defn html-string [dom]
  (.outerHTML dom))

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

(defn into-div [dom]
  (let [div (crate/html [:div])]
    (.appendChild div dom)
    div))

(defn parse-div [html]
  (-> html crate/raw into-div))
