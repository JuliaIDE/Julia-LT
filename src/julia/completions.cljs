(ns lt.objs.langs.julia.completions
  (:require [lt.objs.langs.julia.proc :as proc]
            [lt.objs.langs.julia.util :as util]
            [lt.objs.clients :as clients]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.plugins.auto-complete :as auto-complete]
            [lt.objs.editor :as editor])
  (:require-macros [lt.macros :refer [behavior defui]]))

(behavior ::trigger-update-hints
          :triggers #{:editor.julia.hints.trigger-update :input}
          :debounce 100
          :reaction (fn [editor res]
                      (when-let [default-client (-> @editor :client :default)] ;; dont eval unless we're already connected
                        (when @default-client
                          (clients/send (eval/get-client! {:command :editor.julia.hints
                                                           :info {}
                                                           :origin editor
                                                           :create proc/connect})
                                        :editor.julia.hints
                                        {:cursor (util/cursor editor)
                                         :code (editor/->val editor)
                                         :module (util/module editor)
                                         :path (-> @editor :info :path)}
                                        :only editor)))))

(behavior ::use-local-hints
          :triggers #{:hints+}
          :reaction (fn [editor hints token]
                      (object/raise editor :editor.julia.hints.trigger-update)
                      (concat (::hints @editor) hints)))

(defn process-hint [hint]
  (if (string? hint)
    #js {:completion hint}
    (clj->js hint)))

(behavior ::update-hints
          :triggers #{:editor.julia.hints.update}
          :reaction (fn [editor {:keys [hints notextual pattern] :as res}]
                      (object/merge! editor {:token-pattern (when pattern (js/RegExp. (str pattern "$")))})
                      (let [pos (editor/->cursor editor)
                            token (auto-complete/get-token editor pos)]
                        (object/merge! editor {::hints (remove #(= (:string token) (.-completion %))
                                                               (map process-hint hints))})
                        (object/raise auto-complete/hinter :refresh!))))

(set! _get-token auto-complete/get-token)

(set! auto-complete/get-token
  (fn [ed pos]
    (if-let [pattern (@ed :token-pattern)]
      (let [line (-> ed (editor/line (:line pos)) (.substring 0 (:ch pos)))
            match (re-find pattern line)]
        {:start (- (count line) (count match))
         :end (:ch pos)
         :line (:line pos)
         :string match})
      (_get-token ed pos))))
