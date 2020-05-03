/**
 * @extends {Array<Phrase>}
 */
class Phrases extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Phrase} phrases
     */
    constructor(...phrases) {
        phrases.forEach((phrase, index) => {
            if (phrase instanceof Phrase); else {
                throw new Error(`Element #${index} (${typeof phrase} ${String(phrase)}) is not a phrase.`);
            }
        });

        super(...phrases);
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return this.map(phrase => phrase.toHtml());
    }
}


exports = module.exports = Phrases;


const html = require(`../html`);
const Phrase = require(`./phrase`);
