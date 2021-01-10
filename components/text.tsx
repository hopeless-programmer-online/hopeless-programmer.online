import React from "react"
import Model from "../classes/react-vector-2d"

type Props =
    & {
        model : Model,
    }
    & React.HTMLAttributes<SVGTextElement>
type State = {
    x : number,
    y : number,
}

export default class Text2DComponent extends React.Component<Props, State> {
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
        const { x, y } = this.props.model

        return { x, y }
    }

    public componentDidMount() {
        this.props.model.change.attach(this.handleChange)
    }
    public componentWillUnmount() {
        this.props.model.change.detach(this.handleChange)
    }
    public render() {
        const { x, y } = this.state
        const props = { ...this.props }

        delete props.model

        return (
            <>
                <text
                    x={x}
                    y={y}
                    {...props}
                >
                    {this.props.children}
                </text>
            </>
        )
    }
}
