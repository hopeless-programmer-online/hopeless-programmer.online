import Phrase from "./phrase";
import Sentences from "./sentences";

export default class NotePhrase extends Phrase {
    readonly sentences : Sentences
    private  _id       : number | null = null

    public constructor({ sentences } : { sentences : Sentences }) {
        super()

        this.sentences = sentences
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
