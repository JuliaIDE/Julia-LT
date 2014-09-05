(ns lt.objs.langs.julia.results
  (:require [lt.objs.langs.julia :refer [julia]]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.clients :as clients])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn ->ed [ed]
  (cond (integer? ed) (@object/instances ed)
        :else ed))

(defn jleval [ed code]
  (let [ed (->ed ed)
        client (-> @ed :client :default)]
    (when client
      (clients/send client :eval.julia code
                    :only ed))))

(set! js/jleval jleval)

(defn process-collapsible! [ed dom]
  (let [header (dom/$ :.collapsible-header dom)
        content (js/$ (dom/$ :.collapsible-content dom))]
    (.hide content)
    (set! (.-onclick header)
          (fn []
            (.toggle content 200)
            (js/setTimeout #(editor/refresh ed) 200)))))

(defn process-collapsibles! [res]
  (doseq [collapsible (dom/$$ :.collapsible (@res :result))]
    (process-collapsible! (:ed @res) collapsible)))

(defn show-collapsibles! [dom]
  (when-not (string? dom)
    (->> dom (dom/$$ :.collapsible-content) js/$ .show)))

(def results (atom {}))

(behavior ::inline-results
          :triggers #{:editor.result}
          :reaction (fn [this res loc opts]
                      (let [ed (:ed @this)
                            type (or (:type opts) :inline)
                            line (editor/line-handle ed (:line loc))
                            res-obj (object/create :lt.objs.eval/inline-result
                                                   {:ed this
                                                    :class (name type)
                                                    :opts opts
                                                    :result res
                                                    :loc loc
                                                    :line line
                                                    :id (:id opts)})]
                        (when (:id opts) (swap! results assoc (:id opts) res-obj))
                        (when-not (string? res)
                          (process-collapsibles! res-obj))
                        (when-let [prev (get (@this :widgets) [line type])]
                          (when (:open @prev)
                            (object/merge! res-obj {:open true}))
                          (object/raise prev :clear!))
                        (when (:start-line loc)
                          (doseq [widget (map #(get (@this :widgets) [(editor/line-handle ed %) type]) (range (:start-line loc) (:line loc)))
                                  :when widget]
                            (object/raise widget :clear!)))
                        (object/update! this [:widgets] assoc [line type] res-obj))))

(behavior ::clear-result
          :triggers #{:clear!}
          :reaction (fn [this]
                      (when-let [client (-> @this :ed deref :client :default)]
                        (when (:id @this)
                          (swap! results dissoc (:id @this))
                          (clients/send client :result.clear (:id @this))))))

(behavior ::raise
          :triggers #{:raise}
          :reaction (fn [this {:keys [id event args]}]
                      (when (@results id)
                        (apply object/raise (@results id) (keyword event) args))))

(defn eval-with [obj code]
  (.call (js/eval (str "(function () {" code "})")) obj))

(behavior ::eval
          :triggers #{:eval}
          :reaction (fn [this code]
                      (eval-with (:content @this) code)))

(object/add-behavior! julia ::raise)
