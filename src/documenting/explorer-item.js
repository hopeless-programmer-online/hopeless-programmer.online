/**
 * @abstract
 */
class ExplorerItem {
    /**
     * @param  {Object} object
     * @param  {string} object.Name
     * @param  {Content} object.Content
     * @throws {Error}
     */
    constructor({ Name, Content }) {
        if (typeof Name !== `string`) {
            throw new Error; // @todo
        }
        if (Content instanceof ContentClass); else {
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
        /**
         * @private
         * @type    {Content}
         */
        this.__content = Content;
    }

    /**
     * @public
     * @type   {string}
     */
    get Name() {
        return this.__name;
    }
    /**
     * @public
     * @type   {Content}
     */
    get Content() {
        return this.__content;
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
const Content = require(`./explorer-item-content`);


const ContentClass = Content;
