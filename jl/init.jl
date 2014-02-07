port, id = map(parseint, ARGS)

if Pkg.installed("Jewel") == nothing
  Pkg.clone("Jewel")
end

using Jewel

Jewel.server(port, id)
