import React from 'react'
import { Vector2, Vector3, Matrix4x4, vec2, vec3, vec4, mat3, mat4, mul, translate, div, sub, dot, inv, len } from 'ts-glm'
import { HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis'
import styles from './viewer.module.scss'
import { BufferGeometry } from 'three'

type Props = {}
type State = {
    data : null | {
        images : {
            width : number,
            height : number,
            url : string,
            pixels : Float32Array,
            light : Vector3,
        }[],
        mat : Matrix4x4,
    },
    pixel : null | Vector2,
}

export default class Test extends React.Component<Props, State> {
    public state : State = { data : null, pixel : null }

    private handleMouseMove = (event : React.MouseEvent) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect()

        const x = Math.floor(event.clientX - left)
        const y = Math.floor(event.clientY - top)

        this.setState({ pixel : vec2(
            (x / width) * 2 - 1,
            (y / height) * -2 + 1),
        })
    }

    public async componentDidMount() {
        const { PLYLoader } = await import('three/examples/jsm/loaders/PLYLoader')
        const loader = new PLYLoader
        const geometry = await loader.loadAsync("/bunny.ply")

        geometry.computeVertexNormals()
        geometry.computeBoundingBox()

        // console.log(geometry)

        const canvas = document.createElement('canvas')
        const data = await render(canvas, geometry, [
            vec3(2,     2,     6),
            vec3(2 + 1, 2,     6),
            vec3(2,     2 + 1, 6),
            vec3(2,     2,     6 - 1),
        ], { width : 500, height : 500 })

        this.setState({ data })
    }

    public render() {
        const { data, pixel } = this.state

        if (data === null) return 'loading...'

        const { images, mat } = data

        if (images.length <= 0) return 'loading...'

        const { width, height } = images[0]

        let charts : {
            a : Vector3, b : Vector3, c : number,
            u : number, v : number, w : number,
            points : { x : number, y : number }[],
        }[] = []

        const min = +0.04
        const max = +0.1

        if (pixel) {
            const projectionInverse = inv(mat)

            // // console.log(a.toArray())

            const [ ox, oy, oz, ow ] = mul(projectionInverse, vec4(
                pixel.x,
                pixel.y,
                0,
                1,
            )).toArray() as number[]
            const o = div(vec3(ox, oy, oz), ow)

            const [ dox, doy, doz, dow ] = mul(projectionInverse, vec4(
                pixel.x,
                pixel.y,
                1,
                1,
            )).toArray() as number[]
            const d = sub(div(vec3(dox, doy, doz), dow), o)

            charts = []

            for (const { pixels, light } of images) {
                // console.log(pixel)

                const pu = Math.floor( (pixel.x / 2 + 1 / 2) * width )
                const pv = Math.floor( (pixel.y / 2 + 1 / 2) * height )

                // console.log(pu, pv)

                const id = (pv * width + pu) * 4
                const i = pixels[id + 0]

                const a = sub(light, o)
                const b = sub(vec3(0), d)
                const c = i

                // console.log(a, b, c)

                const u = c**(2/3) * dot(b, b)
                const v = 2 * dot(a, b) * c**(2/3)
                const w = dot(a, a) * c**(2/3)

                // console.log(o, d)
                // console.log(u, v, w)

                const points = []

                charts.push({ a, b, c, u, v, w, points })

                for (let x = min; x < max; x += 0.001) points.push({ x, y : (u * x**2 + v * x + w)**(3/2) })

                // console.log(chart)
            }
        }

        return (
            <article className={styles.viewer}>
                {
                    images.map(({ url }, i) =>
                        <img key={i} alt='preview' src={url} onMouseMove={this.handleMouseMove}/>
                    )
                }
                <XYPlot
                    width={width}
                    height={height}
                >
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis/>
                    <YAxis/>
                    {
                        charts.map(({ points }, i) => <LineSeries
                            key={i}
                            className={styles.line}
                            style={{
                                fill : 'transparent',
                                stroke : ([ 'crimson', 'royalblue', 'tomato', 'gold' ])[i],
                            }}
                            data={points}
                            // data={points.map(({ x, y }) => ({ x, y : y / x }))}
                        />)
                    }
                    {/* {
                        charts.slice(1).map(({ points, a }, i) => <LineSeries
                            key={i}
                            className={styles.line}
                            style={{
                                fill : 'transparent',
                                stroke : ([ 'crimson', 'royalblue', 'tomato', 'gold' ])[i],
                                strokeDasharray : '2 2',
                            }}
                            data={points.map(({ x, y }, j) => ({ x, y : (y - charts[i].points[j].y) / len( sub(a, charts[i].a) ) }))}
                        />)
                    } */}
                    {/* {
                        charts.slice(2).map(({ points, a }, i) => <LineSeries
                            key={i}
                            className={styles.line}
                            style={{
                                fill : 'transparent',
                                stroke : 'violet',
                                strokeDasharray : '2 2',
                            }}
                            data={points.map(({ x, y }, j) => ({ x, y : y - charts[i].points[j].y - charts[i + 1].points[j].y }))}
                        />)
                    } */}
                    <LineSeries
                        style={{
                            fill : 'transparent',
                            stroke : 'gray',
                            strokeDasharray : '4 4',
                        }}
                        data={[ { x : min, y : 0 }, { x : max, y : 0 } ]}
                    />
                    <LineSeries
                        style={{
                            fill : 'transparent',
                            stroke : 'gray',
                            strokeDasharray : '4 4',
                        }}
                        data={[ { x : min, y : -1 }, { x : max, y : -1 } ]}
                    />
                    <LineSeries
                        style={{
                            fill : 'transparent',
                            stroke : 'gray',
                            strokeDasharray : '4 4',
                        }}
                        data={[ { x : min, y : +1 }, { x : max, y : +1 } ]}
                    />
                </XYPlot>
            </article>
        )
    }
}

