class Sentence {
    /**
     * @param  {Object}        object
     * @param  {Array<Phrase>} object.Phrases
     * @throws {Error}
     */
    constructor({ Phrases = new PhrasesClass } = {}) {
        if (Phrases instanceof PhrasesClass); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Phrases}
         */
        this.__phrases = Phrases;
    }

    /**
     * @public
     * @type   {Phrases}
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
            .map(phrase => {
                if (phrase instanceof TextPhrase) {
                    return phrase.String;
                }
                if (phrase instanceof LexemePhrase) {
                    return phrase.Lexemes.map(lexeme => {
                        if (lexeme instanceof TextLexeme) {
                            return lexeme.String;
                        }

                        return ``;
                    });
                }

                return ``;
            })
            .reduce((a,x) => a + x, ``);
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return <span class="hp-class-sentence">{this.Phrases.toHtml()}</span>;
    }
}


exports = module.exports = Sentence;


const html = require(`../html`);
const Phrases = require(`./phrases`);
const TextPhrase = require(`./text-phrase`);
const LexemePhrase = require(`./lexeme-phrase`);
const TextLexeme = require(`./text-lexeme`);


const PhrasesClass = Phrases;
