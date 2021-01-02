import React from 'react'
import Badge from '../badge'
import { AiOutlineGlobal } from 'react-icons/ai'
import styles from './about-this-site-badge.module.scss'

export default class AboutThisSiteBadge extends Badge {
    protected Icon = Icon
    protected Caption = Caption
    protected href = '/about'
}

class Icon extends React.Component {
    public render() {
        return (
            <AiOutlineGlobal className={styles.globe}/>
        )
    }
}
class Caption extends React.Component {
    public render() {
        return (
            'Про цей сайт'
        )
    }
}
