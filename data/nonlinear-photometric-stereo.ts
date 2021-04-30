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
                    { \vec{l} - \vec{p} }
                    { | \vec{l} - \vec{p} | }
                    \cdot \vec{n}
                )
                \dfrac
                { 1 }
                { | \vec{l} - \vec{p} |^2 }
                &= i
            \end{cases}
        `)),
        illustration('', tex(r`
            \begin{cases}
                \vec{p} &= \vec{o} + t\vec{d}
                \\
                \dfrac
                { \vec{l} - \vec{p} }
                { | \vec{l} - \vec{p} |^3 }
                \cdot \vec{n} &= i
            \end{cases}
        `)),
        illustration('', tex(r`
            \begin{cases}
                \vec{a} &= \vec{l} + \vec{o}
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
                { \vec{a} + x\vec{b} }
                { | \vec{a} + x\vec{b} |^3 }
                \cdot \vec{y} &= c
            \end{cases}
        `)),
        illustration('', tex(r`
            (\vec{a} + x\vec{b}) \cdot \vec{y} = c | \vec{a_i} + x\vec{b} |^3
        `)),
        illustration('', tex(r`
            (\vec{a} + x\vec{b}) \cdot \vec{y} = c \sqrt{ (\vec{a} + x\vec{b})^2 }^3
        `)),
        illustration('', tex(r`
            (\vec{a} + x\vec{b}) \cdot \vec{y} = c \sqrt{ \vec{a}^2 + x^2\vec{b}^2 + 2x (\vec{a} \cdot \vec{b}) }^3
        `)),
        illustration('', tex(r`
            (\vec{a} + x\vec{b}) \cdot \vec{y} = \sqrt{ c^{\frac{2}{3}} \vec{b}^2 x^2 + 2 c^{\frac{2}{3}} (\vec{a} \cdot \vec{b}) x + c^{\frac{2}{3}} \vec{a}^2 }^3
        `)),
        illustration('', tex(r`
            \begin{cases}
                A &= c^{\frac{2}{3}} \vec{b}^2
                \\
                B &= 2 c^{\frac{2}{3}} (\vec{a} \cdot \vec{b})
                \\
                C &= c^{\frac{2}{3}} \vec{a}^2
                \\
                (\vec{a} + x\vec{b}) \cdot \vec{y} &= \sqrt{ A x^2 + B x + C }^3
            \end{cases}
        `)),
        illustration('', Viewer),
    ]),
])
