import React from 'react'
import styles from './badge.module.scss'

export default abstract class HTML5Badge extends React.Component {
    protected abstract get Icon() : React.ComponentType
    protected abstract get Caption() : React.ComponentType
    protected href : string = ''

    public render() {
        const { Icon, Caption, href } = this

        return (
            <a className={styles.badge} href={href}>
                <figure>
                    <span>
                        <Icon/>
                    </span>
                    <figcaption>
                        <Caption/>
                    </figcaption>
                </figure>
            </a>
        )
    }
}
