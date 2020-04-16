const PhraseTemplate = require(`./phrase-template`);


class TextPhraseTemplate extends PhraseTemplate {
    /**
     * @param {Object} object
     * @param {string} object.String
     */
    constructor({ String }) {
        if (typeof String !== `string`) {
            throw new Error; // @todo
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
     * @returns   {TextPhrase}
     */
    _Reduce() {
        return new TextPhrase({
            String : this.String,
        });
    }
}


exports = module.exports = TextPhraseTemplate;


const TextPhrase = require(`./text-phrase`);
