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
        if (this._toHtml instanceof AsyncFunction); else {
            throw new Error(`${new.target.name} does not override the SectionPart.prototype._toHtml method as async.`);
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
    async _toHtml() {
        throw new Error; // @todo
    }

    /**
     * @public
     * @returns {html.Element | Array<html.Element>}
     * @throws  {Error}
     */
    async toHtml() {
        const promise = this._toHtml();

        if (promise instanceof Promise); else {
            throw new Error; // @todo
        }

        const element = await promise;

        if (
            element instanceof html.Element
            ||
            (element instanceof Array && element.every(element => element instanceof html.Element))
        ); else {
            throw new Error(`${typeof element} ${element} is not html.Element`);
        }

        return element;
    }
}


exports = module.exports = SectionPart;


const html = require(`../html`);
const Sentences = require(`./sentences`);


const AsyncFunction = (async () => {}).constructor;
