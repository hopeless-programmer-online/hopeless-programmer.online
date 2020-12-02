import React from 'react'
import styles from './article.module.scss'

export default class Article extends React.Component {
    public render() {
        return (
            <article className={styles.article}>
                <header>
                    <h2>
                        Назва статті.
                    </h2>
                </header>
                <section>
                    <h3>Частина №1</h3>
                    <p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                        <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                        <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span>
                        <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span>
                    </p>
                </section>
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
