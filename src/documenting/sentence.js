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
}


exports = module.exports = Sentence;


const Phrase = require(`./phrase`);
