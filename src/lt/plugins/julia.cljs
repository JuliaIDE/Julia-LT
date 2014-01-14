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
            [lt.util.cljs :refer [js->clj]])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Proc

;; (def shell (load/node-module "shelljs"))

;; Other

;; (behavior ::connect
;;           :triggers #{:connect}
;;           :reaction (fn [this path]
;;                       (popup/popup! {:header path :buttons [{:label "ok"}]})))

;; (object/object* ::julia-lang
;;                 :tags #{:julia.lang})

;; (def julia (object/create ::julia-lang))

;; (object/raise julia :connect "hello there")

;; User connector

;; (scl/add-connector {:name "Julia"
;;                     :desc "Select a directory to serve as the root of your Julia project."
;;                     :connect (fn []
;;                                (popup/popup! {:header "Yeah, this doesn't actually work yet."
;;                                               :body   "Sorry."
;;                                               :buttons [{:label "Ok."}]}))})

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