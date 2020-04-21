class Paragraph {
    /**
     * @param  {Object}          object
     * @param  {Array<Sentence>} object.Sentences
     * @throws {Error}
     */
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
    /**
     * @public
     * @type   {string}
     */
    get Text() {
        return this.Sentences.reduce((a,x) => a + x.Text, ``);
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return <p class="paragraph">{this.Sentences.map(sentence => sentence.toHtml())}</p>;
    }
}


exports = module.exports = Paragraph;


const html = require(`../html`);
const Sentence = require(`./sentence`);
