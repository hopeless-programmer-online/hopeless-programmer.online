import React from 'react'
import radians from '../../classes/radians'
import styles from './bunny.module.scss'
import { BoxGeometry, Camera as ThreeCamera, Color, Mesh, MeshStandardMaterial, PerspectiveCamera, PointLight, Scene as ThreeScene, ShaderMaterial, WebGLRenderer } from 'three'

type Props = {}
type State = {}

export default class Bunny extends React.Component<Props, State> {
    private cancel : number | null = null

    private handleCanvas = async (canvas : HTMLCanvasElement) => {
        if (!canvas) return

        const { PLYLoader } = await import('three/examples/jsm/loaders/PLYLoader')
        const loader = new PLYLoader

        const renderer = new WebGLRenderer({ canvas, antialias : true })
        const { width, height } = canvas.getBoundingClientRect()

        renderer.setSize(width, height)

        const scene = new ThreeScene

        scene.background = new Color('rgb(0, 0, 0)')

        const geometry = await loader.loadAsync('/bunny.ply')

        geometry.computeBoundingBox()
        geometry.computeVertexNormals()

        const object = new Mesh(
            geometry,
            // new MeshStandardMaterial({ color : 'white' }),
            new ShaderMaterial({
                vertexShader : `
                    varying vec3 fNormal;

                    void main() {
                        fNormal = mat3(modelMatrix) * normal;

                        gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1));
                    }
                `,
                fragmentShader : `
                    varying vec3 fNormal;

                    void main() {
                        vec3 light = normalize(vec3(30, 50, 20));
                        vec3 normal = normalize(fNormal);
                        float i = clamp( dot(normal, light), 0.0, 1.0);

                        gl_FragColor = vec4(vec3(i), 1);
                    }
                `,
            })
        )

        object.scale.set(150, 150, 150)

        scene.add(object)

        const light = new PointLight('white')

        light.position.set(30, 50, 20)

        scene.add(light)

        const camera = new PerspectiveCamera(60, width / height, 0.1, 100)

        camera.position.set(0, 30, 40)
        camera.lookAt(0, 15, 0)

        let time = new Date

        const update = () => {
            const now = new Date
            const d = (now.valueOf() - time.valueOf()) / 1000

            time = now

            object.rotateY(-radians(90 * d))

            renderer.render(scene, camera)

            this.cancel = requestAnimationFrame(update)
        }

        this.cancel = requestAnimationFrame(update)
    }

    public componentWillUnmount() {
        const { cancel } = this

        if (cancel !== null) cancelAnimationFrame(cancel)
    }
    public render() {
        return (
            <figure>
                <canvas className={styles.frame} ref={this.handleCanvas}/>
            </figure>
        )
    }
}
