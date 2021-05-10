import React from 'react'
import { Data as PointData } from '../../classes/vector-2d'
import Circle2D from '../../classes/circle-2d'
import Circle2DComponent from '../../components/circle-2d'
import Line2D, { Data as LineData } from '../../classes/line-2d'
import styles from './caster.module.scss'
import Line2DComponent from '../../components/line-2d'
import Text2DComponent from '../../components/text'

function cast({ l, m, r } : { l : LineData, m : PointData, r : number }) : false | { x : PointData }  {
    const a = l.a
    const b = l.b
    const d = { x : b.x - a.x, y : b.y - a.y }
    const c = { x : a.x - m.x, y : a.y - m.y }

    const A = d.x**2 + d.y**2
    const B = 2 * (d.x * c.x + d.y * c.y)
    const C = (c.x**2 + c.y**2) - r*r

    if (A === 0) return false

    const D = B*B - 4*A*C

    if (D < 0) return false

    const t1 = ( -B + Math.sqrt( D ) ) / (2*A)
    const t2 = ( -B - Math.sqrt( D ) ) / (2*A)
    const t = Math.min(t1, t2)

    return {
        x : {
            x : a.x + d.x * t,
            y : a.y + d.y * t,
        },
    }
}

export default class Caster extends React.Component<{ a : PointData, b : PointData, m : PointData, r : number }, { x : null | PointData }> {
    public static defaultProps = {
        a : { x : 10, y : 10 },
        b : { x : 90, y : 90 },
        m : { x : 48, y : 52 },
        r : 10,
    }

    private l : Line2D
    private m : Circle2D

    public constructor(props = Caster.defaultProps) {
        super(props)

        const { a, b, m } = props

        this.l = new Line2D({
            a : new Circle2D({ p : a, r : 2 }),
            b : new Circle2D({ p : b, r : 2 }),
        })
        this.m = new Circle2D({ p : m, r : 2 })
        this.state = this.modelState
    }

    private get modelState() {
        const { l, m } = this
        const { r } = this.props
        const hit = cast({ l, m, r })

        return { x : hit ? hit.x : null }
    }

    private update = () => {
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
        const { a, b } = l
        const { r } = this.props
        const { x } = this.state

        return (
            <svg
                viewBox='0 0 100 100'
                className={styles.svg}
            >
                <Line2DComponent className={styles.line} model={l}/>
                <Text2DComponent className={styles.text} model={a.position}>a</Text2DComponent>
                <Text2DComponent className={styles.text} model={b.position}>b</Text2DComponent>
                <Text2DComponent className={styles.text} model={m.position}>y</Text2DComponent>
                {
                    x &&
                    <circle
                        className={styles.intersection}
                        cx={x.x}
                        cy={x.y}
                        r={r}
                    />
                }
                <Circle2DComponent className={styles.circle} model={a}/>
                <Circle2DComponent className={styles.circle} model={b}/>
                <Circle2DComponent className={styles.circle} model={m}/>
            </svg>
        )
    }
}
