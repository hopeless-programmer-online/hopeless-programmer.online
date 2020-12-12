import React from 'react'
import Model from '../classes/article'
import Paragraph from '../classes/paragraph'
import ParagraphComponent from './paragraph'
import SentencesComponent from './sentences'
import styles from './article-link.module.scss'
import YearMonthDate from './year-month-date'

type Props = { model : Model, href : string }

export default class ArticleLink extends React.Component<Props> {
    public render() {
        const { model } = this.props

        return (
            <article className={styles.article}>
                <header>
                    <h2>
                        {
                            <SentencesComponent model={model.title}/>
                        }
                    </h2>
                </header>
                <ParagraphComponent model={model.sections[0].parts[0] as Paragraph}/>
                <footer>
                    <YearMonthDate model={model.details.created}/>
                    <a className={styles.link} href={this.props.href}>Читати</a>
                </footer>
            </article>
        )
    }
}
