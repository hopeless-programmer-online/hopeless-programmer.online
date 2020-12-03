type Text = string

export default class TextPhrase {
    readonly text : Text

    public constructor({ text } : { text : Text }) {
        this.text = text
    }
}
