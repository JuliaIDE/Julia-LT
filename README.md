# Jewel

[![Gitter chat](https://badges.gitter.im/one-more-minute/Jewel.png)](https://gitter.im/one-more-minute/Jewel)

This is a plugin for Light Table supporting Julia.

The plan is to build a powerful environment for technical computing, to rival the likes of Mathematica/Matlab for interactivity and ease of use. It's currently usable but doesn't completely replace the standard REPL.

## Instructions

* Intall the plugin with Light Table's plugin manager (ctrl+space, search for "show plugin manager").
* `Pkg.clone("Jewel")` in the Julia repl.
* Either make sure `julia` is on your path or set the :app behaviour `(:lt.objs.langs.julia/julia-path "/path/to/julia")`.
* Open a .jl file
* ctrl+enter with the cursor on the line you want to evaluate.

## Current Features

* Evalling in a Julia file - the client is booted up automagically.
* Reasonable error handling.
* Printing and warnings work well.
* Limited interaction with LT from Julia (popup messages etc.)

## Current Anti-Features

* Modules aren't supported; everything is evaluated in the top level scope, unless you select and eval an entire file by hand.
* Shelling out (and by extension e.g. `Pkg`, `PyPlot`) doesn't work on some windows systems - this seems to be to do with the way Node.js handles processes.

## Coming Up Soon

* Support for modules
* Autocomplete
* Images / Plots

## General Roadmap

* Basic IDE functionality - project management etc.
* Instrepl - evaluating forms within a file, even as they are written
  * Would enable a “reactive” (spreadsheet-y) style of programming; edit data or a formula deep within your code and plots/output instantly update
* Instant access to documentation within the editor.
* Return values are displayed inline in the file, and HTML output can easily be overridden so that you can display anything interactively.
  * Vectors/Matrices, as scrollable tables.
  * Graphics (Plots etc.)
  * Interactive graphics/output, even with Julia callbacks for sliders etc.
  * 3D Graphics; via Three.js
* The interactivity should be easily extensible from within Julia itself, so that it can provide the foundation for the kind of fully interactive data visualisation that people want to build.
* Input of greek letters/other unicode characters via replacement; \mu -> μ. Could work with autocompletion.
  * This would solve some issues people have been having with confusable unicode chars.
* Extensible Mathematica style input of formulae, matrices, integrals etc.; e.g., x^2 would display in the editor as x<sup>2</sup>. More advanced things would be possible, like displaying @sumt n 1:10 n^2 as fully editable sigma notation.
* Similarly, data frame input; have the ease-of-use of an excel style spreadsheet right inside your file. Copy + paste data directly from Excel to Julia, for example.
  * This could taken even further, by having a mode where the spreadsheet is the primary environment, “code boxes” are secondary. Could be great for quick stats work.
* Further ideas within scope:
  * Better story for windows users; i.e. a Julia installer.
  * Perhaps also a custom Light Table installer specifically designed to get non-programmer users up and running as quickly as possible.

