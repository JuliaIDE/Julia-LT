(ns lt.objs.langs.julia.completions
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

(behavior ::trigger-update-hints
          :triggers #{:editor.julia.hints.update!}
          :reaction (fn [editor res]
                      (when-let [default-client (-> @editor :client :default)] ;; dont eval unless we're already connected
                        (when @default-client
                          (clients/send (eval/get-client! {:command :editor.julia.hints
                                                           :info {}
                                                           :origin editor
                                                           :create proc/connect})
                                        :editor.julia.hints
                                        {:cursor (util/cursor editor)
                                         :code (editor/->val editor)}
                                        :only editor)))))

(behavior ::use-local-hints
          :triggers #{:hints+}
          :reaction (fn [editor hints token]
                      (if (::fresh-hints @editor)
                        (object/merge! editor {::fresh-hints false})
                        (object/raise editor :editor.julia.hints.update!))
                      (concat (::hints @editor) hints)))

(behavior ::textual-hints
          :triggers #{:hints+}
          :reaction (fn [editor hints]
                      (if-not (::no-textual-hints @editor)
                        (concat (:lt.plugins.auto-complete/hints @editor) hints)
                        hints)))
