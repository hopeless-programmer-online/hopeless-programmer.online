import Person from "./person";
import Sentences from "./sentences";

export default class Quote {
    readonly author : Person
    readonly sentences : Sentences

    public constructor({ author, sentences } : { author : Person, sentences : Sentences }) {
        this.author = author
        this.sentences = sentences
    }

    public get notes() {
        return this.sentences.notes
    }
}
