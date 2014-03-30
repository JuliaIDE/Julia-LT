# Jewel

[![Gitter chat](https://badges.gitter.im/one-more-minute/Jewel.png)](https://gitter.im/one-more-minute/Jewel) - feel free to ask questions here.

This is a plugin for Light Table supporting Julia. The Julia side of this project lives [here](https://github.com/one-more-minute/Jewel.jl). The long-term goal is to mold Light Table into a MATLAB-like environment for Julia.

Light Table is shaping up well as a Julia IDE - it's already become my go-to environment for writing Julia packages, including the plugin itself. See "Current Features" to find out what it can do.

## Instructions

* Install the plugin with Light Table's plugin manager (ctrl+space, search for "show plugin manager", search for "julia" or "jewel").
* Once Jewel is installed, restart LT.
* `Pkg.add("Jewel")` in the Julia repl.
* Either make sure `julia` is on your path or set the :app behaviour `(:lt.objs.langs.julia/julia-path "/path/to/julia-readline.exe")`.
* Open a `.jl` file (or press `Ctrl-j` for a new one), type something, `Ctrl+Enter` to evaluate the line.
* Alternatively, clone Jewel and Jewel.jl into the appropriate folders for the latest and greatest (and possibly brokenest).

## Current Features

* Evalling in a Julia file - the client is booted up automagically.

* Reasonable error handling.

* Printing and warnings are properly redirected to LT's console.

* Limited interaction with LT from Julia (popup messages etc.)

* Support for modules - Jewel will look for a `module X` or `#jewel module X` declaration above the code you wish to evaluate and do so in the context of that module, allowing you to modify modules at runtime rather than having to replace them wholesale.

* Autocompletion: Jewel will provide hints for all accessible names by default. `Module.` hints the names accessibly within module. `using ` and `Pkg.add/rm()` will hint installed/available packages as appropriate. `Ctrl+;` forces autocompletion.
  * Note that autocompletion will only work when an editor has a client attached; evaluate something or press `Ctrl+d` to connect to a client.
  * Autocompletion is also extensible, so DSLs (for example) could be supported in future.

* Inline Docs: `Ctrl+d` (`Cmd` on OSX) and `Ctrl+m` toggle docs (as in `help()`) and methods (as in `methods()`) respectively. For Base methods, a link to the source on GitHub is given; soon local files will open in LT, too.

## Useful Shortcuts

`C` = `Ctrl` (Windows, Linux), `Cmd` (Mac)

* `C-d`: Toggle docs
* `C-m`: Toggle methods
* `C-j`: New Julia file
* `C-;`: Show autocomplete
* `C-/`: Toggle comment lines
* `C-Shift-Enter`: Evaluate whole file

## Coming Up Soon

* Images / Plots
* Richer display of built-in types
* Better syntax highlighting, themes, and UI improvements

## General Roadmap

* Better syntax highlighting, new theme, general UI improvements
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
  * Perhaps a custom Light Table installer specifically designed to get non-programmer users up and running as quickly as possible.

