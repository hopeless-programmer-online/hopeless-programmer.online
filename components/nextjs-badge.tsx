import React from 'react'
import styles from './nextjs-badge.module.scss'
import { NextDotJs } from '@icons-pack/react-simple-icons'

export default class NextJSBadge extends React.Component {
    public render() {
        return (
            <a className={styles.a} href='https://en.wikipedia.org/wiki/Next.js'>
                <NextDotJs color='#000000'/>
                Next.js
            </a>
        )
    }
}
