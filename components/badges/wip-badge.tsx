import React from 'react'
import { GiButterflyWarning } from 'react-icons/gi'
import styles from './wip-badge.module.scss'
import SecretBadge from '../secret-badge'

export default class WIPBadge extends SecretBadge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = '/wip'
}

class Icon extends React.Component {
    public render() {
        return (
            <GiButterflyWarning className={styles.wip}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'В розробці'
        )
    }
}
