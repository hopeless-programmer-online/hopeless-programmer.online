import React from "react"
import Model from "../classes/line-2d"
import Circle from "./circle"

type Props = { model : Model }
type State = { x1 : number, y1 : number, x2 : number, y2 : number, stroke : string, strokeWidth : number }

export default class Line2DComponent extends React.Component<Props, State> {
    public constructor(props : Props) {
        super(props)

        this.state = this.values
    }

    private handleChange = () => {
        this.setState(this.values)
    }

    private get values() {
        const m = this.props.model

        return {
            x1          : m.a.x,
            y1          : m.a.y,
            x2          : m.b.x,
            y2          : m.b.y,
            stroke      : m.stroke,
            strokeWidth : m.strokeWidth,
        }
    }

    public componentDidMount() {
        this.props.model.change.attach(this.handleChange)
    }
    public componentWillUnmount() {
        this.props.model.change.detach(this.handleChange)
    }
    public render() {
        const m = this.props.model
        const s = this.state

        return (
            <>
                <line
                    x1={s.x1}
                    y1={s.y1}
                    x2={s.x2}
                    y2={s.y2}
                    style={{ stroke : s.stroke, strokeWidth : s.strokeWidth }}
                />
                <Circle model={m.a}/>
                <Circle model={m.b}/>
            </>
        )
    }
}
