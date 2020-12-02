import React from 'react'
import styles from './html5-badge.module.scss'
import { Html5 } from '@icons-pack/react-simple-icons'

export default class HTML5Badge extends React.Component {
    public render() {
        return (
            <a className={styles.a} href='https://en.wikipedia.org/wiki/HTML5'>
                <Html5 color='#E34F26'/>
                <abbr title='Hyper Text Markup Language'>
                    HTML5
                </abbr>
            </a>
        )
    }
}
