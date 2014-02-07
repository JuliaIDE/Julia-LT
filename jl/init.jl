port, id = map(parseint, ARGS)

@show port, id

if Pkg.installed("Jewel") == nothing
  Pkg.clone("Jewel")
end

using Jewel

Jewel.server(port, id)
