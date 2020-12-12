import React from "react"
import Model from "../classes/circle"

type Props = { model : Model, movable : boolean }
type State = { cx : number, cy : number, r : number, fill : string }

export default class CircleComponent extends React.Component<Props, State> {
    public static defaultProps = {
        movable : true,
    }

    public constructor(props : Props) {
        super(props)

        this.state = this.values
    }

    private handleChange = () => {
        this.setState(this.values)
    }
    private handleMouseDown = (event : React.MouseEvent) => {
        if (!this.props.movable) return
        // console.log(`down`)

        let bx = event.pageX
        let by = event.pageY

        let aspect = (() => {
            let svg = event.currentTarget.parentElement;

            while (svg && svg.tagName !== 'svg') svg = svg.parentElement

            if (!(svg instanceof SVGSVGElement)) return { x : 1, y : 1 }

            const { viewBox } = svg
            const rect = svg.getBoundingClientRect()

            return {
                x : viewBox.baseVal.width / rect.width,
                y : viewBox.baseVal.height / rect.height,
            }
        })()

        const handleMouseUp = () => {
            // console.log(`up`)

            window.removeEventListener(`mouseup`, handleMouseUp)
            window.removeEventListener(`mousemove`, handleMouseMove)
        }
        const handleMouseMove = (event : MouseEvent) => {
            // console.log(`move`)

            const x = (event.pageX - bx) * aspect.x
            const y = (event.pageY - by) * aspect.y

            bx = event.pageX
            by = event.pageY

            this.props.model.move({ x, y })
        }

        window.addEventListener(`mouseup`, handleMouseUp)
        window.addEventListener(`mousemove`, handleMouseMove)
    }

    private get values() {
        const m = this.props.model

        return {
            cx   : m.x,
            cy   : m.y,
            r    : m.r,
            fill : m.fill,
        }
    }

    public componentDidMount() {
        this.props.model.change.attach(this.handleChange)
    }
    public componentWillUnmount() {
        this.props.model.change.detach(this.handleChange)
    }
    public render() {
        const s = this.state

        return (
            <circle
                cx={s.cx} cy={s.cy} r={s.r}
                style={{ fill : s.fill }}
                onMouseDown={this.handleMouseDown}
            />
        )
    }
}
