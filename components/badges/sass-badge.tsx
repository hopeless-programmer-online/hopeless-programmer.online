import React from 'react'
import Badge from '../badge'
import { Sass } from '@icons-pack/react-simple-icons'
import styles from './sass-badge.module.scss'

export default class SASSBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
}

class Icon extends React.Component {
    public render() {
        return (
            <Sass className={styles.sass}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            <a href='https://en.wikipedia.org/wiki/Sass_(stylesheet_language)'>
                <abbr title='Syntactically Awesome Style Sheets'>
                    SASS
                </abbr>
            </a>
        )
    }
}
