const IndexItemContent = require(`./index-item-content`);


class DocumentIndexItemContent extends IndexItemContent {
    /**
     * @param  {Object}   object
     * @param  {string}   object.Url
     * @param  {Document} object.Document
     * @throws {Error}
     */
    constructor({ Url, Document }) {
        if (typeof Url !== `string`) {
            throw new Error; // @todo
        }
        if (Document instanceof DocumentClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {string}
         */
        this.__url = Url;
        /**
         * @private
         * @type    {Document}
         */
        this.__document = Document;
    }

    /**
     * @public
     * @type   {string}
     */
    get Url() {
        return this.__url;
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
        const document = this.Document;
        const paragraph = this.Document
            .Sections[0].Parts
            .find(part => part instanceof ParagraphSectionPart)
            .Paragraph
            ;

        return [
            <h2>
                <a href={this.Url}>
                    {document.Title.toHtml()}
                </a>
            </h2>,
            paragraph.toHtml(),
        ];
    }
}


exports = module.exports = DocumentIndexItemContent;


const html = require(`../html`);
const Document = require(`./document`);
const ParagraphSectionPart = require(`./paragraph-section-part`);


const DocumentClass = Document;
