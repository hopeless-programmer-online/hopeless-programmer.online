const Lexeme = require(`./lexeme`);


class TextLexeme extends Lexeme {
    /**
     * @param {Object} object
     * @param {string} object.String
     */
    constructor({ String }) {
        if (typeof String !== `string`) {
            throw new Error(); // @todo
        }

        super();

        /**
         * @private
         * @type    {string}
         */
        this.__string = String;
    }

    /**
     * @public
     * @type   {string}
     */
    get String() {
        return this.__string;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return <span class="hp-class-lexeme hp-class-text-lexeme">{this.String}</span>;
    }
}


exports = module.exports = TextLexeme;


const html = require(`../html`);
