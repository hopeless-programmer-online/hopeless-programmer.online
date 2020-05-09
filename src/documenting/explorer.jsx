class Explorer {
    /**
     * @param {Object} object
     * @param {Items}  object.Items
     */
    constructor({ Items = new ItemsClass } = {}) {
        if (Items instanceof ItemsClass); else {
            throw new Error(`${typeof Items} ${Items} is not ExplorerItems.`);
        }

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
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return (
            <article>
                <header>
                    <nav>
                        {this.Items.toHtml()}
                    </nav>
                </header>
            </article>
        );
    }
}


exports = module.exports = Explorer;


const html = require(`../html`);
const Items = require(`./explorer-items`);


const ItemsClass = Items;
