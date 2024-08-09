import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "easycomments.makeMultiLineComment",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No editor is active");
        return;
      }
      const languageId = editor.document.languageId;
      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);

      if (!selectedText) {
        vscode.window.showInformationMessage("No text selected");
        return;
      }

      interface CommentSyntax {
        start: string;
        end?: string;
        type: "block" | "line";
      }

      const commentSyntax: Record<string, CommentSyntax> = {
        javascript: { start: "/* ", end: " */", type: "block" },
        typescript: { start: "/* ", end: " */", type: "block" },
        jsx: { start: "{/* ", end: " */}", type: "block" },
        java: { start: "/* ", end: " */", type: "block" },
        python: { start: "# ", type: "line" },
        c: { start: "/* ", end: " */", type: "block" },
        cpp: { start: "/* ", end: " */", type: "block" },
        csharp: { start: "/* ", end: " */", type: "block" },
        php: { start: "/* ", end: " */", type: "block" },
        ruby: { start: "=begin\n", end: "\n=end", type: "block" },
        swift: { start: "/* ", end: " */", type: "block" },
        go: { start: "/* ", end: " */", type: "block" },
        r: { start: "# ", type: "line" },
        perl: { start: "=pod\n", end: "\n=cut", type: "block" },
        shell: { start: "# ", type: "line" },
        kotlin: { start: "/* ", end: " */", type: "block" },
        scala: { start: "/* ", end: " */", type: "block" },
        haskell: { start: "{- ", end: " -}", type: "block" },
        elixir: { start: "# ", type: "line" },
        erlang: { start: "% ", type: "line" },
        lua: { start: "--[[ ", end: " ]]", type: "block" },
        rust: { start: "/* ", end: " */", type: "block" },
        dart: { start: "/* ", end: " */", type: "block" },
        groovy: { start: "/* ", end: " */", type: "block" },
        matlab: { start: "%{ ", end: " %}", type: "block" },
        vba: { start: "' ", type: "line" },
        sql: { start: "-- ", type: "line" },
        html: { start: "<!-- ", end: " -->", type: "block" },
        css: { start: "/* ", end: " */", type: "block" },
        xml: { start: "<!-- ", end: " -->", type: "block" },
        racket: { start: "#| ", end: " |#", type: "block" },
        scheme: { start: "#| ", end: " |#", type: "block" },
      };
      const { start, end = "" } = commentSyntax[languageId] || {
        start: "// ",
        type: "line",
      };

      const commentedText = end
        ? `${start}${selectedText}${end}`
        : `${start}${selectedText}`;
      editor.edit((editBuilder) => {
        editBuilder.replace(selection, commentedText);
      });
    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "easycomments.makeSingleLineComment",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No editor is active");
        return;
      }
      const languageId = editor.document.languageId;
      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);

      if (!selectedText) {
        vscode.window.showInformationMessage("No text selected");
        return;
      }

      interface CommentSyntax {
        start: string;
        end?: string;
        type: "block" | "line";
      }
      const commentSyntax: Record<string, CommentSyntax> = {
        javascript: { start: "// ", type: "line" },
        typescript: { start: "// ", type: "line" },
        jsx: { start: "// ", type: "line" },
        java: { start: "// ", type: "line" },
        python: { start: "# ", type: "line" },
        c: { start: "// ", type: "line" },
        cpp: { start: "// ", type: "line" },
        csharp: { start: "// ", type: "line" },
        php: { start: "// ", type: "line" },
        ruby: { start: "# ", type: "line" },
        swift: { start: "// ", type: "line" },
        go: { start: "// ", type: "line" },
        r: { start: "# ", type: "line" },
        perl: { start: "# ", type: "line" },
        shell: { start: "# ", type: "line" },
        kotlin: { start: "// ", type: "line" },
        scala: { start: "// ", type: "line" },
        haskell: { start: "-- ", type: "line" },
        elixir: { start: "# ", type: "line" },
        erlang: { start: "% ", type: "line" },
        lua: { start: "-- ", type: "line" },
        rust: { start: "// ", type: "line" },
        dart: { start: "// ", type: "line" },
        groovy: { start: "// ", type: "line" },
        matlab: { start: "% ", type: "line" },
        vba: { start: "' ", type: "line" },
        sql: { start: "-- ", type: "line" },
        html: { start: "<!-- ", end: " -->", type: "block" }, // HTML does not support single-line comments, kept as block
        css: { start: "/* ", end: " */", type: "block" }, // CSS does not support single-line comments, kept as block
        xml: { start: "<!-- ", end: " -->", type: "block" }, // XML does not support single-line comments, kept as block
        racket: { start: "; ", type: "line" },
        scheme: { start: "; ", type: "line" },
      };

      const { start } = commentSyntax[languageId] || {
        start: "// ",
        type: "line",
      };

      const commentedText = selectedText
        .split("\n")
        .map((line) => `${start}${line}`)
        .join("\n");

      editor.edit((editBuilder) => {
        editBuilder.replace(selection, commentedText);
      });
    }
  );

  context.subscriptions.push(disposable, disposable2);
}

export function deactivate() {}
