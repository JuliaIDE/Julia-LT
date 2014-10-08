(ns lt.objs.langs.julia.proc
  (:require [lt.objs.langs.julia :as julia :refer [julia]]
            [lt.objs.proc :as proc]
            [lt.object :as object]
            [lt.objs.console :as console]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.plugins :as plugins]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.objs.eval :as eval]
            [lt.objs.sidebar.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

;; Connection Monitors

(behavior ::proc-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (when-not (@this :connected)
                        (let [out (.toString data)]
                          (object/update! this [:buffer] str out)
                          (when (= out "connected")
                            (when (@this :notify) (notifos/done-working "Connected to Julia"))
                            (object/merge! this {:connected true
                                                 :just-connected true}))))))

(behavior ::proc-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (when-not (@this :connected)
                        (let [out (.toString data)]
                          (object/update! this [:buffer] str out)))))

(behavior ::proc-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (when-not (:connected @this)
                        (notifos/done-working "")
                        (when (:complain @this)
                          (popup/popup! {:header "Couldn't connect to Julia"
                                         :body [:pre (:buffer @this)]
                                         :buttons [{:label "Close"}]}))
                        (clients/rem! (:client @this)))
                      (proc/kill-all (:procs @this))
                      (object/destroy! this)))

;; Pipe output to LT's console

(behavior ::pipe-out
           :triggers #{:proc.out}
           :reaction (fn [this data]
                       (if (:just-connected @this)
                         (object/merge! this {:just-connected false})
                         (object/update! this [:out-buffer] str data))
                       (let [out (@this :out-buffer)]
                         (when (= (last out) "\n")
                           (console/log out)
                           (object/merge! this {:out-buffer ""})))))

(behavior ::pipe-err
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (object/update! this [:err-buffer] str data)
                      (let [out (@this :err-buffer)]
                        (when (= (last out) "\n")
                          (console/log out "error")
                          (object/merge! this {:err-buffer ""})))))

(behavior ::flush
          :triggers #{:proc.out :proc.error}
          :debounce 500
          :reaction (fn [this]
                      (when @this
                        (when-let [out (not-empty (@this :out-buffer))]
                          (console/log out)
                          (object/merge! this {:out-buffer ""}))
                        (when-let [out (not-empty (@this :err-buffer))]
                          (console/log out "error")
                          (object/merge! this {:err-buffer ""})))))

;; Connection object

(object/object* ::connecting-notifier
                :tags #{:julia.connection-watch}
                :behaviors [::proc-out ::proc-error ::proc-exit
                            ::pipe-out ::pipe-err ::flush]
                :init (fn [this client]
                        (object/merge! this {:client client})
                        nil))

;; Connection

(defn with-dir [dir f]
  (let [dir' (js/process.cwd)]
    (js/process.chdir dir)
    (f)
    (js/process.chdir dir')))

(def init (files/join plugins/*plugin-dir* "jl" "init.jl"))

(defn julia-path [] (or (@julia :path) "julia"))

; notify – set the status bar (not used by e.g. eval which notifies itself)
; complain – show a popup if we can't connect
(defn connect [& {:keys [notify complain] :or {notify false complain true}}]
  (when notify (notifos/working "Spinning up Julia..."))
  (let [client (clients/client! :julia.client)
        obj (object/create ::connecting-notifier client)]
    (object/merge! obj {:notify notify :complain complain})
    (with-dir (files/home)
      #(proc/exec {:command (julia-path)
                   :args [init tcp/port (clients/->id client)]
                   :obj obj}))
    (object/merge! client {:proc (-> @obj :procs first)})
    (clients/send client :julia.set-global-client {} :only julia)
    (set-default-client client)
    client))

;; Manual connection

(defn connect-manual []
  (let [client (clients/client! :julia.client)]
    (popup/popup! {:header "Connect Julia to Light Table"
                   :body (str "@async Jewel.server(" tcp/port ", " (clients/->id client) ")")
                   :buttons [{:label "Done"}]})
    (clients/send client :julia.set-global-client {} :only julia)
    (set-default-client client)
    client))

(scl/add-connector {:name "Julia (manual)"
                    :desc "Manually connect to Julia."
                    :connect connect-manual})

;; Connect on startup

(defn wait-until [cond callback]
  (if (cond)
    (callback)
    (js/setTimeout #(wait-until cond callback) 100)))

(defn when-connect [cb] (wait-until #(not= tcp/port 0) cb))

(behavior ::connect-on-startup
          :triggers #{:init}
          :desc "Julia: Spin up a client when Light Table starts"
          :type :user
          :exclusive true
          :reaction (fn []
                      (when-connect
                       #(eval/get-client! {:command :editor.julia.eval
                                           :info {}
                                           :origin julia
                                           :create (fn [] (connect :notify true))}))))

;; Default client

(def default-client* nil)

(defn default-client []
  (when-let [client default-client*]
    (when (:connected @client)
      client)))

(defn set-default-client [client]
  (when-not (default-client)
    (set! default-client* client)
    (doseq [editor (lt.objs.editor.pool/get-all)]
      (object/raise editor :julia.connected client))))

(defn connect-client [editor client]
  (when-not (some-> @editor :client :default deref :connected)
    (object/update! editor [:client :default] (constantly client))
    (object/raise editor :set-client client)))

(defn connect-default-client [editor]
  (when-let [client (default-client)]
    (connect-client editor client)))

(behavior ::connect-on-open
          :triggers #{:object.instant}
          :desc "Julia: Connect new editors to the default Julia client"
          :type :user
          :reaction (fn [editor]
                      (connect-default-client editor)))

(behavior ::attach-on-connect
          :triggers #{:julia.connected}
          :desc "Julia: Connect editors when a default Julia client is created"
          :type :user
          :reaction (fn [editor client]
                      (connect-client editor client)))

;; Process commands

(defn get-proc [ed]
  (or (->> @ed :client vals (map deref) (map :proc) (filter identity) seq)
      [(:proc @(default-client))]))

(cmd/command {:command :editor.interrupt-clients
              :desc "Julia: Interrupt the current client"
              :exec (fn []
                      (when-let [ed (lt.objs.editor.pool/last-active)]
                        (doseq [proc (get-proc ed)]
                          (.kill proc "SIGINT"))
                        (notifos/done-working)))})

(cmd/command {:command :editor.kill-clients
              :desc "Julia: Kill the current client"
              :exec (fn []
                      (when-let [ed (lt.objs.editor.pool/last-active)]
                        (doseq [proc (get-proc ed)]
                            (.kill proc))
                        (notifos/done-working)))})
