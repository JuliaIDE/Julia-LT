(ns lt.objs.langs.julia.eval
  (:require [lt.objs.langs.julia.proc :as proc]
            [lt.objs.file-links :as links]
            [lt.objs.langs.julia.util :as util]
            [lt.objs.highlights :as lights]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.plugins.auto-complete :as auto-complete]
            [lt.objs.editor :as ed]
            [lt.objs.plugins :as plugins]
            [lt.plugins.watches :as watches]
            [clojure.string :as string]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.objs.cache :as cache]
            [lt.util.load :as load]
            [lt.util.cljs]; :refer [js->clj]]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.doc :as doc]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior defui]]))

(behavior ::eval.one
  :triggers #{:eval.one}
  :reaction (fn [editor]
              (let [client (eval/get-client! {:command :editor.eval.julia
                                              :origin editor
                                              :info {}
                                              :create proc/connect})]
                (notifos/working)
                (clients/send client
                              :editor.eval.julia
                              {:code (editor/->val editor)
                               :start (util/cursor editor "start") :end (util/cursor editor "end")
                               :path (-> @editor :info :path)
                               :module (util/module editor)}
                              :only editor))))

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
                              :editor.eval.julia.all
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
                                       :line (-> res :end dec)})
                        (when scripts (util/eval-scripts scripts)))))

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
                        (object/raise error-lines :highlight (links/get-error-lines dom))
                        (->> (util/widget editor line)
                             (object/raise error-lines :listen)))))
