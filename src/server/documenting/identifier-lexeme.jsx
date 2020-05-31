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
            this.Type === Type.Argument ? `argument` :
            this.Type === Type.Variable ? `variable` :
            this.Type === Type.Function ? `function` :
            this.Type === Type.Property ? `property` :
            this.Type === Type.Class    ? `class`    :
            this.Type === Type.Module   ? `module`   :
            error();

        return <span class="hp-class-lexeme hp-class-identifier-lexeme" type={type} name={this.String}>{this.String}</span>;
    }
}


exports = module.exports = IdentifierLexeme;


const html = require(`../html`);
const Type = require(`./identifier-lexeme-type`);


const TypeEnum = Type;


function error() {
    throw new Error; // @todo
}
