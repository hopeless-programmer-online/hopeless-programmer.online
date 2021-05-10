import React from 'react'
import Badge from '../badge'
import { NodeDotJs } from '@icons-pack/react-simple-icons'
import styles from './nodejs-badge.module.scss'

export default class NodeJSBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'https://uk.wikipedia.org/wiki/Node.js'
}

class Icon extends React.Component {
    public render() {
        return (
            <NodeDotJs className={styles.npm}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'Node.js'
        )
    }
}
