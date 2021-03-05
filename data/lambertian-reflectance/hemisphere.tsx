import React from 'react'
import Circle2D from '../../classes/circle-2d'
import id from '../../classes/id'
import Line2D from '../../classes/line-2d'
import radians from '../../classes/radians'
import reflect2D from '../../classes/reflect-2d'
import Vector2D, { Data } from '../../classes/vector-2d'
import Circle2DComponent from '../../components/circle-2d'
import styles from './hemisphere.module.scss'

const { sin, cos } = Math

type Props = {}
type State = {}

export default class Hemisphere extends React.Component<Props, State> {
    public render() {
        const stripes = id()

        return (
            <figure className={styles.container}>
                <svg viewBox='-50 -50 100 100'>
                    <pattern id={stripes} x="0" y="0" width="10" height="20" patternUnits="userSpaceOnUse">
                        <path d={`
                            M 9 0
                            L 10 0
                            L 10 2
                            L 1 20
                            L 0 20
                            L 0 18 Z
                        `}/>
                        <path d={`
                            M 0 0
                            L 1 0
                            L 0 2 Z
                        `}/>
                        <path d={`
                            M 9 20
                            L 10 18
                            L 10 20 Z
                        `}/>
                    </pattern>
                    <path d={`
                        M -40 30
                        A 40 40 0 0 1 40 30
                    `}/>
                    <rect x={-50} y={30} width={100} height={20} fill={`url(#${stripes})`}/>
                    <line x1={-50} y1={30} x2={50} y2={30}/>
                </svg>
            </figure>
        )
    }
}
