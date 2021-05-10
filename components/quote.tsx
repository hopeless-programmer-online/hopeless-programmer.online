import React from 'react'
import Quote from '../classes/quote'
import PersonComponent from './person'
import styles from './quote.module.scss'
import SentencesComponent from './sentences'

type Props = { model : Quote }

export default class QuoteComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <figure className={styles.quote}>
                <blockquote>
                    { <SentencesComponent model={model.sentences}/> }
                </blockquote>
                <figcaption>
                    <PersonComponent model={model.author}/>
                </figcaption>
            </figure>
        )
    }
}
