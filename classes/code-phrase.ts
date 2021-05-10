import { CodeLanguage as Language } from "./code-language"
import Lexemes from "./lexemes"
import Phrase from "./phrase"

export default class CodePhrase extends Phrase {
    readonly language : Language
    readonly lexemes  : Lexemes

    public constructor({ language, lexemes } : { language : Language, lexemes : Lexemes }) {
        super()

        this.language = language
        this.lexemes  = lexemes
    }
}
