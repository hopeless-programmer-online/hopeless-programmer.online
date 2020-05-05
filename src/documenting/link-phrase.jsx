const TextPhrase = require(`./text-phrase`);


class LinkPhrase extends TextPhrase {
    /**
     * @param {Object} object
     * @param {string} object.String
     * @param {string} object.Url // @todo: replace with URL class?
     */
    constructor({ String, Url }) {
        if (typeof Url !== `string`) {
            throw new Error(); // @todo
        }

        super({ String });

        /**
         * @private
         * @type    {string}
         */
        this.__url = Url;
    }

    /**
     * @public
     * @type   {string}
     */
    get Url() {
        return this.__url;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return <a href={this.Url} class="link text-phrase">{this.String}</a>;
    }
}


exports = module.exports = LinkPhrase;


const html = require(`../html`);
