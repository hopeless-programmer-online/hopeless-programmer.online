import Lexeme from "./lexeme"

export type Text = string

export default class TextLexeme extends Lexeme {
    readonly text : Text

    public constructor({ text } : { text : Text }) {
        super()

        this.text = text
    }
}
