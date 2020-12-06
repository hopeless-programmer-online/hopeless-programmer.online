import React from 'react'
import Illustration from '../classes/illustration'
import Paragraph from '../classes/paragraph'
import Section from '../classes/section'
import IllustrationComponent from './illustration'
import ParagraphComponent from './paragraph'
import styles from './section.module.scss'
import Sentences from './sentences'

type Props = { model : Section }

export default class SectionComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props
        const id = `s-${model.id}`

        return (
            <section id={id} className={styles.section}>
                <h3>
                    <a href={`#${id}`}>§</a>
                    {
                        <Sentences model={model.title}/>
                    }
                </h3>
                {
                    model.parts.map((part, key) =>
                        part instanceof Paragraph    ? <ParagraphComponent model={part} key={key}/> :
                        part instanceof Illustration ? <IllustrationComponent model={part} key={key}/> :
                        (() => { throw new Error })()
                    )
                }
            </section>
        )
    }
}
