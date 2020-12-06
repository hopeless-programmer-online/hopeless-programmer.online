import Phrases from "./phrases";

export default class Sentence {
    readonly phrases : Phrases

    public constructor({ phrases } : { phrases : Phrases }) {
        this.phrases = phrases
    }
}
