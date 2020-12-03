import Section from "./section";

type Sections = Array<Section>

export default class Article {
    readonly sections : Sections

    public constructor({ sections } : { sections : Sections }) {
        this.sections = sections
    }
}
