import Sentence from "./sentence";

type Sentences = Array<Sentence>

export default class Paragraph {
    readonly sentences : Sentences

    public constructor({ sentences } : { sentences : Sentences }) {
        this.sentences = sentences
    }
}
