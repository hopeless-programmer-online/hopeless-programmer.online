class CodeLine {
    /**
     * @param  {Object}        object
     * @param  {number}        object.Index
     * @param  {Array<Lexeme>} object.Lexemes
     * @throws {Error}
     */
    constructor({ Index = null, Lexemes = [] } = {}) {
        if ((Number.isInteger(Index) && Index > 0) || Index === null); else {
            throw new Error; // @todo
        }
        if (Lexemes instanceof Array); else {
            throw new Error; // @todo
        }
        if (Lexemes.every(lexeme => lexeme instanceof Lexeme)); else {
            throw new Error; // @todo
        }

        /**
         * @private
         * @type    {number}
         */
        this.__index = Index;
        /**
         * @private
         * @type    {Array<Lexeme>}
         */
        this.__lexemes = Lexemes;
    }

    /**
     * @public
     * @type   {number}
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
     * @type    {number}
     */
    set __Index(index) {
        if (Number.isInteger(index) && index > 0); else {
            throw new Error; // @todo
        }
        if (this.__index !== null) {
            throw new Error; // @todo
        }

        this.__index = index;
    }
    /**
     * @public
     * @type   {Array<Lexeme>}
     */
    get Lexemes() {
        return this.__lexemes;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return (
            <div class="line">
                <span class="index">{this.Index}</span>
                <span class="content">{this.Lexemes.map(lexeme => lexeme.toHtml())}</span>
            </div>
        );
    }
}


exports = module.exports = CodeLine;


const html = require(`../html`);
const Lexeme = require(`./lexeme`);
