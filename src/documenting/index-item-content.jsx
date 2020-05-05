/**
 * @abstract
 */
class IndexItemContent {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === IndexItemContent) {
            throw new Error(); // @todo
        }
        if (this.toHtml !== IndexItemContent.prototype.toHtml) {
            throw new Error; // @todo
        }
        if (this._toHtml === IndexItemContent.prototype._toHtml) {
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

        if (
            element instanceof html.Element
            ||
            (Array.isArray(element) && element.every(element => element instanceof html.Element))
        ); else {
            throw new Error(`Result of IndexItemContent.toHtml() (${typeof element} ${element}) should be html.Element of Array<html.Element>.`);
        }

        return element;
    }
}


exports = module.exports = IndexItemContent;


const html = require(`../html`);
