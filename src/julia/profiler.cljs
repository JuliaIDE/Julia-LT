(ns lt.objs.langs.julia.profiler
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.util.dom :as dom]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.plugins.auto-complete :as auto-complete]
            [lt.objs.editor :as ed]
            [lt.objs.plugins :as plugins]
            [lt.plugins.watches :as watches]
            [clojure.string :as string]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.objs.cache :as cache]
            [lt.util.load :as load]
            [lt.util.cljs]; :refer [js->clj]]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.doc :as doc]
            [crate.core :as crate])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; (editor/off ed :renderLine render-reaction-wrapper)

(defn render-reaction-wrapper [& args]
  (apply render-reaction args))

(defn render-reaction [cm line dom]
  (when-let [progress (.-progress line)]
    (dom/append dom
      (crate/html [:div.progress {:style (str "width:" progress)}]))))

;; (def ed (-> (pool/containing-path "mandelbrot.jl") first))

;; (def li (editor/line-handle ed 30))

;; (set! (.-progress li) "60%")

;; (do (editor/refresh ed) nil)
