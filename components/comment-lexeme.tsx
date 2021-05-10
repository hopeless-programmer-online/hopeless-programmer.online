import React from 'react'
import CommentLexeme from '../classes/comment-lexeme'
import styles from './lexemes.module.scss'

type Props = { model : CommentLexeme }

export default class CommentLexemeComponent extends React.Component<Props> {
    public render() {
        return (
            <span className={styles.comment}>{this.props.model.text}</span>
        )
    }
}
