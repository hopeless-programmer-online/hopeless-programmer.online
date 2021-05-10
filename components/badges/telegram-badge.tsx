import React from 'react'
import Badge from '../badge'
import { Telegram } from '@icons-pack/react-simple-icons'
import styles from './telegram-badge.module.scss'

export default class TelegramBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
}

class Icon extends React.Component {
    public render() {
        return (
            <Telegram className={styles.telegram}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'Telegram'
        )
    }
}
