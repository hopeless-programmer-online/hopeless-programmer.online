import Sentence from "./sentence";

export default class Sentences {
    readonly array : Array<Sentence>

    public constructor({ array } : { array : Array<Sentence> }) {
        this.array = array
    }
}
