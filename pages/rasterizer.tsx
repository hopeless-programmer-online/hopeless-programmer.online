import React from 'react'
import Point2D from '../classes/point-2d'
import Page from '../components/page'
import CircleComponent from '../components/circle'
import Circle from '../classes/circle'
import Line2DComponent from '../components/line-2d'
import Line2D from '../classes/line-2d'

type Props = {}
type State = {}

export default class Index extends React.Component {
    public render() {
        const l = new Line2D({
            a : new Circle({ x : 0, y : 0, r : 2, fill : 'rgb(206, 145, 120)' }),
            b : new Circle({ x : 50, y : 50, r : 2, fill : 'rgb(206, 145, 120)' }),
            stroke : 'rgb(212, 212, 212)',
        })
        const n = new Circle({ x : 25, y : 25, r : 1, fill : 'rgb(106, 153, 85)' })

        l.change.attach(() => n.set({ x : (l.a.x + l.b.x) / 2, y : (l.a.y + l.b.y) / 2 }))

        return (
            <Page>
                <svg
                    // width='100'
                    // height='100'
                    viewBox='0 0 100 100'
                    style={{ backgroundColor : 'rgb(30, 30, 30)' }}
                >
                    <Line2DComponent model={l}/>
                    <CircleComponent model={n} movable={false}/>
                </svg>
            </Page>
        )
    }
}
