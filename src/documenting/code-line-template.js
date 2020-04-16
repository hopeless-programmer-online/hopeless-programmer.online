class CodeLineTemplate {
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
     * @returns {CodeLine}
     */
    Reduce() {
        const lexemes = this.Lexemes.map(lexeme => lexeme.Reduce());

        return new CodeLine({
            Lexemes : lexemes,
        });
    }
}


exports = module.exports = CodeLineTemplate;


const Lexeme = require(`./lexeme-template`);
const CodeLine = require(`./code-line`);
