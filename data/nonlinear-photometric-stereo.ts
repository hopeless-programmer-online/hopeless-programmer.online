import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, tex } from "../classes/shortcuts";
import Viewer from './nonlinear-photometric-stereo/viewer'

const r = String.raw

export default article('Нелінійне фотометричне стерео. ', {}, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration('', tex(r`
            \begin{cases}
                \vec{p} &= \vec{o} + t\vec{d}
                \\
                (
                    \dfrac
                    { \vec{l_j} - \vec{p} }
                    { | \vec{l_j} - \vec{p} | }
                    \cdot \vec{n}
                )
                \dfrac
                { 1 }
                { | \vec{l_j} - \vec{p} |^2 }
                &= i
            \end{cases}
        `)),
        illustration('', tex(r`
            \begin{cases}
                \vec{p} &= \vec{o} + t\vec{d}
                \\
                \dfrac
                { \vec{l_j} - \vec{p} }
                { | \vec{l_j} - \vec{p} |^3 }
                \cdot \vec{n} &= i
            \end{cases}
        `)),
        illustration('', tex(r`
            \begin{cases}
                \vec{a_j} &= \vec{l_j} - \vec{o}
                \\
                \vec{b} &= -\vec{d}
                \\
                c &= i
                \\
                x = t
                \\
                \vec{y} = \vec{n}
                \\
                \dfrac
                { \vec{a_j} + x\vec{b} }
                { | \vec{a_j} + x\vec{b} |^3 }
                \cdot \vec{y} &= c
            \end{cases}
        `)),
        illustration('', tex(r`
            (\vec{a_j} + x\vec{b}) \cdot \vec{y} = c | \vec{a_j} + x\vec{b} |^3
        `)),
        illustration('', tex(r`
            (\vec{a_j} + x\vec{b}) \cdot \vec{y} = c \sqrt{ (\vec{a_j} + x\vec{b})^2 }^3
        `)),
        illustration('', tex(r`
            (\vec{a_j} + x\vec{b}) \cdot \vec{y} = c \sqrt{ \vec{a_j}^2 + x^2\vec{b}^2 + 2x (\vec{a_j} \cdot \vec{b}) }^3
        `)),
        illustration('', tex(r`
            (\vec{a_j} + x\vec{b}) \cdot \vec{y} = \sqrt{ c^{\frac{2}{3}} \vec{b}^2 x^2 + 2 c^{\frac{2}{3}} (\vec{a_j} \cdot \vec{b}) x + c^{\frac{2}{3}} \vec{a_j}^2 }^3
        `)),
        illustration('', tex(r`
            \begin{cases}
                u_j &= c^{\frac{2}{3}} \vec{b}^2
                \\
                v_j &= 2 c^{\frac{2}{3}} (\vec{a_j} \cdot \vec{b})
                \\
                w_j &= c^{\frac{2}{3}} \vec{a_j}^2
                \\
                (\vec{a_j} + x \vec{b}) \cdot \vec{y} &= \sqrt{ u_j x^2 + v_j x + w_j }^3
            \end{cases}
        `)),
        illustration('', tex(r`
            (\vec{a_j} + x \vec{b}) \cdot \vec{y} = ( u_j x^2 + v_j x + w_j )^\frac{3}{2}
        `)),
        illustration('', tex(r`
            \vec{a_j} \cdot \vec{y} - \vec{a_{j + 1}} \cdot \vec{y} + \bcancel{ x \vec{b} \cdot \vec{y} - x \vec{b} \cdot \vec{y} } = ( u_j x^2 + v_j x + w_j )^\frac{3}{2} - ( u_{j + 1} x^2 + v_{j + 1} x + w_{j + 1} )^\frac{3}{2}
        `)),
        illustration('', tex(r`
            \begin{cases}
                \vec{m_j} &= \vec{a_j} - \vec{a_{j + 1}}
                \\
                f_j(x) &= ( u_j x^2 + v_j x + w_j )^\frac{3}{2}
                \\
                g_j(x) &= f_j(x) - f_{j + 1}(x)
                \\
                \vec{m_j} \cdot \vec{y} &= g_j(x)
            \end{cases}
        `)),
        illustration('', Viewer),
    ]),
])
