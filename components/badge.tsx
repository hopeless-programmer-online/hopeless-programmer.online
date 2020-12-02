import React from 'react'
import styles from './badge.module.scss'

export default abstract class HTML5Badge extends React.Component {
    protected abstract get Icon() : React.ComponentType
    protected abstract get Caption() : React.ComponentType

    public render() {
        const { Icon, Caption } = this

        return (
            <figure className={styles.figure}>
                <Icon/>
                <figcaption>
                    <Caption/>
                </figcaption>
            </figure>
        )
    }
}
