import React from 'react'
import Badge from '../badge'
import { ReactJs } from '@icons-pack/react-simple-icons'
import styles from './react-badge.module.scss'

export default class ReactBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'https://en.wikipedia.org/wiki/React_(web_framework)'
}

class Icon extends React.Component {
    public render() {
        return (
            <ReactJs className={styles.react}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'React'
        )
    }
}

