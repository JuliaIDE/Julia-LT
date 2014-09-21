(ns lt.objs.langs.julia.eval
  (:require [lt.objs.langs.julia.util :as util]
            [lt.objs.langs.julia.proc :as proc]
            [lt.objs.file-links :as links]
            [lt.objs.highlights :as lights]
            [lt.plugins.reptile :refer [reptile]]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.command :as cmd]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as editor]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Utils

(defn clear-results [ed [start end]]
  (doseq [lh (map (partial editor/line-handle ed) (range (dec start) end))
          type [:inline :underline]]
    (when-let [widget (get (@ed :widgets) [lh type])]
      (object/raise widget :clear!))))

(defn blank? [l] (re-find #"^\s*$" l))

(defn next-line [ed line]
  (let [l (editor/line ed line)]
    (if l
      (if-not (blank? l)
        (editor/move-cursor ed {:line line})
        (if (editor/line ed (inc line))
          (editor/move-cursor ed {:line (inc line)})
          (do
            (editor/move-cursor ed {:line line})
            (editor/insert-at-cursor ed "\n"))))
      (do
        (editor/move-cursor ed {:line line})
        (editor/insert-at-cursor ed "\n\n")))))

;; Evaluation

(defn single-selection? [editor]
  (-> editor editor/->cm-ed .getSelections count (= 1)))

(defn eval-selection [editor client]
  (when (single-selection? editor)
    (clients/send client
      :eval.selection
      {:code (editor/->val editor)
       :start (util/cursor editor "start") :end (util/cursor editor "end")
       :path (-> @editor :info :path)
       :module (util/module editor)}
      :only editor)))

(defn eval-block [editor client move]
  (object/raise editor :get-block
    (fn [bounds block]
      (if (= block "")
        (notifos/done-working)
        (do
          (clear-results editor bounds)
          (when move (next-line editor (first bounds)))
          (clients/send client
            :eval.block
            {:code (editor/->val editor)
             :block block
             :bounds bounds
             :path (-> @editor :info :path)
             :module (util/module editor)}
            :only editor))))))

(behavior ::eval.one
  :triggers #{:eval.one}
  :reaction (fn [editor & [move]]
              (let [client (eval/get-client! {:command :editor.eval.julia
                                              :origin editor
                                              :info {}
                                              :create proc/connect})]
                (notifos/working)
                ((if (editor/selection? editor) eval-selection eval-block) editor client move))))

(behavior ::eval.all
  :triggers #{:eval}
  :reaction (fn [editor]
              (let [client (eval/get-client! {:command :editor.eval.julia
                                              :origin editor
                                              :info {}
                                              :create proc/connect})]
                (cmd/exec! :clear-inline-results)
                (notifos/working)
                (clients/send client
                              :eval.all
                              {:code (editor/->val editor)
                               :path (-> @editor :info :path)
                               :module (util/module editor)}
                              :only editor))))

(behavior ::result
          :triggers #{:julia.result}
          :reaction (fn [editor {:keys [value html under info] [start end] :bounds}]
                      (notifos/done-working)
                      (let [val (if html
                                  (crate/html [:div.julia.result
                                                (crate/raw value)])
                                  value)
                            scripts (when html (util/get-scripts val))]
                        (when html (links/process! val))
                        (object/raise editor
                                      (if under
                                        :editor.result.underline
                                        :editor.result)
                                      val
                                      {:start-line (dec start)
                                       :line (dec end)}
                                      info)
                        (when scripts (util/eval-scripts scripts)))))

;; Errors

(defn get-error-line [link]
  (let [[_ file line] (re-find links/url-pattern (links/data-file link))]
    (when (and file line)
      {:file file
       :line (js/parseInt line)})))

(defn get-error-lines [dom]
  (->> dom links/file-links (map get-error-line) (filter identity)))

(def error-lines (lights/obj :error))

(behavior ::error
          :triggers #{:julia.error}
          :reaction (fn [editor res]
                      (notifos/done-working)
                      (let [dom (-> res :value util/parse-div)
                            line (-> res :end dec)]
                        (links/process! dom)
                        (object/raise editor
                                      :editor.exception
                                      dom
                                      {:start-line (-> res :start dec)
                                       :line line})
                        (object/raise error-lines :clear)
                        (object/raise error-lines :highlight (get-error-lines dom))
                        (->> (util/widget editor (inc line))
                             (object/raise error-lines :listen)))))
