const LexemeTemplate = require(`./lexeme-template`);


class TextLexemeTemplate extends LexemeTemplate {
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
     * @returns   {TextLexeme}
     */
    _Reduce() {
        return new TextLexeme({
            String : this.String,
        });
    }
}


exports = module.exports = TextLexemeTemplate;


const TextLexeme = require(`./text-lexeme`);
