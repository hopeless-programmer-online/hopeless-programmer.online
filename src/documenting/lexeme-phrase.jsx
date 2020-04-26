const Phrase = require(`./phrase`);


class LexemePhrase extends Phrase {
    /**
     * @param {Object}        object
     * @param {Array<Lexeme>} object.Lexemes
     */
    constructor({ Lexemes }) {
        if (Array.isArray(Lexemes) && Lexemes.every(lexeme => lexeme instanceof LexemeClass)); else {
            throw new Error(); // @todo
        }

        super();

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
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return <span class="lexeme-phrase">{this.Lexemes.map(lexeme => lexeme.toHtml())}</span>;
    }
}


exports = module.exports = LexemePhrase;


const html = require(`../html`);


const Lexeme = require(`./lexeme`);


const LexemeClass = Lexeme;
