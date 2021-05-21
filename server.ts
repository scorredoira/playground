/**
 * ------------------------------------------------------------------
 *  DUNE playground
 * ------------------------------------------------------------------
 */

let fs = io.newRootedFS("www", os.fileSystem)
let router = initRoutes()
let s = http.newServer()

let isRemote = os.hostName() == "dune"
if (isRemote) {
    let tlsConf = tls.newConfig()
    tlsConf.certManager = autocert.newCertManager("certs", ["dunelang.com"])
    s.tlsConfig = tlsConf
    s.addressTLS = ":https"
} else {
    s.address = ":8080"
}

s.handler = serveHTTP
s.start()

function serveHTTP(w: http.ResponseWriter, r: http.Request) {
    let match = router.match(r.url.path)
    if (!match) {
        w.writeError(http.NOT_FOUND)
        return
    }
    match.route.handler(w, r)
}

function initRoutes() {
    let router = routing.newRouter()

    router.add("/", {
        handler: (w: http.ResponseWriter, r: http.Request) => {
            w.writeFile("index.html", fs)
        }
    })

    router.add("/assets/*", {
        handler: (w: http.ResponseWriter, r: http.Request) => {
            let name = r.url.path.trimPrefix("/assets")
            w.writeFile(name, fs)
        }
    })

    router.add("/code", {
        handler: (w: http.ResponseWriter, r: http.Request) => {
            let code = `fmt.println("Hello World!")`

            w.writeJSON({
                code: code,
                native: runtime.typeDefs()
            })
        }
    })

    router.add("/eval", {
        handler: (w: http.ResponseWriter, r: http.Request) => {
            let src = r.values().code
            if (!src) {
                w.writeError(http.BAD_REQUEST)
                return
            }

            try {
                let start = time.now()
                let p = bytecode.compileStr(src)

                let vm = runtime.newVM(p)
                vm.maxAllocations = 1_000_000_000
                vm.maxSteps = 10_000_000
                vm.maxFrames = 10

                let buf = io.newBuffer()
                vm.stdout = buf

                let result = vm.run()

                if (buf.length > 0) {
                    result += buf.string()
                }
                let elapsed = time.now().sub(start).nanoseconds / 1_000_000_000
                w.write(fmt.sprintf("%v\n\nin %.5f sec.\n\n", result, elapsed))
            } catch (error) {
                let result = fmt.sprintf("%v\n\n", error.message)
                w.write(result)
            }
        }
    })

    return router
}
