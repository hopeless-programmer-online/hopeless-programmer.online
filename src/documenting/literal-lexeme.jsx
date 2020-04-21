const TextLexeme = require(`./text-lexeme`);


class IdentifierLexeme extends TextLexeme {
    /**
     * @param {Object} object
     * @param {string} object.String
     * @param {Type}   object.Type
     */
    constructor({ String, Type }) {
        if (Object.values(TypeEnum).indexOf(Type) === -1) {
            throw new Error; // @todo
        }

        super({ String });

        /**
         * @private
         * @type    {Type}
         */
        this.__type = Type;
    }

    /**
     * @public
     * @type   {Type}
     */
    get Type() {
        return this.__type;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        const type =
            this.Type === Type.Boolean ? `boolean` :
            this.Type === Type.Number  ? `number`  :
            this.Type === Type.String  ? `string`  :
            error();

        return <span class="literal lexeme" type={type}>{this.String}</span>;
    }
}


exports = module.exports = IdentifierLexeme;


const html = require(`../html`);
const Type = require(`./literal-lexeme-type`);


const TypeEnum = Type;


function error() {
    throw new Error; // @todo
}
