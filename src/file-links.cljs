(ns lt.objs.file-links
  (:require [lt.object :as object]
            [lt.objs.platform :as platform]
            [lt.objs.highlights :as lights]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]))

;; DOM utils

(defn anchor? [node]
  (= (.-tagName node) "A"))

(defn ->pos [e] [(.-clientX e) (.-clientY e)])

(def sqrt js/Math.sqrt)
(def sqr #(js/Math.pow % 2))
(defn hypot [[x y] [x' y']]
  (sqrt (+ (sqr (- x' x)) (sqr (- y' y)))))

(defn left-click? [e] (= (.-which e) 1))

(defn click [node f]
  (let [pos (atom [0 0])]
    (set! (.-onmousedown node) #(when (left-click? %) (reset! pos (->pos %))))
    (set! (.-onmouseup node)   #(when (and (left-click? %)
                                           (< (hypot @pos (->pos %)) 5))
                                  (f %)))))

;; Line highlighting

(def highlighter (lights/obj :highlight))
(defn clear [] (object/raise highlighter :clear))

(def tm*)

(defn highlight [& [line]]
  (when tm* (js/clearTimeout tm*))
  (clear)
  (when line (object/raise highlighter :highlight line)
    (set! tm* (js/setTimeout clear 1000))))

;; Generic utils

(def url-pattern ; Check for absolute paths
  (if (platform/win?)
    #"^\s*((?:\w+:)[/\\][A-Za-z0-9_ \//\.\-]*?\.jl)(?::([0-9]+))?\s*$"
    #"^\s*(/[A-Za-z0-9_ \//\.\-]*?\.jl)(?::([0-9]+))?\s*$"))

(defn ->line [s]
  (let [[_ file line] (re-find url-pattern s)]
    (when file
      {:file file
       :line (when line (js/parseInt line))})))

(defn open [line]
  (if (string? line)
    (platform/open line)
    (lt.objs.jump-stack/jump-to (line :file) (dec (or (line :line) 1)))))

(defn process-node! [node line]
  (when line
    (when (anchor? node)
      (set! (.-href node) "javascript:void(0);"))
    (click node #(open line))
    (when (and (not (string? line)) (line :line))
      (set! (.-onmouseover node) #(highlight line))
      (set! (.-onmouseout node) highlight)))
  node)

;; Arbitary elements (with file-link class, data-file attribute)

(defn file-links [dom]
  (.getElementsByClassName dom "file-link"))

(defn data-file [dom]
  (dom/attr dom :data-file))

(defn data-url [dom]
  (dom/attr dom :data-url))

(defn process-nodes! [dom]
  (doseq [link (file-links dom)]
      (process-node! link (or (-> link data-url) (-> link data-file ->line))))
  dom)

;; Anchor tags

(defn all-anchors [dom]
  (.getElementsByTagName dom "a"))

(defn process-anchor! [node]
  (process-node! node (some ->line [(.-text node) (.-href node)])))

(defn process-anchors! [dom]
  (->> dom all-anchors (map #(process-anchor! %)) dorun)
  (doseq [anchor (all-anchors dom)]
    (process-anchor! anchor))
  dom)

;; Both

(defn process! [dom]
  (-> dom process-anchors! process-nodes!))
