import React from "react"
import Model from "../classes/line-2d"

type Props =
    & {
        model : Model,
    }
    & React.HTMLAttributes<SVGLineElement>
type State = {
    x1 : number,
    y1 : number,
    x2 : number,
    y2 : number,
}

export default class Line2DComponent extends React.Component<Props, State> {
    public static defaultProps = {
        model : new Model
    }

    public constructor(props : Props) {
        super(props)

        this.state = this.modelState
    }

    private handleChange = () => {
        this.setState(this.modelState)
    }

    private get modelState() {
        const { a, b } = this.props.model

        return {
            x1 : a.x,
            y1 : a.y,
            x2 : b.x,
            y2 : b.y,
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
        const props = { ...this.props }

        delete props.model

        return (
            <>
                <line
                    x1={s.x1}
                    y1={s.y1}
                    x2={s.x2}
                    y2={s.y2}
                    {...props}
                />
            </>
        )
    }
}
