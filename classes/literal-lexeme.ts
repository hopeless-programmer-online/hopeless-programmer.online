import TextLexeme, { Text } from "./text-lexeme"

export type Type = 'boolean' | 'number' | 'string' | 'regex'

export default class LiteralLexeme extends TextLexeme {
    readonly type : Type

    public constructor({ text, type } : { text : Text, type : Type }) {
        super({ text })

        this.type = type
    }
}
