import Phrase from "./phrase";
import Phrases from "./phrases";

export type Href = string // @todo: replace with url?

export default class LinkPhrase extends Phrase {
    readonly href    : Href
    readonly phrases : Phrases

    public constructor({ href, phrases } : { href : Href, phrases : Phrases }) {
        super()

        this.href    = href
        this.phrases = phrases
    }
}
