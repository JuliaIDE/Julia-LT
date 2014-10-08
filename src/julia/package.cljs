(ns lt.objs.langs.julia.package
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd]
            [lt.objs.platform :as platform]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defui package-ui []
  [:iframe {:src "http://pkg.julialang.org"}])

(defn process-link [a]
  (let [target (dom/attr a :href)]
    (set! (.-onclick a)
          (fn [e]
            (platform/open target)))
    (dom/attr a {:href "javascript:void(0);"})))

(defn init-ui [frame]
  (dom/set-css (dom/$ :.titlebox (.-contentDocument frame)) {:display :none})
  (doseq [a (dom/lazy-nl-via-item (dom/$$ :a (.-contentDocument frame)))]
    (process-link a)))

(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tabs/rem! this)))

(object/object* ::packages
                :tags #{:julia.packages}
                :behaviors [::on-close]
                :name "Packages"
                :init (fn [this]
                        (let [frame (package-ui)]
                          (set! (.-onload frame) #(init-ui frame))
                          frame)))

(def packages (object/create ::packages))

(cmd/command {:command :julia.package-manager
              :desc "Julia: Open the package manager"
              :exec #(tabs/add-or-focus! packages)})
