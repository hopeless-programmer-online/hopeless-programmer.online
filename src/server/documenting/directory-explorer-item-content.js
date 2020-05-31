const FileExplorerItemContent = require(`./file-explorer-item-content`);


class DirectoryExplorerItemContent extends FileExplorerItemContent {
    /**
     * @param {Object} object
     * @param {Items}  object.Items
     */
    constructor({ Items }) {
        if (Items instanceof ItemsClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Items}
         */
        this.__items = Items;
    }

    /**
     * @public
     * @type   {Items}
     */
    get Items() {
        return this.__items;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return this.Code.toHtml();
    }
}


exports = module.exports = DirectoryExplorerItemContent;


const Items = require(`./items`);


const ItemsClass = Items;
