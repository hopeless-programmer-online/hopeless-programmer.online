/**
 * @extends {Array<Item>}
 */
class IndexItems extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Item} items
     */
    constructor(...items) {
        items.forEach((item, index) => {
            if (item instanceof Item); else {
                throw new Error(`Element #${index} (${typeof item} ${String(item)}) is not an index item.`);
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


exports = module.exports = IndexItems;


const html = require(`../html`);
const Item = require(`./index-item`);
