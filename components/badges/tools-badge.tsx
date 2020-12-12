import React from 'react'
import Badge from '../badge'
import { FaTools } from 'react-icons/fa'
import styles from './tools-badge.module.scss'

export default class ToolsBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    // protected href = ''
}

class Icon extends React.Component {
    public render() {
        return (
            <FaTools className={styles.person}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'Про технології'
        )
    }
}
