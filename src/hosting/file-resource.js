const path = require(`path`);
const Resource = require(`./resource`);


class FileResource extends Resource {
    /**
     * @param  {Object} object
     * @param  {string} object.Path
     * @throws {Error}
     */
    constructor({ Path }) {
        if (typeof Path !== `string`) {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {string}
         */
        this.__path = Path;
    }

    /**
     * @public
     * @type   {string}
     */
    get Path() {
        return this.__path;
    }

    /**
     * @protected
     * @override
     * @type      {{ [key: string] : string }}
     */
    _GetHeaders() {
        return {
            "Content-Type" : mime_types.contentType(path.extname(this.Path)),
        };
    }
    /**
     * @protected
     * @override
     * @returns   {Buffer}
     */
    _GetData() {
        // @todo: replace with Promise?
        return fs.readFileSync(this.Path);
    }
}


exports = module.exports = FileResource;


const fs = require(`fs`);
const mime_types = require(`mime-types`);
