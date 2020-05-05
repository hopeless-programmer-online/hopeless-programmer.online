const TextLexeme = require(`./text-lexeme`);


class CommentLexeme extends TextLexeme {
    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return <span class="hp-class-lexeme hp-class-comment-lexeme">{this.String}</span>;
    }
}


exports = module.exports = CommentLexeme;


const html = require(`../html`);
