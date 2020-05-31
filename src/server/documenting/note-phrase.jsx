const Phrase = require(`./phrase`);


class NotePhrase extends Phrase {
    /**
     * @param {Object} object
     * @param {Note}   object.Note
     */
    constructor({ Note }) {
        if (Note instanceof NoteClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Note}
         */
        this.__note = Note;
    }

    /**
     * @public
     * @type   {Note}
     */
    get Note() {
        return this.__note;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        const index = this.Note.Index;

        return (
            <sup id={`note-reference-${index}`}>
                <a href={`#note-${index}`}>{index}</a>
            </sup>
        );
    }
}


exports = module.exports = NotePhrase;


const html = require(`../html`);
const Note = require(`./note`);


const NoteClass = Note;
