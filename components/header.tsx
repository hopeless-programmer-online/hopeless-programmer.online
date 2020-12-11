import React from 'react'
import { cpp, kw, p } from '../classes/shortcuts'
import styles from './header.module.scss'
import ParagraphComponent from './paragraph'

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
                        <ParagraphComponent model={p('Коли не можеш оголосити змінну ', cpp(kw('case')), ', тому що це службове слово.')}/>
                    </figcaption>
                </figure>
            </header>
        )
    }
}
