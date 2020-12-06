import Code      from "./code";
import Paragraph from "./paragraph";
import Sentences from "./sentences";

type Title       = Sentences
type Description = Paragraph
type Target      = Code

export default class Illustration {
    readonly title       : Title
    readonly description : Description
    readonly target      : Target
    private  _id         : number | null = null

    public constructor({ title, description, target } : { title : Title, description : Description, target : Target }) {
        this.title       = title
        this.description = description
        this.target      = target
    }

    public get id() : number {
        if (this._id === null) throw new Error

        return this._id
    }
    public set id(id : number) {
        if (this._id !== null) throw new Error

        this._id = id
    }
}
