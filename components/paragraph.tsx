import React from 'react'
import Paragraph from '../classes/paragraph'
import styles from './paragraph.module.scss'
import SentenceComponent from './sentence'

type Props = { model : Paragraph }

export default class ParagraphComponent extends React.Component<Props> {
    public render() {
        return (
            <p className={styles.paragraph}>
                {
                    this.props.model.sentences.map((sentence, key) =>
                        <SentenceComponent model={sentence} key={key}/>
                    )
                }
            </p>
        )
    }
}
