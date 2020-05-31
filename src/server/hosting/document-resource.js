const TemplateHtmlResource = require(`./template-html-resource`);


class DocumentResource extends TemplateHtmlResource {
    /**
     * @param {Object}   object
     * @param {Document} object.Document
     */
    constructor({ Document }) {
        if (Document instanceof DocumentClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Document}
         */
        this.__document = Document;
    }

    /**
     * @public
     * @type   {Document}
     */
    get Document() {
        return this.__document;
    }

    /**
     * @protected
     * @override
     * @returns   {string}
     */
    _GetTitle() {
        return this.Document.Title.Text;
    }
    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _GetContent() {
        return this.Document.toHtml();
    }
}


exports = module.exports = DocumentResource;


const { Document } = require(`../documenting`);


const DocumentClass = Document;
