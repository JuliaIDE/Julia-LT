(ns lt.objs.file-links
  (:require [lt.object :as object]
            [lt.objs.platform :as platform]
            [lt.objs.highlights :as lights]
            [lt.objs.files :as files]
            [lt.util.dom :as dom]
            [clojure.string :as str]))

(defn all-links [dom]
;; Line highlighting

(def highlighter (lights/obj :highlight))

(def current-line)

(defn highlight [& [line]]
  (set! current-line line)
  (object/raise highlighter :clear)
  (when line (object/raise highlighter :highlight line)))

;; Generic utils

(defn ->line [s]
  (let [[file line] (str/split s ":")]
    {:file file
     :line (when line (js/parseInt line))}))

(defn process-node! [node line editor]
  (when (line :file)
    (set! (.-onclick node)
          #(object/raise lt.objs.jump-stack/jump-stack :jump-stack.push!
                                                       editor
                                                       (line :file)
                                                       {:line (dec (or (line :line) 1))
                                                        :ch 0})))
    (when (line :line)
      (set! (.-onmouseover node) #(highlight line))
      (set! (.-onmouseout node) highlight))
  node)

;; Arbitary elements (with file-link class, data-file attribute)

(defn file-links [dom]
  (.getElementsByClassName dom "file-link"))

(defn data-file [dom]
  (dom/attr dom :data-file))

(defn process-nodes! [dom editor]
  (doseq [link (file-links dom)]
    (prn (-> link data-file ->line))
    (process-node! link (-> link data-file ->line) editor)))

;; Anchor tags

  (into [] (.getElementsByTagName dom "a")))

(def url-pattern
  (if (platform/win?)
    #"^\s*((?:\w+:)[/\\][A-Za-z0-9_ \//\.]*?\.jl)(?::([0-9]+))?\s*$"
    #"^\s*(/[A-Za-z0-9_ \//\.]*?\.jl)(?::([0-9]+))?\s*$"))

(defn process-link! [link editor]
  (let [[_ file line] (re-find url-pattern (.-text link))]
    (when file
      (set! (.-href link) "javascript:void(0);")
      (set! (.-onclick link) #(object/raise lt.objs.jump-stack/jump-stack
                                            :jump-stack.push!
                                            editor
                                            file
                                            {:line (-> line (or 1) js/parseInt dec)
                                             :ch 0})))))

(defn process-links! [dom editor]
  (->> dom all-links (map #(process-link! % editor)) dorun)
  dom)

;; Errors – perhaps move this to Jewel

(defn get-error-line [link]
  (let [[_ file line] (re-find url-pattern (.-text link))]
    (when (and file line)
      {:file file
       :line (js/parseInt line)})))

(defn get-error-lines [dom]
  (->> dom all-links (map get-error-line) (filter identity)))
