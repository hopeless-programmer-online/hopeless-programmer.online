const HtmlResource = require(`./html-resource`);


class TemplateHtmlResource extends HtmlResource {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === TemplateHtmlResource) {
            throw new Error(); // @todo
        }

        super();

        // @todo: assert get Title
        if (this._GetTitle === TemplateHtmlResource.prototype._GetTitle) {
            throw new Error; // @todo
        }
        // @todo: assert get Content
        if (this._GetContent === TemplateHtmlResource.prototype._GetContent) {
            throw new Error; // @todo
        }
        if (this._GetContent instanceof AsyncFunction); else {
            throw new Error(`${new.target.name} does not override the TemplateHtmlResource.prototype._toHtml method as async.`);
        }
    }

    /**
     * @public
     * @async
     * @type   {Promise<html.Element>}
     */
    get Content() {
        return this.__GetContent();
    }
    /**
     * @public
     * @type   {string}
     */
    get Title() {
        const title = this._GetTitle();

        if (typeof title !== `string`) {
            throw new Error; // @todo
        }

        return title;
    }

    /**
     * @protected
     * @abstract
     * @returns   {html.Element}
     */
    async __GetContent() {
        const promise = this._GetContent();

        if (promise instanceof Promise); else {
            throw new Error; // @todo
        }

        const element = await promise;

        if (element instanceof html.Element); else {
            throw new Error; // @todo
        }

        return element;
    }

    /**
     * @protected
     * @abstract
     * @returns   {string}
     */
    _GetTitle() {
        throw new Error; // @todo
    }
    /**
     * @protected
     * @abstract
     * @returns   {html.Element}
     */
    async _GetContent() {
        throw new Error; // @todo
    }
    /**
     * @protected
     * @override
     * @returns   {html.Root}
     */
    async _toHtml() {
        return template(this.Title, await this.Content).Html5;
    }
}


exports = module.exports = TemplateHtmlResource;


const html = require(`../html`);
const template = require(`./html-template`);


const AsyncFunction = (async () => {}).constructor;
