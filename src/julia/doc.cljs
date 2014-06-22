(ns lt.objs.langs.julia.doc
  (:require [lt.objs.langs.julia.proc :as proc]
            [lt.objs.langs.julia.util :as util]
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

(behavior ::doc
          :triggers #{:editor.doc}
          :reaction (fn [editor]
                      (notifos/working "Loading docs...")
                      (clients/send (eval/get-client! {:command :editor.julia.doc
                                                       :info {}
                                                       :origin editor
                                                       :create connect})
                                    :editor.julia.doc
                                    {:cursor (util/cursor editor)
                                     :code (editor/->val editor)
                                     :module (util/module editor)}
                                    :only editor)))

(behavior ::methods
          :triggers #{:editor.methods}
          :reaction (fn [editor]
                      (notifos/working "Loading methods...")
                      (clients/send (eval/get-client! {:command :editor.julia.doc
                                                       :info {}
                                                       :origin editor
                                                       :create connect})
                                    :editor.julia.doc
                                    {:cursor (util/cursor editor)
                                     :code (editor/->val editor)
                                     :module (util/module editor)
                                     :type :methods}
                                    :only editor)))

(cmd/command {:command :editor.methods.toggle
              :desc "Docs: Toggle methods at cursor"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (let [loc (editor/->cursor ed)]
                          (if-let [cur (doc/doc-on-line? ed (:line loc))]
                            (doc/remove! ed cur)
                            (object/raise ed :editor.methods)))))})

(behavior ::show-doc
          :triggers #{:editor.julia.doc}
          :reaction (fn [editor res]
                      (doc/inline-doc editor
                                      (crate/html
                                       [:div.inline-doc
                                        (if (res :html)
                                          (-> res :doc util/parse-div (util/process-links! editor))
                                          [:pre (res :doc)])])
                                      {}
                                      (:loc res))))
