const TemplateHtmlResource = require(`./template-html-resource`);


class IndexResource extends TemplateHtmlResource {
    /**
     * @param {Object} object
     * @param {Index}  object.Index
     */
    constructor({ Index }) {
        if (Index instanceof IndexClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Index}
         */
        this.__index = Index;
    }

    /**
     * @public
     * @type   {Index}
     */
    get Index() {
        return this.__index;
    }

    /**
     * @protected
     * @override
     * @returns   {string}
     */
    _GetTitle() {
        return this.Index.Title.Text;
    }
    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    async _GetContent() {
        return this.Index.toHtml();
    }
}


exports = module.exports = IndexResource;


const { Index } = require(`../documenting`);


const IndexClass = Index;
