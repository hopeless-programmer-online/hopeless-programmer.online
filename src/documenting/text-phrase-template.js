class TextPhraseTemplate {
    /**
     * @param {Object} object
     * @param {string} object.String
     */
    constructor({ String }) {
        if (typeof String !== `string`) {
            throw new Error; // @todo
        }

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
     * @returns {TextPhrase}
     */
    Reduce() {
        return new TextPhrase({
            String : this.String,
        });
    }
}


exports = module.exports = TextPhraseTemplate;


const TextPhrase = require(`./text-phrase`);
