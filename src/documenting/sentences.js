/**
 * @extends {Array<Sentence>}
 */
class Sentences extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Sentence} sentences
     */
    constructor(...sentences) {
        sentences.forEach((sentence, index) => {
            if (sentence instanceof Sentence); else {
                throw new Error(`Element #${index} (${typeof sentence} ${String(sentence)}) is not a sentence.`);
            }
        });

        super(...sentences);
    }

    /**
     * @public
     * @type   {string}
     */
    get Text() {
        return this.reduce((text, sentence) => text + sentence.Text, ``);
    }
    /**
     * @public
     * @type   {Phrases}
     */
    get Phrases() {
        return this.reduce(
            (phrases, sentence) => new Phrases(...phrases, ...sentence.Phrases),
            new Phrases,
        );
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return this.map(sentence => sentence.toHtml());
    }
}


exports = module.exports = Sentences;


const html = require(`../html`);
const Phrases = require(`./phrases`);
const Sentence = require(`./sentence`);
