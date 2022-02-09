import React from 'react'
import { inv as inv_, mat2, mul, vec2, Vector2, Vector2Like } from 'ts-glm'
import { matrix, multiply, inv } from 'mathjs'
import styles from './trilateration.module.scss'

type Props = {}
type State = {
    p  : Vector2
    p1 : Vector2
    p2 : Vector2
    p3 : Vector2
    r1 : number
    r2 : number
    r3 : number
}

type Point = { x : number, y : number }

function trilaterate(p1 : Point, p2 : Point, p3 : Point, r1 : number, r2 : number, r3 : number) {
    const A = matrix([
        [ 2 * (p2.x - p1.x), 2 * (p2.y - p1.y) ],
        [ 2 * (p3.x - p2.x), 2 * (p3.y - p2.y) ],
    ])
    const b = matrix([
        [ r1**2 - r2**2 - (p1.x**2 + p1.y**2) + (p2.x**2 + p2.y**2) ],
        [ r2**2 - r3**2 - (p2.x**2 + p2.y**2) + (p3.x**2 + p3.y**2) ],
    ])

    const [ x, y ] = multiply(inv(A), b).toArray() as number[]

    return { x, y }
}

export default class Trilaterator extends React.Component<Props, State> {
    public state : State = (() => {
        const p  = vec2(50, 50)
        const p1 = vec2(20, 20)
        const p2 = vec2(80, 40)
        const p3 = vec2(30, 90)
        const r1 = p.sub(p1).len
        const r2 = p.sub(p2).len
        const r3 = p.sub(p3).len

        return { p, p1, p2, p3, r1, r2, r3 }
    })()

    public render() {
        const { p, p1, p2, p3, r1, r2, r3 } = this.state

        // const A = mat2.transpose(mat2(
        //     ...p2.sub(p1).mul(2).toArray(),
        //     ...p3.sub(p2).mul(2).toArray(),
        // ))
        // const b = vec2(
        //     r1**2 - r2**2 - p1.sqr + p2.sqr,
        //     r2**2 - r3**2 - p2.sqr + p3.sqr,
        // )
        // const { x, y } = mul(inv_(A), b)

        const { x, y } = trilaterate(p1, p2, p3, r1, r2, r3)

        return (
            <svg
                viewBox='0 0 100 100'
                className={styles.svg}
            >
                <circle className={styles.radius} cx={p1.x} cy={p1.y} r={r1}/>
                <circle className={styles.radius} cx={p2.x} cy={p2.y} r={r2}/>
                <circle className={styles.radius} cx={p3.x} cy={p3.y} r={r3}/>
                <line className={styles.line} x1={0} x2={100} y1={y} y2={y}/>
                <line className={styles.line} x1={x} x2={x} y1={0} y2={100}/>
                <ResizableCircle attributes={{ className : styles.transparent }} p={p1} r={r1} t={4} onChange={r1 => this.setState({ r1 })}/>
                <ResizableCircle attributes={{ className : styles.transparent }} p={p2} r={r2} t={4} onChange={r2 => this.setState({ r2 })}/>
                <ResizableCircle attributes={{ className : styles.transparent }} p={p3} r={r3} t={4} onChange={r3 => this.setState({ r3 })}/>
                <MovableCircle attributes={{ className : styles.circle, r : 2 }} p={p1} onChange={p1 => this.setState({ p1, r1 : this.state.p.sub(p1).len })}/>
                <MovableCircle attributes={{ className : styles.circle, r : 2 }} p={p2} onChange={p2 => this.setState({ p2, r2 : this.state.p.sub(p2).len })}/>
                <MovableCircle attributes={{ className : styles.circle, r : 2 }} p={p3} onChange={p3 => this.setState({ p3, r3 : this.state.p.sub(p3).len })}/>
                <MovableCircle attributes={{ className : styles.target, r : 2 }} p={p} onChange={p => this.setState({ p, r1 : this.state.p.sub(p1).len, r2 : this.state.p.sub(p2).len, r3 : this.state.p.sub(p3).len })}/>
            </svg>
        )
    }
}

