using Color, Lazy

hue_range(n) = [0:360/n:360.][1:n]

# Night colours
hexes = @>> [hex(HSV(h, 0.2, 1)) for h in hue_range(20)]

colours = distinguishable_colors(20,
                                 lchoices = linspace(90,100,50),
                                 cchoices = linspace(0,30,50),
                                 hchoices = linspace(0,360,50))

colours

hexes = map(hex, colours)

styles = map(enumerate(hexes)) do t
  i, h = t
  "&.cm-hash-$(i-1) {color: #$h;}"
end

clipboard(join(styles, "\n"))
