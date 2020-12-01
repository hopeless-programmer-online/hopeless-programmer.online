import React from 'react'
import styles from './header.module.scss'

export default class Header extends React.Component {
    public render() {
        return (
            <header className={styles.header}>
                <figure>
                    <a href="/">
                        <img src="/but_i.png"/>
                    </a>
                    <figcaption>
                        <h1 className={styles.h1}>
                            Безнадійний Програміст
                        </h1>
                        <p>
                            Коли не можеш оголосити змінну <code>case</code>, тому що це службове слово.
                        </p>
                    </figcaption>
                </figure>
            </header>
        )
    }
}
