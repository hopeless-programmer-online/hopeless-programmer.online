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
}
