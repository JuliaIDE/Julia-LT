# Jewel

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
* Shelling out (and by extension the package manager) doesn't work (on windows at least) - this seems to be to do with the way Node.js handles processes, and might not be fixed soon.

## Coming Up Soon

* Support for modules
* Autocomplete
* Images / Plots

## Coming Up Eventually

* Typeset equations / mathematical notation
* Dataframe / spreadsheet style input
* Interactive graphics (callbacks from LT to Julia; two-way control)
