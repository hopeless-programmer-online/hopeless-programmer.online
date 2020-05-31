/**
 * @abstract
 */
class Phrase {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === Phrase) {
            throw new Error(); // @todo
        }
        if (this.toHtml !== Phrase.prototype.toHtml) {
            throw new Error; // @todo
        }
        if (this._toHtml === Phrase.prototype._toHtml) {
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


exports = module.exports = Phrase;


const html = require(`../html`);
