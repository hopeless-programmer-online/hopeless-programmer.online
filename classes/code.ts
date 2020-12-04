import Lexemes from "./lexemes";

type Line = Lexemes
type Lines = Array<Line>

export default class Code {
    readonly lines : Lines

    public constructor({ lines } : { lines : Lines }) {
        this.lines = lines
    }
}
