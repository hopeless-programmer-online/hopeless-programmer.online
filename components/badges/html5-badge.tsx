import React from 'react'
import Badge from '../badge'
import { Html5 } from '@icons-pack/react-simple-icons'
import styles from './html5-badge.module.scss'

export default class HTML5Badge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'https://en.wikipedia.org/wiki/HTML5'
}

class Icon extends React.Component {
    public render() {
        return (
            <Html5 className={styles.html5}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            <abbr title='Hyper Text Markup Language'>
                HTML5
            </abbr>
        )
    }
}
