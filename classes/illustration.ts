import Code      from "./code";
import Paragraph from "./paragraph";
import Sentences from "./sentences";

type Title       = Sentences
type Description = Paragraph
type Target      = Code

export default class Illustration {
    private  __title      : Title | null
    readonly description : Description
    readonly target      : Target
    private  _id         : number | null = null

    public constructor({ title = null, description, target } : { title? : Title, description : Description, target : Target }) {
        this.__title     = title
        this.description = description
        this.target      = target
    }

    // to use only inside article
    public get _title() : Title | null {
        return this.__title
    }
    // to use only inside article
    public set _title(title : Title) {
        if (this.__title !== null) throw new Error

        this.__title = title
    }
    public get title() : Title {
        const title = this.__title

        if (title === null) throw new Error

        return title
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
        return this.title.notes.concat(this.description.notes)
    }
}
