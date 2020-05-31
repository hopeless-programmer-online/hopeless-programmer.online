/**
 * @abstract
 */
class IllustrationContent {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === IllustrationContent) {
            throw new Error(); // @todo
        }
        if (this.toHtml !== IllustrationContent.prototype.toHtml) {
            throw new Error; // @todo
        }
        if (this._toHtml === IllustrationContent.prototype._toHtml) {
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


exports = module.exports = IllustrationContent;


const html = require(`../html`);
