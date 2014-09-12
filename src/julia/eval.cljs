(ns lt.objs.langs.julia.eval
  (:require [lt.objs.langs.julia.util :as util]
            [lt.objs.langs.julia.proc :as proc]
            [lt.objs.file-links :as links]
            [lt.objs.highlights :as lights]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.command :as cmd]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as editor]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Get current block

(def cb-id (atom 0))
(def cbs (atom {}))

(behavior ::get-block
  :triggers #{:get-block}
  :reaction (fn [editor cb]
              (let [client (eval/get-client! {:command :editor.block
                                              :origin editor
                                              :create proc/connect})
                    id (swap! cb-id inc)]
                (swap! cbs assoc id cb)
                (clients/send client
                              :editor.block
                              {:code (editor/->val editor)
                               :line (-> editor editor/->cursor :line inc)
                               :id id}
                              :only editor))))

(behavior ::return-block
  :triggers #{:return-block}
  :reaction (fn [editor {:keys [id bounds block]}]
              (let [cb (@cbs id)]
                (swap! cbs dissoc id)
                (cb bounds block))))

;; Evaluation

(defn single-selection? [editor]
  (-> ed editor/->cm-ed .getSelections count (= 1)))

;; (def ed (-> "newton.jl" lt.objs.editor.pool/containing-path first))

(defn eval-selection [editor client]
  (when (single-selection? editor)
    (clients/send client
      :eval.selection
      {:code (editor/->val editor)
       :start (util/cursor editor "start") :end (util/cursor editor "end")
       :path (-> @editor :info :path)
       :module (util/module editor)}
      :only editor)))

(defn eval-block [editor client]
  (object/raise editor :get-block
    (fn [bounds block]
      (if (= block "")
        (notifos/done-working)
        (clients/send client
          :eval.block
          {:code block
           :bounds bounds
           :path (-> @editor :info :path)
           :module (util/module editor)}
          :only editor)))))

(behavior ::eval.one
  :triggers #{:eval.one}
  :reaction (fn [editor]
              (let [client (eval/get-client! {:command :editor.eval.julia
                                              :origin editor
                                              :info {}
                                              :create proc/connect})]
                (notifos/working)
                ((if (editor/selection? editor) eval-selection eval-block) editor client))))

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
          :reaction (fn [editor res]
                      (notifos/done-working)
                      (let [val (if (res :html)
                                  (crate/html [:div.julia.result
                                                (-> res :value crate/raw)])
                                  (-> res :value))
                            scripts (when (res :html) (util/get-scripts val))]
                        (when (res :html) (links/process! val))
                        (object/raise editor
                                      (if (res :under)
                                        :editor.result.underline
                                        :editor.result)
                                      val
                                      {:start-line (-> res :start dec)
                                       :line (-> res :end dec)}
                                      {:id (res :id)})
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
                        (->> (util/widget editor line)
                             (object/raise error-lines :listen)))))
