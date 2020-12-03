import React from 'react'
import Article from '../classes/article'
import styles from './article.module.scss'
import Section from './section'
import Sentences from './sentences'

type Props = { model : Article }

export default class ArticleComponent extends React.Component<Props> {
    public render() {
        const { model } = this.props
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
                    <details>
                        <summary>Деталі</summary>
                        <dl>
                            <dt>Дата</dt>
                            <dd><time>2020/01/02</time></dd>
                            <dt>Автор</dt>
                            <dd>Безнадійний Програміст</dd>
                            <dt>Переклад</dt>
                            <dd>Безнадійний Програміст</dd>
                            <dt>Редагування</dt>
                            <dd>Безнадійний Програміст</dd>
                        </dl>
                        <h4>Історія правок</h4>
                        <ol>
                            <li>Правка</li>
                            <li>Правка</li>
                            <li>Правка</li>
                        </ol>
                    </details>
                </footer>
            </article>
        )
    }
}
