import React from 'react'
import { Data as PointData } from '../../classes/vector-2d'
import Circle2D from '../../classes/circle-2d'
import Line2D, { Data as LineData } from '../../classes/line-2d'
import Circle2DComponent from '../../components/circle-2d'
import Line2DComponent from '../../components/line-2d'
import Text2DComponent from '../../components/text'
import styles from './intersection.module.scss'

type Intersection = {
    x : PointData,
    t : number,
    q : number,
}

function intersection({ l, m } : { l : LineData, m : LineData }) : false | Intersection {
    const a = l.b.x - l.a.x
    const b = m.b.x - m.a.x
    const c = l.b.y - l.a.y
    const d = m.b.y - m.a.y
    const det = a*d - b*c

    if (det === 0) return false

    const cx = m.a.x - l.a.x
    const cy = m.a.y - l.a.y
    const t = (d * cx - b * cy) / det
    const q = -(a * cy - c * cx) / det

    return {
        x : {
            x : l.a.x + (l.b.x - l.a.x) * t,
            y : l.a.y + (l.b.y - l.a.y) * t,
        },
        t,
        q,
    }
}

type Props = { l : LineData, m : LineData }
type State = null | { t : number, q : number }

export default class Caster extends React.Component<Props, State> {
    public static defaultProps = {
        l : {
            a : { x : 10, y : 80 },
            b : { x : 90, y : 40 },
        },
        m : {
            a : { x : 20, y : 20 },
            b : { x : 70, y : 90 },
        },
    }

    private l : Line2D
    private m : Line2D

    public constructor(props : Props = Caster.defaultProps) {
        super(props)

        const { l, m } = props

        this.l = new Line2D({ a : new Circle2D({ p : l.a, r : 2 }), b : new Circle2D({ p : l.b, r : 2 }) })
        this.m = new Line2D({ a : new Circle2D({ p : m.a, r : 2 }), b : new Circle2D({ p : m.b, r : 2 }) })
        this.state = this.modelState
    }

    private get modelState() {
        const { l, m } = this

        const hit = intersection({ l, m })

        if (!hit) return null

        const { t, q } = hit

        return { t, q }
    }
    private get crossing() {
        const hit = this.state

        if (hit === null) return

        const { t } = hit
        const { l } = this

        const x = l.a.x + t * (l.b.x - l.a.x)
        const y = l.a.y + t * (l.b.y - l.a.y)

        return (
            <>
                <text
                    x={x}
                    y={y}
                    className={styles.text}
                >x</text>
                <circle
                    cx={x}
                    cy={y}
                    r={2}
                    className={styles.intersection}
                />
            </>
        )
    }
    private *directions() {
        const hit = this.state

        if (hit === null) return

        const { t, q } = hit
        const { l, m } = this

        const x = l.a.x + t * (l.b.x - l.a.x)
        const y = l.a.y + t * (l.b.y - l.a.y)

        if (t < 0 || t > 1) {
            const L = [
                intersection({ l, m : { a : { x : 0,   y : 0   }, b : { x : 100, y : 0   } } }),
                intersection({ l, m : { a : { x : 100, y : 0   }, b : { x : 100, y : 100 } } }),
                intersection({ l, m : { a : { x : 100, y : 100 }, b : { x : 0,   y : 100 } } }),
                intersection({ l, m : { a : { x : 0,   y : 100 }, b : { x : 0,   y : 0   } } }),
            ]
            .filter(hit => hit !== null)
            .map(hit => hit as Intersection)

            if (L.length > 0) {

                const minL = L.sort((a, b) => a.t - b.t)[0].x
                const maxL = L.sort((a, b) => b.t - a.t)[0].x

                yield (
                    <line
                        key='l-direction'
                        x1={minL.x}
                        y1={minL.y}
                        x2={maxL.x}
                        y2={maxL.y}
                        className={styles.direction}
                    />
                )
            }

            if (t < 0) {
                yield (
                    <line
                        key='l-miss'
                        x1={x}
                        y1={y}
                        x2={l.a.x}
                        y2={l.a.y}
                        className={styles.miss}
                    />
                )
            }
            else {
                yield (
                    <line
                        key='l-miss'
                        x1={l.b.x}
                        y1={l.b.y}
                        x2={x}
                        y2={y}
                        className={styles.miss}
                    />
                )
            }
        }
        if (q < 0 || q > 1) {
            const M = [
                intersection({ m, l : { a : { x : 0,   y : 0   }, b : { x : 100, y : 0   } } }),
                intersection({ m, l : { a : { x : 100, y : 0   }, b : { x : 100, y : 100 } } }),
                intersection({ m, l : { a : { x : 100, y : 100 }, b : { x : 0,   y : 100 } } }),
                intersection({ m, l : { a : { x : 0,   y : 100 }, b : { x : 0,   y : 0   } } }),
            ]
            .filter(hit => hit !== null)
            .map(hit => hit as Intersection)

            if (M.length > 0) {

                const minM = M.sort((a, b) => a.t - b.t)[0].x
                const maxM = M.sort((a, b) => b.t - a.t)[0].x

                yield (
                    <line
                        key='m-direction'
                        x1={minM.x}
                        y1={minM.y}
                        x2={maxM.x}
                        y2={maxM.y}
                        className={styles.direction}
                    />
                )
            }

            if (q < 0) {
                yield (
                    <line
                        key='m-miss'
                        x1={x}
                        y1={y}
                        x2={m.a.x}
                        y2={m.a.y}
                        className={styles.miss}
                    />
                )
            }
            else {
                yield (
                    <line
                        key='m-miss'
                        x1={m.b.x}
                        y1={m.b.y}
                        x2={x}
                        y2={y}
                        className={styles.miss}
                    />
                )
            }
        }
    }

    update = () => {
        this.setState(this.modelState)
    }

    public componentDidMount() {
        const { l, m, update } = this

        l.change.attach(update)
        m.change.attach(update)
    }
    public componentWillUnmount() {
        const { l, m, update } = this

        l.change.detach(update)
        m.change.detach(update)
    }
    public render() {
        const { l, m } = this

        return (
            <svg
                viewBox='0 0 100 100'
                className={styles.svg}
            >
                {[ ...this.directions() ]}
                <Line2DComponent className={styles.line} model={l}/>
                <Line2DComponent className={styles.line} model={m}/>
                <Text2DComponent
                    model={l.a.p}
                    className={styles.text}
                >a</Text2DComponent>
                <Text2DComponent
                    model={l.b.p}
                    className={styles.text}
                >b</Text2DComponent>
                <Text2DComponent
                    model={m.a.p}
                    className={styles.text}
                >u</Text2DComponent>
                <Text2DComponent
                    model={m.b.p}
                    className={styles.text}
                >v</Text2DComponent>
                {this.crossing}
                <Circle2DComponent className={styles.circle} model={l.a}/>
                <Circle2DComponent className={styles.circle} model={l.b}/>
                <Circle2DComponent className={styles.circle} model={m.a}/>
                <Circle2DComponent className={styles.circle} model={m.b}/>
            </svg>
        )
    }
}
