import * as assert from "assert";
import * as vscode from "vscode";
import * as myExtension from "../../extension"; // Adjust the path as needed

suite("Extension Test Suite", () => {
  vscode.window.showInformationMessage("Start all tests.");

  // JavaScript Tests
  test("MultiLine Comment Test - JavaScript", async () => {
    console.log("Starting MultiLine Comment Test - JavaScript");
    const document = await vscode.workspace.openTextDocument({
      language: "javascript",
      content: 'console.log("Hello, world!");',
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    console.log("Executing command: extension.makeMultiLineComment");
    await vscode.commands.executeCommand("extension.makeMultiLineComment");

    const expected = '/* console.log("Hello, world!"); */';
    const actual = document.getText();
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a multi-line comment correctly."
    );
  });

  test("SingleLine Comment Test - JavaScript", async () => {
    console.log("Starting SingleLine Comment Test - JavaScript");
    const document = await vscode.workspace.openTextDocument({
      language: "javascript",
      content: 'console.log("Hello, world!");',
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    console.log("Executing command: extension.makeSingleLineComment");
    await vscode.commands.executeCommand("extension.makeSingleLineComment");

    const expected = '// console.log("Hello, world!");';
    const actual = document.getText();
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a single-line comment correctly."
    );
  });

  // Python Tests
  test("MultiLine Comment Test - Python", async () => {
    console.log("Starting MultiLine Comment Test - Python");
    const document = await vscode.workspace.openTextDocument({
      language: "python",
      content: 'print("Hello, world!")',
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    console.log("Executing command: extension.makeMultiLineComment");
    await vscode.commands.executeCommand("extension.makeMultiLineComment");

    const expected = '"""print("Hello, world!")"""';
    const actual = document.getText();
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a multi-line comment correctly."
    );
  });

  test("SingleLine Comment Test - Python", async () => {
    console.log("Starting SingleLine Comment Test - Python");
    const document = await vscode.workspace.openTextDocument({
      language: "python",
      content: 'print("Hello, world!")',
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    console.log("Executing command: extension.makeSingleLineComment");
    await vscode.commands.executeCommand("extension.makeSingleLineComment");

    const expected = '# print("Hello, world!")';
    const actual = document.getText();
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a single-line comment correctly."
    );
  });

  // TypeScript Tests
  test("MultiLine Comment Test - TypeScript", async () => {
    console.log("Starting MultiLine Comment Test - TypeScript");
    const document = await vscode.workspace.openTextDocument({
      language: "typescript",
      content: 'console.log("Hello, world!");',
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    console.log("Executing command: extension.makeMultiLineComment");
    await vscode.commands.executeCommand("extension.makeMultiLineComment");

    const expected = '/* console.log("Hello, world!"); */';
    const actual = document.getText();
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a multi-line comment correctly."
    );
  });

  test("SingleLine Comment Test - TypeScript", async () => {
    console.log("Starting SingleLine Comment Test - TypeScript");
    const document = await vscode.workspace.openTextDocument({
      language: "typescript",
      content: 'console.log("Hello, world!");',
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    console.log("Executing command: extension.makeSingleLineComment");
    await vscode.commands.executeCommand("extension.makeSingleLineComment");

    const expected = '// console.log("Hello, world!");';
    const actual = document.getText();
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a single-line comment correctly."
    );
  });

  // HTML Tests
  test("MultiLine Comment Test - HTML", async () => {
    console.log("Starting MultiLine Comment Test - HTML");
    const document = await vscode.workspace.openTextDocument({
      language: "html",
      content: "<p>Hello, world!</p>",
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    console.log("Executing command: extension.makeMultiLineComment");
    await vscode.commands.executeCommand("extension.makeMultiLineComment");

    const expected = "<!-- <p>Hello, world!</p> -->";
    const actual = document.getText();
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a multi-line comment correctly."
    );
  });

  test("SingleLine Comment Test - HTML", async () => {
    console.log("Starting SingleLine Comment Test - HTML");
    const document = await vscode.workspace.openTextDocument({
      language: "html",
      content: "<p>Hello, world!</p>",
    });
    await vscode.window.showTextDocument(document);
    const editor = vscode.window.activeTextEditor!;

    const start = new vscode.Position(0, 0);
    const end = new vscode.Position(0, document.getText().length);
    editor.selection = new vscode.Selection(start, end);

    console.log("Executing command: extension.makeSingleLineComment");
    await vscode.commands.executeCommand("extension.makeSingleLineComment");

    const expected = "<!-- <p>Hello, world!</p> -->";
    const actual = document.getText();
    console.log(`Expected: ${expected}`);
    console.log(`Actual: ${actual}`);
    assert.strictEqual(
      actual,
      expected,
      "The text was not commented as a single-line comment correctly."
    );
  });

  // Add more tests here for other languages or edge cases if needed
});
