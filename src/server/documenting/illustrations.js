/**
 * @extends {Array<Illustration>}
 */
class Sentences extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Illustration} sentences
     */
    constructor(...sentences) {
        sentences.forEach((illustration, index) => {
            if (illustration instanceof Illustration); else {
                throw new Error(`Element #${index} (${typeof illustration} ${String(illustration)}) is not a illustration.`);
            }
        });

        super(...sentences);
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return this.map(illustration => illustration.toHtml());
    }
}


exports = module.exports = Sentences;


const html = require(`../html`);
const Illustration = require(`./illustration`);
