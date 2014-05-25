using Color, Lazy

hue_range(n) = [0:360/n:360.][1:n]

# Night colours
hexes = @>> [hex(HSV(h, 0.2, 1)) for h in hue_range(20)]

styles = map(enumerate(hexes)) do t
  i, h = t
  ".cm-hash-$(i-1) {color: #$h;}"
end

clipboard(join(styles))
