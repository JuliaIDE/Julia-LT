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

; Bug – need to use line handles to track lines, not numbers

(object/object* ::light-lines
                :tags #{:light-lines}
                :class :error
                :lines []
                :behaviors [::update ::clear ::add-lines])

(defn editor-for-file [file]
  (->> (pool/get-all) (filter #(-> @% :info :path (= file))) first))

(defn toggle-background [ed line class toggle]
  ((if toggle editor/+line-class editor/-line-class)
   (editor/->cm-ed ed) (dec line) :background class))

(behavior ::update
          :triggers #{:update}
          :reaction (fn [this]
                      (doseq [line (@this :lines)]
                        (when (and (:file line) (:line line))
                          (when-let [ed (editor-for-file (:file line))]
                            (let [line (:line line)
                                  class (or (:class line) (:class @this))]
                              (toggle-background ed line :light-line true)
                              (toggle-background ed line class true)))))))

(behavior ::clear
          :triggers #{:clear}
          :reaction (fn [this]
                      (doseq [line (@this :lines)]
                        (when (and (:file line) (:line line))
                          (when-let [ed (editor-for-file (:file line))]
                            (toggle-background ed
                                               (:line line)
                                               (or (:class line) (:class @this))
                                               false)))
                        (object/merge! this {:lines []}))))

(behavior ::add-lines
          :triggers #{:add-lines}
          :reaction (fn [this lines]
                      (object/update! this [:lines] concat lines)
                      (object/raise this :update)))

(behavior ::clear-lights
          :triggers #{:clear!}
          :reaction (fn [this]
                      (when (= this (@light-lines :clear-object))
                        (object/raise light-lines :clear))))

(def light-lines (object/create ::light-lines))

(defn clear []
  (object/raise light-lines :clear))

(defn listen [ex]
  (object/merge! light-lines {:clear-object ex})
  (object/add-behavior! ex ::clear-lights))

(defn add-lines [lines]
  (object/raise light-lines :add-lines lines))

;; Update editors on open

(behavior ::highlight-lines
          :triggers #{:object.instant}
          :reaction (fn [editor]
                      (object/raise light-lines :update)))

;; (@light-lines :lines)

;; (add-lines [{:file "/Users/mike/Dropbox/Programming/Julia/mandelbrot.jl"
;;              :line 25}])
