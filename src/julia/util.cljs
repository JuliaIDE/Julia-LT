(ns lt.objs.langs.julia.util
  (:require [crate.core :as crate]
            [lt.objs.files :as files]
            [lt.objs.plugins :as plugins]
            [lt.objs.console :as console]
            [lt.objs.platform :as platform]
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

;; Files

(defn plugin-dir [& names]
  (->> (for [dir [plugins/user-plugins-dir plugins/plugins-dir]
             name names
             :let [path (files/join dir name)]
             :when (files/exists? path)]
         path)
       first))

;; Terminal

(defn call-me-maybe [f] (when f (f)))

(defn exec [sh]
  (.exec (js/require "child_process") sh
         (fn [err stdout stderr]
           (when err
             (console/log err "error")))))

(defn escape-quotes [s]
  (-> s
      #_(clojure.string/replace "\\" "\\\\")
      (clojure.string/replace "\"" "\\\"")))

(when (platform/mac?)
  (defn escape-path [path]
    (str "\"" path "\""))

  (defn activate-term []
    (exec "osascript -e 'tell application \"Terminal\" to activate'"))

  (defn term-sh [sh]
    (str "osascript -e 'tell application \"Terminal\" to do script \""
         (escape-quotes sh)
         "\"'"))

  (defn term [sh]
    (activate-term)
    (exec (term-sh sh))))

;; After much trial and error, I managed to figure out the magic
;; incantation you need to use to do this.

(when (platform/win?)
  (defn escape-path [path]
    (-> path
       (clojure.string/replace #"([^\\/]* [^\\/]*)" "\"$1\"")))

  (defn term-sh [sh]
    (str "cmd /C start cmd /C " sh))

  (defn term [sh]
    (exec (term-sh sh))))
