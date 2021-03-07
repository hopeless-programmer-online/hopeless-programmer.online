import React from 'react'
import degrees from '../../classes/degrees'
import id from '../../classes/id'
import intersection2D from '../../classes/intersection-2d'
import radians from '../../classes/radians'
import styles from './cosine-law.module.scss'

const { abs, sin, cos, PI } = Math

type Props = {}
type State = { a : number }

export default class CosineLaw extends React.Component<Props, State> {
    private cancel : number | null = null
    private time = new Date
    private id = id()
    private update = () => {
        const time = new Date
        const d = (time.valueOf() - this.time.valueOf()) / 1000

        this.time = time

        let { a } = this.state

        a += radians(60) * d

        this.setState({ a })

        this.cancel = requestAnimationFrame(this.update)
    }

    public state : State = { a : radians(30) }

    public componentDidMount() {
        this.cancel = requestAnimationFrame(this.update)
    }
    public componentWillUnmount() {
        const { cancel } = this

        if (cancel !== null) cancelAnimationFrame(cancel)
    }
    public render() {
        const { id, state } = this
        const { a } = state

        const w = 40
        const w2 = w / 2

        const bounding = [
            { a : { x : 0,   y : 0   }, b : { x : 100, y : 0   } },
            { a : { x : 100, y : 0   }, b : { x : 100, y : 100 } },
            { a : { x : 100, y : 100 }, b : { x : 0,   y : 100 } },
            { a : { x : 0,   y : 100 }, b : { x : 0,   y : 0   } },
        ]
        const floor = {
            a : { x : 0,   y : 80  },
            b : { x : 100, y : 80  },
        }

        const l = {
            a : {
                x : 50 - cos(a) * w2,
                y : 80 - sin(a) * w2,
            },
            b : {
                x : 50 - cos(a) * w2 - cos(a + PI/2) * 10,
                y : 80 - sin(a) * w2 - sin(a + PI/2) * 10,
            },
        }
        const r = {
            a : {
                x : 50 - cos(a) * -w2,
                y : 80 - sin(a) * -w2,
            },
            b : {
                x : 50 - cos(a) * -w2 - cos(a + PI/2) * 10,
                y : 80 - sin(a) * -w2 - sin(a + PI/2) * 10,
            },
        }
        const lc = bounding.map(m => intersection2D({ m, l }))
        const l0 = lc.reduce((a, x) => (x && (!a || x.t < a.t)) ? x : a, false)
        const l1 = lc.reduce((a, x) => (x && (!a || x.t > a.t)) ? x : a, false)
        const rc = bounding.map(m => intersection2D({ m, l : r }))
        const r0 = rc.reduce((a, x) => (x && (!a || x.t < a.t)) ? x : a, false)
        const r1 = rc.reduce((a, x) => (x && (!a || x.t > a.t)) ? x : a, false)

        const lf = intersection2D({ l,     m : floor })
        const rf = intersection2D({ l : r, m : floor })

        const lp = {
            a : {
                x : 50 - w2,
                y : 80,
            },
            b : {
                x : 50 - w2 - cos(a + PI/2) * 10,
                y : 80      - sin(a + PI/2) * 10,
            },
        }
        const rp = {
            a : {
                x : 50 + w2,
                y : 80,
            },
            b : {
                x : 50 + w2 - cos(a + PI/2) * 10,
                y : 80      - sin(a + PI/2) * 10,
            },
        }
        const lpc = bounding.map(m => intersection2D({ m, l : lp }))
        const lp0 = lpc.reduce((a, x) => (x && (!a || x.t < a.t)) ? x : a, false)
        const lp1 = lpc.reduce((a, x) => (x && (!a || x.t > a.t)) ? x : a, false)
        const rpc = bounding.map(m => intersection2D({ m, l : rp }))
        const rp0 = rpc.reduce((a, x) => (x && (!a || x.t < a.t)) ? x : a, false)
        const rp1 = rpc.reduce((a, x) => (x && (!a || x.t > a.t)) ? x : a, false)

        // const t = lf && rf && Math.min()
        const cw2 = abs(cos(a)) * w2
        const d = 2
        const d2 = d/2

        return (
            <figure className={styles.container}>
                <svg viewBox='0 0 100 100'>
                    <pattern id={id} x="0" y="0" width="10" height="20" patternUnits="userSpaceOnUse">
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
                    <mask
                        id={`${id}-back`}
                        x={0} y={0}
                        width={1} height={1}
                    >
                        <rect
                            x={0} y={80}
                            width={100} height={20}
                            fill={`url(#${id})`}
                        />
                    </mask>
                    {
                        l0 && l1 && r0 && r1 &&
                        <mask
                            id={`${id}-front`}
                            x={0} y={0}
                            width={1} height={1}
                        >
                            <path fill={`url(#${id})`} d={`
                                M ${l0.x.x} ${l0.x.y}
                                L ${l1.x.x} ${l1.x.y}
                                L ${r1.x.x} ${r1.x.y}
                                L ${r0.x.x} ${r0.x.y} Z
                            `}/>
                        </mask>
                    }
                    <line
                        className={styles.back}
                        x1={0}   y1={80}
                        x2={100} y2={80}
                    />
                    <rect
                        className={styles.back}
                        x={0} y={80}
                        width={100} height={20}
                        mask={`url(#${id}-back)`}
                    />
                    <line
                        className={styles.origin}
                        x1={50 - w2} y1={0}
                        x2={50 - w2} y2={100}
                    />
                    <line
                        className={styles.origin}
                        x1={50 + w2} y1={0}
                        x2={50 + w2} y2={100}
                    />
                    <path
                        className={styles.projection}
                        transform={`
                            translate(50 80)
                            rotate(${degrees(a)})
                            translate(0 -30)
                        `}
                        d={`
                            M 0 0
                            L -10 -10
                            L -5  -10
                            L -5  -30
                            L +5  -30
                            L +5  -10
                            L +10 -10 Z
                        `}
                    />
                    {
                        l0 && l1 && r0 && r1 &&
                        <rect
                            className={styles.front}
                            x={0} y={80}
                            width={100} height={20}
                            mask={`url(#${id}-front)`}
                        />
                    }
                    {
                        lf && rf &&
                        <line
                            className={styles.front}
                            x1={lf.x.x} y1={lf.x.y}
                            x2={rf.x.x} y2={rf.x.y}
                        />
                    }
                    {
                        l0 && l1 &&
                        <line
                            className={styles.ray}
                            x1={l0.x.x} y1={l0.x.y}
                            x2={l1.x.x} y2={l1.x.y}
                        />
                    }
                    {
                        r0 && r1 &&
                        <line
                            className={styles.ray}
                            x1={r0.x.x} y1={r0.x.y}
                            x2={r1.x.x} y2={r1.x.y}
                        />
                    }
                    {
                        lp0 && lp1 &&
                        <line
                            className={styles.projection}
                            x1={lp0.x.x} y1={lp0.x.y}
                            x2={lp1.x.x} y2={lp1.x.y}
                        />
                    }
                    {
                        rp0 && rp1 &&
                        <line
                            className={styles.projection}
                            x1={rp0.x.x} y1={rp0.x.y}
                            x2={rp1.x.x} y2={rp1.x.y}
                        />
                    }
                    {
                        lp0 && lp1 && rp0 && rp1 &&
                        <path className={styles.area} d={`
                            M ${lp0.x.x} ${lp0.x.y}
                            L ${lp1.x.x} ${lp1.x.y}
                            L ${rp1.x.x} ${rp1.x.y}
                            L ${rp0.x.x} ${rp0.x.y} Z
                        `}/>
                    }
                    <line
                        className={styles.area}
                        x1={50 - w2} y1={80}
                        x2={50 + w2} y2={80}
                    />
                    <path
                        className={styles.white}
                        transform={`
                            translate(50 80)
                            rotate(${degrees(a)})
                            translate(0 -25)
                        `}
                        d={`
                            M ${-cw2} ${0}
                            ${
                                cw2 > d
                                ? `
                                    L ${-cw2 + d} ${-d}
                                    L ${-cw2 + d} ${-d2}
                                    L ${+cw2 - d} ${-d2}
                                    L ${+cw2 - d} ${-d}
                                `
                                : `
                                    ${0} ${-cw2/d}
                                `
                            }
                            L ${+cw2} ${0}
                            ${
                                cw2 > d
                                ? `
                                    L ${+cw2 - d} ${+d}
                                    L ${+cw2 - d} ${+d2}
                                    L ${-cw2 + d} ${+d2}
                                    L ${-cw2 + d} ${+d}
                                `
                                : `
                                    ${0} ${+cw2/d}
                                `
                            }
                            Z
                        `}
                    />
                </svg>
            </figure>
        )
    }
}
