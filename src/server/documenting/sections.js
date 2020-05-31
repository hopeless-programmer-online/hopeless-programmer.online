/**
 * @extends {Array<Section>}
 */
class Sections extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Section} sections
     */
    constructor(...sections) {
        sections.forEach((section, index) => {
            if (section instanceof Section); else {
                throw new Error(`Element #${index} (${typeof section} ${String(section)}) is not a section.`);
            }
        });

        super(...sections);
    }

    /**
     * @public
     * @type   {Phrases}
     */
    get Phrases() {
        return this.reduce(
            (phrases, section) => new Phrases(...phrases, ...section.Phrases),
            new Phrases,
        );
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return this.map(section => section.toHtml());
    }
}


exports = module.exports = Sections;


const html = require(`../html`);
const Phrases = require(`./phrases`);
const Section = require(`./section`);
