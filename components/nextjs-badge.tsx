import React from 'react'
import styles from './nextjs-badge.module.scss'

export default class NextJSBadge extends React.Component {
    public render() {
        return (
            <a className={styles.a} href='https://en.wikipedia.org/wiki/Next.js'>Next.js</a>
        )
    }
}
