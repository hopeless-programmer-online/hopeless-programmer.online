class CodeLine {
    /**
     * @param  {Object}  object
     * @param  {number}  object.Index
     * @param  {Lexemes} object.Lexemes
     * @throws {Error}
     */
    constructor({ Index = null, Lexemes = new LexemesClass } = {}) {
        if ((Number.isInteger(Index) && Index > 0) || Index === null); else {
            throw new Error; // @todo
        }
        if (Lexemes instanceof LexemesClass); else {
            throw new Error; // @todo
        }

        /**
         * @private
         * @type    {number}
         */
        this.__index = Index;
        /**
         * @private
         * @type    {Lexemes}
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
     * @type   {Lexemes}
     */
    get Lexemes() {
        return this.__lexemes;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return [
            <span>{this.Index}</span>,
            <span>{this.Lexemes.toHtml()}</span>,
            <br />,
        ];
    }
}


exports = module.exports = CodeLine;


const html = require(`../html`);
const Lexemes = require(`./lexemes`);


const LexemesClass = Lexemes;
