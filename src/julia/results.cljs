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

(defn ->client [id]
  (some-> id ->ed deref :client :default))

(defn jlcall [id code]
  (let [ed (->ed id)
        client (-> @ed :client :default)]
    (when client
      (clients/send client :eval.julia {:code code :id (when (string? id) id)}
                    :only ed))))

(set! js/jlcall jlcall)

(defn id [result]
  (-> @result :opts :id))

(behavior ::register-result
          :triggers #{:init}
          :reaction (fn [this]
                      (when-let [id (id this)]
                        (swap! results assoc id this))))

(behavior ::unregister-result
          :triggers #{:clear!}
          :reaction (fn [this]
                      (when-let [client (-> @this :ed deref :client :default)]
                        (when-let [id (id this)]
                          (swap! results dissoc id)
                          (clients/send client :result.clear id)))))

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

(behavior ::reval
          :triggers #{:scale}
          :reaction (fn [result vals]
                      (let [id (id result)
                            client (->client id)]
                        (when client
                          (clients/send client :result.reval
                                        {:id id
                                         :vals (map :value vals)
                                         :locs (map :loc vals)})))))
