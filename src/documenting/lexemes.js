/**
 * @extends {Array<Lexeme>}
 */
class Lexemes extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Lexeme} lexemes
     */
    constructor(...lexemes) {
        lexemes.forEach((lexeme, index) => {
            if (lexeme instanceof Lexeme); else {
                throw new Error(`Element #${index} (${typeof lexeme} ${String(lexeme)}) is not a lexeme.`);
            }
        });

        super(...lexemes);
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return this.map(lexeme => lexeme.toHtml());
    }
}


exports = module.exports = Lexemes;


const html = require(`../html`);
const Lexeme = require(`./lexeme`);
