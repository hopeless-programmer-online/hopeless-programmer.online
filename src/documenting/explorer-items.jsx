/**
 * @extends {Array<Item>}
 */
class ExplorerItems extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Item} items
     */
    constructor(...items) {
        items.forEach((item, index) => {
            if (item instanceof Item); else {
                throw new Error(`Element #${index} (${typeof item} ${String(item)}) is not a item.`);
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


exports = module.exports = ExplorerItems;


const html = require(`../html`);
const Item = require(`./explorer-item`);
