const Phrase = require(`./phrase`);


class TextPhrase extends Phrase {
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
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return <span class="text-phrase">{this.String}</span>;
    }
}


exports = module.exports = TextPhrase;


const html = require(`../html`);
