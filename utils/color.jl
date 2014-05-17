using Color, Lazy

color_range(n) = [0:360/n:360.][1:n]

# theme = "june-night"
# saturation = 0.3
# value = 1

theme = "june"
saturation = 1
value = 0.4

hexes = @>> color_range(100) map(h->HSV(h, saturation, value)) map(hex)

styles = map(enumerate(hexes)) do t
  i, h = t
  """
  .cm-s-june span.cm-variable-$(i-1) {color: #$h;}
  .cm-s-june span.cm-def-$(i-1) {color: #$h; font-weight: bold;}
  """
end

styles = map(enumerate(hexes)) do t
  i, h = t
  """
  .cm-s-june span.cm-variable-$(i-1) {color: #$h;}
  .cm-s-june span.cm-def-$(i-1) {color: #833; font-weight: bold;}
  """
end

clipboard(join(styles))
