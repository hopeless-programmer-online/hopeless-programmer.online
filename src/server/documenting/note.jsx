class Note {
    /**
     * @param {Object}    object
     * @param {?number}   object.Index
     * @param {Sentences} object.Sentences
     */
    constructor({ Index = null, Sentences }) {
        if ((Number.isInteger(Index) && Index > 0) || Index === null); else {
            throw new Error(`${typeof Index} ${Index} is not index or null.`);
        }
        if (Sentences instanceof SentencesClass); else {
            throw new Error(`${typeof Sentences} ${Sentences} is not Sentences.`);
        }

        /**
         * @private
         * @type    {?number}
         */
        this.__index = Index;
        /**
         * @private
         * @type    {Sentences}
         */
        this.__sentences = Sentences;
    }

    /**
     * @public
     * @type   {number}
     */
    get Index() {
        const index = this.__index;

        if (index === null) {
            throw new Error; // @todo
        }

        return index;
    }
    /**
     * @private
     * @type    {number}
     */
    get __Index() {
        return this.__index;
    }
    /**
     * @private
     * @type    {number}
     */
    set __Index(index) {
        if (Number.isInteger(index) && index > 0); else {
            throw new Error; // @todo
        }
        if (this.__index !== null) {
            throw new Error; // @todo
        }

        this.__index = index;
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
     * @returns {html.Element}
     */
    toHtml() {
        const index = this.Index;

        return (
            <tr id={`note-${index}`}>
                <td>
                    {index}.
                    <a href={`#note-reference-${index}`}>↑</a>
                </td>
                <td>
                    {this.Sentences.toHtml()}
                </td>
            </tr>
        );
    }
}


exports = module.exports = Note;


const html = require(`../html`);
const Sentences = require(`./sentences`);


const SentencesClass = Sentences;
