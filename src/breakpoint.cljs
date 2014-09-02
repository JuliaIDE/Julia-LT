(ns lt.objs.breakpoint
  (:require [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.menu :as menu]
            [lt.util.dom :as dom]
            [lt.object :as object]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior]]))

(defn gutter-node [ed line]
  (let [markers (-> ed editor/->cm-ed (.lineInfo (dec line)) .-gutterMarkers)]
    (when markers
      (aget markers "CodeMirror-linenumbers"))))

(defn set-gutter-node [ed line & [node]]
  (.setGutterMarker (editor/->cm-ed ed) (dec line) "CodeMirror-linenumbers" node))

(defn show-gutter-menu [ed l e]
  (let [items (sort-by :order (object/raise-reduce ed :gutter-menu+ [] l))]
    (-> (menu/menu items)
        (menu/show-menu (.-clientX e) (.-clientY e))))
  (dom/prevent e)
  (dom/stop-propagation e))

(behavior ::gutter-menu
          :triggers #{:object.instant}
          :reaction (fn [ed]
                      (editor/on ed :gutterContextMenu
                                 (fn [cm l gutter e]
                                   (when (= gutter "CodeMirror-linenumbers")
                                     (show-gutter-menu ed (inc l) e))))))

(behavior ::breakpoint-menu
          :triggers #{:gutter-menu+}
          :reaction (fn [ed items line]
                      (let [has-bp (gutter-node ed line)]
                        (conj items
                              {:label "Add ● breakpoint"
                               :order 1
                               :enabled (not has-bp)
                               :click #(set-gutter-node ed line
                                                        (crate/html [:div.CodeMirror-linenumber.warn "●"]))}
                              {:label "Add ■ breakpoint"
                               :order 2
                               :enabled (not has-bp)
                               :click #(set-gutter-node ed line
                                                        (crate/html [:div.CodeMirror-linenumber.stop "■"]))}
                              {:label "Clear breakpoints"
                               :order 3
                               :enabled has-bp
                               :click #(set-gutter-node ed line)}))))
