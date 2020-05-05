/**
 * @extends {Array<Note>}
 */
class Notes extends Array {
    static get [Symbol.species]() {
        return Array;
    }

    /**
     * @param  {...Note} notes
     */
    constructor(...notes) {
        notes.forEach((note, index) => {
            if (note instanceof Note); else {
                throw new Error(`Element #${index} (${typeof note} ${String(note)}) is not a note.`);
            }
        });

        super(...notes);
    }

    /**
     * @public
     * @returns {Array<html.Element>}
     */
    toHtml() {
        return this.map(note => note.toHtml());
    }
}


exports = module.exports = Notes;


const html = require(`../html`);
const Note = require(`./note`);
