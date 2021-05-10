import { ComponentType } from 'react'
import Phrase from "./phrase";

export type Target = ComponentType

export default class ReactPhrase extends Phrase {
    readonly target : Target

    public constructor({ target } : { target : Target }) {
        super()

        this.target = target
    }
}
