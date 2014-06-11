using JuliaParser
ops = JuliaParser.Lexer.operator_chars |> collect

brackets = "()[]{}" |> collect

other = " ," |> collect

escape = "'(){}[]\\\$-" |> collect

let s = ""
  for c in Set([ops, brackets, other]...)
    if c in escape
      s *= "\\\\" * string(c)
    else
      s *= string(c)
    end
  end
  s *= "\\\\\\\"" # Christ
  "[^$s]" |> println
end
