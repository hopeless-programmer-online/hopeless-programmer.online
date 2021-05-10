import React from 'react'
import Badge from '../badge'
import { FaUserInjured } from 'react-icons/fa'
import styles from './about-me-badge.module.scss'

export default class AboutMeBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    // protected href = 'https://en.wikipedia.org/wiki/CSS#CSS_3'
}

class Icon extends React.Component {
    public render() {
        return (
            <FaUserInjured className={styles.person}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'Про автора'
        )
    }
}
