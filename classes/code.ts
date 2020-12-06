import { CodeLanguage } from "./code-language";
import Lexemes from "./lexemes";

type Language = CodeLanguage
type Line = Lexemes
type Lines = Array<Line>

export default class Code {
    readonly language : Language
    readonly lines : Lines

    public constructor({ language, lines } : { language : Language, lines : Lines }) {
        this.language = language
        this.lines = lines
    }
}
