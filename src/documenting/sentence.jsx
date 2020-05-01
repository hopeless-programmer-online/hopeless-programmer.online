class Sentence {
    /**
     * @param  {Object}        object
     * @param  {Array<Phrase>} object.Phrases
     * @throws {Error}
     */
    constructor({ Phrases = [] } = {}) {
        if (Phrases instanceof Array); else {
            throw new Error(); // @todo
        }
        if (Phrases.every(phrase => phrase instanceof Phrase)); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Array<Phrase>}
         */
        this.__phrases = Phrases;
    }

    /**
     * @public
     * @type   {Array<Phrase>}
     */
    get Phrases() {
        return this.__phrases;
    }
    /**
     * @public
     * @type   {string}
     */
    get Text() {
        return this.Phrases
            .map(phrase =>
                phrase instanceof TextPhrase   ? phrase.String :
                phrase instanceof LexemePhrase ? (
                    phrase.Lexeme instanceof TextLexeme
                        ? phrase.Lexeme.String
                        : ``
                ) :
                ``,
            )
            .reduce((a,x) => a + x, ``);
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return <span class="sentence">{this.Phrases.map(phrase => phrase.toHtml())}</span>;
    }
}


exports = module.exports = Sentence;


const html = require(`../html`);
const Phrase = require(`./phrase`);
const TextPhrase = require(`./text-phrase`);
const LexemePhrase = require(`./lexeme-phrase`);
const TextLexeme = require(`./text-lexeme`);
