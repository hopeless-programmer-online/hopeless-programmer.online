import React from 'react'
import Circle2D from '../../classes/circle-2d'
import id from '../../classes/id'
import Line2D from '../../classes/line-2d'
import radians from '../../classes/radians'
import reflect2D from '../../classes/reflect-2d'
import Vector2D, { Data } from '../../classes/vector-2d'
import Circle2DComponent from '../../components/circle-2d'
import styles from './micro-surface.module.scss'

const { sin, cos } = Math

type Props = {}
type State = {}

export default class MicroSurface extends React.Component<Props, State> {
    public render() {
        const points : Vector2D[] = []
        const count = 10

        for (let i = 0; i < count; ++i) {
            const t = i / (count - 1)

            points.push(Vector2D.From(t*100, 80 - Math.random() * 6))
        }

        const lines = []
        const arrows = []

        for (let i = 0; i < points.length - 1; ++i) {
            const a = points[i]
            const b = points[i + 1]

            lines.push(
                <line
                    key={i}
                    x1={a.x} y1={a.y}
                    x2={b.x} y2={b.y}
                />
            )

            const c = Vector2D.From(a.x, a.y).add(b).div(2)
            const d = Vector2D.From(b.x, b.y).sub(a)

            arrows.push(
                <Arrow l={3} model={new Line2D({
                    a : c,
                    b : c.add(Vector2D.From(-d.y, d.x).normalized.mul(-15)),
                })}/>
            )
        }

        const stripes = id()
        const path = `M
            ${ points.map(({ x, y }) => `${x} ${y}`).join('L') }
            L 100 100
            L 0 100
            Z`

        return (
            <figure className={styles.container}>
                <svg viewBox='0 0 100 100'>
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
                    <path d={path} fill={`url(#${stripes})`}/>
                    {arrows}
                    {lines}
                </svg>
            </figure>
        )
    }
}

class Arrow extends React.Component<{ model : Line2D, l : number }> {
    public static defaultProps = {
        l : 15,
    }

    public render() {
        const { model, l } = this.props
        const { a, b, angle } = model
        const q = radians(30)

        return <>
            <line className={styles.arrow}
                x1={a.x} y1={a.y}
                x2={b.x} y2={b.y}
            />
            <line className={styles.arrow}
                x1={b.x} y1={b.y}
                x2={b.x - sin(angle + q)*l} y2={b.y - cos(angle + q)*l}
            />
            <line className={styles.arrow}
                x1={b.x} y1={b.y}
                x2={b.x - sin(angle - q)*l} y2={b.y - cos(angle - q)*l}
            />
        </>
    }
}
