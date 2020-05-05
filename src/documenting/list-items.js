/**
 * @extends {Array<Item>}
 */
class ListItems extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Item} items
     */
    constructor(...items) {
        items.forEach((item, index) => {
            if (item instanceof Item); else {
                throw new Error(`Element #${index} (${typeof item} ${String(item)}) is not a sentence.`);
            }
        });

        super(...items);
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return this.map(item => item.toHtml());
    }
}


exports = module.exports = ListItems;


const html = require(`../html`);
const Item = require(`./list-item`);
