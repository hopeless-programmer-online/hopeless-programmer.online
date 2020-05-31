const fs = require(`fs`);
const path = require(`path`);
const http = require(`http`);
const http_status = require(`http-status`);
const hosting = require(`hopeless-programmer.online/hosting`);
const hostModule = `hopeless-programmer.online/host`;
const hostPath = require.resolve(hostModule).match(/(.*)\.js$/)[1];


const { NotFoundError } = hosting;


const cache = {};

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


const server = http.createServer((req, res) => {
    cleanCache();

    try {
        const host = require(hostModule);

        try {
            // handling 405
            if (req.method !== `GET`) {
                console.log(`405 : (${req.method}) ${req.url}`);

                // handling as 405 with proper representation
                try {
                    const resource = host.Resolve(`405`);

                    res.writeHead(http_status.METHOD_NOT_ALLOWED, resource.Headers);
                    res.end(resource.Data);
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
                res.end(resource.Data);
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
                    res.end(resource.Data);
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
            res.end(resource.Data);
        }
    }
    // handling as 500 without proper representation
    catch (error) {
        console.log(error);

        res.writeHead(http_status.INTERNAL_SERVER_ERROR);
        res.end();
    }
});

server.listen(3000);
