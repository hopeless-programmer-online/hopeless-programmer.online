import React from 'react'
import TextPhrase from '../classes/text-phrase'

type Props = { model : TextPhrase }

export default class TextPhraseComponent extends React.Component<Props> {
    public render() {
        return (
            this.props.model.text
        )
    }
}
