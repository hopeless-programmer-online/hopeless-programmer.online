import React from 'react'
import styles from './html5-badge.module.scss'

export default class HTML5Badge extends React.Component {
    public render() {
        return (
            <abbr className={styles.abbr} title='Hyper Text Markup Language'>
                <a href='https://en.wikipedia.org/wiki/HTML5'>HTML5</a>
            </abbr>
        )
    }
}
