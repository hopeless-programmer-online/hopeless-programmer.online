import React from 'react'
import { BiBookReader } from 'react-icons/bi'
import styles from './counter.module.scss'

export type Props = {
    value? : number,
}

export default abstract class Counter extends React.Component<Props> {
    public static defaultProps : Props = {
        value : 0,
    }

    public render() {
        return (
            <figure className={styles.badge}>
                <span>
                    <BiBookReader/>
                </span>
                <figcaption>
                    { this.props.value || 0 }
                </figcaption>
            </figure>
        )
    }
}
