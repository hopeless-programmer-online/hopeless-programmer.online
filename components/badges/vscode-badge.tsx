import React from 'react'
import Badge from '../badge'
import { Visualstudiocode } from '@icons-pack/react-simple-icons'
import styles from './vscode-badge.module.scss'

export default class VSCodeBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'https://uk.wikipedia.org/wiki/Visual_Studio_Code'
}

class Icon extends React.Component {
    public render() {
        return (
            <Visualstudiocode className={styles.vscode}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            <abbr title='Visual Studio Code'>
                VS Code
            </abbr>
        )
    }
}
