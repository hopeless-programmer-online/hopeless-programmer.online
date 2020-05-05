/**
 * @abstract
 */
class SectionPart {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === SectionPart) {
            throw new Error(); // @todo
        }
        if (this.toHtml !== SectionPart.prototype.toHtml) {
            throw new Error; // @todo
        }
        if (this._toHtml === SectionPart.prototype._toHtml) {
            throw new Error; // @todo
        }
    }

    /**
     * @public
     * @virtual
     * @type    {Sentences}
     */
    get Sentences() {
        return new Sentences;
    }

    /**
     * @protected
     * @abstract
     * @returns   {html.Element | Array<html.Element>}
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
            (element instanceof Array && element.every(element => element instanceof html.Element))
        ); else {
            throw new Error; // @todo
        }

        return element;
    }
}


exports = module.exports = SectionPart;


const html = require(`../html`);
const Sentences = require(`./sentences`);
