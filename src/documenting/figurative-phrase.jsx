const TextPhrase = require(`./text-phrase`);


class FigurativePhrase extends TextPhrase {
    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return <em class="figurative-phrase">{this.String}</em>;
    }
}


exports = module.exports = FigurativePhrase;


const html = require(`../html`);
