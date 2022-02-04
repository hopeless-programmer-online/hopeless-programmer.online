import React from 'react'
import styles from './trilateration.module.scss'
import { inv, mat2, mul, vec2, Vector2, Vector2Like } from 'ts-glm'

type Props = {}
type State = {
    p  : Vector2
    p1 : Vector2
    p2 : Vector2
    p3 : Vector2
}

export default class Trilaterator extends React.Component<Props, State> {
    public state : State = {
        p  : vec2(50, 50),
        p1 : vec2(20, 20),
        p2 : vec2(80, 40),
        p3 : vec2(30, 90),
    }

    public render() {
        const { p, p1, p2, p3 } = this.state
        const r1 = p.sub(p1).len
        const r2 = p.sub(p2).len
        const r3 = p.sub(p3).len

        const A = mat2.transpose(mat2(
            ...p2.sub(p1).mul(2).toArray(),
            ...p3.sub(p2).mul(2).toArray(),
        ))
        const b = vec2(
            r1**2 - r2**2 - p1.sqr + p2.sqr,
            r2**2 - r3**2 - p2.sqr + p3.sqr,
        )
        const { x, y } = mul(inv(A), b)

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
                <MovableCircle attributes={{ className : styles.circle, r : 2 }} p={p1} onChange={p0 => this.setState({ p1: p0 })}/>
                <MovableCircle attributes={{ className : styles.circle, r : 2 }} p={p2} onChange={p1 => this.setState({ p2: p1 })}/>
                <MovableCircle attributes={{ className : styles.circle, r : 2 }} p={p3} onChange={p2 => this.setState({ p3: p2 })}/>
                <MovableCircle attributes={{ className : styles.target, r : 2 }} p={p} onChange={p => this.setState({ p })}/>
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
