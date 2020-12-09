import Illustration from "./illustration";
import Phrase from "./phrase";
import Phrases from "./phrases";

export type Title  = Phrases
export type Target = Illustration

export default class ReferencePhrase extends Phrase {
    private  _title : Title | null
    readonly target : Target

    public constructor({ title = null, target } : { title? : Title, target : Target }) {
        super()

        this._title = title
        this.target = target
    }

    public get title() : Title {
        return this._title === null
            ? this.target.title.phrases
            : this._title
    }
}
