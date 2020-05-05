const Phrase = require(`./phrase`);


// @todo: rename to UnorderedList or make abstract?
class List extends Phrase {
    /**
     * @param {Object} object
     * @param {Items}  object.Items
     */
    constructor({ Items }) {
        if (Items instanceof ItemsClass); else {
            throw new Error(); // @todo
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
        return <ul>{this.Items.toHtml()}</ul>;
    }
}


exports = module.exports = List;


const html = require(`../html`);
const Items = require(`./list-items`);


const ItemsClass = Items;
