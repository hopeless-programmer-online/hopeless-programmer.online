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
     * @returns   {stream.Readable}
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

                resolve(new stream.Readable({
                    read : function () {
                        this.push(result.css);
                        this.push(null);
                    },
                }));
            });
        });
    }
}


exports = module.exports = SassResource;


const fs = require(`fs`);
const sass = require(`sass`);
const mime_types = require(`mime-types`);
const stream = require(`stream`);
