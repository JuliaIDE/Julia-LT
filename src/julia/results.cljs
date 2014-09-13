(ns lt.objs.langs.julia.results
  (:require [lt.objs.langs.julia :refer [julia]]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.clients :as clients])
  (:require-macros [lt.macros :refer [behavior defui]]))

(def results (atom {}))

(defn ->ed [thing]
  (cond
   (string? thing) (some-> @results (get thing) deref :ed)
   (integer? thing) (@object/instances ed)
   :else thing))

(defn jlcall [id code]
  (let [ed (->ed id)
        client (-> @ed :client :default)]
    (when client
      (clients/send client :eval.julia {:code code :id (when (string? id) id)}
                    :only ed))))

(set! js/jlcall jlcall)

(behavior ::inline-results
          :triggers #{:editor.result}
          :reaction (fn [this res loc {:keys [id] :as info}]
                      (let [ed (:ed @this)
                            type (or (:type opts) :inline)
                            line (editor/line-handle ed (:line loc))
                            res-obj (object/create :lt.objs.eval/inline-result
                                                   (merge info {:ed this
                                                                :class (name type)
                                                                :result res
                                                                :loc loc
                                                                :line line}))]
                        (when id (swap! results assoc id res-obj))
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
