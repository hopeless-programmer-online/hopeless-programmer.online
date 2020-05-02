class IndexItem {
    /**
     * @param {Object}  object
     * @param {Content} object.Content
     */
    constructor({ Content }) {
        if (Content instanceof ContentClass); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Content}
         */
        this.__content = Content;
    }

    /**
     * @public
     * @type   {Content}
     */
    get Content() {
        return this.__content;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return <li>{this.Content.toHtml()}</li>;
    }
}


exports = module.exports = IndexItem;


const html = require(`../html`);
const Content = require(`./index-item-content`);


const ContentClass = Content;
