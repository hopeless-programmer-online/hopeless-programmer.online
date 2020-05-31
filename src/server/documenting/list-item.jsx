class ListItem {
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


exports = module.exports = ListItem;


const html = require(`../html`);
const Content = require(`./list-item-content`);


const ContentClass = Content;
