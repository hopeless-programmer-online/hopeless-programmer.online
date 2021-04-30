import React from 'react'
import styles from './viewer.module.scss'

type Props = {}
type State = {}

export default class Test extends React.Component<Props, State> {
    private handleCanvas = async (canvas : HTMLCanvasElement) => {
        if (!canvas) return

        const { width, height } = canvas.getBoundingClientRect()
        const gl = canvas.getContext('webgl2')

        const attributes = gl.createVertexArray()

        gl.bindVertexArray(attributes)

        const vertices = new Float32Array([
            -0.5, -0.5, +0.0,   +0.0, +0.0, -1.0,
            +0.5, -0.5, +0.0,   +0.0, +0.0, -1.0,
            +0.0, +0.5, +0.0,   +0.0, +0.0, -1.0,
        ])
        const vertexBuffer = gl.createBuffer()

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

        gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 4 * 6, 0)
        gl.enableVertexAttribArray(0)
        gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 4 * 6, 4 * 3)
        gl.enableVertexAttribArray(1)

        const indices = new Uint32Array([
            0, 1, 2,
        ])

        const indexBuffer = gl.createBuffer()

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)

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
            }
        `)
        gl.compileShader(fragmentShader)
        // console.log(gl.getShaderInfoLog(fragmentShader))

        const program = gl.createProgram()

        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        gl.deleteShader(vertexShader)
        gl.deleteShader(fragmentShader)

        const rotationUniform = gl.getUniformLocation(program, 'rotation')
        const modelUniform = gl.getUniformLocation(program, 'model')
        const modelViewProjectionUniform = gl.getUniformLocation(program, 'modelViewProjection')
        const lightUniform = gl.getUniformLocation(program, 'light')

        gl.useProgram(program)

        if (rotationUniform) gl.uniformMatrix3fv(rotationUniform, false, [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
        ])
        if (modelUniform) gl.uniformMatrix4fv(modelUniform, false, [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ])
        if (modelViewProjectionUniform) gl.uniformMatrix4fv(modelViewProjectionUniform, false, [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ])
        if (lightUniform) gl.uniform3fv(lightUniform, [ 0, 0, -1 ])

        gl.viewport(0, 0, width, height)
        gl.clearColor(1.0, 0.5, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_INT, 0)
    }

    public async componentDidMount() {
        const { PLYLoader } = await import('three/examples/jsm/loaders/PLYLoader')

        const loader = new PLYLoader

        this.setState({ loader })
    }

    public render() {
        return (
            <canvas
                width={500}
                height={500}
                ref={this.handleCanvas}
                className={styles.test}
            />
        )
    }
}
