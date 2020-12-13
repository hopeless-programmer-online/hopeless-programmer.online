import Point2D from "./point-2d";

export default class Circle extends Point2D {
    private _r : number;
    private _fill : string;

    public constructor({
        x = 0,
        y = 0,
        r = 1,
        fill = 'red',
    } : {
        x?    : number,
        y?    : number,
        r?    : number,
        fill? : string,
    } = {
    }) {
        super({ x, y })

        this._r = r
        this._fill = fill
    }

    public get r() {
        return this._r
    }
    public set r(r : number) {
        this._r = r

        this.change.post()
    }
    public get fill() {
        return this._fill
    }
    public set fill(fill : string) {
        this._fill = fill

        this.change.post()
    }

    public clone() {
        return new Circle({
            x : this.x,
            y : this.y,
            r : this.r,
            fill : this.fill,
        })
    }
}
