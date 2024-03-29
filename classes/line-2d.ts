import { VoidSyncEvent } from "ts-events";
import { Data as PointData } from './vector-2d'
import Circle from './circle-2d';

export type Data = { a : PointData, b : PointData }

export default class Line2D {
    public static From(x1 : number, y1 : number, x2 : number, y2 : number) {
        return new Line2D({
            a : { x : x1, y : y1 },
            b : { x : x2, y : y2 },
        })
    }

    readonly change = new VoidSyncEvent
    private _a : Circle
    private _b : Circle

    public constructor({
        a,
        b,
    } : {
        a? : Circle | PointData,
        b? : Circle | PointData,
    } = {
    }) {
        // create new a & b for each instance of the line
        // (default args creates a & b only once)
        if (!a) a = new Circle
        if (!b) b = new Circle

        this._a = a instanceof Circle ? a : new Circle(a)
        this._b = b instanceof Circle ? b : new Circle(b)

        this._a.change.attach(this.handlePointChange)
        this._b.change.attach(this.handlePointChange)
    }

    private handlePointChange = () => {
        this.change.post()
    }

    public get a() {
        return this._a
    }
    public get b() {
        return this._b
    }
    public get d() {
        return this.b.p.sub(this.a)
    }
    public get angle() {
        const { d } = this

        return Math.atan2(d.x, d.y)
    }

    public clone() {
        return new Line2D({ a : this.a.clone(), b : this.b.clone() })
    }
}
