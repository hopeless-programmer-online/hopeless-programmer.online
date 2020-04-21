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
     * @override
     * @returns   {Buffer}
     */
    _GetData() {
        // @todo: replace with Promise?
        const result = sass.renderSync({
            data        : fs.readFileSync(this.Path, `utf-8`),
            outputStyle : `compressed`,
        });

        return result.css;
    }
}


exports = module.exports = SassResource;


const fs = require(`fs`);
const sass = require(`sass`);
const mime_types = require(`mime-types`);
