import TextLexeme from "./text-lexeme"

type Lexeme = TextLexeme

export default class Lexemes {
    readonly array : Array<Lexeme>

    public constructor({ array } : { array : Array<Lexeme> }) {
        this.array = array
    }
}
