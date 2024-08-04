import * as assert from "assert";
import * as vscode from "vscode";
// Assuming your extension's main file is named 'extension.ts'
import * as myExtension from "../extension";

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  test("MultiLine Comment Test - JavaScript", async () => {
    // Setup: Open a new text document, set its language to JavaScript, and insert some text
    const document = await vscode.workspace.openTextDocument({
      language: "javascript",
      content: 'console.log("Hello, world!");',
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    // Select the text to be commented
    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    // Execute the command to add a multi-line comment
    await vscode.commands.executeCommand("extension.makeMultiLineComment");

    // Verify the text has been commented correctly
    const expected = '/* console.log("Hello, world!"); */';
    const actual = document.getText();
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a multi-line comment correctly."
    );
  });

  // You can add more tests here, for example, a test for `makeSingleLineComment`
  // and tests for other languages or edge cases.
});
