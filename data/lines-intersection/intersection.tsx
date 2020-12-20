import { MathComponent } from 'mathjax-react'
import React from 'react'
import Circle from '../../classes/circle'
import Line2D from '../../classes/line-2d'
import CircleComponent from '../../components/circle'
import Line2DComponent from '../../components/line-2d'

export default class Intersection extends React.Component {
    private ab = new Line2D({
        a : new Circle({ x : 10, y : 80 }),
        b : new Circle({ x : 90, y : 40 }),
        // strokeWidth : 0.5,
        // strokeDasharray : '2 1',
    })
    private uv = new Line2D({
        a : new Circle({ x : 20, y : 20 }),
        b : new Circle({ x : 70, y : 90 }),
        // strokeWidth : 0.5,
        // strokeDasharray : '2 1',
    })
    private intersection = new Circle({ fill : 'blue' })

    private update = () => {
        const { ab, uv } = this

        const a = ab.b.x - ab.a.x
        const b = uv.b.x - uv.a.x
        const c = ab.b.y - ab.a.y
        const d = uv.b.y - uv.a.y
        const det = a*d - b*c

        if (det === 0) {
            return
        }

        const cx = uv.a.x - ab.a.x
        const cy = uv.a.y - ab.a.y
        const t = (d * cx - b * cy) / det

        this.intersection.set({
            x : ab.a.x + (ab.b.x - ab.a.x) * t,
            y : ab.a.y + (ab.b.y - ab.a.y) * t,
        })
    }

    public componentDidMount() {
        this.ab.change.attach(this.update)
        this.uv.change.attach(this.update)
    }
    public componentWillUnmount() {
        this.ab.change.detach(this.update)
        this.uv.change.detach(this.update)
    }
    public render() {
        return (
            <figure>
                {/* <figcaption>
                    <MathComponent tex={String.raw`
                            \begin{array}\\
                                \vec{x} = \vec{a} + (\vec{b} - \vec{a}) * t\\
                                \vec{y} = \vec{u} + (\vec{v} - \vec{u}) * q\\
                            \end{array}
                    `}/>
                    <MathComponent tex={String.raw`
                            \begin{array}\\
                                \vec{d} = \vec{b} - \vec{a}\\
                                \vec{w} = \vec{v} - \vec{u}\\
                                \vec{x} = \vec{a} + t\vec{d}\\
                                \vec{y} = \vec{u} + q\vec{w}\\
                            \end{array}
                    `}/>
                    <MathComponent tex={String.raw`
                            \begin{array}\\
                                \vec{x} = \vec{y}\\
                                \vec{a} + t\vec{d} = \vec{u} + q\vec{w}\\
                            \end{array}
                    `}/>
                    <MathComponent tex={String.raw`
                            \begin{array}\\
                                t\vec{d} - q\vec{w} = \vec{u} - \vec{a}\\
                            \end{array}
                    `}/>
                    <MathComponent tex={String.raw`
                            (\\
                                1 & 2\\
                                3 & 4\\
                            )\\
                            t\vec{d} - q\vec{w} = \vec{u} - \vec{a}\\
                    `}/>
                </figcaption> */}
                <svg
                    viewBox='0 0 100 100'
                    style={{
                        width : '400pt',
                        backgroundColor : 'rgb(30, 30, 30)',
                    }}
                >
                    <Line2DComponent model={this.ab}/>
                    <Line2DComponent model={this.uv}/>
                    <CircleComponent model={this.intersection}/>
                </svg>
            </figure>
        )
    }
}
