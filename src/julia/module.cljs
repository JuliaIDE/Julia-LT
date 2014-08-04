(ns lt.objs.langs.julia.module
  (:require [lt.objs.langs.julia.proc :as proc]
            [lt.objs.statusbar :as statusbar]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.clients :as clients]
            [crate.binding :refer [bound map-bound]])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Status bar object

(defn ->module-str [{:keys [module]}]
  [:span.module (str module "\t")])

(object/object* ::statusbar.module
                :triggers #{}
                :behaviors #{::update-module-status}
                :module "Main"
                :init (fn [this]
                        (statusbar/statusbar-item (bound this ->module-str) "")))

(def statusbar-module (object/create ::statusbar.module))
(statusbar/add-statusbar-item statusbar-module)

(defn ->module [editor]
  (::module @editor))

(defn isactive? [editor]
  (identical? (lt.objs.editor.pool/last-active) editor))


(behavior ::update-module-statusbar
          :triggers #{:active :module-update}
          :reaction (fn [editor]
                      (if (isactive? editor)
                        (object/merge! statusbar-module {:module (->module editor)}))))

;; Backend communication

(behavior ::get-module
  :triggers #{:object.instant :active :save :julia.connected}
  :debounce 100
  :reaction (fn [editor & [client]]
              (when-let [client (or client (proc/default-client))]
                (clients/send client
                              :editor.julia.module.update
                              {:path (-> @editor :info :path)}
                              :only editor))))

(behavior ::update-module
  :triggers #{:editor.julia.module.update}
  :reaction (fn [editor module]
              (object/merge! editor {::module module})
              (object/raise editor :module-update)))
