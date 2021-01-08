import { VoidSyncEvent } from 'ts-events'
import Vector2D from './vector-2d'

export default class ReactVector2D extends Vector2D {
    public readonly change = new VoidSyncEvent

    public get x() {
        return super.x
    }
    public set x(x : number) {
        super.x = x

        this.change.post()
    }
    public get y() {
        return super.y
    }
    public set y(y : number) {
        super.y = y

        this.change.post()
    }

    public set(other : number | Vector2D) {
        super.set(other)

        this.change.post()
    }
    public normalize() {
        super.normalize()

        this.change.post()
    }
}
