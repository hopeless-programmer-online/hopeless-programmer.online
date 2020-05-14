class Code {
    /**
     * @param  {Object}      object
     * @param  {Language}    object.Language
     * @param  {Array<Line>} object.Lines
     * @throws {Error}
     */
    constructor({ Language = LanguageEnum.PlainText, Lines = [] } = {}) {
        if (!Object.values(LanguageEnum).includes(Language)) {
            throw new Error; // @todo
        }
        if (Lines instanceof Array); else {
            throw new Error; // @todo
        }
        if (Lines.every(line => line instanceof Line)); else {
            throw new Error; // @todo
        }

        Lines.forEach((line, index) => line.__Index = index + 1);

        /**
         * @private
         * @type    {Language}
         */
        this.__language = Language;
        /**
         * @private
         * @type    {Array<Line>}
         */
        this.__lines = Lines;
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
     * @type   {Array<Line>}
     */
    get Lines() {
        return this.__lines;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        const language = {
            [Language.PlainText]  : `plain-text`,
            [Language.JavaScript] : `javascript`,
        }[this.Language];

        if (language === undefined) {
            throw new Error; // @todo
        }

        return (
            <code class="hp-class-code" data-hp-language={language}>
                {this.Lines.toHtml()}
            </code>
        );
    }
}


exports = module.exports = Code;


const html = require(`../html`);
const Language = require(`./code-language`);
const Line = require(`./code-line`);


const LanguageEnum = Language;
