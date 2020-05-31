/**
 * @abstract
 */
class Lexeme {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === Lexeme) {
            throw new Error(); // @todo
        }
        if (this.toHtml !== Lexeme.prototype.toHtml) {
            throw new Error; // @todo
        }
        if (this._toHtml === Lexeme.prototype._toHtml) {
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


exports = module.exports = Lexeme;


const html = require(`../html`);
