import React from 'react'
import { FaRegEye, FaRegLightbulb } from 'react-icons/fa'
import { BiCube } from 'react-icons/bi'
import Flow from './flow'
import Vector2D from '../../classes/vector-2d'
import styles from './direct-and-reflected-light.module.scss'

export default class DirectAndReflectedLight extends React.Component {
    public render() {
        const l = Vector2D.From(40, 10)
        const e = Vector2D.From(10, 80)
        const c = Vector2D.From(70, 60)
        const s = 10
        const s2 = s / 2

        return (
            <svg
                width     = '500'
                height    = '500'
                viewBox   = '0 0 100 100'
                className = {styles.back}
            >
                <FaRegLightbulb
                    className={styles.source}
                    x={l.x - s2}
                    y={l.y - s2}
                    size={s}
                />
                <FaRegEye
                    className={styles.eye}
                    x={e.x - s2}
                    y={e.y - s2}
                    size={s}
                />
                <BiCube
                    className={styles.cube}
                    x={c.x - s2*4}
                    y={c.y - s2*4}
                    size={s*4}
                />
                <Flow line={{ a : l.add(e.sub(l).mul(0.1)), b : l.add(e.sub(l).mul(0.9)) }} width={5}/>
                <Flow line={{ a : l.add(c.sub(l).mul(0.1)), b : l.add(c.sub(l).mul(0.7)) }} width={5}/>
                <Flow line={{ a : c.add(e.sub(c).mul(0.3)), b : c.add(e.sub(c).mul(0.9)) }} width={5}/>
            </svg>
        )
    }
}
