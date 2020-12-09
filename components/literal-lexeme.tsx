import React from 'react'
import LiteralLexeme from '../classes/literal-lexeme'
import styles from './lexemes.module.scss'

type Props = { model : LiteralLexeme }

export default class LiteralLexemeComponent extends React.Component<Props> {
    public render() {
        const { text, type } = this.props.model
        const className =
            type === 'boolean' ? styles.boolean :
            type === 'number'  ? styles.number  :
            type === 'string'  ? styles.string  :
            type === 'regex'   ? styles.regex   :
            (() => { throw new Error})()

        return (
            <span className={className} data-text={text}>{text}</span>
        )
    }
}
