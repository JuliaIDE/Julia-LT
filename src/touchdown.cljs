(ns lt.plugins.touchdown
  (:require [lt.util.dom :as dom]
            [crate.core :as crate]
            [lt.objs.editor :as editor]))

(defn load-script [url]
  (let [script (js/document.createElement "script")]
    (dom/attr script {:src url
                      :type "text/javascript"})
    (dom/append (dom/$ :head) script)))

(load-script "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML")

(defn mathjax-queue [& args]
  (js/MathJax.Hub.Queue (clj->js args)))

(defn typeset [dom]
  (mathjax-queue "Typeset" js/MathJax.Hub dom)
  dom)

(defn ->math [tex]
  (-> (str "<span class=\"latex\">\\(" tex "\\)</span>")
      crate/raw
      typeset))

(defn editor-for-file [file]
  (->> (lt.objs.editor.pool/get-all) (filter #(-> @% :info :path (= file))) first))

;; (let [ed (editor/->cm-ed
;;           (editor-for-file "/Users/mike/Dropbox/Programming/Julia/mandelbrot.jl"))]
;;   (.markText ed #js {:line 35 :ch 0} #js {:line 35 :ch 100}
;;              #js {:replacedWith (->math "\\frac{2\\alpha+\\gamma}{\\beta}")
;;                   :addToHistory true}))

;; (let [ed (editor/->cm-ed
;;           (editor-for-file "/Users/mike/Dropbox/Programming/Julia/mandelbrot.jl"))]
;;   (.markText ed #js {:line 27 :ch 0} #js {:line 27 :ch 2}
;;              #js {:replacedWith (crate/html [:img {:width 50 :src "http://img2.wikia.nocookie.net/__cb20131220014546/degrassi/images/c/c8/Smiley-face-text.jpg"}])}))