async function render(canvas : HTMLCanvasElement, geometry : BufferGeometry, lights : Vector3[], { width = 500, height = 500 } : { width? : number, height? : number } = {}) {
    const gl = canvas.getContext('webgl2')

    canvas.width = width
    canvas.height = height

    gl.getExtension('OES_texture_float')
    gl.getExtension('EXT_color_buffer_float')

    const attributes = gl.createVertexArray()

    gl.bindVertexArray(attributes)

    const { position, normal } = geometry.attributes
    const vertices = new Float32Array(position.array.length + normal.array.length)

    vertices.set(position.array)
    vertices.set(normal.array, position.array.length)

    const vertexBuffer = gl.createBuffer()

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 4 * 3, 0)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 4 * 3, position.array.length * 4)
    gl.enableVertexAttribArray(1)

    const indices = new Uint32Array(geometry.index.array.length)

    indices.set(geometry.index.array)

    const indexBuffer = gl.createBuffer()

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)

    const program = gl.createProgram()
    {
        const vertexShader = gl.createShader(gl.VERTEX_SHADER)

        gl.shaderSource(vertexShader, `#version 300 es
            uniform mat3 rotation;
            uniform mat4 model;
            uniform mat4 modelViewProjection;

            layout(location=0) in vec3 v_position;
            layout(location=1) in vec3 v_normal;

            out vec3 f_position;
            out vec3 f_normal;

            void main() {
                vec4 position = vec4(v_position, 1);

                gl_Position = modelViewProjection * position;
                f_position = (model * position).xyz;
                f_normal = rotation * v_normal;
            }
        `)
        gl.compileShader(vertexShader)
        // console.log(gl.getShaderInfoLog(vertexShader))

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

        gl.shaderSource(fragmentShader, `#version 300 es
            precision highp float;

            uniform vec3 light;

            in vec3 f_position;
            in vec3 f_normal;

            out vec4 color;

            void main() {
                vec3 d = light - f_position;
                vec3 n = normalize(f_normal);

                float i = clamp( dot(n, normalize(d)) , 0.0, 1.0) / pow(length(d), 2.0);

                color = vec4(vec3(i), 1);
            }
        `)
        gl.compileShader(fragmentShader)
        // console.log(gl.getShaderInfoLog(fragmentShader))

        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        gl.deleteShader(vertexShader)
        gl.deleteShader(fragmentShader)
    }

    const rotationUniform = gl.getUniformLocation(program, 'rotation')
    const modelUniform = gl.getUniformLocation(program, 'model')
    const modelViewProjectionUniform = gl.getUniformLocation(program, 'modelViewProjection')
    const lightUniform = gl.getUniformLocation(program, 'light')

    gl.useProgram(program)

    const rotation = rotateY(180)
    const model = mul(mul(
        translate(vec3(-1, -5, 10)),
        mat4(rotation)),
        scale(vec3(50, 50, 50)),
    )
    const projection = perspective(60, width / height, 0.1, 100)
    const view = identity()
    const modelViewProjection = mul(projection, mul(view, model))

    if (rotationUniform) gl.uniformMatrix3fv(rotationUniform, false, rotation.toArray())
    if (modelUniform) gl.uniformMatrix4fv(modelUniform, false, model.toArray())
    if (modelViewProjectionUniform) gl.uniformMatrix4fv(modelViewProjectionUniform, false, modelViewProjection.toArray())

    gl.enable(gl.DEPTH_TEST)
    gl.viewport(0, 0, width, height)

    const images = []

    for (const light of lights) {
        // console.log(light)

        if (lightUniform) gl.uniform3fv(lightUniform, light.toArray())

        gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        gl.clearColor(0, 0, 0, 1)
        gl.clearDepth(1)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_INT, 0)

        const url = canvas.toDataURL()

        const framebuffer = gl.createFramebuffer()

        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer)

        const texture = gl.createTexture()

        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, width, height, 0, gl.RGBA, gl.FLOAT, null)
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)

        const depth = gl.createRenderbuffer()

        gl.bindRenderbuffer(gl.RENDERBUFFER, depth)
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT32F, width, height)
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depth)

        gl.viewport(0, 0, width, height)
        gl.clearColor(0, 0, 0, 1)
        gl.clearDepth(1)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_INT, 0)

        const pixels = new Float32Array(width * height * 4)

        gl.readPixels(0, 0, width, height, gl.RGBA, gl.FLOAT, pixels)

        images.push({ width, height, url, pixels, light })
    }

    return { images, mat : mul(projection, view) }
}
function identity() {
    return mat4(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
    )
}
function scale(v : Vector3) {
    return mat4.transpose(mat4(
        +v.x, +0,   +0,   +0,
        +0,   +v.y, +0,   +0,
        +0,   +0,   +v.z, +0,
        +0,   +0,   +0,   +1,
    ))
}
function rotateY(angle : number) {
    const radians = angle / 180 * Math.PI
    const s = Math.sin(radians)
    const c = Math.cos(radians)

    return mat3.transpose(mat3(
        +c, +0, +s,
        +0, +1, +0,
        -s, +0, +c,
    ))
}
function perspective(fov : number, aspect : number, near : number, far : number) {
    const s = 1 / Math.tan(fov / 2 * Math.PI / 180)
    const a = -far / (far - near)
    const b = -far * near / (far - near)

    return mat4.transpose(mat4(
        +s, +0, +0, +0,
        +0, +s, +0, +0,
        +0, +0, -a, +b,
        +0, +0, +1, +0,
    ))
}
