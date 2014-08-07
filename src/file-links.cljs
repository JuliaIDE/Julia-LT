(ns lt.objs.file-links
  (:require [lt.object :as object]
            [lt.objs.platform :as platform]))

(defn all-links [dom]
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
                                            {:line (if line
                                                     (dec (js/parseInt line))
                                                     0)
                                             :ch 0})))))

(defn process-links! [dom editor]
  (->> dom all-links (map #(process-link! % editor)) dorun)
  dom)

(defn get-error-line [link]
  (let [[_ file line] (re-find url-pattern (.-text link))]
    (when (and file line)
      {:file file
       :line (js/parseInt line)})))

(defn get-error-lines [dom]
  (->> dom all-links (map get-error-line) (filter identity)))