class MovableCircle extends React.Component<{ p : Vector2Like, onChange? : (p : Vector2) => void, attributes? : React.SVGProps<SVGCircleElement> }, { p : Vector2Like }> {
    public state = {
        p : this.props.p,
    }

    private handleMouseDown = ({ currentTarget, clientX : x, clientY : y } : React.MouseEvent<SVGCircleElement>) => {
        let target = currentTarget.parentElement

        while (target && target.tagName !== `svg`) target = target.parentElement

        const svg = target

        if (!(svg instanceof SVGSVGElement)) return

        const { viewBox } = svg
        const rect = svg.getBoundingClientRect()
        const scale = vec2(viewBox.baseVal.width, viewBox.baseVal.height).div(vec2(rect.width, rect.height))
        let previous = vec2(x, y)

        const { onChange } = this.props

        const onMove = ({ clientX : x, clientY : y } : MouseEvent) => {
            const current = vec2(x, y)
            const delta = current.sub(previous).mul(scale)

            previous = current

            if (onChange) onChange(delta.add(this.state.p))
        }
        const onUp = () => {
            window.removeEventListener(`mousemove`, onMove)
            window.removeEventListener(`mouseup`, onUp)
        }

        window.addEventListener(`mousemove`, onMove)
        window.addEventListener(`mouseup`, onUp)
    }

    public componentDidUpdate(props) {
        if (this.props.p === props.p) return

        this.setState({ p : this.props.p })
    }
    public render() {
        const { x, y } = vec2(this.state.p)

        return (
            <circle {...this.props.attributes} cx={x} cy={y} onMouseDown={this.handleMouseDown}/>
        )
    }
}

class ResizableCircle extends React.Component<{ p : Vector2Like, r : number, t : number, onChange? : (r : number) => void , attributes? : React.SVGProps<SVGPathElement> }, { r : number }> {
    public state = {
        r : this.props.r,
    }

    private handleMouseDown = ({ currentTarget, clientX : x, clientY : y } : React.MouseEvent<SVGCircleElement>) => {
        let target = currentTarget.parentElement

        while (target && target.tagName !== `svg`) target = target.parentElement

        const svg = target

        if (!(svg instanceof SVGSVGElement)) return

        const { viewBox } = svg
        const rect = svg.getBoundingClientRect()
        const corner = vec2(rect.left, rect.top)
        const scale = vec2(viewBox.baseVal.width, viewBox.baseVal.height).div(vec2(rect.width, rect.height))
        let lock = vec2(x, y).sub(corner).mul(scale)

        const { onChange } = this.props

        const onMove = ({ clientX : x, clientY : y } : MouseEvent) => {
            const { p, t } = this.props
            const current = vec2(x, y).sub(corner).mul(scale)
            const r = this.state.r - lock.sub(p).len + current.sub(p).len

            lock = current

            if (onChange) onChange(r)
        }
        const onUp = () => {
            window.removeEventListener(`mousemove`, onMove)
            window.removeEventListener(`mouseup`, onUp)
        }

        window.addEventListener(`mousemove`, onMove)
        window.addEventListener(`mouseup`, onUp)
    }

    public componentDidUpdate(props) {
        if (this.props.r === props.r) return

        this.setState({ r : this.props.r })
    }
    public render() {
        const { x, y } = vec2(this.props.p)
        const { t } = this.props
        const { r } = this.state
        const r1 = Math.max(r - t / 2, 0)
        const r2 = Math.max(r + t / 2, 0)

        return (
            <path {...this.props.attributes} onMouseDown={this.handleMouseDown} d={`
                M ${x} ${y - r2}
                A ${r2} ${r2} 0 0 1 ${x} ${y + r2}
                A ${r2} ${r2} 0 0 1 ${x} ${y - r2}
                L ${x} ${y - r1}
                A ${r1} ${r1} 1 1 0 ${x} ${y + r1}
                A ${r1} ${r1} 1 1 0 ${x} ${y - r1}
                Z
            `}/>
        )
    }
}
