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
            [lt.objs.editor.pool :as pool]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Proc

(def init (files/join plugins/*plugin-dir* "jl" "init.jl"))

;; Connection

;; (defn connect []
;;   (let [client (clients/client! :julia.client)]
;;     (proc/exec {:command "julia"
;;                 :args [init tcp/port (clients/->id client)]
;;                 :obj julia})
;;     (clients/send client :julia.set-global-client {} :only julia)))

(defn connect-manual []
  (let [client (clients/client! :julia.client)]
    (popup/popup! {:header "Connect Julia to Light Table"
                   :body (str "ltconnect(" tcp/port ", " (clients/->id client) ")")
                   :buttons [{:label "Done"}]})
    (clients/send client :julia.set-global-client {} :only julia)
    client))

(scl/add-connector {:name "Julia (manual)"
                    :desc "Manually connect to Julia."
                    :connect connect-manual})

;; Util

(defn current-buffer-content []
  "Returns content of the current buffer"
  (let [cm (editor/->cm-ed (pool/last-active))]
    (.getRange cm #js {:line 0 :ch 0} #js {:line (.lineCount cm) :ch 0})))

(defn cursor
  ([editor] (cursor editor "start"))
  ([editor pos]
    (let [cursor (ed/->cursor editor pos)]
      {:line (-> cursor :line inc)
       :col  (-> cursor :ch   inc)})))

; Editor commands

(behavior ::editor-commands
  :triggers #{:editor.eval.julia.editor-command}
  :reaction (fn [editor res]
              (condp = (res :cmd)
                "result" (object/raise editor (if (res :under)
                                                :editor.result.under
                                                :editor.result)
                                              (if (res :html)
                                                (-> res :value crate/raw)
                                                (-> res :value))
                                              {:start-line (-> res :start dec)
                                               :line (-> res :end dec)})
                "error" (object/raise editor :editor.exception
                                             (res :value)
                                             {:start-line (-> res :start dec)
                                              :line (-> res :end dec)}))))

;; Global commands

(behavior ::commands
  :triggers #{:editor.eval.julia.command}
  :reaction (fn [editor res]
              (condp = (res :cmd)
                "popup" (popup/popup! {:header  (res :header)
                                       :body    (res :body)
                                       :buttons (res :buttons)})
                "print" (console/log (res :value)
                                     (if (res :error) "error")))))

(object/object* ::julia-lang
                :tags #{:julia.lang}
                :behaviours [::commands])

(def julia (object/create ::julia-lang))

(prn julia)

;; Eval

(behavior ::eval.one
  :triggers #{:eval.one}
  :reaction (fn [editor]
                (clients/send (eval/get-client! {:command :editor.eval.julia
                                                 :origin editor
                                                 :info {}
                                                 :create connect-manual})
                              :editor.eval.julia
                              {:code (current-buffer-content)
                               :start (cursor editor "start") :end (cursor editor "end")}
                              :only
                              editor)))

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
