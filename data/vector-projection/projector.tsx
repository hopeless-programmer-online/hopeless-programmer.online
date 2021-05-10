import React from 'react'
import Vector2D, { Data as PointData } from '../../classes/vector-2d'
import Circle2D from '../../classes/circle-2d'
import Circle2DComponent from '../../components/circle-2d'
import Line2D, { Data as LineData } from '../../classes/line-2d'
import styles from './projector.module.scss'
import Line2DComponent from '../../components/line-2d'
import Text2DComponent from '../../components/text'

function project({ a, l } : { a : PointData, l : LineData }) : false | { x : PointData, t : number } {
    const q = (l.b.x - l.a.x)**2 + (l.b.y - l.a.y)**2

    if (q === 0) return false

    const t = ((a.x - l.a.x)*(l.b.x - l.a.x) + (a.y - l.a.y)*(l.b.y - l.a.y)) / q

    return {
        x : {
            x : l.a.x + t * (l.b.x - l.a.x),
            y : l.a.y + t * (l.b.y - l.a.y),
        },
        t,
    }
}

type Props = { a : PointData, l : LineData }
type State = { x : null | PointData }

export default class Projector extends React.Component<Props, State> {
    public static defaultProps = {
        a : { x : 40, y : 60 },
        l : {
            a : { x : 10, y : 10 },
            b : { x : 90, y : 90 },
        }
    }

    private a : Circle2D
    private l : Line2D

    public constructor(props : Props = Projector.defaultProps) {
        super(props)

        const { a, l } = props

        this.a = new Circle2D({ p : a, r : 2 })
        this.l = new Line2D({
            a : new Circle2D({ p : l.a, r : 2 }),
            b : new Circle2D({ p : l.b, r : 2 }),
        })
        this.state = this.modelState
    }

    private get modelState() {
        const { a, l } = this
        const hit = project({ a, l })

        return { x : hit ? hit.x : null }
    }

    private update = () => {
        this.setState(this.modelState)
    }

    public componentDidMount() {
        const { a, l, update } = this

        a.change.attach(update)
        l.change.attach(update)
    }
    public componentWillUnmount() {
        const { a, l, update } = this

        a.change.detach(update)
        l.change.detach(update)
    }
    public render() {
        const { a, l } = this
        const { x } = this.state

        return (
            <svg
                viewBox='0 0 100 100'
                className={styles.svg}
            >
                <Line2DComponent className={styles.line} model={l}/>
                <Text2DComponent className={styles.text} model={l.a.position}>a</Text2DComponent>
                <Text2DComponent className={styles.text} model={l.b.position}>b</Text2DComponent>
                <Text2DComponent className={styles.text} model={a.position}>y</Text2DComponent>
                {
                    x &&
                    <>
                        <circle
                            className={styles.intersection}
                            cx={x.x}
                            cy={x.y}
                            r={2}
                        />
                        <text
                            className={styles.text}
                            x={x.x}
                            y={x.y}
                        >
                            y'
                        </text>
                    </>
                }
                <Circle2DComponent className={styles.circle} model={l.a}/>
                <Circle2DComponent className={styles.circle} model={l.b}/>
                <Circle2DComponent className={styles.circle} model={a}/>
            </svg>
        )
    }
}
