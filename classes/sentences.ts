import Sentence from "./sentence";
import Note from "./note-phrase"

export default class Sentences {
    readonly array : Array<Sentence>

    public constructor({ array } : { array : Array<Sentence> }) {
        this.array = array
    }

    public get notes() {
        return this.array.reduce<Array<Note>>((notes, sentence) => notes.concat(sentence.notes), [])
    }
}
