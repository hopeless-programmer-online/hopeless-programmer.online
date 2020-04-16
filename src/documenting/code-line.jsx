class CodeLine {
    /**
     * @param  {Object}        object
     * @param  {Array<Lexeme>} object.Lexemes
     * @throws {Error}
     */
    constructor({ Lexemes = [] } = {}) {
        if (Lexemes instanceof Array); else {
            throw new Error(); // @todo
        }
        if (Lexemes.every(lexeme => lexeme instanceof Lexeme)); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Array<Lexeme>}
         */
        this.__lexemes = Lexemes;
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
        return <div class="line">{this.Lexemes.map(lexeme => lexeme.toHtml())}</div>;
    }
}


exports = module.exports = CodeLine;


const html = require(`../html`);
const Lexeme = require(`./lexeme`);
