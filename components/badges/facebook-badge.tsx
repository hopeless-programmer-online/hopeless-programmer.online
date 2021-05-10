import React from 'react'
import Badge from '../badge'
import { Facebook } from '@icons-pack/react-simple-icons'
import styles from './facebook-badge.module.scss'

export default class FacebookBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
}

class Icon extends React.Component {
    public render() {
        return (
            <Facebook className={styles.facebook}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'Facebook'
        )
    }
}
