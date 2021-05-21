"use strict";
var playground;
(function (playground) {
    let view = new ui.Panel("playground");
    view.element.setAttribute("fullHeight", "true");
    let toolbar = new ui.Panel("toolbar", view);
    new ui.Title("The Dune Playground", toolbar);
    toolbar.appendChild(new ui.Button("Run", "highlighted", b => run(b)));
    toolbar.appendChild(new ui.Button("Format", "highlighted", () => editor.format()));
    toolbar.appendChild(new ui.Button("Share", "highlighted", () => share(txtURL)));
    let examplesSel = new ui.Select();
    examplesSel.options = [
        { label: "Hello, playground", value: "h2gdluXJ21SSLtIGeUW2t6QFy9ix7zMVXUtzJAzhaGI" },
        { label: "Classes", value: "gCLNhk7UX2HvhqrOASNksB65nQl8prZrkKGgYSgyBs" },
        { label: "Closure", value: "hfTX4dfbC5W3of4rOqMxyeX9zlxW0jpXXvoniYj6bsE" },
        { label: "CSV", value: "ReBqb8SYGc7suaSivx9K48b7v2aKOgNrGWfuHFuYI" },
        { label: "SQL builder", value: "j6xG64dgx2PsneV0MwcrCRWXml6EQnASGmYFoiqirUY" },
        { label: "UTF", value: "NDpq8D0MGv7fBeLDgwGnop2lMwGFsOTLMhsG9D4b8" },
        { label: "XML", value: "0ZvuHfbc4ENFSeoMVTXWw55xBC1BqSdcooG1jTG0g" },
        { label: "Zip", value: "GBgp7L8d3qLDTRy2zUoe1fQlh3Qv9Lx270Q7BgM" }
    ];
    examplesSel.addSignalListener("input", showExample);
    toolbar.appendChild(examplesSel);
    let txtURL = new ui.TextInput();
    toolbar.appendChild(txtURL);
    let body = new ui.Panel("body", view);
    let editorPanel = new ui.Panel("editorPanel", body);
    let editor = new ui.CodeEditor(editorPanel, onLoad);
    let consolePanel = new ui.Panel("consolePanel", body);
    ui.setView(view);
    function showExample(s) {
        let hash = s.data.value;
        S.get("/code?share=" + hash).then(data => {
            S.pushURLValue("share", hash);
            editor.value = data.code;
        });
    }
    function onLoad(editor) {
        let url = "/code";
        let arg = S.getURLSTring("share");
        if (arg) {
            url += "?share=" + arg;
        }
        S.get(url).then(data => {
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
    async function share(urlBox) {
        let result = await S.post("/share", { code: editor.value });
        urlBox.value = result;
        urlBox.style.display = "block";
        urlBox.input.select();
        urlBox.element.focus();
    }
})(playground || (playground = {}));
//# sourceMappingURL=playground.js.map