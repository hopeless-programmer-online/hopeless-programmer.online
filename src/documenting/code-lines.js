/**
 * @extends {Array<Line>}
 */
class Lines extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Line} lines
     */
    constructor(...lines) {
        lines.forEach((line, index) => {
            if (line instanceof Line); else {
                throw new Error(`Element #${index} (${typeof line} ${String(line)}) is not a line.`);
            }
        });

        super(...lines);
    }

    /**
     * @public
     * @type   {Lexemes}
     */
    get Lexemes() {
        return this.reduce((lexemes, line) => new Lexemes(...lexemes, ...line.Lexemes), new Lexemes);
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
const Lexemes = require(`./lexemes`);
