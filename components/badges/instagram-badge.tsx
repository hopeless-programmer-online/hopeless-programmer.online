import React from 'react'
import Badge from '../badge'
import { Instagram } from '@icons-pack/react-simple-icons'
import styles from './instagram-badge.module.scss'

export default class InstagramBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
}

class Icon extends React.Component {
    public render() {
        return (
            <Instagram className={styles.instagram}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            <a href=''>
                Instagram
            </a>
        )
    }
}
