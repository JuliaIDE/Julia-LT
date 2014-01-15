(ns lt.objs.langs.julia
  (:require [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.objs.editor :as ed]
            [lt.objs.plugins :as plugins]
            [lt.plugins.watches :as watches]
            [lt.objs.proc :as proc]
            [clojure.string :as string]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.util.load :as load]
            [lt.util.cljs :refer [js->clj]]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Proc

;; (def shell (load/node-module "shelljs"))

;; Other

(defn connect []
  (let [client (clients/client! :julia.client)]
    (popup/popup! {:header "Connect Julia to Light Table"
                   :body (str "ltconnect(" tcp/port ", " (clients/->id client) ")")
                   :buttons [{:label "Done"}]})
    client))

(behavior ::popup
  :triggers #{:editor.eval.julia.popup}
  :reaction (fn [editor arg]
              (popup/popup! {:header (str arg) :buttons [{:label "ok"}]})))

(behavior ::eval.one
  :triggers #{:eval.one}
  :reaction (fn [editor]
              (clients/send (eval/get-client! {:command :editor.eval.julia
                                               :origin editor
                                               :info {}
                                               :create connect})
                            :editor.eval.julia
                            {:code "println(hi)"}
                            :only
                            editor)))

;; (defn current-buffer-content []
;;   "Returns content of the current buffer"
;;   (let [cm (editor/->cm-ed (pool/last-active))]
;;     (.getRange cm #js {:line 0 :ch 0} #js {:line (.lineCount (editor/->cm-ed (pool/last-active))) :ch 0})))

;; User connector

(scl/add-connector {:name "Julia"
;;                     :desc "Select a directory to serve as the root of your Julia project."
                    :desc "Manually connect to Julia."
                    :connect connect})

;; Settings

;; (behavior ::julia-exe
;;           :triggers #{:object.instant}
;;           :desc "Julia: Set the path to the Julia executable for clients"
;;           :type :user
;;           :params [{:label "path"
;;                     :type :path}]
;;           :exclusive true
;;           :reaction (fn [this exe]
;;                       (object/merge! julia {:julia-exe exe})))