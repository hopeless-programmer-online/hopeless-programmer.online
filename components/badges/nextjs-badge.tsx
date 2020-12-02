import React from 'react'
import Badge from '../badge'
import { NextDotJs } from '@icons-pack/react-simple-icons'
import styles from './nextjs-badge.module.scss'

export default class ReactBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
}

class Icon extends React.Component {
    public render() {
        return (
            <NextDotJs className={styles.next}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            <a href='https://en.wikipedia.org/wiki/Next.js'>
                Next.js
            </a>
        )
    }
}

