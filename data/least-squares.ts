import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, tex } from "../classes/shortcuts";
import Chart from "./least-squares/chart";

const r = String.raw

export default article('Метод найменших квадратів. ', {}, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration('', tex(r`
            y = ax + b
        `)),
        illustration('', tex(r`
            \overline{x} = \dfrac{1}{N} \sum_{i=0}^{N} x_i
        `)),
        illustration('', tex(r`
            \sigma^2 = \dfrac{1}{N} \sum_{i=0}^{N} (x_i - \overline{x})^2
        `)),
        illustration('', tex(r`
            \sigma^2 = \dfrac{1}{N} \sum_{i=0}^{N} ( y_i - (ax_i + b) )^2
        `)),
        illustration('', tex(r`
            E(a,b) = \sum_{i=0}^{N} ( y_i - (ax_i + b) )^2
        `)),
        illustration('', tex(r`
            \nabla E = ( \dfrac{\partial E}{\partial a}, \dfrac{\partial E}{\partial b} ) = (0,0)
        `)),
        illustration('', tex(r`
            \dfrac{d}{dx}(x^n) = nx^{n-1} x'
        `)),
        illustration('', tex(r`
            \begin{dcases}
                \dfrac{\partial E}{\partial a} &= \sum_{i=0}^{N} -2 ( y_i - (ax_i + b) ) x_i
                \\
                \dfrac{\partial E}{\partial b} &= \sum_{i=0}^{N} -2 ( y_i - (ax_i + b) )
            \end{dcases}
        `)),
        illustration('', tex(r`
            \begin{dcases}
                \sum_{i=0}^{N} ( y_i - (ax_i + b) ) x_i &= 0
                \\
                \sum_{i=0}^{N} ( y_i - (ax_i + b) ) &= 0
            \end{dcases}
        `)),
        illustration('', tex(r`
            \begin{dcases}
                a \sum_{i=0}^{N} x_i^2 + b \sum_{i=0}^{N} x_i &= \sum_{i=0}^{N} y_i x_i
                \\
                a \sum_{i=0}^{N} x_i + b \sum_{i=0}^{N} 1 &= \sum_{i=0}^{N} y_i
            \end{dcases}
        `)),
        illustration('', tex(r`
            \begin{pmatrix}
                \displaystyle \sum_{i=0}^{N} x_i^2 & \displaystyle \sum_{i=0}^{N} x_i
                \\
                \displaystyle \sum_{i=0}^{N} x_i & \displaystyle \sum_{i=0}^{N} 1
            \end{pmatrix}
            \begin{pmatrix}
                a
                \\
                b
            \end{pmatrix}
            =
            \begin{pmatrix}
                \displaystyle \sum_{i=0}^{N} y_i x_i
                \\
                \displaystyle \sum_{i=0}^{N} y_i
            \end{pmatrix}
        `)),
        illustration('', tex(r`
            \begin{pmatrix}
                a
                \\
                b
            \end{pmatrix}
            =
            \begin{pmatrix}
                \displaystyle \sum_{i=0}^{N} x_i^2 & \displaystyle \sum_{i=0}^{N} x_i
                \\
                \displaystyle \sum_{i=0}^{N} x_i & \displaystyle \sum_{i=0}^{N} 1
            \end{pmatrix}^{-1}
            \begin{pmatrix}
                \displaystyle \sum_{i=0}^{N} y_i x_i
                \\
                \displaystyle \sum_{i=0}^{N} y_i
            \end{pmatrix}
        `)),
        illustration('', Chart),
    ]),
])
