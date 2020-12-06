import React from 'react'
import Sentence from '../classes/sentence'
import PhrasesComponent from './phrases'
import styles from './sentence.module.scss'

type Props = { model : Sentence }

export default class SentenceComponent extends React.Component<Props> {
    public render() {
        return (
            <span className={styles.sentence}>
                {
                    <PhrasesComponent model={this.props.model.phrases}/>
                }
            </span>
        )
    }
}
