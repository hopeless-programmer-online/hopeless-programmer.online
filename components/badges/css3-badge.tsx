import React from 'react'
import Badge from '../badge'
import { Css3 } from '@icons-pack/react-simple-icons'
import styles from './css3-badge.module.scss'

export default class CSS3Badge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'https://en.wikipedia.org/wiki/CSS#CSS_3'
}

class Icon extends React.Component {
    public render() {
        return (
            <Css3 className={styles.css3}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            <abbr title='Cascading Style Sheets'>
                CSS3
            </abbr>
        )
    }
}
