import React from 'react'
import degrees from '../../classes/degrees'
import id from '../../classes/id'
import { Data as LineData } from '../../classes/line-2d'
import Vector2D from '../../classes/vector-2d'
import styles from './flow.module.scss'

type Props = {
    line : LineData,
    width : number,
}
type State = {
    progress : number
}

export default class Flow extends React.Component<Props, State> {
    public static defaultProps = {
        line : {
            a : { x :   0, y :   0 },
            b : { x : 100, y : 100 },
        },
        width : 5,
    }

    private updateID : number | null = null
    private mask : string

    public constructor(props : Props) {
        super(props)

        this.state = { progress : 0 }
    }

    private update = () => {
        let { progress } = this.state

        progress += 0.005
        progress = progress % 1

        this.setState({ progress })

        requestAnimationFrame(this.update)
    }

    public componentDidMount() {
        this.mask = id()
        this.updateID = requestAnimationFrame(this.update)
    }
    public componentWillUnmount() {
        const { updateID } = this

        if (updateID) cancelAnimationFrame(updateID)
    }
    public render() {
        const { props, mask } = this
        const { line, width } = props
        const w = width
        const l = 2
        const { a, b } = line
        const h = (new Vector2D(a).distance(b))
        const ang = Math.atan2(a.x - b.x, b.y - a.y)
        const arrow = `
            M ${l}       , 0
            L ${l + w}   , 0
            L ${l + w}   , ${h - w - l}
            L ${2*l + w} , ${h - w - l}
            L ${l + w/2} , ${h}
            L 0          , ${h - w - l}
            L ${l}       , ${h - w - l}
            Z`
        const lines = []
        const rays = 40
        const d = h*0.2

        let q = this.state.progress

        for (let i = 0; i < rays; ++i) {
            const t = i / (rays - 1)
            const y = ((t + q) % 1) * (h + d) - d
            const x = (2*l + w) * (0.5 + 0.5 *Math.sin(Math.PI * t * 8))

            lines.push(
                <line
                    key       = {i}
                    className = {styles.ray}
                    x1        = {x} y1={y}
                    x2        = {x} y2={y + d}
                    mask      = {`url(#${mask})`}
                />
            )
        }

        return (
            <svg
                className = {styles.container}
                style     = {{ transform : ``
                    + `translate(${a.x}px, ${a.y}px)`
                    + `rotate(${degrees(ang)}deg)`
                    + `translate(${-w/2-l}px, 0px)`
                }}
            >
                <mask id={mask} maskUnits='userSpaceOnUse'>
                    <path d={arrow}/>
                </mask>
                <path className={styles.flow} d={arrow}/>
                {/* {lines} */}
            </svg>
        )
    }
}
