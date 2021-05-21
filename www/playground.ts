namespace playground {

    let view = new ui.Panel("playground")
    view.element.setAttribute("fullHeight", "true")

    let toolbar = new ui.Panel("toolbar", view)
    new ui.Title("The Dune Playground", toolbar)
    toolbar.appendChild(new ui.Button("Run", "highlighted", b => run(b)))
    toolbar.appendChild(new ui.Button("Format", "highlighted", () => editor.format()))
    toolbar.appendChild(new ui.Button("Share", "highlighted", () => share(txtURL)))
    let examplesSel = new ui.Select()
    examplesSel.options = [
        { label: "Hello, playground", value: "h2gdluXJ21SSLtIGeUW2t6QFy9ix7zMVXUtzJAzhaGI" },
        { label: "Classes", value: "gCLNhk7UX2HvhqrOASNksB65nQl8prZrkKGgYSgyBs" },
        { label: "Closure", value: "hfTX4dfbC5W3of4rOqMxyeX9zlxW0jpXXvoniYj6bsE" },
        { label: "CSV", value: "ReBqb8SYGc7suaSivx9K48b7v2aKOgNrGWfuHFuYI" },
        { label: "SQL builder", value: "j6xG64dgx2PsneV0MwcrCRWXml6EQnASGmYFoiqirUY" },
        { label: "UTF", value: "NDpq8D0MGv7fBeLDgwGnop2lMwGFsOTLMhsG9D4b8" },
        { label: "XML", value: "0ZvuHfbc4ENFSeoMVTXWw55xBC1BqSdcooG1jTG0g" },
        { label: "Zip", value: "GBgp7L8d3qLDTRy2zUoe1fQlh3Qv9Lx270Q7BgM" }
    ]
    examplesSel.addSignalListener("input", showExample)
    toolbar.appendChild(examplesSel)
    let txtURL = new ui.TextInput()
    toolbar.appendChild(txtURL)
    toolbar.appendChild(new ui.Button("About", "highlighted right", toggleAbout))

    let body = new ui.Panel("body", view)
    let editorPanel = new ui.Panel("editorPanel", body)
    let editor = new ui.CodeEditor(editorPanel, onLoad)
    let consolePanel = new ui.Panel("consolePanel", body)

    ui.setView(view)

    function showExample(s: ui.Signal) {
        let hash = s.data.value
        editorPanel.wait = true
        hideAbout()

        S.get("/code?share=" + hash)
            .then(data => {
                S.pushURLValue("share", hash)
                editor.value = data.code
            })
            .finally(() => {
                editorPanel.wait = false
            })
    }

    function onLoad(editor: ui.CodeEditor) {
        let url = "/code"
        let arg = S.getURLSTring("share")
        if (arg) {
            url += "?share=" + arg
        }

        editorPanel.wait = true

        S.get(url)
            .then(data => {
                editor.addLib(data.native)
                editor.setModel(data.code, "typescript")
            })
            .finally(() => {
                editorPanel.wait = false
            })
    }

    async function run(b: ui.Button) {
        b.wait = true
        hideAbout()

        try {
            let result = await S.post("/eval", { code: editor.value })
            consolePanel.textContent = result
        } catch (error) {
            consolePanel.textContent = error
        } finally {
            b.wait = false
        }
    }

    async function share(urlBox: ui.TextInput) {
        let result = await S.post("/share", { code: editor.value })
        urlBox.value = result
        urlBox.style.display = "block"
        urlBox.input.select()
        urlBox.element.focus()
    }

    function hideAbout() {
        let aboutPanel = ui.getById("about")
        if (aboutPanel) {
            aboutPanel.remove()
        }
    }

    function toggleAbout() {
        let aboutPanel = ui.getById("about")
        if (aboutPanel) {
            aboutPanel.remove()
            return
        }

        aboutPanel = new ui.Panel("aboutPanel")
        aboutPanel.id = "about"
        let content = new ui.Panel("content", aboutPanel)
        content.element.innerHTML = `<h1>About the Playground</h1>
        The Dune Playground is a web service that receives a Dune program, compiles
        and runs the program inside a sanboxed environment with limited resources.

        There are limitations to the programs that can be run in the playground: 
        Native functions that require special permissions will throw an "unauthorized" exception.

        There are also limits on execution time and on CPU and memory usage.

        Any requests for content removal should be directed to 
        <a href="mailto:security@dunelang.com">security@dunelang.com</a>. Please include the URL and the reason for the request.
        `

        editorPanel.appendChild(aboutPanel)
    }


}

