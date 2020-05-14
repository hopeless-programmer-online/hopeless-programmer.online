class Code {
    /**
     * @param  {Object}   object
     * @param  {Language} object.Language
     * @param  {Lines}    object.Lines
     * @throws {Error}
     */
    constructor({ Language = LanguageEnum.PlainText, Lines = new LinesClass } = {}) {
        if (!Object.values(LanguageEnum).includes(Language)) {
            throw new Error; // @todo
        }
        if (Lines instanceof LinesClass); else {
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
         * @type    {Lines}
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
     * @type   {Lines}
     */
    get Lines() {
        return this.__lines;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return (
            <code class="hp-class-code" data-hp-language={deduce(this.Language)}>
                {this.Lines.toHtml()}
            </code>
        );
    }
}


exports = module.exports = Code;


const html = require(`../html`);
const Language = require(`./code-language`);
const deduce = require(`./deduce-language-attribute`);
const Lines = require(`./code-lines`);


const LanguageEnum = Language;
const LinesClass = Lines;
