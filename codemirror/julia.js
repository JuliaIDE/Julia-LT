// Support Unicode properly
// Support string prefixes

CodeMirror.defineMode("julia2", function(config, parserConfig) {
  var indentUnit = config.indentUnit || 2;

  // ––––––––––––––––––––––––
  // Hashing utils – this should be a seperate plugin
  function hash(str) {
    var res = 0,
        len = str.length;
    for (var i = 0; i < len; i++) {
      res = res * 31 + str.charCodeAt(i);
    }
    return Math.abs(res);
  }

  function hash_class(str) {
    h = hash(str)%20
    return 'hash-' + h
  }
  // ––––––––––––––––––––––––

  function whitespace_only(stream) {
    return stream.match(/^\s*$/, false)
  }

  // It's safe to call push_scope(name, index)
  function push_scope(state, name, indent) {
    state.scopes.push({'name': name, 'indent': indent});
  }

  function wordRegexp(words) {
    return new RegExp("^(" + words.join("|") + ")\\b");
  }

  var binary_operatos = /^(?:&|&&|\||\|\||==|!=|=|[<>]=?|\?|\:|[*\/\+-]=?)/
  var operators   = /^(?:\.?[|&^\\%*+\-<>!=\/]=?|\?|~|:|\$|<:|\.[<>]|<<=?|>>>?=?|\.[<>=]=|->?|\/\/|\bin\b|\.{3}|\.)/;
  var delimiters  = /^[;,()[\]{}]/;
  var identifiers = /^[_A-Za-z][_A-Za-z0-9!]*/;
  var symbol      = /^:[_A-Za-z][_A-Za-z0-9!]*/;

  var blockOpeners = ["begin", "function", "type", "immutable",
                      "let", "macro", "for", "while",
                      "quote", "if", "else", "elseif",
                      "try", "finally", "catch", "do",
                      "module"];

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
    return (ch=="[" || ch=="{");
  }
  function in_list(state) {
    var ch = cur_scope(state);
    return (ch=="[" || ch=="{" || ch == "(");
  }

  function cur_scope(state) {
    if(state.scopes.length==0) {
      return null;
    }
    return state.scopes[state.scopes.length - 1].name;
  }

  // Perform any last operations on scope etc.
  // before returning a class.
  function finalise(state, stream) {
    if (state.leaving_expr &&
        whitespace_only(stream)) {
      while (cur_scope(state) == 'binary_operator') {
        state.scopes.pop();
      }
    }
  }

  function finalise_leavingexpr(state, stream) {
    state.leaving_expr = true;
    finalise(state, stream);
  }

  // tokenizers
  function tokenBase(stream, state) {

    if (stream.eatSpace()) {
      return null;
    }

    var scope = cur_scope(state);
    var colon_operator = state.colon_operator;
    delete state.colon_operator;

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
      stream.next();
      finalise_leavingexpr(state, stream);
      return 'bracket';
    } else if (ch === ')' && scope == 'splice') {
      state.scopes.pop();
      finalise_leavingexpr(state, stream);
      return 'bracket'
    } else if (ch===')' || ch==='}' || ch===']') {
      stream.next()
      return 'error';
    }

    var match;
    if(!in_array(state) && (match=stream.match(openers, false))) {
      match = match[0]
      if (match == 'module') {
        push_scope(state, match, stream.column());
      } else {
        push_scope(state, match);
      }
    }

    if(!in_array(state) && stream.match(closers, false)) {
      state.scopes.pop();
    }

    if (stream.match(/end\b/))
      if (scope === '[') {
        return 'number';
      } else if (scope && scope.match(openers)) {
        finalise_leavingexpr(state, stream);
        return 'keyword fade';
      } else {
        return 'error';
      }

    if(stream.match("=>")) {
      return 'operator';
    }

    // Number Literals
    if (stream.match(/[+-]?([0-9]+\.|\.[0-9]+|[0-9]+)[0-9]*([ef][+-]?[0-9]+)?(im)?/i)) {
      finalise_leavingexpr(state, stream);
      return 'number';
    }

    // Open strings
    if (stream.match('"""')) {
      push_scope(state, '"""');
      return 'string';
    } else if (stream.match('"')) {
      push_scope(state, 'string');
      return 'string';
    }

    if (stream.match(delimiters)) {
      return null;
    }

    if (stream.match(builtins)) {
      return 'builtin';
    }

    if (stream.match(macro)) {
      return 'meta';
    }

    if (!colon_operator && stream.match(symbol)) {
      finalise_leavingexpr(state, stream);
      return 'symbol';
    }

    if (stream.match(identifiers)) {
      stream.match(":", false) && (state.colon_operator = true) // Used to avoid treating a colon operator as a keyword
//       finalise_leavingexpr(state, stream);
      if (last_keyword == 'function' ||
          last_keyword == 'const' ||
          last_keyword == 'using' ||
          last_keyword == 'module') {
        if (stream.match(',', false))
          state.last_keyword = last_keyword;
        return 'def ' + hash_class(stream.current());
      } else if (stream.match('(', false)) {
        return (stream.column() == 0 ? 'def ' : 'variable-2 ') + hash_class(stream.current());
      } else {
        return 'variable ' + hash_class(stream.current());
      }
    }

    if (stream.match(keywords)) {
      state.last_keyword = stream.current();
      finalise_leavingexpr(state, stream);
      return 'keyword';
    }

    // Handle operators and Delimiters
    if (leaving_expr && stream.match(binary_operatos)) {
      if (stream.match(/^\s*$/)) {
        push_scope(state, 'binary_operator');
      }
      return 'operator';
    }

    if (stream.match(operators)) {
      return 'operator';
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
