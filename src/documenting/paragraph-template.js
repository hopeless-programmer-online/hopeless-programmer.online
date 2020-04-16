class ParagraphTemplate {
    /**
     * @param  {Object}                  object
     * @param  {Array<SentenceTemplate>} object.Sentences
     * @throws {Error}
     */
    constructor({ Sentences = [] } = {}) {
        if (Sentences instanceof Array); else {
            throw new Error(); // @todo
        }
        if (Sentences.every(sentence => sentence instanceof SentenceTemplate)); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Array<SentenceTemplate>}
         */
        this.__sentences = Sentences;
    }

    /**
     * @public
     * @type   {Array<SentenceTemplate>}
     */
    get Sentences() {
        return this.__sentences;
    }

    /**
     * @public
     * @returns {Paragraph}
     */
    Reduce() {
        const sentences = this.Sentences.map(sentence => sentence.Reduce());

        return new Paragraph({
            Sentences : sentences,
        });
    }
}


exports = module.exports = ParagraphTemplate;


const SentenceTemplate = require(`./sentence-template`);
const Paragraph = require(`./paragraph`);
