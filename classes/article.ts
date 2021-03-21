import ArticleDetails from "./article-details";
import Code from "./code";
import Illustration from "./illustration";
import Note from "./note-phrase";
import Section from "./section";
import Sentences from "./sentences";
import { toSentences } from "./shortcuts";
import persons from '../data/persons'
import TeXPhrase from "./tex-phrase";
import CodeComparison from "./code-comparison";

type Title = Sentences
type Sections = Array<Section>
type Notes = Array<Note>

export default class Article {
    readonly title : Title
    readonly sections : Sections
    readonly details : ArticleDetails

    public constructor({
        title,
        sections,
        details = null,
    } : {
        title : Title,
        sections : Sections,
        details? : ArticleDetails | null,
    }) {
        if (details === null) details = new ArticleDetails({
            author : persons.hopeless,
        })

        this.title = title
        this.sections = sections
        this.details = details

        sections.forEach((section, id) => section.id = id + 1)

        let codeExamples = 0
        let interactiveExamples = 0
        let texExamples = 0
        let examples = 0

        this.illustrations.forEach((illustration, id) => {
            if (illustration._title === null) {
                const { target } = illustration

                if (target instanceof Code || target instanceof CodeComparison) {
                    ++codeExamples

                    illustration._title = toSentences(`Приклад коду №${codeExamples}`)
                }
                else if (target instanceof TeXPhrase) {
                    ++texExamples

                    illustration._title = toSentences(`Рівняння №${texExamples}`)
                }
                else if (target instanceof Function) {
                    ++interactiveExamples

                    illustration._title = toSentences(`Інтерактивний приклад №${interactiveExamples}`)
                }
                else {
                    ++examples

                    illustration._title = toSentences(`Приклад №${examples}`)
                }
            }

            illustration.id = id + 1
        })
        this.notes.forEach((note, id) => note.id = id + 1)
    }

    public get notes() {
        const notes = this.sections.reduce<Notes>((notes, section) => notes.concat(section.notes), [])

        const nested = [
            ...notes,
            ...notes.reduce<Notes>((notes, note) => notes.concat(note.sentences.notes), [])
        ]
        const unique = nested.reduce<Notes>((notes, note) => notes.indexOf(note) === -1 ? notes.concat(note) : notes, [])

        return unique
    }
    public get illustrations() {
        return this.sections.reduce<Array<Illustration>>((illustrations, section) => illustrations.concat(section.illustrations), [])
    }
}
