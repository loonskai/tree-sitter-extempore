/**
 * @file Extempore grammar for tree-sitter
 * @author Siarhei Lunski <loonskai@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "extempore",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
