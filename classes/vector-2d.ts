export type Data = { x : number, y : number }

export default class Vector2D {
    public static From(x : number, y : number) {
        return new Vector2D({ x, y })
    }

    private _x : number
    private _y : number

    public constructor({
        x = 0,
        y = 0,
    } : {
        x? : number,
        y? : number,
    } = {
        x : 0,
        y : 0,
    }) {
        this._x = x
        this._y = y
    }

    public get x() {
        return this._x
    }
    public set x(x : number) {
        this._x = x
    }
    public get y() {
        return this._y
    }
    public set y(y : number) {
        this._y = y
    }

    public get square() {
        return this.dot(this)
    }
    public get length() {
        return Math.sqrt(this.square)
    }
    public get normalized() {
        return this.div(this.length)
    }

    public set(other : number | Data) {
        if (typeof other === 'number') {
            this._x = other
            this._y = other
        }
        else {
            this._x = other.x
            this._y = other.y
        }
    }
    public add(other : number | Data) {
        return typeof other === 'number'
            ? new Vector2D({
                x : this.x + other,
                y : this.y + other,
            })
            : new Vector2D({
                x : this.x + other.x,
                y : this.y + other.y,
            })
    }
    public sub(other : number | Data) {
        return typeof other === 'number'
            ? new Vector2D({
                x : this.x - other,
                y : this.y - other,
            })
            : new Vector2D({
                x : this.x - other.x,
                y : this.y - other.y,
            })
    }
    public mul(other : number | Data) {
        return typeof other === 'number'
            ? new Vector2D({
                x : this.x * other,
                y : this.y * other,
            })
            : new Vector2D({
                x : this.x * other.x,
                y : this.y * other.y,
            })
    }
    public div(other : number | Data) {
        return typeof other === 'number'
            ? new Vector2D({
                x : this.x / other,
                y : this.y / other,
            })
            : new Vector2D({
                x : this.x / other.x,
                y : this.y / other.y,
            })
    }
    public dot(other : Data) {
        return this.x * other.x + this.y * other.y
    }
    public normalize() {
        const l = this.length

        this._x /= l
        this._y /= l
    }
    public distance(other : Data) {
        return this.sub(other).length
    }
    public clone() {
        return new Vector2D(this)
    }
}
