import Phrase from "./phrase";

export default class Phrases {
    readonly array : Array<Phrase>

    public constructor({ array } : { array : Array<Phrase> }) {
        this.array = array
    }
}
