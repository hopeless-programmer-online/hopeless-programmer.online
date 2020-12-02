import React from 'react'
import Badge from '../badge'
import { Twitter } from '@icons-pack/react-simple-icons'
import styles from './twitter-badge.module.scss'

export default class TwitterBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
}

class Icon extends React.Component {
    public render() {
        return (
            <Twitter className={styles.twitter}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            <a href=''>
                Twitter
            </a>
        )
    }
}
