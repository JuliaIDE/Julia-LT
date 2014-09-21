(ns lt.objs.julia.commands
  (:require [lt.object :as object]
            [lt.objs.langs.julia.proc :as proc]
            [lt.objs.eval :as eval]
            [lt.objs.clients :as clients]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
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
