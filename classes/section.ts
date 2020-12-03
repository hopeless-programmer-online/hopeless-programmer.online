import Paragraph from "./paragraph";

type Part = Paragraph
type Parts = Array<Part>

export default class Section {
    readonly parts : Parts

    public constructor({ parts } : { parts : Parts }) {
        this.parts = parts
    }
}
