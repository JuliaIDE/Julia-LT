// Support Unicode properly
// Auto place end statements
// Refactor brackets matching
// Support all string prefixes
// Handle string interpolation
// Function calls
// Short-form definition
// Negative numbers
// Keywords (being careful of ranges and types)

CodeMirror.defineMode("julia2", function(config, parserConfig) {
  var indentUnit = config.indentUnit || 2;

  // Hash functions – should be put in a seperate plugin
  function hash(str) {
    var res = 0,
        len = str.length;
    for (var i = 0; i < len; i++) {
      res = res * 31 + str.charCodeAt(i);
    }
    return Math.abs(res);
  }

  function variable_class(str) {
    h = hash(str)%20
    return 'variable-' + h
  }

  function def_class(str) {
    h = hash(str)%100
    return 'def-' + h
  }

  // It's safe to call push_scope(name, index)
  function push_scope(state, name, indent) {
    state.scopes.push({'name': name, 'indent': indent});
  }

  function wordRegexp(words) {
    return new RegExp("^(" + words.join("|") + ")\\b");
  }

  var operators   = /^(?:\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|<:|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b|\.{3}|\.)/;
  var delimiters  = /^[;,()[\]{}]/;
  var identifiers = /^[_A-Za-z][_A-Za-z0-9!]*/;
  var keyword     = /^:[_A-Za-z][_A-Za-z0-9!]*/

  var blockOpeners = ["begin", "function", "type", "immutable",
                      "let", "macro", "for", "while",
                      "quote", "if", "else", "elseif",
                      "try", "finally", "catch", "do"];

  var blockClosers = ["end", "else", "elseif", "catch", "finally"];

  var keywordList = ['if', 'else', 'elseif', 'while',
                     'for', 'begin', 'let', 'end',
                     'do', 'try', 'catch', 'finally',
                     'return', 'break', 'continue', 'global',
                     'local', 'const', 'export', 'import',
                     'importall', 'using', 'function', 'macro',
                     'module', 'baremodule', 'type', 'immutable',
                     'quote', 'typealias', 'abstract', 'bitstype',
                     'ccall'];

  var builtinList = ['true', 'false', 'NaN', 'Inf',
                     'Int8', 'Uint8', 'Int16', 'Uint16',
                     'Int32', 'Uint32', 'Int64', 'Uint64',
                     'Int128', 'Uint128', 'Bool', 'Char',
                     'Float16', 'Float32', 'Float64', 'Array',
                     'Vector', 'Matrix', 'String', 'UTF8String',
                     'ASCIIString'];

  var keywords = wordRegexp(keywordList);
  var builtins = wordRegexp(builtinList);
  var openers = wordRegexp(blockOpeners);
  var closers = wordRegexp(blockClosers);
  var macro = /^@[_A-Za-z][_A-Za-z0-9!\.]*/;

  function in_array(state) {
    var ch = cur_scope(state);
    return (ch=="[" || ch=="{" || ch == "(");
  }

  function cur_scope(state) {
    if(state.scopes.length==0) {
      return null;
    }
    return state.scopes[state.scopes.length - 1].name;
  }

  // tokenizers
  function tokenBase(stream, state) {

    if (stream.eatSpace()) {
      return null;
    }

    scope = cur_scope(state);

    // Strings

    if (scope == '"""' || scope == 'string') {
      delimiter = scope == 'string' ? '"' : '"""';
      while (!stream.eol()) {
        stream.eatWhile(/[^\$'"\\]/);
        if (stream.eat('\\')) {
            stream.next();
            if (stream.eol()) {
              return 'string';
            }
        } else if (stream.match("$") && stream.match("(")) { // Both checks || infinite loops
//           if (stream.match(/^\s*$/, false)) {
//             push_scope(state, 'splice');
//           } else {
//             push_scope(state, 'splice', stream.column()+1);
//           }
          push_scope(state, 'splice', stream.column()+stream.current().length);
          return 'string';
        } else if (stream.match(delimiter)) {
          state.scopes.pop();
          return 'string';
        } else {
            stream.eat(/['"]/);
        }
      }
      return 'string';
    }

    // Multiline Comments

    if (stream.match('#=')) {
      push_scope(state, 'multiline-comment');
    }

   if (cur_scope(state) == 'multiline-comment') {
     // TODO: this doesn't handle `=#=#` properly
      if (stream.match(/^.*?#=/)) {
        push_scope(state, 'multiline-comment');
      } else if (stream.match(/^.*?=#/)) {
        state.scopes.pop();
        return 'comment';
      } else {
        stream.skipToEnd();
        return 'comment';
      }
    }

    // End comment out of place
    if (stream.match('=#')) {
      return 'error'
    }

    // Handle scope changes
    var leaving_expr = state.leaving_expr;
    state.leaving_expr = false;

    // If a comma, don't remove last keyword
    // This is so that `using A, B` works
    if (stream.match(','))
      return 'delimiter';

    var last_keyword = state.last_keyword;
    state.last_keyword = undefined;

    if(leaving_expr) {
      if(stream.match(/^'+/)) {
        return 'operator';
      }
      if(stream.match("...")) {
        return 'operator';
      }
    }

    var ch = stream.peek();
    // Handle Comments
    if (ch === '#') {
        stream.skipToEnd();
        return 'comment';
    }

    // Lists

    if (ch==='[' || ch==='{' || ch==='(') {
      stream.next()
      if (stream.match(/^\s*$/, false)) {
        push_scope(state, ch);
      } else {
        push_scope(state, ch, stream.column()+1);
      }
      return 'bracket';
    }

    var scope=cur_scope(state);

    if (scope==='[' && ch===']' || scope==='{' && ch==='}' || scope==='(' && ch===')') {
      state.scopes.pop();
      state.leaving_expr=true;
      stream.next();
      return 'bracket';
    } else if (ch === ')' && scope == 'splice') {
      state.scopes.pop();
      return 'bracket'
    } else if (ch===')' || ch==='}' || ch===']') {
      stream.next()
      return 'error';
    }

    var match;
    if(!in_array(state) && (match=stream.match(openers, false))) {
      push_scope(state, match);
    }

    if(!in_array(state) && stream.match(closers, false)) {
      state.scopes.pop();
    }

    if (stream.match(/end\b/))
      if (scope === '[')
        return 'number';
      else if (in_array(state))
        return 'error';
      else
        return 'qualifier';

    if(stream.match("=>")) {
      return 'operator';
    }
    // Handle Number Literals
    if (stream.match(/^[0-9\.]/, false)) {
      var imMatcher = RegExp(/^im\b/);
      var floatLiteral = false;
      // Floats
      if (stream.match(/^\d*\.\d+([ef][\+\-]?\d+)?/i)) { floatLiteral = true; }
      if (stream.match(/^\d+\.\d*/)) { floatLiteral = true; }
      if (stream.match(/^\.\d+/)) { floatLiteral = true; }
      if (floatLiteral) {
          // Float literals may be "imaginary"
          stream.match(imMatcher);
          return 'number';
      }
      // Integers
      var intLiteral = false;
      // Hex
      if (stream.match(/^0x[0-9a-f]+/i)) { intLiteral = true; }
      // Binary
      if (stream.match(/^0b[01]+/i)) { intLiteral = true; }
      // Octal
      if (stream.match(/^0o[0-7]+/i)) { intLiteral = true; }
      // Decimal
      if (stream.match(/^[1-9]\d*(e[\+\-]?\d+)?/)) {
          // Decimal literals may be "imaginary"
          stream.eat(/J/i);
          // TODO - Can you have imaginary longs?
          intLiteral = true;
      }
      // Zero by itself with no other piece of number.
      if (stream.match(/^0(?![\dx])/i)) { intLiteral = true; }
      if (intLiteral) {
          // Integer literals may be "long"
          stream.match(imMatcher);
          return 'number';
      }
    }

    // Open strings
    if (stream.match('"""')) {
      push_scope(state, '"""');
      return 'string';
    } else if (stream.match('"')) {
      push_scope(state, 'string');
      return 'string';
    }

    // Handle operators and Delimiters
    if (stream.match(operators)) {
      return 'operator';
    }

    if (stream.match(delimiters)) {
      return null;
    }

    if (stream.match(keywords)) {
      state.last_keyword = stream.current()
      return 'keyword';
    }

    if (stream.match(builtins)) {
      return 'builtin';
    }

    if (stream.match(macro)) {
      return 'meta';
    }

    if (stream.match(identifiers)) {
      state.leaving_expr=true;
      if (last_keyword == 'function' || last_keyword == 'const' || last_keyword == 'using') {
        if (stream.match(',', false))
          state.last_keyword = last_keyword;
          return def_class(stream.current());
      } else if (stream.match('(', false) && stream.column() == 0) {
        return def_class(stream.current());
      } else {
        return variable_class(stream.current());
      }
    }
    // Handle non-detected items
    stream.next();
    return 'variable';
  }

  function tokenLexer(stream, state) {
    return state.tokenize(stream, state);
  }

  var external = {
    startState: function() {
      return {
        tokenize: tokenBase,
        scopes: [],
        leaving_expr: false
      };
    },

    token: function(stream, state) {
      var style = tokenLexer(stream, state);
      state.lastStyle = style;
      return style;
    },

    indent: function(state, textAfter) {
      var scope = cur_scope(state);
      if (scope == 'multiline-comment' ||
          scope == '"""' ||
          scope == 'string')
        return CodeMirror.Pass;
      var indent = 0;
      for (i = 0; i < state.scopes.length; i++) {
//         console.log(state.scopes[i].name, state.scopes[i].indent)
        if (state.scopes[i].indent >= 0) {
          indent = state.scopes[i].indent;
        } else {
          indent += indentUnit;
        }
      }
      if(textAfter.match(closers)) {
        indent -= indentUnit;
      }
      return indent;
    },

    lineComment: "#",
    fold: "indent",
    // Use this in CodeMirror 4
    //electricInput: /end$/,
    electricChars: "edlsifyh]})",

    "hint-pattern": /[@a-zA-Z0-9_]/
  };
  return external;
});

CodeMirror.defineMIME("text/julia", "julia2");
