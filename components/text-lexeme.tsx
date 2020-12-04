import React from 'react'
import TextLexeme from '../classes/text-lexeme'

type Props = { model : TextLexeme }

export default class TextLexemeComponent extends React.Component<Props> {
    public render() {
        return (
            this.props.model.text
        )
    }
}
