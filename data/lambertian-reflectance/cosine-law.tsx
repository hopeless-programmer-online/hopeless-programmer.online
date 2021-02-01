import React from 'react'
import radians from '../../classes/radians'
import styles from './cosine-law.module.scss'
import intersection from '../../classes/intersection-2d'

const { sin, cos, tan } = Math

type Props = {}
type State = { a : number, rotate : boolean }

export default class CosineLaw extends React.Component<Props, State> {
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

        // plane
        const p = {
            x : 50,
            y : 50,
            s : 20,
        }
        const c = {
            d : 40,
            f : radians(45),
        }

        return (
            <figure className={styles.container}>
                <figure>
                    <svg viewBox='0 0 100 100'>
                        <Plane {...{ ...p, a }}/>
                        <Camera {...{ x : 50, y : 90, f : radians(45), p : { ...p, a } }}/>
                    </svg>
                    <canvas/>
                </figure>
                <figure>
                    <svg viewBox='0 0 100 100'>
                        <Plane {...{ ...p }}/>
                        <Camera {...{ x : 50 - sin(-a)*40, y : 50 + cos(-a)*40, a : -a, f : radians(45), p : { ...p, a : 0 } }}/>
                    </svg>
                    <canvas/>
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

type PlaneProps = { x : number, y : number, a? : number, s : number }
type CameraProps = { x : number, y : number, a? : number, f : number, p : PlaneProps }

function Plane({ x, y, a = 0, s } : PlaneProps) {
    return (
        <line className={styles.plane}
            x1={x - cos(a) * s/2} y1={y - sin(a) * s/2}
            x2={x + cos(a) * s/2} y2={y + sin(a) * s/2}
        />
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
    </>
}
