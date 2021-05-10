import React from 'react'
import CommentLexeme from '../classes/comment-lexeme'
import TextLexeme from '../classes/text-lexeme'
import TextLexemeComponent from './text-lexeme'
import CommentLexemeComponent from './comment-lexeme'
import KeywordLexeme from '../classes/keyword-lexeme'
import KeywordLexemeComponent from './keyword-lexeme'
import IdentifierLexeme from '../classes/identifier-lexeme'
import IdentifierLexemeComponent from './identifier-lexeme'
import LiteralLexeme from '../classes/literal-lexeme'
import LiteralLexemeComponent from './literal-lexeme'
import Lexemes from '../classes/lexemes'
import styles from './lexemes.module.scss'

type Props = { model : Lexemes }

export default class LexemesComponent extends React.Component<Props> {
    public render() {
        return (
            <span className={styles.lexemes}>
                {
                    this.props.model.array.map((lexeme, key) =>
                        lexeme instanceof IdentifierLexeme ? <IdentifierLexemeComponent model={lexeme} key={`${key}`}/> :
                        lexeme instanceof KeywordLexeme    ? <KeywordLexemeComponent    model={lexeme} key={`${key}`}/> :
                        lexeme instanceof CommentLexeme    ? <CommentLexemeComponent    model={lexeme} key={`${key}`}/> :
                        lexeme instanceof LiteralLexeme    ? <LiteralLexemeComponent    model={lexeme} key={`${key}`}/> :
                        lexeme instanceof TextLexeme       ? <TextLexemeComponent       model={lexeme} key={`${key}`}/> :
                        (() => { throw new Error })()
                    )
                }
            </span>
        )
    }
}
