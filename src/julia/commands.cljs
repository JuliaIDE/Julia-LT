(ns lt.objs.julia.commands
  (:require [lt.object :as object]
            [lt.objs.langs.julia.proc :as proc]
            [lt.objs.eval :as eval]
            [lt.objs.clients :as clients]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.objs.platform :as platform]
            [lt.objs.files :as files]
            [lt.objs.langs.julia.util :as util]
            [lt.objs.langs.julia :refer [julia]])
  (:require-macros [lt.macros :refer [behavior]]))

;; Get current block

(def cb-id (atom 0))
(def cbs (atom {}))

(behavior ::get-block
  :triggers #{:get-block}
  :reaction (fn [editor cb]
              (let [client (eval/get-client! {:command :editor.block
                                              :origin editor
                                              :create proc/connect})
                    id (swap! cb-id inc)]
                (swap! cbs assoc id cb)
                (clients/send client
                              :editor.block
                              {:code (editor/->val editor)
                               :line (-> editor editor/->cursor :line inc)
                               :id id}
                              :only editor))))

(behavior ::return-block
  :triggers #{:return-block}
  :reaction (fn [editor {:keys [id bounds block]}]
              (let [cb (@cbs id)]
                (swap! cbs dissoc id)
                (cb bounds block))))

;; Block-related commands

(cmd/command {:command :editor.get-block
             :desc "Editor: get the current code block"
             :hidden true
             :exec (fn [cb]
                     (when-let [ed (pool/last-active)]
                       (object/raise ed :get-block cb)))})

;; TODO: should select comment blocks
(cmd/command {:command :editor.select-block
              :desc "Editor: Select the current code block"
              :exec #(when-let [ed (pool/last-active)]
                       (cmd/exec! :editor.get-block
                         (fn [[start end] block]
                           (editor/set-selection ed {:line (dec start) :ch 0}
                                                    {:line (dec end)}))))})

;; Eval

(cmd/command {:command :eval.one.move
              :desc "Editor: Eval and go to next block"
              :exec #(when-let [ed (pool/last-active)]
                       (object/raise ed :eval.one true))})

;; Files

(cmd/command {:command :julia.new
              :desc "Julia: Open a blank file"
              :exec #(do
                       (cmd/exec! :new-file)
                       (cmd/exec! :set-syntax {:name "Julia"
                                               :exts [:jl]
                                               :mime "text/julia"
                                               :tags [:editor.julia]}))})

;; Important Stuff

(cmd/command {:command :bio.blog.open
              :desc "Biology: Open a blog"
              :exec #(platform/open-url "http://wormchurn.wordpress.com/")})

;; Terminal commands

(when util/term
  (cmd/command {:command :julia.repl.new
                :desc "Julia: Open a new Terminal REPL"
                :exec #(util/term (util/escape-path (proc/julia-path)))}))

;; File management

(defn touch-me-maybe [path]
  (when-not (files/exists? path)
    (files/save path ""))
  path)

(cmd/command {:command :juliarc.open
              :desc "Julia: Open Julia startup code (juliarc.jl)"
              :exec #(cmd/exec! :open-path (touch-me-maybe (files/home ".juliarc.jl")))})

(cmd/command {:command :user-dir.open
              :desc "Settings: Open Settings Directory"
              :exec #(platform/open (files/lt-user-dir))})

(cmd/command {:command :julia.pkg-dir.open
              :desc "Julia: Open Package Directory"
              :exec #(platform/open (files/home ".julia"))})
