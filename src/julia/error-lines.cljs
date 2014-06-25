(ns lt.objs.langs.julia.light-lines
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
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

(def lines (atom []))
(def clear-object (atom nil))

(defn editor-for-file [file]
  (->> (pool/get-all) (filter #(-> @% :info :path (= file))) first))

(defn toggle-background [ed handle class toggle]
  (when-let [ed (editor/->cm-ed ed)]
    ((if toggle editor/+line-class editor/-line-class)
     ed handle :background class)))

(defn update []
  (swap! lines
         #(doall
           (map (fn [{:keys [file line handle class] :as l}]
                  (if handle
                    l
                    (if-let [ed (editor-for-file file)]
                      (let [handle (editor/line-handle ed (dec line))
                            class (or class :error)]
                        (toggle-background ed handle :light-line true) ; Needed so that transitions work
                        (toggle-background ed handle class true)
                        (assoc l :handle handle :ed ed))
                      l))) %)))
  nil)

(defn add [new]
  (swap! lines concat new)
  (update))

(defn clear []
  (doseq [{:keys [file handle class ed]} @lines :when handle]
    (toggle-background ed
                       handle
                       (or class :error)
                       false))
    (reset! lines []))

(behavior ::clear-lights
          :triggers #{:clear!}
          :reaction (fn [this]
                      (when (= this @clear-object)
                        (clear))))

(defn listen [ex]
  (reset! clear-object ex)
  (object/add-behavior! ex ::clear-lights))

;; Update editors on open

(behavior ::highlight-lines
          :triggers #{:object.instant}
          :reaction (fn [editor]
                      (update)))
