# Jewel

This is a plugin for Light Table supporting Julia.

The plan is to build a powerful environment for technical computing, to rival the likes of Mathematica/Matlab for interactivity and ease of use.

## Current Features

* Evalling in a Julia file - the client is booted up automagically.
* Reasonable error handling.
* Printing and warnings work well.
* Limited interaction with LT from Julia (popup messages etc.)

## Current Anti-Features

* The plugin looks for "julia.bat" on your path - this is hard-coded in for now.
* Pkg functions don't seem to work - no idea why atm.

## Coming Up Soon

* Support for modules
* Autocomplete
* Images / Plots

## Coming Up Eventually

* Typeset equations / mathematical notation
* Dataframe / spreadsheet style input
* Interactive graphics (callbacks from LT to Julia; two-way control)
