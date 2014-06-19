# Jewel

[![Gitter chat](https://badges.gitter.im/one-more-minute/Jewel-LT.png)](https://gitter.im/one-more-minute/Jewel) - feel free to ask questions here. Please also see the [wiki](https://github.com/one-more-minute/Jewel/wiki) for some more documentation.

This is a Julia language plugin for Light Table, base on the [Jewel.jl](https://github.com/one-more-minute/Jewel.jl) editor backend. If you want more than just the basic language support you should look at installing [Jupiter](https://github.com/one-more-minute/Jupiter-LT).

## Instructions

Note: to execute commands, `Ctrl+Space` the type the command's name.

* Install the plugin with Light Table's plugin manager ("show plugin manager" command, search for "julia" or "jewel").

* Either make sure `julia` is on your path or set the :app behaviour `(:lt.objs.langs.julia/julia-path "/path/to/julia")`.
  * (Use the "user behaviors" command. See [here](https://gist.github.com/one-more-minute/9882389) for an example of setting the Julia path)

* Now restart LT.

When an update is available, first `Pkg.update()` in Julia, then use the "update all outdated" command in Light Table

## Useful Shortcuts

`C` = `Ctrl` (Windows, Linux), `Cmd` (Mac)

* `Ctrl-d`: Toggle docs
* `Ctrl-m`: Toggle methods
* `C-;`: Show autocomplete
* `C-/`: Toggle comments
* `C-Enter`: Evaluate current block
* `C-Shift-Enter`: Evaluate whole file
