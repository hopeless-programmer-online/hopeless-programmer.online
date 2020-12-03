import Sentences from "./sentences";

export default class Paragraph {
    readonly sentences : Sentences

    public constructor({ sentences } : { sentences : Sentences }) {
        this.sentences = sentences
    }
}
