type Text = string

export default class TextLexeme {
    readonly text : Text

    public constructor({ text } : { text : Text }) {
        this.text = text
    }
}
