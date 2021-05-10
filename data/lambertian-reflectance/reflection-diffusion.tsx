import React from 'react'
import Reflection from './reflection'
import Diffusion from './diffusion'
import styles from './reflection-diffusion.module.scss'

export default class ReflectionDiffusion extends React.Component {
    public render() {
        return (
            <figure className={styles.container}>
                <Reflection/>
                <Diffusion/>
            </figure>
        )
    }
}
