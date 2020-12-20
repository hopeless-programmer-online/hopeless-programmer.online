// import 'katex/dist/katex.min.css';
// import TeX from '@matejmazur/react-katex'
import React from 'react'
// import Circle from '../../classes/circle'
// import Line2D from '../../classes/line-2d'
// import CircleComponent from '../../components/circle'
// import Line2DComponent from '../../components/line-2d'
import styles from './intersection.module.scss'

type PointData = { x : number, y : number }
type LineData = { a : PointData, b : PointData }
type OnPointMove = ((point : PointData) => void) | null

type PointProps = {
    model   : PointData,
    movable : boolean,
    onMove  : OnPointMove,
    style   : string,
}

class Point extends React.Component<PointProps> {
    public static defaultProps = {
        movable : true,
        onMove  : null,
        style   : styles.circle
    }

    private onDown = (pointer : React.PointerEvent) => {
        if (!this.props.movable) return

        const notify = this.props.onMove

        if (!notify) return

        const aspect = (() => {
            let svg = pointer.currentTarget.parentElement;

            while (svg && svg.tagName !== 'svg') svg = svg.parentElement

            if (!(svg instanceof SVGSVGElement)) return { x : 1, y : 1 }

            const { viewBox } = svg
            const rect = svg.getBoundingClientRect()

            return {
                x : viewBox.baseVal.width / rect.width,
                y : viewBox.baseVal.height / rect.height,
            }
        })()

        const base = {
            clientX : pointer.clientX,
            clientY : pointer.clientY,
        }

        const update = (pointer : PointerEvent) => {
            const { model } = this.props
            const x = model.x + (pointer.clientX - base.clientX) * aspect.x
            const y = model.y + (pointer.clientY - base.clientY) * aspect.y

            // console.log(x, y)

            notify({ x, y })

            base.clientX = pointer.clientX
            base.clientY = pointer.clientY
        }
        const onUp = (pointer : PointerEvent) => {
            update(pointer)

            window.removeEventListener('pointermove', onMove)
            window.removeEventListener('pointerup', onUp)
            }
        const onMove = (pointer : PointerEvent) => {
            update(pointer)
        }

        window.addEventListener('pointermove', onMove)
        window.addEventListener('pointerup', onUp)
    }

    public render() {
        const { model, style } = this.props

        return (
            <circle
                cx={model.x}
                cy={model.y}
                r={2}
                className={style}
                onPointerDown={this.onDown}
            />
        )
    }
}
class Line extends React.Component<{ model : LineData, style : string }> {
    public static defaultProps = {
        style : styles.line
    }

    public render() {
        const { a, b } = this.props.model
        return (
            <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                z={0}
                className={this.props.style}
            />
        )
    }
}

type IntersectionResult = [ false ] | [ true,
    { x : PointData } &
    ({ tHit : true, lMiss : null, lDir : null } | { tHit : false, lMiss : LineData, lDir : LineData }) &
    ({ qHit : true, mMiss : null, mDir : null } | { qHit : false, mMiss : LineData, mDir : LineData })
]

function intersection({ l, m } : { l : LineData, m : LineData }) : IntersectionResult {
    const a = l.b.x - l.a.x
    const b = m.b.x - m.a.x
    const c = l.b.y - l.a.y
    const d = m.b.y - m.a.y
    const det = a*d - b*c

    if (det === 0) return [ false ]

    const cx = m.a.x - l.a.x
    const cy = m.a.y - l.a.y
    const t = (d * cx - b * cy) / det
    const q = -(a * cy - c * cx) / det

    const data = {
        x : {
            x : l.a.x + (l.b.x - l.a.x) * t,
            y : l.a.y + (l.b.y - l.a.y) * t,
        },
        tHit  : true,
        lMiss : null,
        lDir  : null,
        qHit  : true,
        mMiss : null,
        mDir  : null,
    }

    if (t < 0 || t > 1) {
        data.tHit = false
        data.lDir = {
            a : {
                x : l.a.x + (l.b.x - l.a.x) * -100,
                y : l.a.y + (l.b.y - l.a.y) * -100,
            },
            b : {
                x : l.a.x + (l.b.x - l.a.x) * 100,
                y : l.a.y + (l.b.y - l.a.y) * 100,
            },
        }

        if (t < 0) {
            data.lMiss = {
                a : data.x,
                b : l.a,
            }
        }
        else {
            data.lMiss = {
                a : l.b,
                b : data.x,
            }
        }
    }

    if (q < 0 || q > 1) {
        data.qHit = false
        data.mDir = {
            a : {
                x : m.a.x + (m.b.x - m.a.x) * -100,
                y : m.a.y + (m.b.y - m.a.y) * -100,
            },
            b : {
                x : m.a.x + (m.b.x - m.a.x) * 100,
                y : m.a.y + (m.b.y - m.a.y) * 100,
            },
        }

        if (q < 0) {
            data.mMiss = {
                a : data.x,
                b : m.a,
            }
        }
        else {
            data.mMiss = {
                a : m.b,
                b : data.x,
            }
        }
    }

    return [ true, data ]
}

type Props = {}
type State = { l : LineData, m : LineData }

export default class Intersection extends React.Component<Props, State> {
    public constructor(props : Props) {
        super(props)

        this.state = {
            l : {
                a : { x : 10, y : 80 },
                b : { x : 90, y : 40 },
            },
            m : {
                a : { x : 20, y : 20 },
                b : { x : 70, y : 90 },
            },
        }
    }

