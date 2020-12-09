import Lexeme from "./lexeme"

export default class Lexemes {
    readonly array : Array<Lexeme>

    public constructor({ array } : { array : Array<Lexeme> }) {
        this.array = array
    }
}
