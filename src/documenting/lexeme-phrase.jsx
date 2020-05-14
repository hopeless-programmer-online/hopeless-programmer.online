const Phrase = require(`./phrase`);


class LexemePhrase extends Phrase {
    /**
     * @param {Object}        object
     * @param {Array<Lexeme>} object.Lexemes
     */
    constructor({ Language = LanguageEnum.PlainText, Lexemes = [] } = {}) {
        if (!Object.values(LanguageEnum).includes(Language)) {
            throw new Error; // @todo
        }
        if (Array.isArray(Lexemes) && Lexemes.every(lexeme => lexeme instanceof LexemeClass)); else {
            throw new Error(); // @todo
        }

        super();

        /**
         * @private
         * @type    {Language}
         */
        this.__language = Language;
        /**
         * @private
         * @type    {Array<Lexeme>}
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
        const language = {
            [Language.PlainText]  : `plain-text`,
            [Language.JavaScript] : `javascript`,
        }[this.Language];

        if (language === undefined) {
            throw new Error; // @todo
        }

        return <code
            class="hp-class-phrase hp-class-lexeme-phrase"
            data-hp-language={language}
        >
            {this.Lexemes.map(lexeme => lexeme.toHtml())}
        </code>;
    }
}


exports = module.exports = LexemePhrase;


const html = require(`../html`);


const Lexeme = require(`./lexeme`);
const Language = require(`./code-language`);


const LexemeClass = Lexeme;
const LanguageEnum = Language;
