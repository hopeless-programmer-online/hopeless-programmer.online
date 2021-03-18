import React from 'react'
import { matrix, inv, multiply as mul } from 'mathjs'
import styles from './chart.module.scss'

export default class Chart extends React.Component {
    private points = Array.from(Array(100).keys()).map(i => ({
        x : i / 100 * 100,
        y : i / 100 * 100 + (Math.random() * 2 - 1) * 15,
    }))

    public render() {
        const { a, b } = leastSquares(this.points)

        return (
            <svg
                className={styles.chart}
                viewBox={`-10 -10 120 120`}
            >
                <line
                    className={styles.axis}
                    x1={-10} y1={100}
                    x2={110} y2={100}
                />
                <line
                    className={styles.axis}
                    x1={110}     y1={100}
                    x2={110 - 5} y2={100 - 2.5}
                />
                <line
                    className={styles.axis}
                    x1={110}     y1={100}
                    x2={110 - 5} y2={100 + 2.5}
                />
                <line
                    className={styles.axis}
                    x1={0} y1={-10}
                    x2={0} y2={110}
                />
                <line
                    className={styles.axis}
                    x1={0}       y1={-10}
                    x2={0 - 2.5} y2={-10 + 5}
                />
                <line
                    className={styles.axis}
                    x1={0}       y1={-10}
                    x2={0 + 2.5} y2={-10 + 5}
                />
                {
                    this.points.map(({ x, y }, i) =>
                        <circle
                            key={i}
                            cx={x}
                            cy={100 - y}
                            r={1}
                        />
                    )
                }
                <line
                    className={styles.line}
                    x1={0}   y1={100 - (a + b * 0)}
                    x2={100} y2={100 - (a + b * 100)}
                />
            </svg>
        )
    }
}

function leastSquares(points : Array<{ x : number, y : number }>) {
    const A = matrix([
        [
            // \sum x_i^2
            points.reduce((a, { x }) => a + x**2, 0),
            // \sum x_i
            points.reduce((a, { x }) => a + x, 0),
        ],
        [
            // \sum x_i
            points.reduce((a, { x }) => a + x, 0),
            // \sum 1
            points.reduce((a, { x }) => a + 1, 0),
        ],
    ])
    const c = matrix([
        [
            // \sum y_i x_i
            points.reduce((a, { x, y }) => a + y*x, 0),
        ],
        [
            // \sum x_i
            points.reduce((a, { y }) => a + y, 0),
        ],
    ])

    const [ a, b ] = mul(inv(A), c).toArray() as number[]

    return { a, b }
}
