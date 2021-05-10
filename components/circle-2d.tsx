import React from 'react'
import Model from '../classes/circle-2d'

export type Props =
    & {
        model     : Model,
        movable   : boolean,
    }
    & React.HTMLAttributes<SVGCircleElement>
export type State = {
    x : number,
    y : number,
    r : number,
}

export default class Circle2DComponent extends React.Component<Props, State> {
    public static defaultProps = {
        model   : new Model,
        movable : true,
    }

    public constructor(props : Props) {
        super(props)

        this.state = this.modelState
    }

    public get modelState() {
        const { x, y, r } = this.props.model

        return { x, y, r }
    }

    private onDown = (pointer : React.PointerEvent) => {
        const { props } = this
        const { model } = props

        if (!props.movable) return

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
            const x = model.x + (pointer.clientX - base.clientX) * aspect.x
            const y = model.y + (pointer.clientY - base.clientY) * aspect.y

            // console.log(x, y)

            model.position.set({ x, y })

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
    private onChange = () => {
        this.setState(this.modelState)
    }

    public componentDidMount() {
        this.props.model.change.attach(this.onChange)
    }
    public componentWillUnmount() {
        this.props.model.change.detach(this.onChange)
    }
    public render() {
        const { x, y, r } = this.state
        const props = { ...this.props }

        delete props.model
        delete props.movable

        return (
            <circle
                cx={x}
                cy={y}
                r={r}
                onPointerDown={this.onDown}
                {...props}
            />
        )
    }
}
