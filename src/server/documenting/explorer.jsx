class Explorer {
    /**
     * @param {Object} object
     * @param {Items}  object.Items
     */
    constructor({ Items = new ItemsClass } = {}) {
        if (Items instanceof ItemsClass); else {
            throw new Error(`${typeof Items} ${Items} is not ExplorerItems.`);
        }

        Items.forEach((item, index) => {
            item.__Explorer = this;
            item.__Index = `${index + 1}`;
            item.__Level = 0;
        });

        /**
         * @private
         * @type    {?number}
         */
        this.__index = null;
        /**
         * @private
         * @type    {Items}
         */
        this.__items = Items;
    }

    /**
     * @public
     * @type   {number}
     */
    get Index() {
        const index = this.__index;

        if (index === null) {
            throw new Error; // @todo
        }

        return index;
    }
    /**
     * @private
     * @type    {number}
     */
    set __Index(index) {
        if (Number.isInteger(index) && index > 0); else {
            throw new Error; // @todo
        }
        if (this.__index !== null) {
            throw new Error; // @todo
        }

        this.__index = index;
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
            <article class="hp-class-explorer">
                <section>
                    <span>EXPLORER</span>
                    {this.Items.toHtml()}
                </section>
            </article>
        );
    }
}


exports = module.exports = Explorer;


const html = require(`../html`);
const Items = require(`./explorer-items`);


const ItemsClass = Items;
