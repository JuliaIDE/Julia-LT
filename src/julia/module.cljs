(ns lt.objs.langs.julia.module
  (:require [lt.objs.langs.julia :refer [julia]]
            [lt.objs.langs.julia.proc :as proc]
            [lt.objs.statusbar :as statusbar]
            [lt.objs.sidebar.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor.pool :as pool]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.clients :as clients]
            [crate.binding :refer [bound map-bound]])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Status bar object

(defui ->module-str [{:keys [module]}]
  [:span.module.clickable (str module "\t")]
  :click #(cmd/exec! :julia.set-module))

(object/object* ::statusbar.module
                :triggers #{}
                :behaviors #{::update-module-status}
                :init (fn [this]
                        (statusbar/statusbar-item (bound this ->module-str) "")))

(def statusbar-module (object/create ::statusbar.module))
(statusbar/add-statusbar-item statusbar-module)

(defn ->module [editor]
  (::module @editor))

(behavior ::update-module-statusbar
          :triggers #{:active :module-update}
          :reaction (fn [editor]
                      (object/merge! statusbar-module {:module (->module editor)})))

;; Backend communication

(def get-module
  (fn [editor & [client]]
    (when-let [client (or client (proc/default-client))]
      (clients/send client
                    :editor.julia.module.update
                    {:path (-> @editor :info :path)}
                    :only editor))))

(behavior ::get-module
  :triggers #{:object.instant :julia.connected}
  :reaction get-module)

(cmd/command {:command :editor.julia.module-refresh
              :desc "Julia: Refresh the module for the current editor"
              :exec #(when-let [ed (pool/last-active)]
                       (get-module ed))})

(behavior ::set-module
  :triggers #{:julia.set-module}
  :reaction (fn [editor module]
                (object/merge! editor {::module module})
                (object/raise editor :module-update)))

;; Module selector

(behavior ::set-modules
          :triggers #{:julia.set-modules}
          :reaction (fn [julia {:keys [modules]}]
                      (object/merge! julia {::modules (sort modules)})
                      (object/raise module-selector :refresh!)))

(object/add-behavior! julia ::set-modules)

(def module-selector (cmd/filter-list {:items #(@julia ::modules)
                                       :key identity
                                       :placeholder "Module"}))

(behavior ::select-module
          :triggers #{:select}
          :reaction (fn [this mod]
                      (cmd/exec-active! mod)))

(object/add-behavior! module-selector ::select-module)

(defn set-module [ed module]
  (object/raise ed :julia.set-module module))

(cmd/command {:command :julia.set-module
              :desc "Julia: Set the module for the current editor"
              :options module-selector
              :exec (fn [mod]
                      (if-let [last (pool/last-active)]
                        (set-module last mod)
                        (notifos/set-msg! "Set module requires an active editor")))})
