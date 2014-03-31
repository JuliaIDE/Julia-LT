port, id = map(parseint, ARGS)

try
  require("Jewel")
catch e
  if isa(e, ErrorException) && e.msg == "Jewel not found"
    try
      info("Couldn't find Jewel package, attempting manual instal...")
      Pkg.add("Jewel")
    catch e
      println(STDERR, """
      -----------------------------------------------
      We couldn't install Jewel.jl for you.
      Try executing Pkg.add("Jewel") in a Julia repl.
      -----------------------------------------------
      """)
      rethrow()
    end
  else
    rethrow()
  end
end

require("Jewel")

Jewel.server(port, id)
