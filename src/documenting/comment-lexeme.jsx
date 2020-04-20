const TextLexeme = require(`./text-lexeme`);


class CommentLexeme extends TextLexeme {
    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return <pre class="comment-lexeme">{this.String}</pre>;
    }
}


exports = module.exports = CommentLexeme;


const html = require(`../html`);
