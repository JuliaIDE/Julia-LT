(ns lt.objs.julia.commands
  (:require [lt.object :as object]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

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
