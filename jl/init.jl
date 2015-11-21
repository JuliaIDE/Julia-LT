if VERSION < v"0.3-"
  println(STDERR, """
  This plugin requires Julia 0.3 or higher to work. Your current version
  is $(VERSION). Please download a more recent release from
  http://www.julialang.org/downloads
  """)
  exit(1)
end

const bundlepath = joinpath(JULIA_HOME, "..", "packages")

if !isdir(Pkg.dir()) && isdir(bundlepath)
  info("Installing packages...")
  mkpath(Pkg.dir())
  @unix_only run(`cp -a $bundlepath/. $(Pkg.dir())`)
  @windows_only run(`XCopy /E /Q $bundlepath $(Pkg.dir())`)
  info("Install successful!")
end

VERSION < v"0.4-" && (require(s::Symbol) = Base.require(string(s)))

try
  require(:Jewel)
catch e
  if isa(e, ArgumentError) && e.msg == "Jewel not found in path"
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

!isdefined(Main, :Jewel) && require(:Jewel)

Jewel.server(map(s->parse(Int, s), ARGS)..., true)
