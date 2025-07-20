package tree_sitter_extempore_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_extempore "github.com/loonskai/tree-sitter-extempore/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_extempore.Language())
	if language == nil {
		t.Errorf("Error loading Extempore grammar")
	}
}
