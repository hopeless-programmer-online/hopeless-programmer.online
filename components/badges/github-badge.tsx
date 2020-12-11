import React from 'react'
import Badge from '../badge'
import { Github } from '@icons-pack/react-simple-icons'
import styles from './github-badge.module.scss'

export default class GithubBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
}

class Icon extends React.Component {
    public render() {
        return (
            <Github className={styles.github}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'GitHub'
        )
    }
}
