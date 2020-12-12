import { VoidSyncEvent } from "ts-events";
import Circle from "./circle";

export default class Line2D {
    public static From(x1 : number, y1 : number, x2 : number, y2 : number) {
        return new Line2D({
            a : new Circle({ x : x1, y : y1 }),
            b : new Circle({ x : x2, y : y2 }),
        })
    }

    readonly change = new VoidSyncEvent
    private _a : Circle
    private _b : Circle
    private _stroke : string
    private _strokeWidth : number

    public constructor({
        a,
        b,
        stroke = 'white',
        strokeWidth = 1,
    } : {
        a? : Circle,
        b? : Circle,
        stroke? : string,
        strokeWidth? : number,
    } = {
    }) {
        // create new a & b for each instance of the line
        // (default args creates a & b only once)
        if (!a) a = new Circle
        if (!b) b = new Circle

        this._a = a
        this._b = b
        this._stroke = stroke
        this._strokeWidth = strokeWidth

        a.change.attach(this.handlePointChange)
        b.change.attach(this.handlePointChange)
    }

    private handlePointChange = () => {
        this.change.post()
    }

    public get a() {
        return this._a
    }
    public set a(a : Circle) {
        this._a = a

        this.change.post()
    }
    public get b() {
        return this._b
    }
    public set b(b : Circle) {
        this._b = b

        this.change.post()
    }
    public get stroke() {
        return this._stroke
    }
    public set stroke(stroke : string) {
        this._stroke = stroke

        this.change.post()
    }
    public get strokeWidth() {
        return this._strokeWidth
    }
    public set strokeWidth(strokeWidth : number) {
        this._strokeWidth = strokeWidth

        this.change.post()
    }
}
