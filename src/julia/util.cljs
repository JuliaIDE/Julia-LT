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

; Use 1-based indexing for Julia
(defn cursor
  ([editor] (cursor editor "start"))
  ([editor pos]
    (let [cursor (ed/->cursor editor pos)]
      {:line (-> cursor :line inc)
       :col  (-> cursor :ch   inc)})))

(defn module [editor]
  (@editor :lt.objs.langs.julia.module/module))

; DOM manipulation

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

(defn into-div [dom]
  (let [div (crate/html [:div])]
    (.appendChild div dom)
    div))

(defn parse-div [html]
  (-> html crate/raw into-div))

; Link processing

(defn all-links [dom]
  (into [] (.getElementsByTagName dom "a")))

(def url-pattern
  (if (platform/win?)
    #"^((?:\w+:)[/\\][A-Za-z0-9_\//\.]*?\.jl)(?::([0-9]+))?$"
    #"^(/[A-Za-z0-9_\//\.]*?\.jl)(?::([0-9]+))?$"))

(defn process-link! [link editor]
  (when-let [[_ file line] (re-find url-pattern (.-text link))]
    (set! (.-href link) "javascript:void(0);")
    (set! (.-onclick link) #(object/raise lt.objs.jump-stack/jump-stack
                                          :jump-stack.push!
                                          editor
                                          file
                                          {:line (dec (js/parseInt line)) :ch 0}))))

(defn process-links! [dom editor]
  (->> dom all-links (map #(process-link! % editor)) dorun)
  dom)
