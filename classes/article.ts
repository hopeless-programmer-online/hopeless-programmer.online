import Section from "./section";
import Sentences from "./sentences";

type Title = Sentences
type Sections = Array<Section>

export default class Article {
    readonly title : Title
    readonly sections : Sections

    public constructor({ title, sections } : { title : Title, sections : Sections }) {
        this.title = title
        this.sections = sections

        sections.forEach((section, id) => section.id = id + 1)
    }
}
