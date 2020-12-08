import Sentences from "./sentences";

export default class Paragraph {
    readonly sentences : Sentences

    public constructor({ sentences } : { sentences : Sentences }) {
        this.sentences = sentences
    }

    public get notes() {
        return this.sentences.notes
    }
}
