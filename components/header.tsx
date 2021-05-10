import React from 'react'
import { cpp, js, kw, p, sen } from '../classes/shortcuts'
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
                        {captions[ floor(random() * captions.length) ]}
                    </figcaption>
                </figure>
            </header>
        )
    }
}

const { floor, random } = Math

const captions = [
    ...[
        ...[ 'auto', 'break', 'case', 'catch', 'char', 'class', 'const', 'continue', 'default', 'delete', 'double', 'else', 'explicit', 'new', 'public', 'return', 'this', 'virtual', 'template', 'while' ].map(keyword =>
            cpp(kw(keyword))
        ),
        ...[ 'var', 'break', 'case', 'catch', 'class', 'const', 'continue', 'default', 'else', 'new', 'public', 'return', 'this', 'while', 'interface', 'abstract' ].map(keyword =>
            js(kw(keyword))
        ),
    ].map(keyword =>
        <ParagraphComponent model={p(sen('Коли не можеш оголосити змінну ', keyword, ', тому що це службове слово.'))}/>
    ),
]
