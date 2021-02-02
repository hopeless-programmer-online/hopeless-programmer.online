import React from 'react'
import Circle2D from '../../classes/circle-2d'
import id from '../../classes/id'
import Line2D from '../../classes/line-2d'
import radians from '../../classes/radians'
import reflect2D from '../../classes/reflect-2d'
import Vector2D, { Data } from '../../classes/vector-2d'
import Circle2DComponent from '../../components/circle-2d'
import styles from './reflection.module.scss'

const { sin, cos } = Math

type Props = { x : Data }
type State = { x : Data }

export default class Reflection extends React.Component<Props, State> {
    public static defaultProps = {
        x : { x : -30, y : -40 },
    }

    private x = new Circle2D({ p : this.props.x, r : 5 })
    private update = () => {
        const { x } = this

        this.setState({ x : { x : x.x, y : x.y } })
    }

    public state = { x : this.props.x }

    public componentDidMount() {
        this.x.change.attach(this.update)
    }
    public componentWillUnmount() {
        this.x.change.detach(this.update)
    }
    public render() {
        const stripes = id()

        const { x } = this
        const l = new Line2D({ a : x, b : Vector2D.From(0, 30) })
        const r = reflect2D(l.d, { x : 0, y : 1 })
        const m = new Line2D({ a : l.b, b : r.add(l.b) })

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
                    <rect x={-50} y={30} width={100} height={20} fill={`url(#${stripes})`}/>
                    <line x1={-50} y1={30} x2={50} y2={30}/>
                    <Arrow model={l}/>
                    <Arrow model={m}/>
                    <Circle2DComponent model={this.x}/>
                </svg>
            </figure>
        )
    }
}

class Arrow extends React.Component<{ model : Line2D }> {
    public render() {
        const { a, b, angle } = this.props.model
        const l = 15
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
