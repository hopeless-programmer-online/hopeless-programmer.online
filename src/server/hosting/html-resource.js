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
        const string = this.toHtml().toString();

        return new stream.Readable({
            read : function () {
                this.push(string);
                this.push(null);
            },
        });
    }
    /**
     * @protected
     * @abstract
     * @returns   {html.Root}
     */
    _toHtml() {
        throw new Error; // @todo
    }

    /**
     * @public
     * @returns {html.Root}
     * @throws  {Error}
     */
    toHtml() {
        const element = this._toHtml();

        if (element instanceof html.Root); else {
            throw new Error; // @todo
        }

        return element;
    }
}


exports = module.exports = HtmlResource;


const mime_types = require(`mime-types`);
const html = require(`../html`);
const stream = require(`stream`);
