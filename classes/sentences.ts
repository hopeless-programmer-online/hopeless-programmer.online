import Sentence from "./sentence";
import Note from "./note-phrase"
import Phrases from "./phrases";

export default class Sentences {
    readonly array : Array<Sentence>

    public constructor({ array } : { array : Array<Sentence> }) {
        this.array = array
    }

    public get phrases() {
        return this.array.reduce<Phrases>((phrases, sentence) => phrases.concat(sentence.phrases), new Phrases)
    }
    public get notes() {
        return this.array.reduce<Array<Note>>((notes, sentence) => notes.concat(sentence.notes), [])
    }
}
