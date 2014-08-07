(ns lt.objs.highlights
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

;; Some utils

(defn editor-for-file [file]
  (first (pool/by-path file)))

; This is horrible, TODO: change this
(defn toggle-background [ed handle class toggle]
  (when-let [ed (editor/->cm-ed ed)] ; I have a PR for +/-line-class
    ((if toggle editor/+line-class editor/-line-class)
     ed handle :background class)))

;; Highlights

(object/object* ::highlights
                :tags #{:highlights}
                :behaviors [::refresh ::clear ::highlight ::listen]
                :lines #{}
                :init (fn [this class]
                        (object/merge! this {:class class})
                        nil))

(defn obj [class] (object/create ::highlights class))

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
                      (doseq [highlights (object/by-tag :highlights)]
                        (object/raise highlights :refresh))))
