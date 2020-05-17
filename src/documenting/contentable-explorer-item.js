const ExplorerItem = require(`./explorer-item`);


class ContentableExplorerItem extends ExplorerItem {
    /**
     * @param  {Object}  object
     * @param  {string}  object.Name
     * @param  {Content} object.Content
     * @throws {Error}
     */
    constructor({ Name, Content }) {
        if (Content instanceof ContentClass); else {
            throw new Error; // @todo
        }
        if (new.target === ExplorerItem) {
            throw new Error(); // @todo
        }

        super({ Name });

        Content.__Item = this;

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
}


exports = module.exports = ContentableExplorerItem;


const Content = require(`./explorer-item-content`);


const ContentClass = Content;
