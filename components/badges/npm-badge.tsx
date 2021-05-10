import React from 'react'
import Badge from '../badge'
import { Npm } from '@icons-pack/react-simple-icons'
import styles from './npm-badge.module.scss'

export default class NPMBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'https://en.wikipedia.org/wiki/Npm_(software)'
}

class Icon extends React.Component {
    public render() {
        return (
            <Npm className={styles.npm}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            <abbr title='Node Package Manager'>
                NPM
            </abbr>
        )
    }
}
