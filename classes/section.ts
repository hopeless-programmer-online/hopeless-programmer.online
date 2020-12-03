import Illustration from "./illustration";
import Paragraph from "./paragraph";
import Sentences from "./sentences";

type Title = Sentences
type Part = Paragraph | Illustration
type Parts = Array<Part>

export default class Section {
    readonly title : Title
    readonly parts : Parts

    public constructor({ title, parts } : { title : Title, parts : Parts }) {
        this.title = title
        this.parts = parts
    }
}
