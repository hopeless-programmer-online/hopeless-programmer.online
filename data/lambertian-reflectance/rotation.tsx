import React from 'react'
import radians from '../../classes/radians'
import styles from './rotation.module.scss'
import intersection from '../../classes/intersection-2d'
import { BoxGeometry, Camera as ThreeCamera, Color, Mesh, MeshStandardMaterial, PerspectiveCamera, Scene as ThreeScene, WebGLRenderer } from 'three'

const { sin, cos, PI } = Math

type Props = {}
type State = { a : number, rotate : boolean }

export default class Rotation extends React.Component<Props, State> {
    private time = new Date
    private cancel : number | null = null
    private scene1 : Scene | null = null
    private scene2 : Scene | null = null
    private update = () => {
        const time = new Date
        const d = (time.valueOf() - this.time.valueOf()) / 1000

        this.time = time

        let { a, rotate } = this.state

        if (rotate) a += radians(60) * d

        const { scene1, scene2 } = this

        if (scene1) {
            scene1.plane.rotation.y = -a
            scene1.renderer.render(scene1.scene, scene1.camera)
        }
        if (scene2) {
            scene2.camera.position.set(
                -sin(a)*40,
                0,
                -cos(a)*40,
            )
            scene2.camera.rotation.y = radians(180) + a
            scene2.renderer.render(scene2.scene, scene2.camera)
        }

        this.setState({ a })

        this.cancel = requestAnimationFrame(this.update)
    }
    private toggleRotate = (event : React.ChangeEvent<HTMLInputElement>) => {
        const rotate = event.target.checked

        this.setState({ rotate })
    }
    private handleCanvas1 = (canvas : HTMLCanvasElement) => {
        // workaround for next.js hot update
        if (!canvas) return

        this.scene1 = new Scene(canvas)
    }
    private handleCanvas2 = (canvas : HTMLCanvasElement) => {
        // workaround for next.js hot update
        if (!canvas) return

        this.scene2 = new Scene(canvas)
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

        // plane
        const p = {
            x : 50,
            y : 50,
            s : 20,
        }

        return (
            <figure className={styles.container}>
                <figure>
                    <svg viewBox='0 0 100 100'>
                        <Plane {...{ ...p, a }}/>
                        <Camera {...{ x : 50, y : 90, f : radians(45), p : { ...p, a } }}/>
                    </svg>
                    <canvas ref={this.handleCanvas1}/>
                </figure>
                <figure>
                    <svg viewBox='0 0 100 100'>
                        <Plane {...{ ...p }}/>
                        <Camera {...{ x : 50 - sin(-a)*40, y : 50 + cos(-a)*40, a : -a, f : radians(45), p : { ...p, a : 0 } }}/>
                    </svg>
                    <canvas ref={this.handleCanvas2}/>
                </figure>
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

class Scene {
    public readonly renderer : WebGLRenderer
    public readonly scene : ThreeScene
    public readonly plane : Mesh
    public readonly camera : ThreeCamera

    public constructor(canvas : HTMLCanvasElement) {
        const renderer = new WebGLRenderer({ canvas, antialias : true })
        const { width, height } = canvas.getBoundingClientRect()

        renderer.setSize(width, height)

        const scene = new ThreeScene

        scene.background = new Color('rgb(30, 30, 30)')

        const plane = new Mesh(
            new BoxGeometry(20, 20, 1),
            new MeshStandardMaterial({ color : 'white', emissive : 'white', emissiveIntensity : 1 }),
        )

        scene.add(plane)

        const camera = new PerspectiveCamera(45, 1, 0.1, 100)

        camera.position.set(0, 0, 40)

        this.renderer = renderer
        this.scene = scene
        this.plane = plane
        this.camera = camera
    }
}

type PlaneProps = { x : number, y : number, a? : number, s : number }
type CameraProps = { x : number, y : number, a? : number, f : number, p : PlaneProps }

function Plane({ x, y, a = 0, s } : PlaneProps) {
    const s2 = s/2
    const b = a + PI/2
    const n = 20
    const c1 = b + PI + PI/4
    const c2 = b + PI - PI/4
    const d = n/4

    return (
        <>
            <line className={styles.plane}
                x1={x - cos(a) * s2} y1={y - sin(a) * s2}
                x2={x + cos(a) * s2} y2={y + sin(a) * s2}
            />
            <line className={styles.normal}
                x1={x}              y1={y}
                x2={x + cos(b) * n} y2={y + sin(b) * n}
            />
            <line className={styles.normal}
                x1={x + cos(b) * n}               y1={y + sin(b) * n}
                x2={x + cos(b) * n + cos(c1) * d} y2={y + sin(b) * n + sin(c1) * d}
            />
            <line className={styles.normal}
                x1={x + cos(b) * n}               y1={y + sin(b) * n}
                x2={x + cos(b) * n + cos(c2) * d} y2={y + sin(b) * n + sin(c2) * d}
            />
            <text
                x={x + cos(b) * n * 1.5} y={y + sin(b) * n * 1.5}
            >
                n
            </text>
        </>
    )
}
function Camera({ x, y, a = 0, f, p } : CameraProps) {
    const ld = { x : x + sin(a - f/2), y : y - cos(a - f/2) }
    const lx = [
        intersection({ l : { a : { x, y }, b : ld }, m : { a : { x : 0,   y : 0   }, b : { x : 100, y : 0   } } }),
        intersection({ l : { a : { x, y }, b : ld }, m : { a : { x : 100, y : 0   }, b : { x : 100, y : 100 } } }),
        intersection({ l : { a : { x, y }, b : ld }, m : { a : { x : 100, y : 100 }, b : { x : 0,   y : 100 } } }),
        intersection({ l : { a : { x, y }, b : ld }, m : { a : { x : 0,   y : 100 }, b : { x : 0,   y : 0   } } }),
    ].reduce((a, x) => x && x.t > 0 && (!a || x.t < a.t) ? x : a, false)
    const rd = { x : x + sin(a + f/2), y : y - cos(a + f/2) }
    const rx = [
        intersection({ l : { a : { x, y }, b : rd }, m : { a : { x : 0,   y : 0   }, b : { x : 100, y : 0   } } }),
        intersection({ l : { a : { x, y }, b : rd }, m : { a : { x : 100, y : 0   }, b : { x : 100, y : 100 } } }),
        intersection({ l : { a : { x, y }, b : rd }, m : { a : { x : 100, y : 100 }, b : { x : 0,   y : 100 } } }),
        intersection({ l : { a : { x, y }, b : rd }, m : { a : { x : 0,   y : 100 }, b : { x : 0,   y : 0   } } }),
    ].reduce((a, x) => x && x.t > 0 && (!a || x.t < a.t) ? x : a, false)

    const ltd = {
        x : p.x - cos(p.a) * p.s/2,
        y : p.y - sin(p.a) * p.s/2,
    }
    const ltx = [
        intersection({ l : { a : { x, y }, b : ltd }, m : { a : { x : 0,   y : 0   }, b : { x : 100, y : 0   } } }),
        intersection({ l : { a : { x, y }, b : ltd }, m : { a : { x : 100, y : 0   }, b : { x : 100, y : 100 } } }),
        intersection({ l : { a : { x, y }, b : ltd }, m : { a : { x : 100, y : 100 }, b : { x : 0,   y : 100 } } }),
        intersection({ l : { a : { x, y }, b : ltd }, m : { a : { x : 0,   y : 100 }, b : { x : 0,   y : 0   } } }),
    ].reduce((a, x) => x && x.t > 0 && (!a || x.t < a.t) ? x : a, false)
    const rtd = {
        x : p.x + cos(p.a) * p.s/2,
        y : p.y + sin(p.a) * p.s/2,
    }
    const rtx = [
        intersection({ l : { a : { x, y }, b : rtd }, m : { a : { x : 0,   y : 0   }, b : { x : 100, y : 0   } } }),
        intersection({ l : { a : { x, y }, b : rtd }, m : { a : { x : 100, y : 0   }, b : { x : 100, y : 100 } } }),
        intersection({ l : { a : { x, y }, b : rtd }, m : { a : { x : 100, y : 100 }, b : { x : 0,   y : 100 } } }),
        intersection({ l : { a : { x, y }, b : rtd }, m : { a : { x : 0,   y : 100 }, b : { x : 0,   y : 0   } } }),
    ].reduce((a, x) => x && x.t > 0 && (!a || x.t < a.t) ? x : a, false)

    const b = a + PI/2
    const v = 20
    const c1 = b + PI + PI/4
    const c2 = b + PI - PI/4
    const d = v/4

    return <>
        { lx && lx.t > 0 &&
            <line className={styles.view}
                x1={x} y1={y}
                x2={lx.x.x} y2={lx.x.y}
            />
        }
        { rx && rx.t > 0 &&
            <line className={styles.view}
                x1={x} y1={y}
                x2={rx.x.x} y2={rx.x.y}
            />
        }
        { ltx && ltx.t > 0 &&
            <line className={styles.tangent}
                x1={x} y1={y}
                x2={ltx.x.x} y2={ltx.x.y}
            />
        }
        { rtx && rtx.t > 0 &&
            <line className={styles.tangent}
                x1={x} y1={y}
                x2={rtx.x.x} y2={rtx.x.y}
            />
        }
        <line className={styles.light}
            x1={50}              y1={50}
            x2={50 + cos(b) * v} y2={50 + sin(b) * v}
        />
        <line className={styles.light}
            x1={50 + cos(b) * v}               y1={50 + sin(b) * v}
            x2={50 + cos(b) * v + cos(c1) * d} y2={50 + sin(b) * v + sin(c1) * d}
        />
        <line className={styles.light}
            x1={50 + cos(b) * v}               y1={50 + sin(b) * v}
            x2={50 + cos(b) * v + cos(c2) * d} y2={50 + sin(b) * v + sin(c2) * d}
        />
        <text
            x={50 + cos(b) * v * 1.5} y={50 + sin(b) * v * 1.5}
        >
            v
        </text>
    </>
}
