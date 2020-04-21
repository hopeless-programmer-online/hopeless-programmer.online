const Phrase = require(`./phrase`);


class LexemePhrase extends Phrase {
    /**
     * @param {Object} object
     * @param {Lexeme} object.Lexeme
     */
    constructor({ Lexeme }) {
        if (Lexeme instanceof LexemeClass); else {
            throw new Error(); // @todo
        }

        super();

        /**
         * @private
         * @type    {Lexeme}
         */
        this.__lexeme = Lexeme;
    }

    /**
     * @public
     * @type   {Lexeme}
     */
    get Lexeme() {
        return this.__lexeme;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return <span class="lexeme-phrase">{this.Lexeme.toHtml()}</span>;
    }
}


exports = module.exports = LexemePhrase;


const html = require(`../html`);


const Lexeme = require(`./lexeme`);


const LexemeClass = Lexeme;
