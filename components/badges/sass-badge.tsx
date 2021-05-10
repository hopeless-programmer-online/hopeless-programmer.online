import React from 'react'
import Badge from '../badge'
import { Sass } from '@icons-pack/react-simple-icons'
import styles from './sass-badge.module.scss'

export default class SASSBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = 'https://en.wikipedia.org/wiki/Sass_(stylesheet_language)'
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
            <abbr title='Syntactically Awesome Style Sheets'>
                SASS
            </abbr>
        )
    }
}
