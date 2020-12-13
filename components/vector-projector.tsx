import React from 'react'
import Circle from '../classes/circle';
import Line2D from '../classes/line-2d';
import CircleComponent from '../components/circle';
import Line2DComponent from '../components/line-2d';
import { MathComponent } from 'mathjax-react';
import Point2D from '../classes/point-2d';

const r = String.raw

type Props = { l : Line2D, n : Circle }

export default class VectorProjector extends React.Component<Props> {
    public static defaultProps = {
        l : new Line2D({
            a : new Circle({ x : 20, y : 80, r : 2, fill : 'rgb(206, 145, 120)' }),
            b : new Circle({ x : 80, y : 50, r : 2, fill : 'rgb(206, 145, 120)' }),
            stroke : 'rgb(212, 212, 212)',
        }),
        n : new Circle({ x : 25, y : 25, r : 1, fill : 'rgb(106, 153, 85)' }),
    }

    private l : Line2D
    private n : Circle

    public constructor(props : Props) {
        super(props)

        // need to clone objects as default props are shred between all instances
        this.l = props.l.clone()
        this.n = props.n.clone()
    }

    public render() {
        const { l, n } = this

        return (
            <figure>
                <figcaption>
                    <MathComponent tex={r`\vec{a'} = cos \langle \vec{a},\vec{b} \rangle \vec{b} \frac{|\vec{a}|}{|\vec{b}|} = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| |\vec{b}|} \vec{b} \frac{|\vec{a}|}{|\vec{b}|} = \vec{b} \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2} = \vec{b} \frac{\vec{a} \cdot \vec{b}}{\vec{b}^2} = \vec{b} \frac{\vec{a} \cdot \vec{b}}{\vec{b} \cdot \vec{b}}`}/>
                </figcaption>
                <svg
                    viewBox='0 0 100 100'
                    style={{
                        width : '400pt',
                        backgroundColor : 'rgb(30, 30, 30)',
                    }}
                >
                    <Line2DComponent model={l}/>
                    <CircleComponent model={n}/>
                    <ProjectedLine l={l} n={n}/>
                </svg>
            </figure>
        )
    }
}

class ProjectedLine extends React.Component<Props> {
    private m : Circle
    private k : Line2D

    public constructor(props : Props) {
        super(props)

        this.m = new Circle({ r : 1, fill : 'rgb(86, 156, 214)' })
        this.k = new Line2D({
            a : this.props.n,
            b : this.m,
            stroke : 'rgb(212, 212, 212)',
            strokeWidth : 0.5,
            strokeDasharray : '1 1'
        })

        this.update()
    }

    private update = () => {
        const { l, n } = this.props

        const n1 = l.a.plus( proj( n.minus(l.a), l.b.minus(l.a) ) )

        this.m.set(n1)

        const t = projT( n.minus(l.a), l.b.minus(l.a) )

        this.k.stroke = (t < 0 || t > 1)
            ? 'red'
            : 'rgb(212, 212, 212)'
    }

    public componentDidMount() {
        this.props.l.change.attach(this.update)
        this.props.n.change.attach(this.update)
    }
    public componentWillUnmount() {
        this.props.l.change.detach(this.update)
        this.props.n.change.detach(this.update)
    }

    public render() {
        return (
            <Line2DComponent model={this.k} movableB={false}/>
        )
    }
}

function projT(a : Point2D, b : Point2D) {
    return a.dot(b) / b.square()
}
function proj(a : Point2D, b : Point2D) {
    return b.multiply( projT(a, b) )
}
