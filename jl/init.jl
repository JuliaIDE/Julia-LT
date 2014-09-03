if VERSION < v"0.3-"
  println(STDERR, """
  This plugin requires Julia 0.3 or higher to work. Your current version
  is $(VERSION). Please download a more recent release from
  http://www.julialang.org/downloads
  """)
  exit(1)
end

try
  require("Jewel")
catch e
  if isa(e, ErrorException) && e.msg == "Jewel not found"
    try
      info("Couldn't find Jewel package, attempting installation...")
      Pkg.add("Jewel")
    catch e
      println(STDERR, """
      -----------------------------------------------
      We couldn't install Jewel.jl for you.
      Try using Pkg.add("Jewel") in a Julia repl.
      -----------------------------------------------
      """)
      rethrow()
    end
  else
    rethrow()
  end
end

require("Jewel")

Jewel.server(map(parseint, ARGS)...)
