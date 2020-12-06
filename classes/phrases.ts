import TextPhrase from "./text-phrase";

type Phrase = TextPhrase

export default class Phrases {
    readonly array : Array<Phrase>

    public constructor({ array } : { array : Array<Phrase> }) {
        this.array = array
    }
}
