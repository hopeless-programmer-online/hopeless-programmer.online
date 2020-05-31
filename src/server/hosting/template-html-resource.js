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
    }

    /**
     * @public
     * @type   {html.Element}
     */
    get Content() {
        const element = this._GetContent();

        if (element instanceof html.Element); else {
            throw new Error; // @todo
        }

        return element;
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
    _GetContent() {
        throw new Error; // @todo
    }
    /**
     * @protected
     * @override
     * @returns   {html.Root}
     */
    _toHtml() {
        return template(this.Title, this.Content).Html5;
    }
}


exports = module.exports = TemplateHtmlResource;


const html = require(`../html`);
const template = require(`./html-template`);
