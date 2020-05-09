/**
 * @extends {Array<Item>}
 */
class ExplorerItems extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Item} phrases
     */
    constructor(...phrases) {
        phrases.forEach((item, index) => {
            if (item instanceof Item); else {
                throw new Error(`Element #${index} (${typeof item} ${String(item)}) is not a item.`);
            }
        });

        super(...phrases);
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return (
            <ul>
                {
                    this.map(item =>
                        <li>
                            {item.toHtml()}
                        </li>,
                    )
                }
            </ul>
        );
    }
}


exports = module.exports = ExplorerItems;


const html = require(`../html`);
const Item = require(`./explorer-item`);
