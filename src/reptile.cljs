(ns lt.plugins.reptile
  (:require [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.notifos :as notifos]
            [lt.util.js :refer [debounce]]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Utils

(defn line-handle [ed line]
  (editor/line-handle ed (dec line)))

(defn each-line [ed start end f]
  (.eachLine (editor/->cm-ed ed) (dec start) end f))

(defn mark-text [ed line [start end] opts]
  (.markText (editor/->cm-ed ed)
             #js {:line (dec line) :ch start}
             #js {:line (dec line) :ch end}
             (clj->js opts)))

(defn content [ed line [start end]]
  (.getRange (editor/->cm-ed ed)
             #js {:line (dec line) :ch start}
             #js {:line (dec line) :ch end}))

(defn here's-my-number [handle]
  (-> handle .lineNo inc))

(defn call-me-maybe [this f & args]
  (when-let [f (aget this (name f))]
    (.apply f this (to-array args))))

;; Find numbers

(defn line-styles [lh]
  (-> lh .-styles vec))

(defn conj-vec [vec & args]
  (apply conj (or vec []) args))

(defn process-line-styles [vec]
  (loop [start 0
         [end token & vec] (rest vec)
         tokens {}]
    (if end
      (recur end vec
             (update-in tokens [(keyword token)] conj-vec [start end]))
      tokens)))

(defn line-tokens [lh]
  (-> lh line-styles process-line-styles))

(defn numbers [lh]
  (-> lh line-tokens :number))

;; The mark and listeners

(defn listen-drag! [drag & [up]]
  (set! js/window.onmousemove #(drag (.-clientX %)
                                     (.-clientY %)))
  (set! js/window.onmouseup
        (fn [e]
          (set! js/window.onmousemove nil)
          (set! js/window.onmouseup nil)
          (when up (up (.-clientX e) (.-clientY e))))))

(defui slider [n]
  [:span.cm-number.reptile.slider n])

; This is a massive hack around the fact that I can't (AFAICT)
; replace the text under a mark without clearing the mark.

(defn set-content' [mark* content]
  (let [mark @mark*
        node (.-replacedWith mark)
        loc (.find mark)
        content (str content)]
    (.clear mark)
    (set! (.-innerText node) content)
    (.replaceRange (.-doc mark) content (.-from loc) (.-to loc))
    (set! (-> loc .-to .-ch) (+ (-> loc .-from .-ch) (.-length content)))
    (reset! mark* (.markText (.-doc mark) (.-from loc) (.-to loc)
                             #js {:clearOnEnter true
                                  :replacedWith node}))))

(def set-content (debounce 500 set-content'))

(defn mark-slider [ed line span cb]
  (let [node (slider (content ed line span))
        mark (atom (mark-text ed line span {:clearOnEnter true
                                            :replacedWith node}))]
    (set! (.-onmousedown node)
          (fn [e]
            (.preventDefault e)
            (let [current (.-innerText node)]
              (listen-drag!
               (fn [x y]
                 (let [x (- x (.-clientX e))
                       result (cb current x)]
                   (set! (.-innerText node) result)
                   (set-content mark result)))
               (fn [x y]
                 (if (< (js/Math.abs (- x (.-clientX e))) 1)
                   (.setCursor (-> @mark .-doc) (-> @mark .find .-to))))))))
    mark))

;; Number processing

(defn valid-number? [s]
  (re-find #"^[0-9]+$" s))

(defn div [x y] (Math/floor (/ x y)))

(defn transform [start x]
  (let [start (js/parseInt start)]
    (+ start (div x 5))))

;; Objects & API

(behavior ::clear
          :triggers #{:clear!}
          :reaction (fn [this]
                      (doseq [scale (:scales @this)]
                        (-> scale :mark deref .clear))
                      (object/destroy! this)))

(behavior ::self-destruct
          :triggers #{:init}
          :debounce 500
          :reaction (fn [this]
                      (when-not (:obj @this)
                        (object/raise this :clear!))))

(object/object* ::reptile
                :tags [:reptile]
                :behaviors [::clear ::self-destruct]
                :scales [])

(defn reptile [ed [start end]]
  (let [this (object/create ::reptile)]
    (each-line ed start end
               (fn [handle]
                 (doseq [span (numbers handle)
                         :let [line (here's-my-number handle)
                               idx (count (:scales @this))]]
                   (when (valid-number? (content ed line span))
                     (object/update! this [:scales] conj
                       {:mark (mark-slider ed line span
                                (fn [start x]
                                  (let [val (transform start x)]
                                    (when (not= val (-> @this :scales (get idx) :value))
                                      (object/update! this [:scales idx :value] (constantly val))
                                      (when-let [obj (:obj @this)]
                                        (object/raise obj :scale (:scales @this))))
                                    val)))
                        :value (transform (content ed line span) 0)
                        :loc (apply vector line span)})))))
    this))

;; Interaction with results

(behavior ::attach-reptile
          :triggers #{:init}
          :reaction (fn [result]
                      (reset! busy 0)
                      (when-let [span (-> @result :opts :scales)]
                        (let [reptile (reptile (:ed @result) span)]
                          (object/merge! result {:scales reptile})
                          (object/merge! reptile {:obj result})))))

(behavior ::clear-reptile
          :triggers #{:clear!}
          :reaction (fn [result]
                      (when-let [reptile (@result :scales)]
                        (object/raise reptile :clear!))))

;; Notifications

(def busy (atom 0))
(def busy-shown false)

(def reset-busy
  (debounce 5000 #(reset! busy 0)))

(def working*
  (debounce 50
    #(when (and (not busy-shown) (> @busy 0))
       (def busy-shown true)
       (notifos/working))))

(defn working []
  (swap! busy inc)
  (when (not busy-shown)
    (working*)))

(defn done-working []
  (swap! busy dec)
  (when (and busy-shown (<= @busy 0))
    (def busy-shown false)
    (notifos/done-working)))
