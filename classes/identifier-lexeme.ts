import TextLexeme, { Text } from "./text-lexeme"

export type Role = 'variable' | 'class' | 'function' | 'namespace'

export default class IdentifierLexeme extends TextLexeme {
    readonly role : Role

    public constructor({ text, role } : { text : Text, role : Role }) {
        super({ text })

        this.role = role
    }
}
