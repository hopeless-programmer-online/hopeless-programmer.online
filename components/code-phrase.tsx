import React from 'react'
import CodePhrase from '../classes/code-phrase'
import styles from './code-phrase.module.scss'
import styles2 from './sentence.module.scss'
import LexemesComponent from './lexemes'

type Props = { model : CodePhrase }

export default class CodePhraseComponent extends React.Component<Props> {
    public render() {
        return (
            <code className={`${styles.code} ${styles2.code}`}>
                {
                    <LexemesComponent model={this.props.model.lexemes}/>
                }
            </code>
        )
    }
}
