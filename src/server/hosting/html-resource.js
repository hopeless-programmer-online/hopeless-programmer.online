const Resource = require(`./resource`);


/**
 * @abstract
 */
class HtmlResource extends Resource {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === HtmlResource) {
            throw new Error(); // @todo
        }

        super();

        if (this.toHtml !== HtmlResource.prototype.toHtml) {
            throw new Error; // @todo
        }
        if (this._toHtml === HtmlResource.prototype._toHtml) {
            throw new Error; // @todo
        }
        if (this._GetContent instanceof AsyncFunction); else {
            throw new Error(`${new.target.name} does not override the HtmlResource.prototype._toHtml method as async.`);
        }
    }

    /**
     * @protected
     * @override
     * @type      {{ [key: string] : string }}
     */
    _GetHeaders() {
        return {
            "Content-Type" : mime_types.contentType(`.html`),
        };
    }
    /**
     * @protected
     * @async
     * @override
     * @returns   {stream.Readable}
     */
    async _GetData() {
        const string = (await this.toHtml()).toString();
        const stream = new Stream;

        stream.End(string);

        return stream;
    }
    /**
     * @protected
     * @abstract
     * @returns   {html.Root}
     */
    async _toHtml() {
        throw new Error; // @todo
    }

    /**
     * @public
     * @returns {html.Root}
     * @throws  {Error}
     */
    async toHtml() {
        const promise = this._toHtml();

        if (promise instanceof Promise); else {
            throw new Error; // @todo
        }

        const element = await promise;

        if (element instanceof html.Root); else {
            throw new Error; // @todo
        }

        return element;
    }
}


exports = module.exports = HtmlResource;


const mime_types = require(`mime-types`);
const html = require(`../html`);
const Stream = require(`./stream`);


const AsyncFunction = (async () => {}).constructor;
