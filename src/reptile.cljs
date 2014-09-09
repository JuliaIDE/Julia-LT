(ns lt.plugins.reptile
  (:require [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
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

(defn process-line-styles [vec]
  (loop [start 0
         [end token & vec] (rest vec)
         tokens {}]
    (if end
      (recur end vec
             (update-in tokens [(keyword token)] conj [start end]))
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
        loc (.find mark)]
    (set! (.-innerText node) content)
    (.replaceRange (.-doc mark) content (.-from loc) (.-to loc))
    (set! (-> loc .-to .-ch) (+ (-> loc .-from .-ch) (.-length content)))
    (reset! mark* (.markText (.-doc mark) (.-from loc) (.-to loc)
                             #js {:clearOnEnter true
                                  :replacedWith node}))))

(def set-content (lt.util.js/debounce 100 set-content'))

(defn value [node]
  (-> node .-innerText js/parseInt))

(defn mark-slider [ed line span cb]
  (let [node (slider (content ed line span))
        mark (atom (mark-text ed line span {:clearOnEnter true
                                            :replacedWith node}))]
    (set! (.-onmousedown node)
          (fn [e]
            (.preventDefault e)
            (let [start (value node)]
              (listen-drag!
               (fn [x y]
                 (let [x (- x (.-clientX e))]
                   (set! (.-innerText node) x)
                   (set-content mark (str x))
                   (cb x)))
               (fn [x y]
                 (if (< (js/Math.abs (- x (.-clientX e))) 1)
                   (.setCursor (.-doc @mark) (-> @mark .find .-to))))))))
    (value node)))

;; Objects & results

(object/object* ::reptile
                :tags [:reptile]
                :scales [])

(defn reptile [ed start end]
  (let [this (object/create ::reptile)]
    (each-line ed start end
               (fn [handle]
                 (doseq [span (numbers handle)
                         :let [idx (count (:scales @this))]]
                   (object/update! this [:scales] conj
                     (mark-slider ed (here's-my-number handle) span identity)))))
    this))

;; (def r (reptile ed 1 9))

;; (:scales @r)

;; (doseq [obj (object/by-tag :reptile)]
;;   (object/destroy! obj))

;; (mark-slider ed 11 (-> ed (line-handle 11) numbers first) identity)

;; (def ed (-> "mandelbrot.jl" lt.objs.editor.pool/containing-path first))

;; (doseq [mark (.getAllMarks (editor/->cm-ed ed))]
;;   (.clear mark))
