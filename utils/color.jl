using Color, Lazy

color_range(n) = [0:360/10:360.][1:n]

hexes = @>> color_range(10) map(h->HSV(h, 1, 0.6)) map(hex)

styles = map(enumerate(hexes)) do t
  i, h = t
  ".cm-s-june span.cm-variable-$(i-1) {color: #$h;}"
end

clipboard(join(styles, "\n"))
