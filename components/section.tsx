import React from 'react'
import Section from '../classes/section'
import ParagraphComponent from './paragraph'
import styles from './section.module.scss'

type Props = { model : Section }

export default class SectionComponent extends React.Component<Props> {
    public render() {
        return (
            <section className={styles.section}>
                <h3>Частина №1</h3>
                {
                    this.props.model.parts.map((part, key) =>
                        <ParagraphComponent model={part} key={key}/>
                    )
                }
            </section>
        )
    }
}
