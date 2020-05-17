/**
 * @abstract
 */
class ExplorerItem {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === ExplorerItem) {
            throw new Error(); // @todo
        }
        if (this.toHtml !== ExplorerItem.prototype.toHtml) {
            throw new Error; // @todo
        }
        if (this._toHtml === ExplorerItem.prototype._toHtml) {
            throw new Error; // @todo
        }
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
     * @returns {html.Element | Array<html.Element>}
     * @throws  {Error}
     */
    toHtml() {
        const element = this._toHtml();

        if (!html.Element.IsLike(element)) {
            throw new Error(`${typeof element} ${element} is not html.Element or Array<html.Element>.`);
        }

        return element;
    }
}


exports = module.exports = ExplorerItem;


const html = require(`../html`);
