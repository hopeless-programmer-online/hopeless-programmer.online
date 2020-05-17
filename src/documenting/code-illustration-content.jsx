const IllustrationContent = require(`./illustration-content`);


class CodeIllustrationContent extends IllustrationContent {
    /**
     * @param {Object} object
     * @param {Code}   object.Code
     */
    constructor({ Code }) {
        if (Code instanceof CodeClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Code}
         */
        this.__code = Code;
    }

    /**
     * @public
     * @type   {Code}
     */
    get Code() {
        return this.__code;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return (
            <figure class="hp-class-code" data-hp-language={deduceAttribute(this.Code.Language)}>
                {deduceHeader(`example`, null, this.Code.Language)}
                {this.Code.toHtml()}
            </figure>
        );
    }
}


exports = module.exports = CodeIllustrationContent;


const html = require(`../html`);
const Code = require(`./code`);
const deduceAttribute = require(`./deduce-language-attribute`);
const deduceHeader = require(`./deduce-code-header`);


const CodeClass = Code;
