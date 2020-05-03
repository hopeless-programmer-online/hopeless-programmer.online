const Lexeme = require(`./lexeme`);


class KeywordLexeme extends Lexeme {
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
        return <span class="keyword lexeme" name={this.String}>{this.String}</span>;
    }
}


exports = module.exports = KeywordLexeme;


const html = require(`../html`);
