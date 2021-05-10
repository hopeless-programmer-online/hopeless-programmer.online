import React from 'react'
import IdentifierLexeme from '../classes/identifier-lexeme'
import styles from './lexemes.module.scss'

type Props = { model : IdentifierLexeme }

export default class IdentifierLexemeComponent extends React.Component<Props> {
    public render() {
        const { text, role } = this.props.model
        const className =
            role === 'class'     ? styles.class     :
            role === 'function'  ? styles.function  :
            role === 'namespace' ? styles.namespace :
            role === 'variable'  ? styles.variable  :
            (() => { throw new Error})()

        return (
            <span className={className} data-text={text}>{text}</span>
        )
    }
}
