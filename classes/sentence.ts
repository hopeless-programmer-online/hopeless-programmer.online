import TextPhrase from "./text-phrase";

type Phrase = TextPhrase
type Phrases = Array<Phrase>

export default class Sentence {
    readonly phrases : Phrases

    public constructor({ phrases } : { phrases : Phrases }) {
        this.phrases = phrases
    }
}
