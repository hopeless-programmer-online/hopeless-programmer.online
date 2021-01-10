import { VoidSyncEvent } from "ts-events";
import ReactVector2D from "./react-vector-2d";
import Vector2D, { Data as PositionData } from "./vector-2d";

export type  Position = PositionData
export const DEFAULT_POSITION = new Vector2D({ x : 0, y : 0 })
export type  Radius = number
export const DEFAULT_RADIUS = 1
export type  Props =
    | (
        & (
            | { position? : Position }
            | { p? : Position }
            | { x? : number, y? : number }
        )
        & (
            | { radius? : Radius }
            | { r? : Radius }
        )
    )

export default class Circle2D {
    private         _position : ReactVector2D
    private         _radius   : Radius
    public readonly change    = new VoidSyncEvent

    public constructor(props : Props = {
        p : DEFAULT_POSITION,
        r : DEFAULT_RADIUS,
    }) {
        const position = DEFAULT_POSITION.clone()

        if ('position' in props) position.set(props.position)
        else if ('p' in props) position.set(props.p)
        else {
            if ('x' in props) position.x = props.x
            if ('y' in props) position.y = props.y
        }

        this._position = new ReactVector2D(position)

        let radius = DEFAULT_RADIUS

        if ('radius' in props) radius = props.radius
        else if ('r' in props) radius = props.r

        this._radius = radius

        this._position.change.attach(this.onPositionChange)
    }

    private onPositionChange = () => {
        this.change.post()
    }

    public get position() {
        return this._position
    }
    public get p() {
        return this._position
    }
    public set p(p : PositionData) {
        this._position.set(p)
    }
    public get x() {
        return this.position.x
    }
    public set x(x : number) {
        this.position.x = x
    }
    public get y() {
        return this._position.y
    }
    public set y(y : number) {
        this._position.y = y
    }
    public get radius() {
        return this._radius
    }
    public set radius(radius : Radius) {
        this._radius = radius

        this.change.post()
    }
    public get r() {
        return this.radius
    }
    public set r(r : Radius) {
        this.radius = r
    }
}
