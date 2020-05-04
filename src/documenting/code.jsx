class Code {
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

        Lines.forEach((line, index) => line.__Index = index + 1);

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
     * @returns {html.Element}
     */
    toHtml() {
        return (
            <code class="hp-class-code">
                {this.Lines.toHtml()}
            </code>
        );
    }
}


exports = module.exports = Code;


const html = require(`../html`);
const Line = require(`./code-line`);
