import XCTest
import SwiftTreeSitter
import TreeSitterExtempore

final class TreeSitterExtemporeTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_extempore())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Extempore grammar")
    }
}
