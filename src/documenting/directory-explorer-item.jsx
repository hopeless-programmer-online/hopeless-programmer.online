const ExplorerItem = require(`./explorer-item`);


class DirectoryExplorerItem extends ExplorerItem {
    /**
     * @param {Object} object
     * @param {string} object.Name
     * @param {Items}  object.Items
     */
    constructor({ Name, Items }) {
        if (Items instanceof ItemsClass); else {
            throw new Error; // @todo
        }

        super({ Name });

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
        return (
            <span>
                {/* <input name="selection" type="radio" /> */}
                <label>{this.Name}</label>
                {this.Items.toHtml()}
            </span>
        );
    }
}


exports = module.exports = DirectoryExplorerItem;


const html = require(`../html`);
const Items = require(`./explorer-items`);


const ItemsClass = Items;
