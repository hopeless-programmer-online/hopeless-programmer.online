import React from 'react'
import NotePhrase from '../classes/note-phrase'

type Props = { model : NotePhrase }

export default class NotePhraseComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props
        const id = `n-${model.id}`

        return (
            <sup id={`a${id}`}>
                <small>
                    <a href={`#${id}`}>{model.id}</a>
                </small>
            </sup>
        )
    }
}
