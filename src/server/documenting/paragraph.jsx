class Paragraph {
    /**
     * @param  {Object}    object
     * @param  {Sentences} object.Sentences
     * @throws {Error}
     */
    constructor({ Sentences = new SentencesClass } = {}) {
        if (Sentences instanceof SentencesClass); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {Sentences}
         */
        this.__sentences = Sentences;
    }

    /**
     * @public
     * @type   {Sentences}
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
        return <p>{this.Sentences.toHtml()}</p>;
    }
}


exports = module.exports = Paragraph;


const html = require(`../html`);
const Sentences = require(`./sentences`);


const SentencesClass = Sentences;
