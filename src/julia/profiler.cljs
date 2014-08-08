(ns lt.objs.langs.julia.profiler
  (:require [lt.objs.langs.julia.util :as util]
            [lt.object :as object]
            [lt.util.dom :as dom]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [crate.core :as crate]
            [lt.objs.menu :as menu])
  (:require-macros [lt.macros :refer [behavior]]))

;; CodeMirror extension

(behavior ::render-bars
          :triggers #{:object.instant}
          :reaction (fn [editor]
                      (editor/on editor :renderLine render-bar)))

(defn render-bar [cm line dom]
  (when-let [percent (.-percent line)]
    (dom/append dom
      (crate/html [:div.progress {:style (str "width:" percent)}]))))

;; Usage similar to Highlights

(defn % [x] (str (* x 100) "%"))

(defn editor-for-file [file]
  (first (pool/by-path file)))

(def lines (atom #{}))

(defn refresh-line [{:keys [file line percent handle] :as l}]
  (if handle
    l
    (if-let [ed (editor-for-file file)]
      (let [handle (editor/line-handle ed (dec line))]
        (when handle (set! (.-percent handle) (% percent)))
        (let [l (assoc l :handle handle :ed ed)]
          (swap! lines conj l)
          l))
      l)))

(defn refresh-lines [lines]
  (into #{} (map refresh-line lines)))

(defn editors [lines]
  (into #{} (map :ed lines)))

(defn refresh-and-update [lines]
  (let [lines (refresh-lines lines)]
    (doseq [ed (editors lines) :when ed]
      (editor/refresh ed))
    lines))

(defn dom-bars [] (dom/$$ ".CodeMirror-code .progress"))

(def *clearing* false) ; Don't interrupt the animation

(defn clear []
  (when-not *clearing*
    (doseq [{handle :handle} @lines]
      (set! (.-percent handle) nil))
    (reset! lines #{})
    (doseq [bar (dom-bars)]
      (.remove bar))))

(defn callback [f]
  (js/setTimeout f 0))

(defn animate-in []
  (let [bars (dom-bars)]
    (doseq [bar bars]
      (dom/remove-class bar :animated)
      (dom/add-class bar :hidden))
    (callback ; Hack to make the animation work
     #(doseq [bar bars]
        (dom/add-class bar :animated)
        (dom/remove-class bar :hidden)))))

(defn animate-out []
  (doseq [bar (dom-bars)]
    (dom/add-class bar :hidden)))

(defn set-lines [lines]
  (clear)
  (refresh-and-update lines)
  (animate-in))

(defn clear-lines []
  (set! *clearing* true)
  (animate-out)
  (js/setTimeout #(do (set! *clearing* false) (clear)) 200))

(behavior ::refresh-on-open
          :triggers #{:object.instant}
          :reaction #(refresh-and-update @lines))

;; Result handling

(behavior ::result
          :triggers #{:julia.profile-result}
          :reaction (fn [editor res]
                      (object/raise editor :julia.result (merge res {:html true
                                                                     :under true}))
                      (let [res-obj (util/widget editor (-> res :end dec) :underline)]
                        (listen! res-obj)
                        (object/add-tags res-obj [:julia.profile-result]))
                      (set-lines (res :lines))))

(def listen-object)

(defn listen! [obj]
  (set! listen-object obj))

(behavior ::clear
          :triggers #{:clear!}
          :reaction (fn [this]
                      (when (= this listen-object)
                        (clear))))

(defn reset-zoom [svg]
  (let [svg (->> svg (dom/$ :.root) js/Snap)]
    (.animate svg #js {:transform (js/Snap.matrix)} 200)))

(behavior ::menu
          :triggers #{:menu!}
          :reaction (fn [this ev]
                      (-> (menu/menu [{:label "Remove Profile Tree"
                                       :click (fn []
                                                (clear-lines)
                                                (object/raise this :clear!))}
                                      {:label "Reset Zoom"
                                       :click #(reset-zoom (:content @this))}])
                          (menu/show-menu (.-clientX ev) (.-clientY ev)))
                      (dom/prevent ev)
                      (dom/stop-propagation ev)))
