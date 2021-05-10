import React from 'react'
import KeywordLexeme from '../classes/keyword-lexeme'
import styles from './lexemes.module.scss'

type Props = { model : KeywordLexeme }

export default class KeywordLexemeComponent extends React.Component<Props> {
    public render() {
        const { text } = this.props.model

        return (
            <span className={styles.keyword} data-text={text}>{text}</span>
        )
    }
}
