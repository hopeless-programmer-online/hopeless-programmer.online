import Illustration from "./illustration";
import List from "./list";
import Note from "./note-phrase";
import Paragraph from "./paragraph";
import Sentences from "./sentences";

export type SectionPart = Paragraph | List | Illustration
export type SectionParts = Array<SectionPart>

type Title = Sentences
type Parts = SectionParts

export default class Section {
    readonly title : Title
    readonly parts : Parts
    private  _id   : number | null = null

    public constructor({ title, parts } : { title : Title, parts : Parts }) {
        this.title = title
        this.parts = parts
    }

    public get id() : number {
        if (this._id === null) throw new Error

        return this._id
    }
    public set id(id : number) {
        if (this._id !== null) throw new Error

        this._id = id
    }
    public get notes() {
        return this.parts.reduce<Array<Note>>((notes, part) => notes.concat(part.notes), [])
    }
    public get illustrations() {
        return this.parts
            .filter(part => part instanceof Illustration)
            .map(part => part as Illustration)
    }
}