    private updateLA = (a : PointData) => {
        const { b } = this.state.l

        this.setState({ l : { a, b } })
    }
    private updateLB = (b : PointData) => {
        const { a } = this.state.l

        this.setState({ l : { a, b } })
    }
    private updateMA = (a : PointData) => {
        const { b } = this.state.m

        this.setState({ m : { a, b } })
    }
    private updateMB = (b : PointData) => {
        const { a } = this.state.m

        this.setState({ m : { a, b } })
    }

    public render() {
        const { l, m } = this.state
        const [ hit, { x, tHit, lMiss, lDir, qHit, mMiss, mDir } ] = intersection({ l, m })

        return (
            <svg
                viewBox='0 0 100 100'
                className={styles.svg}
            >
                {/* <circle
                    cx={25}
                    cy={72}
                    z={-1}
                    r={2}
                    className={styles.circle}
                /> */}
                { !qHit && <Line model={mDir} style={styles.direction}/> }
                { !qHit && <Line model={mMiss} style={styles.miss}/> }
                { !tHit && <Line model={lDir} style={styles.direction}/> }
                { !tHit && <Line model={lMiss} style={styles.miss}/> }
                <Line model={l}/>
                <Line model={m}/>
                { hit && <Point model={x} movable={false} style={styles.intersection}/> }
                <Point model={l.a} onMove={this.updateLA}/>
                <Point model={l.b} onMove={this.updateLB}/>
                <Point model={m.a} onMove={this.updateMA}/>
                <Point model={m.b} onMove={this.updateMB}/>
            </svg>
        )
    }
}

// class Intersection2 extends React.Component {
//     private ab = new Line2D({
//         a : new Circle({ x : 10, y : 80 }),
//         b : new Circle({ x : 90, y : 40 }),
//         // strokeWidth : 0.5,
//         // strokeDasharray : '2 1',
//     })
//     private uv = new Line2D({
//         a : new Circle({ x : 20, y : 20 }),
//         b : new Circle({ x : 70, y : 90 }),
//         // strokeWidth : 0.5,
//         // strokeDasharray : '2 1',
//     })
//     private intersection = new Circle({ fill : 'blue' })

//     private update = () => {
//         const { ab, uv } = this

//         const a = ab.b.x - ab.a.x
//         const b = uv.b.x - uv.a.x
//         const c = ab.b.y - ab.a.y
//         const d = uv.b.y - uv.a.y
//         const det = a*d - b*c

//         if (det === 0) {
//             return
//         }

//         const cx = uv.a.x - ab.a.x
//         const cy = uv.a.y - ab.a.y
//         const t = (d * cx - b * cy) / det

//         this.intersection.set({
//             x : ab.a.x + (ab.b.x - ab.a.x) * t,
//             y : ab.a.y + (ab.b.y - ab.a.y) * t,
//         })
//     }

//     public componentDidMount() {
//         this.ab.change.attach(this.update)
//         this.uv.change.attach(this.update)
//     }
//     public componentWillUnmount() {
//         this.ab.change.detach(this.update)
//         this.uv.change.detach(this.update)
//     }
//     public render() {
//         return (
//             <figure>
//                 <figcaption>
//                     <TeX math={String.raw`
//                         \begin{cases}
//                             \vec{x} &= \vec{a} + t(\vec{b} - \vec{a})
//                             \\
//                             \vec{y} &= \vec{u} + q(\vec{v} - \vec{u})
//                         \end{cases}
//                         \Rightarrow
//                         \begin{cases}
//                             \vec{d} &= \vec{b} - \vec{a}
//                             \\
//                             \vec{w} &= \vec{u} - \vec{v}
//                             \\
//                             \vec{x} &= \vec{a} + t\vec{d}
//                             \\
//                             \vec{y} &= \vec{u} + q\vec{w}
//                         \end{cases}
//                     `}/>
//                     <br/>
//                     <TeX math={String.raw`
//                         \begin{cases}
//                             \vec{x} &= \vec{y}
//                             \\
//                             \vec{a} + t\vec{d} &= \vec{u} + q\vec{w}
//                         \end{cases}
//                         \Rightarrow
//                         t\vec{d} - q\vec{w} = \vec{u} - \vec{a}
//                         \Rightarrow
//                         \begin{pmatrix}
//                             \vec{d} & \vec{w}
//                         \end{pmatrix}
//                         \begin{pmatrix}
//                             t
//                             \\
//                             -q
//                         \end{pmatrix}
//                         =
//                         \vec{u} - \vec{a}
//                     `}/>
//                     <br/>
//                     <TeX math={String.raw`
//                         \begin{cases}
//                             A &= \begin{pmatrix}
//                                 \vec{d} & \vec{w}
//                             \end{pmatrix}
//                             \\
//                             c &= \vec{u} - \vec{a}
//                             \\
//                             Ac &= \begin{pmatrix}
//                                 t
//                                 \\
//                                 -q
//                             \end{pmatrix}
//                             \\
//                             \begin{pmatrix}
//                                 t
//                                 \\
//                                 -q
//                             \end{pmatrix} &= A^{-1}c
//                         \end{cases}
//                     `}/>
//                 </figcaption>
//                 <svg
//                     viewBox='0 0 100 100'
//                     style={{
//                         width : '400pt',
//                         backgroundColor : 'rgb(30, 30, 30)',
//                         borderRadius : '8pt',
//                     }}
//                 >
//                     <Line2DComponent model={this.ab}/>
//                     <Line2DComponent model={this.uv}/>
//                     <CircleComponent model={this.intersection} movable={false}/>
//                 </svg>
//             </figure>
//         )
//     }
// }
