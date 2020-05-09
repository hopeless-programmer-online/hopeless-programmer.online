/**
 * @abstract
 */
class ExplorerItem {
    /**
     * @param  {Object} object
     * @param  {string} object.Name
     * @throws {Error}
     */
    constructor({ Name }) {
        if (typeof Name !== `string`) {
            throw new Error; // @todo
        }

        if (new.target === ExplorerItem) {
            throw new Error(); // @todo
        }
        if (this.toHtml !== ExplorerItem.prototype.toHtml) {
            throw new Error; // @todo
        }
        if (this._toHtml === ExplorerItem.prototype._toHtml) {
            throw new Error; // @todo
        }

        /**
         * @private
         * @type    {string}
         */
        this.__name = Name;
    }

    /**
     * @public
     * @type   {string}
     */
    get Name() {
        return this.__name;
    }

    /**
     * @protected
     * @abstract
     * @returns   {html.Element}
     */
    _toHtml() {
        throw new Error; // @todo
    }

    /**
     * @public
     * @returns {html.Element}
     * @throws  {Error}
     */
    toHtml() {
        const element = this._toHtml();

        if (element instanceof html.Element); else {
            throw new Error; // @todo
        }

        return element;
    }
}


exports = module.exports = ExplorerItem;


const html = require(`../html`);
