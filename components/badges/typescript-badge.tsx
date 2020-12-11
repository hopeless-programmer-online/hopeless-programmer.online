import React from 'react'
import Badge from '../badge'
import { Typescript } from '@icons-pack/react-simple-icons'
import styles from './typescript-badge.module.scss'

export default class TypescriptBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'https://en.wikipedia.org/wiki/TypeScript'
}

class Icon extends React.Component {
    public render() {
        return (
            <Typescript className={styles.typescript}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'TypeScript'
        )
    }
}
