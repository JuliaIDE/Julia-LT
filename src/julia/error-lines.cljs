(ns lt.objs.langs.julia.light-lines
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.util.dom :as dom]
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

;; (editor/on ed :renderLine render-reaction-wrapper)

(defn render-reaction-wrapper [& args]
  (apply render-reaction args))

(defn render-reaction [cm line dom]
  (when-let [progress (.-progress line)]
    (dom/append dom
      (crate/html [:div.progress {:style (str "width:" progress)}]))))

;; (def ed (-> (pool/containing-path "mandelbrot.jl") first))

;; (def li (editor/line-handle ed 30))

;; (set! (.-progress li) "60%")

;; (do (editor/refresh ed) nil)

;; Some utils

(defn editor-for-file [file]
  (->> (pool/get-all) (filter #(-> @% :info :path (= file))) first))

; This, is horrible, TODO: change this
(defn toggle-background [ed handle class toggle]
  (when-let [ed (editor/->cm-ed ed)]
    ((if toggle editor/+line-class editor/-line-class)
     ed handle :background class)))

;; Highlights

(object/object* ::light-lines
                :tags #{:light-lines}
                :behaviors [::refresh ::clear ::highlight ::listen]
                :lines #{}
                :init (fn [this class]
                        (object/merge! this {:class class})
                        nil))

(defn obj [class] (object/create ::light-lines class))

; TODO: See if the editor can be found from the handle
(defn refresh-line [{:keys [file line handle class] :as l} default-class]
  (if handle
    l
    (if-let [ed (editor-for-file file)]
      (let [handle (editor/line-handle ed (dec line))
            class (or class default-class)]
        (toggle-background ed handle :light-line true) ; Needed so that transitions work
        (toggle-background ed handle class true)
        (assoc l :handle handle :ed ed))
      l)))

(defn refresh-lines [{:keys [lines class]}]
  (into #{} (map #(refresh-line % class) lines)))

(behavior ::refresh
          :triggers #{:refresh}
          :reaction (fn [this]
                      (object/merge! this {:lines (refresh-lines @this)})))

(behavior ::highlight
          :triggers #{:highlight}
          :reaction (fn [this lines]
                      (let [lines (if (sequential? lines) lines #{lines})]
                        (object/merge! this {:lines (into (@this :lines) lines)})
                        (object/raise this :refresh))))

(behavior ::clear
          :triggers #{:clear}
          :reaction (fn [this]
                      (doseq [{:keys [handle class ed]} (@this :lines) :when handle]
                        (toggle-background ed handle (or class (@this :class)) false))
                      (object/merge! this {:lines #{}})))

(behavior ::listen
          :triggers #{:listen}
          :reaction (fn [this obj]
                      (object/merge! this {:clear-object obj})
                      (object/merge! obj {::listener this})
                      (object/add-behavior! obj ::clear-lights)))

;; Removing the exception / result clears highlighted lines

(behavior ::clear-lights
          :triggers #{:clear!}
          :reaction (fn [this]
                      (let [lights (::listener @this)]
                        (when (= this (:clear-object @lights))
                          (object/raise lights :clear)))))

;; Update editors on open

(behavior ::highlight-lines
          :triggers #{:object.instant}
          :reaction (fn [editor]
                      (doseq [highlights (object/by-tag :light-lines)]
                        (object/raise highlights :refresh))))
