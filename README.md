# Jewel

[![Gitter chat](https://badges.gitter.im/one-more-minute/Jewel-LT.png)](https://gitter.im/one-more-minute/Jewel-LT) - feel free to ask questions here.

This is a Julia language plugin for Light Table, base on the [Jewel.jl](https://github.com/one-more-minute/Jewel.jl) editor backend.

Jewel-LT provides basic editor support, but if you don't use Light Table already and are looking for a more full-featured IDE experience check out [Jupiter](http://github.com/one-more-minute/Jupiter-LT)

## Instructions

Note: to execute commands, `Ctrl+Space` the type the command's name.

* Install the plugin with Light Table's plugin manager ("show plugin manager" command, search for "julia" or "jewel").

* Either make sure `julia` is on your path or set the :app behaviour `(:lt.objs.langs.julia/julia-path "/path/to/julia")`.
  * (Use the "user behaviors" command. See [here](https://gist.github.com/one-more-minute/9882389) for an example of setting the Julia path)

* Now restart LT.

* Open a `.jl` file, type something, `Ctrl+Enter` to evaluate the line.

When an update is available, first `Pkg.update()` in Julia, then use the "update all outdated" command in Light Table

## Current Features

* Evalling in a Julia file - the client is booted up automagically.

* Reasonable error handling.

* Printing and warnings are properly redirected to LT's console.

* Limited interaction with LT from Julia (popup messages etc.)

* Support for modules - Jewel will look for a `module X` or `#jewel module X` declaration above the code you wish to evaluate and do so in the context of that module, allowing you to modify modules at runtime rather than having to replace them wholesale.

* Autocompletion: Jewel will provide hints for all accessible names by default. `Module.` hints the names accessibly within module. `using ` and `Pkg.add/rm()` will hint installed/available packages as appropriate. `Ctrl+;` forces autocompletion.
  * Autocompletion is also extensible, so DSLs (for example) could be supported in future.

* Inline Docs: `Ctrl+d` (`Cmd` on OSX) and `Ctrl+m` toggle docs (as in `help()`) and methods (as in `methods()`) respectively. For Base methods, a link to the source on GitHub is given; soon local files will open in LT, too.

## Useful Shortcuts

`C` = `Ctrl` (Windows, Linux), `Cmd` (Mac)

* `Ctrl-d`: Toggle docs
* `Ctrl-m`: Toggle methods
* `C-j`: New Julia file
* `C-;`: Show autocomplete
* `C-/`: Toggle comments
* `C-Enter`: Evaluate current block
* `C-Shift-Enter`: Evaluate whole file

## Coming Up Soon

* Images / Plots
* Richer display of built-in types
* Better syntax highlighting, themes, and UI improvements
