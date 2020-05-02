const IndexItemContent = require(`./index-item-content`);


class DocumentIndexItemContent extends IndexItemContent {
    /**
     * @param  {Object}   object
     * @param  {Document} object.Document
     * @throws {Error}
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
     * @returns   {html.Element}
     */
    _toHtml() {
        return <h2>document</h2>;
    }
}


exports = module.exports = DocumentIndexItemContent;


const html = require(`../html`);
const Document = require(`./document`);


const DocumentClass = Document;
