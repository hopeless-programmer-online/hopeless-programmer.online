import React from 'react'
import Sentence from '../classes/sentence'
import styles from './sentence.module.scss'
import TextPhraseComponent from './text-phrase'

type Props = { model : Sentence }

export default class SentenceComponent extends React.Component<Props> {
    public render() {
        return (
            <span className={styles.sentence}>
                {
                    this.props.model.phrases.map((phrase, key) =>
                        <TextPhraseComponent model={phrase} key={key}/>
                    )
                }
            </span>
        )
    }
}
