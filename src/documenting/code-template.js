class CodeTemplate {
    /**
     * @param  {Object}      object
     * @param  {Array<Line>} object.Lines
     * @throws {Error}
     */
    constructor({ Lines = [] } = {}) {
        if (Lines instanceof Array); else {
            throw new Error; // @todo
        }
        if (Lines.every(line => line instanceof Line)); else {
            throw new Error; // @todo
        }

        /**
         * @private
         * @type    {Array<Line>}
         */
        this.__lines = Lines;
    }

    /**
     * @public
     * @type   {Array<Line>}
     */
    get Lines() {
        return this.__lines;
    }

    /**
     * @public
     * @returns {Code}
     */
    Reduce() {
        const lines = this.Lines.map(line => line.Reduce());

        return new Code({
            Lines : lines,
        });
    }
}


exports = module.exports = CodeTemplate;


const Line = require(`./code-line-template`);
const Code = require(`./code`);
