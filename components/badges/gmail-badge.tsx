import React from 'react'
import Badge from '../badge'
import { Gmail } from '@icons-pack/react-simple-icons'
import styles from './gmail-badge.module.scss'

export default class GMailBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'mailto:me@hopeless-programmer.online'
}

class Icon extends React.Component {
    public render() {
        return (
            <Gmail className={styles.gmail}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'Mail'
        )
    }
}
