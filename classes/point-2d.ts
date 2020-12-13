import { VoidSyncEvent } from 'ts-events';

export default class Point2D {
    public static From(x, y) {
        return new Point2D({ x, y })
    }

    readonly change = new VoidSyncEvent
    private _x : number
    private _y : number

    public constructor({ x = 0, y = 0 } : { x? : number, y? : number } = { x : 0, y : 0 }) {
        this._x = x
        this._y = y
    }

    public get x() {
        return this._x
    }
    public set x(x : number) {
        this._x = x

        this.change.post()
    }
    public get y() {
        return this._y
    }
    public set y(y : number) {
        this._y = y

        this.change.post()
    }
    public get length() {
        return Math.sqrt( this.square() )
    }

    public set({ x, y } : { x : number, y : number }) {
        this._x = x
        this._y = y

        this.change.post()
    }
    public move({ x, y } : { x : number, y : number }) {
        this._x += x
        this._y += y

        this.change.post()
    }
    public plus(point : Point2D) {
        return Point2D.From(this.x + point.x, this.y + point.y)
    }
    public minus(point : Point2D) {
        return Point2D.From(this.x - point.x, this.y - point.y)
    }
    public dot(point : Point2D) {
        return this.x * point.x + this.y * point.y
    }
    public multiply(source : number | Point2D) {
        return typeof source === 'number'
            ? Point2D.From(this.x * source, this.y * source)
            : Point2D.From(this.x * source.x, this.y * source.y)
    }
    public square() {
        return this.dot(this)
    }
}
