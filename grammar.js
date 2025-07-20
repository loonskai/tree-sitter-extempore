/**
 * @file Extempore grammar for tree-sitter
 * @author Siarhei Lunski <loonskai@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "extempore",

  extras: ($) => [
    /\s+/, // whitespace
    $.comment,
  ],

  rules: {
    // Root rule - matches the entire source file
    source_file: ($) => repeat($._form),

    // Top-level forms
    _form: ($) => choice($.list, $.atom, $.number, $.string, $.symbol),

    // Comments - semicolon to end of line
    comment: ($) => token(seq(";", /.*/)),

    // Lists (S-expressions) - the core structure
    list: ($) => seq("(", repeat($._form), ")"),

    // Atoms - identifiers, keywords, operators, types
    atom: ($) => choice($.keyword, $.type, $.identifier),

    // Keywords from your TextMate grammar
    keyword: ($) =>
      choice(
        "alloc",
        "zalloc",
        "halloc",
        "salloc",
        "letz",
        "beginz",
        "vector",
        "vector_ref",
        "tuple",
        "tuple_ref",
        "array",
        "array_ref",
        "begin",
        "cond",
        "else",
        "or",
        "and",
        "void",
        "lambda",
        "define",
        "if",
        "pref-ptr",
        "aref-ptr",
        "tref-ptr",
        "pfill",
        "tfill",
        "aref",
        "tref",
        "pref",
        "aset",
        "tset",
        "pset",
        "set",
        "while",
        "dotimes",
        "let",
        "bind-func",
        "bind-lib",
        "bind-val",
        "bind-type",
        // Add common operators that appear in your code
        "*",
        "+",
        "-",
        "/",
        "=",
        "<",
        ">",
        "<=",
        ">=",
        // Add other functions that might be keywords
        "print",
        "printf",
        "i64tod",
      ),

    // Types - starting with colon (like c:double, d:i64)
    type: ($) => /:[a-zA-Z][a-zA-Z0-9_]*/,

    // Regular identifiers - more permissive to handle various naming
    identifier: ($) => /[a-zA-Z_][a-zA-Z0-9\-_]*/,

    // Numbers - integer or decimal, including scientific notation
    number: ($) => /[0-9]+(\.[0-9]*)?([eE][+-]?[0-9]+)?/,

    // Strings with escape sequences
    string: ($) =>
      seq(
        '"',
        repeat(
          choice(
            /\\./, // escape sequence
            /[^"\\]/, // any character except quote or backslash
          ),
        ),
        '"',
      ),

    // Symbols - quoted with single quote
    symbol: ($) => /'[^\s()]*/,
  },
});
