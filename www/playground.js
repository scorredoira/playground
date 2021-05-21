"use strict";
var playground;
(function (playground) {
    let view = new ui.Panel("playground");
    view.element.setAttribute("fullHeight", "true");
    let toolbar = new ui.Panel("toolbar", view);
    new ui.Title("The Dune Playground", toolbar);
    toolbar.appendChild(new ui.Button("Run", "highlighted", b => run(b)));
    toolbar.appendChild(new ui.Button("Format", "highlighted", () => editor.format()));
    let body = new ui.Panel("body", view);
    let editorPanel = new ui.Panel("editorPanel", body);
    let editor = new ui.CodeEditor(editorPanel, onLoad);
    let consolePanel = new ui.Panel("consolePanel", body);
    ui.setView(view);
    function onLoad(editor) {
        S.get("/code").then(data => {
            editor.addLib(data.native);
            editor.setModel(data.code, "typescript");
        });
    }
    async function run(b) {
        b.wait = true;
        try {
            let result = await S.post("/eval", { code: editor.value });
            consolePanel.textContent = result;
        }
        catch (error) {
            consolePanel.textContent = error;
        }
        finally {
            b.wait = false;
        }
    }
})(playground || (playground = {}));
//# sourceMappingURL=playground.js.map