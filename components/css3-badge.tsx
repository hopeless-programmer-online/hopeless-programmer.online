import React from 'react'
import styles from './css3-badge.module.scss'

export default class CSS3Badge extends React.Component {
    public render() {
        return (
            <abbr className={styles.abbr} title='Cascading Style Sheets'>
                <a href='https://en.wikipedia.org/wiki/CSS#CSS_3'>CSS3</a>
            </abbr>
        )
    }
}
