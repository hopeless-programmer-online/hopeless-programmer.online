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
         * @type    {?Explorer}
         */
        this.__explorer = null;
        /**
         * @private
         * @type    {?string}
         */
        this.__index = null;
        /**
         * @private
         * @type    {?number}
         */
        this.__level = null;
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
     * @public
     * @type   {string}
     */
    get Index() {
        const index = this.__index;

        if (index === null) {
            throw new Error; // @todo
        }

        return index;
    }
    /**
     * @private
     * @type    {string}
     */
    set __Index(index) {
        if (typeof index !== `string`) {
            throw new Error; // @todo
        }
        if (this.__index !== null) {
            throw new Error; // @todo
        }

        this.__index = index;
    }
    /**
     * @public
     * @type   {Explorer}
     */
    get Explorer() {
        const explorer = this.__explorer;

        if (explorer === null) {
            throw new Error; // @todo
        }

        return explorer;
    }
    /**
     * @private
     * @type    {Explorer}
     */
    set __Explorer(explorer) {
        if (explorer instanceof Explorer); else {
            throw new Error; // @todo
        }
        if (this.__explorer !== null) {
            throw new Error; // @todo
        }

        this.__explorer = explorer;
    }
    /**
     * @public
     * @type   {number}
     */
    get Level() {
        const level = this.__level;

        if (level === null) {
            throw new Error; // @todo
        }

        return level;
    }
    /**
     * @private
     * @type    {number}
     */
    set __Level(level) {
        if (Number.isInteger(level) && level >= 0); else {
            throw new Error; // @todo
        }
        if (this.__level !== null) {
            throw new Error; // @todo
        }

        this.__level = level;
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
const Explorer = require(`./explorer`);
