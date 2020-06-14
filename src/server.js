const json5 = require(`json5`);
const ts = require(`typescript`);
const fs = require(`fs`);
const path = require(`path`);
const http = require(`http`);
const http_status = require(`http-status`);
const hosting = require(`./server/hosting`);
const hostModule = `./host`;
const hostPath = require.resolve(hostModule).match(/(.*)\.js$/)[1];


const { NotFoundError } = hosting;


const { compilerOptions } = json5.parse(fs.readFileSync(path.join(__dirname, `../tsconfig.json`), `utf-8`));
const cache = {};
const dates = new Map;
/** @type {hosting.Host} */
let host = require(hostModule);


function cleanCache() {
    const toClean = new Set;

    // remove host from cache
    for (const id in require.cache) {
        if (id === hostPath + `.js` || id.includes(hostPath + path.sep)) {
            let refresh = false;

            if (id in cache) {
                const date = new Date(fs.lstatSync(id).mtime);

                if (cache[id] < date) {
                    cache[id] = date;

                    refresh = true;
                }
            }
            else {
                cache[id] = new Date(fs.lstatSync(id).mtime);

                refresh = true;
            }

            if (refresh) {
                let module = require.cache[id];

                while (module) {
                    toClean.add(module.id);

                    module = module.parent;
                }
            }
        }
    }

    for (const id of toClean) {
        delete require.cache[id];
    }
}
function transpile(src, lib) {
    const source = fs.readFileSync(src, `utf-8`);
    const output = ts.transpileModule(source, {
        compilerOptions : {
            ...compilerOptions,
            outDir: undefined,
            rootDir: undefined,
        },
    });

    fs.writeFileSync(lib, output.outputText, `utf-8`);
}
function watch(directorySubPath) {
    const srcPath = path.join(__dirname, `..`, `src`, directorySubPath);
    const libPath = path.join(__dirname, `..`, `lib`, directorySubPath);

    for (const child of fs.readdirSync(srcPath)) {
        const subPath = path.join(directorySubPath, child);
        const fullSrcPath = path.join(srcPath, child);
        const fullLibPath = path.join(libPath, child);
        const stat = fs.statSync(fullSrcPath);

        if (stat.isDirectory()) {
            watch(subPath);
        }
        if (stat.isFile()) {
            if (path.extname(fullSrcPath) !== `.js`) {
                return;
            }

            fs.watch(fullSrcPath).on(`change`, () => {
                setTimeout(() => {
                    const stat = fs.statSync(fullSrcPath);

                    // console.log(dates, stat.mtimeMs);

                    // skip if file already transpiled
                    if (dates.has(fullSrcPath) && dates.get(fullSrcPath) === stat.mtimeMs) {
                        console.log(`skip: `, fullSrcPath, fullLibPath);
                        return;
                    }

                    transpile(fullSrcPath, fullLibPath);
                    cleanCache();
                    host = require(hostModule);
                    console.log(`transpile: `, fullSrcPath, fullLibPath);

                    dates.set(fullSrcPath, stat.mtimeMs);
                }, 10); // delay for small amount of time to prevent multiple translations
            });
        }
    }
}

watch(`host`);


const server = http.createServer(async (req, res) => {
    try {
        try {
            // handling 405
            if (req.method !== `GET`) {
                console.log(`405 : (${req.method}) ${req.url}`);

                // handling as 405 with proper representation
                try {
                    const resource = host.Resolve(`405`);

                    res.writeHead(http_status.METHOD_NOT_ALLOWED, resource.Headers);

                    const data = await resource.Data;

                    await data.Pipe(res);
                }
                // handling as 405 without proper representation
                catch(error) {
                    res.writeHead(http_status.METHOD_NOT_ALLOWED);
                    res.end();
                }

                return;
            }

            try {
                const resource = host.Resolve(req.url);

                res.writeHead(http_status.OK, resource.Headers);

                const data = await resource.Data;

                await data.Pipe(res);
            }
            // handling 404
            catch(error) {
                if (error instanceof NotFoundError); else {
                    throw error;
                }

                console.log(`404 : ${req.url}`);

                // handling 404 with proper representation
                try {
                    const resource = host.Resolve(`/404`);

                    res.writeHead(http_status.NOT_FOUND, resource.Headers);

                    const data = await resource.Data;

                    await data.Pipe(res);
                }
                // handling 404 without proper representation
                catch(error) {
                    if (error instanceof NotFoundError); else {
                        throw error;
                    }

                    res.writeHead(http_status.NOT_FOUND);
                    res.end();
                }
            }
        }
        // handling as 500 with proper representation
        catch(error) {
            console.log(error);

            const resource = host.Resolve(`/500`);

            res.writeHead(http_status.INTERNAL_SERVER_ERROR, resource.Headers);

            const data = await resource.Data;

            await data.Pipe(res);
        }
    }
    // handling as 500 without proper representation
    catch (error) {
        console.log(error);

        res.writeHead(http_status.INTERNAL_SERVER_ERROR);
        res.end();
    }
});

// integration with heroku
const port = process.env.PORT || 3000;

server.listen(port);
