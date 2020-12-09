import Code from "./code";
import Illustration from "./illustration";
import Note from "./note-phrase";
import Section from "./section";
import Sentences from "./sentences";
import { toSentences } from "./shortcuts";

type Title = Sentences
type Sections = Array<Section>

export default class Article {
    readonly title : Title
    readonly sections : Sections

    public constructor({ title, sections } : { title : Title, sections : Sections }) {
        this.title = title
        this.sections = sections

        sections.forEach((section, id) => section.id = id + 1)

        let codeExamples = 0

        this.illustrations.forEach((illustration, id) => {
            if (illustration._title === null) {
                if (illustration.target instanceof Code) {
                    ++codeExamples

                    illustration._title = toSentences(`Приклад коду №${codeExamples}`)
                }
            }

            illustration.id = id + 1
        })
        this.notes.forEach((note, id) => note.id = id + 1)
    }

    public get notes() {
        return this.sections.reduce<Array<Note>>((notes, section) => notes.concat(section.notes), [])
    }
    public get illustrations() {
        return this.sections.reduce<Array<Illustration>>((illustrations, section) => illustrations.concat(section.illustrations), [])
    }
}
