class SentenceTemplate {
    /**
     * @param  {Object}                object
     * @param  {Array<PhraseTemplate>} object.Phrases
     * @throws {Error}
     */
    constructor({ Phrases = [] } = {}) {
        if (Phrases instanceof Array); else {
            throw new Error(); // @todo
        }
        if (Phrases.every(phrase => phrase instanceof PhraseTemplate)); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Array<PhraseTemplate>}
         */
        this.__phrases = Phrases;
    }

    /**
     * @public
     * @type   {Array<PhraseTemplate>}
     */
    get Phrases() {
        return this.__phrases;
    }

    /**
     * @public
     * @returns {Sentence}
     */
    Reduce() {
        const phrases = this.Phrases.map(phrase => phrase.Reduce());

        return new Sentence({
            Phrases : phrases,
        });
    }
}


exports = module.exports = SentenceTemplate;


const PhraseTemplate = require(`./phrase-template`);
const Sentence = require(`./sentence`);
