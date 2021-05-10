import Phrases from "./phrases"
import WrapperPhrase from "./wrapper-phrase"

export type Href = string // @todo: replace with url?

export default class LinkPhrase extends WrapperPhrase {
    readonly href : Href

    public constructor({ href, phrases } : { href : Href, phrases : Phrases }) {
        super({ phrases })

        this.href = href
    }
}
