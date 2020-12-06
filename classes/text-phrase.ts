import Phrase from "./phrase"

type Text = string

export default class TextPhrase extends Phrase {
    readonly text : Text

    public constructor({ text } : { text : Text }) {
        super()

        this.text = text
    }
}
