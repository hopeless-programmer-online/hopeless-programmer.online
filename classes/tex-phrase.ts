import Phrase from "./phrase";
import Phrases from "./phrases";

export type Title  = Phrases
export type Source = string

export default class TeXPhrase extends Phrase {
    readonly source : Source

    public constructor({ source } : { source : Source }) {
        super()

        this.source = source
    }
}
