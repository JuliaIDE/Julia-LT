(ns lt.objs.langs.julia.browser
  (:require [lt.objs.langs.julia.util :as util]
            [lt.objs.file-links :as links]
            [lt.object :as object]
            [lt.objs.clients :as clients]
            [lt.util.dom :as dom]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [crate.core :as crate]
            [crate.binding :refer [bound map-bound]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn process-collapsible! [dom]
  (let [header (dom/$ :.collapsible-header dom)
        content (js/$ (dom/$ :.collapsible-content dom))]
    (when header
      (.hide content)
      (set! (.-onclick header)
            (fn []
              (.toggle content 200))))
    dom))

(def highlight
  (if lt.plugins.june
    lt.plugins.june/highlight
    identity))

(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(defn get-objects [client module]
  (clients/send client
                :browser.get-objects
                {:module module}
                :only browser))

(behavior ::get-objects
          :triggers #{:active :editor.result :module-update}
          :debounce 100
          :reaction (fn [editor]
                      (when (:lt.objs.tabs/tabset @browser)
                        (when-let [client (-> @editor :client :default)]
                          (when @client
                            (get-objects client (util/module editor)))))))

(behavior ::set-objects
          :triggers #{:update}
          :reaction (fn [browser {:keys [objs]}]
                      (object/merge! browser {:objs objs})))

(defui browser-ui [{:keys [objs]}]
  [(join-theme :div.CodeMirror) ; fonts/themes
   [:div.julia.browser
    [:table.data-frame
     (for [[k v] objs]
       (highlight ".variable" nil nil
                  (links/process!
                   (process-collapsible!
                    (crate/html
                     [:tr
                      [:td [:strong [:span.variable (name k)]]]
                      [:td (crate/raw v)]])))))]]])

(object/object* ::browser
                :tags #{:julia.browser}
                :behaviors [::on-close ::set-objects]
                :name "Browser"
                :init (fn [this]
                        (bound this browser-ui)))

(def browser (object/create ::browser))

(cmd/command {:command :julia.browser
              :desc "Julia: Open the object browser"
              :exec #(tabs/add-or-focus! browser)})

;; Get the correct theme

(defn tag-behaviour [tag name]
  (->> @object/tags tag (filter #(= (if (seq? %) (first %) %) name)) first))

(defn theme [tag]
  (-> tag (tag-behaviour :lt.objs.style/set-theme) second))

(defn julia-theme []
  (or (theme :editor.julia) (theme :editor) "default"))

(defn join-theme [class]
  (keyword (str (name class) ".cm-s-" (julia-theme))))
