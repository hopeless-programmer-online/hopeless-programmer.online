import React from 'react'
import styles from './react-badge.module.scss'
import { ReactJs } from '@icons-pack/react-simple-icons'

export default class ReactBadge extends React.Component {
    public render() {
        return (
            <a className={styles.a} href='https://en.wikipedia.org/wiki/React_(web_framework)'>
                <ReactJs color='#61DAFB'/>
                React
            </a>
        )
    }
}
