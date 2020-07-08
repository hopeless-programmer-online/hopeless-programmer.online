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
        if (this._toHtml instanceof AsyncFunction); else {
            throw new Error(`${new.target.name} does not override the IllustrationContent.prototype._toHtml method as async.`);
        }
    }

    /**
     * @protected
     * @abstract
     * @returns   {html.Element}
     */
    async _toHtml() {
        throw new Error; // @todo
    }

    /**
     * @public
     * @returns {html.Element}
     * @throws  {Error}
     */
    async toHtml() {
        const promise = this._toHtml();

        if (promise instanceof Promise); else {
            throw new Error; // @todo
        }

        const element = await promise;

        if (element instanceof html.Element); else {
            throw new Error; // @todo
        }

        return element;
    }
}


exports = module.exports = IllustrationContent;


const html = require(`../html`);


const AsyncFunction = (async () => {}).constructor;
