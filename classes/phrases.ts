import Link from "./link-phrase";
import Note from "./note-phrase";
import Phrase from "./phrase";

export default class Phrases {
    readonly array : Array<Phrase>

    public constructor({ array = [] } : { array : Array<Phrase> } = { array : [] }) {
        this.array = array
    }

    public get notes() {
        return this.array.reduce<Array<Note>>((notes, phrase) => notes.concat(
            phrase instanceof Note ? [ phrase ] :
            phrase instanceof Link ? phrase.phrases.notes :
            []
        ), [])
    }

    public concat(other : Phrases) {
        return new Phrases({ array : [ ...this.array, ...other.array ] })
    }
}
