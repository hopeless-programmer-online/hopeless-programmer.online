import Note from "./note-phrase";
import Sentences from "./sentences";

type Element = Sentences
type Elements = Array<Element>

export default class List {
    readonly elements : Elements

    public constructor({ elements } : { elements : Elements }) {
        this.elements = elements
    }

    public get notes() {
        return this.elements.reduce<Array<Note>>((notes, element) => notes.concat(element.notes), [])
    }
}
