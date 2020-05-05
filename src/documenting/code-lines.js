/**
 * @extends {Array<Line>}
 */
class Lines extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Line} sentences
     */
    constructor(...sentences) {
        sentences.forEach((line, index) => {
            if (line instanceof Line); else {
                throw new Error(`Element #${index} (${typeof line} ${String(line)}) is not a line.`);
            }
        });

        super(...sentences);
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return this.reduce((lines, line) => [ ...lines, ...line.toHtml() ], []);
    }
}


exports = module.exports = Lines;


const html = require(`../html`);
const Line = require(`./code-line`);
