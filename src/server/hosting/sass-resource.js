const FileResource = require(`./file-resource`);


class SassResource extends FileResource {
    /**
     * @protected
     * @override
     * @type      {{ [key: string] : string }}
     */
    _GetHeaders() {
        return {
            "Content-Type" : mime_types.contentType(`.css`),
        };
    }
    /**
     * @protected
     * @async
     * @override
     * @returns   {Stream}
     */
    async _GetData() {
        return new Promise((resolve, reject) => {
            const options = {
                data        : fs.readFileSync(this.Path, `utf-8`),
                outputStyle : `compressed`,
            };

            sass.render(options, (error, result) => {
                if (error) {
                    return reject(error);
                }

                const stream = new Stream;

                stream.End(result.css);

                resolve(stream);
            });
        });
    }
}


exports = module.exports = SassResource;


const fs = require(`fs`);
const sass = require(`sass`);
const mime_types = require(`mime-types`);
const Stream = require(`./stream`);
