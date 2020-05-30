const Phrase = require(`./phrase`);


class LexemePhrase extends Phrase {
    /**
     * @param {Object}  object
     * @param {Lexemes} object.Lexemes
     */
    constructor({ Language = LanguageEnum.PlainText, Lexemes = new LexemesClass } = {}) {
        if (!Object.values(LanguageEnum).includes(Language)) {
            throw new Error; // @todo
        }
        if (Lexemes instanceof LexemesClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Language}
         */
        this.__language = Language;
        /**
         * @private
         * @type    {Lexemes}
         */
        this.__lexemes = Lexemes;
    }

    /**
     * @public
     * @type   {Language}
     */
    get Language() {
        return this.__language;
    }
    /**
     * @public
     * @type   {Lexemes}
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
        return <code
            class="hp-class-phrase hp-class-lexeme-phrase"
            data-hp-language={deduce(this.Language)}
        >
            {this.Lexemes.toHtml()}
        </code>;
    }
}


exports = module.exports = LexemePhrase;


const html = require(`../html`);


const Lexemes = require(`./lexemes`);
const Language = require(`./code-language`);
const deduce = require(`./deduce-language-attribute`);


const LexemesClass = Lexemes;
const LanguageEnum = Language;
