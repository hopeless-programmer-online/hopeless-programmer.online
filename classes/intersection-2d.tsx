import { Data as PointData } from './vector-2d'
import { Data as LineData } from './line-2d'

export type Intersection = {
    x : PointData,
    t : number,
    q : number,
}

export default function intersection2D({ l, m } : { l : LineData, m : LineData }) : false | Intersection {
    const a = l.b.x - l.a.x
    const b = m.b.x - m.a.x
    const c = l.b.y - l.a.y
    const d = m.b.y - m.a.y
    const det = a*d - b*c

    if (det === 0) return false

    const cx = m.a.x - l.a.x
    const cy = m.a.y - l.a.y
    const t = (d * cx - b * cy) / det
    const q = -(a * cy - c * cx) / det

    return {
        x : {
            x : l.a.x + (l.b.x - l.a.x) * t,
            y : l.a.y + (l.b.y - l.a.y) * t,
        },
        t,
        q,
    }
}
