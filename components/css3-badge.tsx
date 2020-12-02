import React from 'react'
import styles from './css3-badge.module.scss'
import { Css3 } from '@icons-pack/react-simple-icons'

export default class CSS3Badge extends React.Component {
    public render() {
        return (
            <a href='https://en.wikipedia.org/wiki/CSS#CSS_3'>
                <Css3 color='#1572B6'/>
                <abbr className={styles.abbr} title='Cascading Style Sheets'>
                    CSS3
                </abbr>
            </a>
        )
    }
}
