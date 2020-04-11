class Paragraph {
    constructor({ Sentences = [] } = {}) {
        if (Sentences instanceof Array); else {
            throw new Error(); // @todo
        }
        if (Sentences.every(sentence => sentence instanceof Sentence)); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Array<Sentence>}
         */
        this.__sentences = Sentences;
    }

    /**
     * @public
     * @type   {Array<Sentence>}
     */
    get Sentences() {
        return this.__sentences;
    }
}


exports = module.exports = Paragraph;


const Sentence = require(`./sentence`);
