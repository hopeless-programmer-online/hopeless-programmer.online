const TextPhrase = require(`./text-phrase`);


class EmphasisPhrase extends TextPhrase {
    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return <strong class="emphasis-phrase">{this.String}</strong>;
    }
}


exports = module.exports = EmphasisPhrase;


const html = require(`../html`);
