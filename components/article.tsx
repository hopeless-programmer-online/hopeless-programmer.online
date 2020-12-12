import React from 'react'
import Article from '../classes/article'
import ArticleDetailsComponent from './article-details'
import styles from './article.module.scss'
import Section from './section'
import SentencesComponent from './sentences'
import Sentences from './sentences'

type Props = { model : Article }

export default class ArticleComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props
        const notes = model.notes

        return (
            <article className={styles.article}>
                <header>
                    <h2>
                        {
                            <Sentences model={model.title}/>
                        }
                    </h2>
                </header>
                {
                    model.sections.map((section, key) =>
                        <Section model={section} key={key}/>
                    )
                }
                <footer>
                    {
                        notes.length === 0 ||
                        <ol>
                            {
                                notes.map(({ id, sentences }) =>
                                    <li id={`n-${id}`} key={id}>
                                        <a href={`#an-${id}`}>↑</a>
                                        {
                                            <SentencesComponent model={sentences}/>
                                        }
                                    </li>
                                )
                            }
                        </ol>
                    }
                    <ArticleDetailsComponent model={model.details}/>
                </footer>
            </article>
        )
    }
}
