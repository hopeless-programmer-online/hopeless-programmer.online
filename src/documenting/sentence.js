class Sentence {
    constructor({ Phrases = [] } = {}) {
        if (Phrases instanceof Array); else {
            throw new Error(); // @todo
        }
        if (Phrases.every(phrase => phrase instanceof Phrase)); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Array<Phrase>}
         */
        this.__phrases = Phrases;
    }

    /**
     * @public
     * @type   {Array<Phrase>}
     */
    get Phrases() {
        return this.__phrases;
    }
    get Text() {
        return this.Phrases
            .filter(phrase => phrase instanceof TextPhrase)
            .reduce((a,x) => a + x.String, ``);
    }
}


exports = module.exports = Sentence;


const Phrase = require(`./phrase`);
const TextPhrase = require(`./text-phrase`);
