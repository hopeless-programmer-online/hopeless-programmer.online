import Phrase from "./phrase";

export type Source = string

export default class TeXPhrase extends Phrase {
    readonly source : Source

    public constructor({ source } : { source : Source }) {
        super()

        this.source = source
    }
}
