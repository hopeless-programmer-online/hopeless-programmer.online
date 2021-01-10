import React from 'react'
import styles from './caster.module.scss'

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

type IntersectionResult = false |
    { x : PointData } // &
    // ({ tHit : true, lMiss : null, lDir : null } | { tHit : false, lMiss : LineData, lDir : LineData }) &
    // ({ qHit : true, mMiss : null, mDir : null } | { qHit : false, mMiss : LineData, mDir : LineData })

function cast({ l, m, r } : { l : LineData, m : LineData, r : number }) : IntersectionResult {
    const a = l.a
    const b = l.b
    const u = m.a
    const v = m.b
    const d = { x : b.x - a.x, y : b.y - a.y }
    const w = { x : v.x - u.x, y : v.y - u.y }
    const w2 = w.x*w.x + w.y*w.y
    const dw = d.x*w.x + d.y*w.y
    const L = {
        x : d.x - w.x * dw / w2,
        y : d.y - w.y * dw / w2,
    }
    const a_uw = (a.x - u.x)*w.x + (a.y - u.y)*w.y
    const M = {
        x : a.x - u.x - w.x * a_uw / w2,
        y : a.y - u.y - w.y * a_uw / w2,
    }
    const A = L.x*L.x + L.y*L.y
    const B = 2 * (L.x*M.x + L.y*M.y)
    const M2 = M.x*M.x + M.y*M.y
    const r2 = r*r
    const C = M2 - r2

    if (A === 0) return false

    const D = B*B - 4*A*C

    if (D < 0) return false

    const t1 = ( -B + Math.sqrt( D ) ) / (2*A)
    const t2 = ( -B - Math.sqrt( D ) ) / (2*A)
    const t = Math.min(t1, t2)

    // console.log(A, B, C, B*B, B*B - 4*A*C)

    return {
        x : {
            x : a.x + d.x * t,
            y : a.y + d.y * t,
        }
    }
}

type Props = {}
type State = { l : LineData, m : LineData }

export default class Caster extends React.Component<Props, State> {
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
        const r = 5
        // const [ hit, { x, tHit, lMiss, lDir, qHit, mMiss, mDir } ] = intersection({ l, m })
        const hit = cast({ l, m, r })

        return (
            <svg
                viewBox='0 0 100 100'
                className={styles.svg}
            >
                {/* { !qHit && <Line model={mDir} style={styles.direction}/> }
                { !qHit && <Line model={mMiss} style={styles.miss}/> }
                { !tHit && <Line model={lDir} style={styles.direction}/> }
                { !tHit && <Line model={lMiss} style={styles.miss}/> } */}
                <Line model={l}/>
                <Line model={m}/>
                <text
                    x={l.a.x}
                    y={l.a.y}
                    className={styles.text}
                >a</text>
                <text
                    x={l.b.x}
                    y={l.b.y}
                    className={styles.text}
                >b</text>
                <text
                    x={m.a.x}
                    y={m.a.y}
                    className={styles.text}
                >u</text>
                <text
                    x={m.b.x}
                    y={m.b.y}
                    className={styles.text}
                >v</text>
                {/* <text
                    x={x.x}
                    y={x.y}
                    className={styles.text}
                >x</text> */}
                {
                    // hit && <Point model={x} movable={false} style={styles.intersection}/>
                    hit &&
                    <circle
                        cx={hit.x.x}
                        cy={hit.x.y}
                        r={r - 0.5}
                        style={{
                            // stroke : 'rgb(212, 212, 212)',
                            stroke : 'crimson',
                            strokeDasharray : '2 1',
                            strokeWidth : 0.5,
                            fill : 'transparent',
                        }}
                    />
                }
                <Point model={l.a} onMove={this.updateLA}/>
                <Point model={l.b} onMove={this.updateLB}/>
                <Point model={m.a} onMove={this.updateMA}/>
                <Point model={m.b} onMove={this.updateMB}/>
            </svg>
        )
    }
}
