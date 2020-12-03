import React from 'react'
import Section from '../classes/section'
import Paragraph from './paragraph'
import styles from './section.module.scss'
import Sentences from './sentences'

type Props = { model : Section }

export default class SectionComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <section className={styles.section}>
                <h3>
                    {
                        <Sentences model={model.title}/>
                    }
                </h3>
                {
                    model.parts.map((part, key) =>
                        <Paragraph model={part} key={key}/>
                    )
                }
            </section>
        )
    }
}
