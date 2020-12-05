import React from 'react'
import TextLexeme from '../classes/text-lexeme'
import styles from './code.module.scss'

type Props = { model : TextLexeme }

export default class CommentLexemeComponent extends React.Component<Props> {
    public render() {
        return (
            <span className={styles.comment}>{this.props.model.text}</span>
        )
    }
}
