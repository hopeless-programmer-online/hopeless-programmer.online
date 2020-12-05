import React from 'react'
import Code from '../classes/code'
import CommentLexeme from '../classes/comment-lexeme'
import TextLexeme from '../classes/text-lexeme'
import styles from './code.module.scss'
import TextLexemeComponent from './text-lexeme'
import CommentLexemeComponent from './comment-lexeme'

type Props = { model : Code }

export default class CodeComponent extends React.Component<Props> {
    public render() {
        return (
            <code className={styles.code}>
                {
                    this.props.model.lines.reduce((lines, line, key) => [ ...lines,
                        <span key={`${key}-index`}>{key + 1}</span>,
                        <span key={`${key}-content`}>
                            {
                                line.array.map((lexeme, key) =>
                                    lexeme instanceof CommentLexeme ? <CommentLexemeComponent model={lexeme} key={`${key}`}/> :
                                    lexeme instanceof TextLexeme    ? <TextLexemeComponent model={lexeme} key={`${key}`}/>    :
                                    (() => { throw new Error })()
                                )
                            }
                        </span>,
                        <br key={`${key}-br`}/>
                    ], [])
                }
            </code>
        )
    }
}
