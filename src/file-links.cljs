(ns lt.objs.file-links
  (:require [lt.object :as object]
            [lt.objs.platform :as platform]
            [lt.objs.highlights :as lights]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]))

;; DOM utils

(defn anchor? [node]
  (= (.-tagName node) "A"))

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
    #"^\s*((?:\w+:)[/\\][A-Za-z0-9_ \//\.]*?\.jl)(?::([0-9]+))?\s*$"
    #"^\s*(/[A-Za-z0-9_ \//\.]*?\.jl)(?::([0-9]+))?\s*$"))

(defn ->line [s]
  (let [[_ file line] (re-find url-pattern s)]
    (when file
      {:file file
       :line (when line (js/parseInt line))})))

(defn process-node! [node line editor]
  (when line
    (when (anchor? node)
      (set! (.-href node) "javascript:void(0);"))
    (set! (.-onclick node)
          #(object/raise lt.objs.jump-stack/jump-stack :jump-stack.push!
                                                       editor
                                                       (line :file)
                                                       {:line (dec (or (line :line) 1))
                                                        :ch 0}))
    (when (line :line)
      (set! (.-onmouseover node) #(highlight line))
      (set! (.-onmouseout node) highlight)))
  node)

;; Arbitary elements (with file-link class, data-file attribute)

(defn file-links [dom]
  (.getElementsByClassName dom "file-link"))

(defn data-file [dom]
  (dom/attr dom :data-file))

(defn process-nodes! [dom editor]
  (doseq [link (file-links dom)]
    (process-node! link (-> link data-file ->line) editor))
  dom)

;; Anchor tags

(defn all-anchors [dom]
  (.getElementsByTagName dom "a"))

(defn process-anchor! [node editor]
  (process-node! node (some ->line [(.-text node) (.-href node)]) editor))

(defn process-anchors! [dom editor]
  (->> dom all-anchors (map #(process-anchor! % editor)) dorun)
  (doseq [anchor (all-anchors dom)]
    (process-anchor! anchor editor))
  dom)

;; Both

(defn process! [dom editor]
  (-> dom (process-anchors! editor) (process-nodes! editor)))

;; (process! js/document (lt.objs.editor.pool/last-active))

;; Errors – TODO: remove this

(defn get-error-line [link]
  (let [[_ file line] (re-find url-pattern (.-text link))]
    (when (and file line)
      {:file file
       :line (js/parseInt line)})))

(defn get-error-lines [dom]
  (->> dom all-anchors (map get-error-line) (filter identity)))
