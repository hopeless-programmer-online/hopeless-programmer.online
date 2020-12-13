import React from "react"
import Model from "../classes/line-2d"
import Circle from "./circle"

type Props = {
    model : Model,
    movableA : boolean,
    movableB : boolean,
}
type State = {
    x1 : number,
    y1 : number,
    x2 : number,
    y2 : number,
    stroke : string,
    strokeWidth : number,
    strokeDasharray : string,
}

export default class Line2DComponent extends React.Component<Props, State> {
    public static defaultProps = {
        movableA : true,
        movableB : true,
    }

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
            x1              : m.a.x,
            y1              : m.a.y,
            x2              : m.b.x,
            y2              : m.b.y,
            stroke          : m.stroke,
            strokeWidth     : m.strokeWidth,
            strokeDasharray : m.strokeDasharray,
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
                    style={{
                        stroke : s.stroke,
                        strokeWidth : s.strokeWidth,
                        strokeDasharray : s.strokeDasharray,
                    }}
                />
                <Circle model={m.a} movable={this.props.movableA}/>
                <Circle model={m.b} movable={this.props.movableB}/>
            </>
        )
    }
}
