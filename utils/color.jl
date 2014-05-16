using Color, Lazy

color_range(n) = [0:360/10:360.][1:n]

saturation = 1
value = 0.6

hexes = @>> color_range(10) map(h->HSV(h, saturation, value)) map(hex)

styles = map(enumerate(hexes)) do t
  i, h = t
  ".cm-s-june span.cm-variable-$(i-1) {color: #$h;}"
end

clipboard(join(styles, "\n"))
