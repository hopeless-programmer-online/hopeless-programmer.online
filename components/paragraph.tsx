import React from 'react'
import Paragraph from '../classes/paragraph'
import styles from './paragraph.module.scss'
import SentencesComponent from './sentences'

type Props = { model : Paragraph }

export default class ParagraphComponent extends React.Component<Props> {
    public render() {
        return (
            <p className={styles.paragraph}>
                {
                    <SentencesComponent model={this.props.model.sentences}/>
                }
            </p>
        )
    }
}
