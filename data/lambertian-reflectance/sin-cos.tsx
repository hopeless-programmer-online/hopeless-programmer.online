import React from 'react'
import radians from '../../classes/radians'
import styles from './sin-cos.module.scss'
import intersection from '../../classes/intersection-2d'
import { BoxGeometry, Camera as ThreeCamera, Color, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene as ThreeScene, WebGLRenderer } from 'three'

const { sin, cos, PI } = Math

type Props = {}
type State = { a : number, rotate : boolean }

export default class SinCos extends React.Component<Props, State> {
    private time = new Date
    private cancel : number | null = null
    private update = () => {
        const time = new Date
        const d = (time.valueOf() - this.time.valueOf()) / 1000

        this.time = time

        let { a, rotate } = this.state

        if (rotate) a += radians(60) * d

        this.setState({ a })

        this.cancel = requestAnimationFrame(this.update)
    }
    private toggleRotate = (event : React.ChangeEvent<HTMLInputElement>) => {
        const rotate = event.target.checked

        this.setState({ rotate })
    }

    public state = { a : radians(15), rotate : true }

    public componentDidMount() {
        this.cancel = requestAnimationFrame(this.update)
    }
    public componentWillUnmount() {
        const { cancel } = this

        if (cancel !== null) cancelAnimationFrame(cancel)
    }
    public render() {
        const { a, rotate } = this.state

        return (
            <figure className={styles.container}>
                <svg viewBox='-80 -80 160 160'>
                    <circle
                        className={styles.grid}
                        cx={0} cy={0}
                        r={50}
                    />
                    <line
                        className={styles.grid}
                        x1={-65} y1={0}
                        x2={+65} y2={0}
                    />
                    <line
                        className={styles.arrow}
                        x1={+65}     y1={0}
                        x2={+65 - 4} y2={0 + 2}
                    />
                    <line
                        className={styles.arrow}
                        x1={+65}     y1={0}
                        x2={+65 - 4} y2={0 - 2}
                    />
                    <text
                        className={styles.x}
                        x={65} y={0}
                    >
                        X
                    </text>
                    <line
                        className={styles.one}
                        x1={+50} y1={-5}
                        x2={+50} y2={+5}
                    />
                    <text
                        className={styles.x1}
                        x={50} y={0}
                    >
                        1
                    </text>
                    <line
                        className={styles.one}
                        x1={-50} y1={-5}
                        x2={-50} y2={+5}
                    />
                    <text
                        className={styles.x1}
                        x={-50} y={0}
                    >
                        -1
                    </text>
                    <line
                        className={styles.grid}
                        y1={-65} x1={0}
                        y2={+65} x2={0}
                    />
                    <line
                        className={styles.arrow}
                        y1={-65}     x1={0}
                        y2={-65 + 4} x2={0 + 2}
                    />
                    <line
                        className={styles.arrow}
                        y1={-65}     x1={0}
                        y2={-65 + 4} x2={0 - 2}
                    />
                    <text
                        className={styles.y}
                        x={0} y={-65}
                    >
                        Y
                    </text>
                    <line
                        className={styles.one}
                        x1={-5} y1={-50}
                        x2={+5} y2={-50}
                    />
                    <text
                        className={styles.y1}
                        x={0} y={-50}
                    >
                        1
                    </text>
                    <line
                        className={styles.one}
                        x1={-5} y1={+50}
                        x2={+5} y2={+50}
                    />
                    <text
                        className={styles.y1}
                        x={0} y={+50}
                    >
                        -1
                    </text>
                    <path d={`
                        M 0 -20
                        A 20 20 0 ${(a % (PI*2)) > PI ? 1 : 0} 1 ${sin(a) * 20} ${-cos(a) * 20}
                    `}/>
                    <text
                        className={styles.angle}
                        x={+sin(a) * 20 + sin(a + PI/2) * 8}
                        y={-cos(a) * 20 - cos(a + PI/2) * 8}
                    >
                        { ((a % (PI*2) ) / PI * 180).toFixed(0) }°
                    </text>
                    <line
                        className={styles.projection}
                        x1={ +sin(a) * +50 } y1={ 0 }
                        x2={ +sin(a) * +50 } y2={ -cos(a) * +50 }
                    />
                    <text
                        className={styles.sin}
                        x={ +sin(a) * +50 * 0.5 } y={ -cos(a) * +50 }
                    >
                        sin
                    </text>
                    <text
                        className={styles.cos}
                        x={ +sin(a) * +50 } y={ -cos(a) * +50 * 0.5 }
                    >
                        cos
                    </text>
                    <line
                        className={styles.projection}
                        x1={ 0 }             y1={ -cos(a) * +50 }
                        x2={ +sin(a) * +50 } y2={ -cos(a) * +50 }
                    />
                    <line
                        className={styles.plane}
                        x1={ +sin(a) * +50 } y1={ -cos(a) * +50 }
                        x2={ +sin(a) * -50 } y2={ -cos(a) * -50 }
                    />
                    <text
                        className={styles.coordinates}
                        x={ +sin(a) * (66 - sin(a) * 8) }
                        y={ -cos(a) * (66 - sin(a) * 8) - 4 }
                    >
                        x : { sin(a).toFixed(2) }
                    </text>
                    <text
                        className={styles.coordinates}
                        x={ +sin(a) * (66 - sin(a) * 8) }
                        y={ -cos(a) * (66 - sin(a) * 8) + 4 }
                    >
                        y : { cos(a).toFixed(2) }
                    </text>
                    <text
                        className={styles.coordinates}
                        x={ +sin(a) * -(66 + sin(a) * 5) }
                        y={ -cos(a) * -(66 + sin(a) * 5) - 4 }
                    >
                        x : { sin(a).toFixed(2) }
                    </text>
                    <text
                        className={styles.coordinates}
                        x={ +sin(a) * -(66 + sin(a) * 5) }
                        y={ -cos(a) * -(66 + sin(a) * 5) + 4 }
                    >
                        y : { cos(a).toFixed(2) }
                    </text>
                </svg>
                <figcaption>
                    <label>
                        <input type='checkbox' checked={rotate} onChange={this.toggleRotate}/>
                        rotate
                    </label>
                </figcaption>
            </figure>
        )
    }
}
