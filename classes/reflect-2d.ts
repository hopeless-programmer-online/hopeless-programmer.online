import Vector2D, { Data } from './vector-2d'

export default function reflect2D(a : Data, b : Data) {
    const a_ = new Vector2D(a)
    const b_ = new Vector2D(b)

    return a_.sub(b_.mul(2).mul(a_.dot(b)).div(b_.square))
}
