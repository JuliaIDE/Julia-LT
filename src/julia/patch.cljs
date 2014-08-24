(ns lt.objs.langs.julia.patch
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.editor :as editor]
            [lt.objs.keyboard :as keyboard]
            [lt.objs.command :as cmd]
            [lt.objs.context :as ctx]
            [crate.binding :refer [bound]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defui ->inline-exception [this info]
  [:div {:class (bound this eval/->exception-class)}
   [:span.spacer (eval/->spacing (editor/line (:ed info) (-> info :loc :line)))]
   (if (string? (:ex info)) [:pre (:ex info)] [:div (:ex info)])]
  :click (fn []
           (object/raise this :click))
  :contextmenu (fn [e]
                 (object/raise this :menu! e))
  :dblclick (fn []
              (object/raise this :double-click)))

(set! eval/->inline-exception ->inline-exception)

;; Tabs as spaces

(defn keyboard-raise [obj k & args]
  (loop [reactions (-> @obj :listeners k)]
    (when (seq reactions)
      (set! keyboard/*capture* true)
      (object/raise* obj [(first reactions)] args k)
      (when-not keyboard/*capture* (recur (rest reactions))))))

(set! keyboard/raise keyboard-raise)

(cmd/command {:command :editor.backspace-pair
              :hidden true
              :desc "Editor: Smart backspace"
              :exec (fn [c]
                      (keyboard/raise (ctx/->obj :editor.keys.normal) :backspace! c))})

(defn adjust-loc [loc dir]
  (update-in loc [:ch] + dir))

(defn pre-cursor-indent [ed {:keys [line ch]}]
  (let [tabs (editor/option ed :indentWithTabs)
        unit (editor/option ed :indentUnit)
        precursor (.substring (editor/line ed line) 0 ch)
        whitespace (count (re-find (if tabs #"^\t*$" #"^ *$") precursor))]
    [(quot whitespace unit) (mod whitespace unit)]))

(behavior ::backspace-indent
          :triggers #{:backspace!}
          :reaction (fn [ed]
                      (if-not (or (editor/selection? ed)
                                  (> (.-length (.getSelections (editor/->cm-ed ed))) 1))
                        (let [cursor (editor/->cursor ed)
                              unit (editor/option ed :indentUnit)
                              [indent rem] (pre-cursor-indent ed cursor)
                              cursor (if (> rem 0) (adjust-loc (editor/->cursor ed) (- unit rem)) cursor)
                              [indent rem] (if (> rem 0) (pre-cursor-indent ed cursor) [indent rem])]
                          (if (and (> indent 0) (zero? rem))
                            (editor/replace ed (adjust-loc cursor (- unit)) cursor "")
                            (keyboard/passthrough)))
                        (keyboard/passthrough))))
