import React from 'react'
import Caster from './sphere-line-cast/caster'
import { article, emp, fig, illustration, note, p, paragraph, section, sentence, tex, } from "../classes/shortcuts";

const r = String.raw

export default article(`Знаходження точки перетину рухомої сфери та прямої. `, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration(``, Caster),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t(\vec{b} - \vec{a})
                \\
                \vec{y} &= \vec{u} + \frac{ (\vec{x} - \vec{u},\vec{v} - \vec{u}) }{ (\vec{v} - \vec{u}, \vec{v} - \vec{u}) } (\vec{v} - \vec{u})
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{d} &= \vec{b} - \vec{a}
                \\
                \vec{w} &= \vec{v} - \vec{u}
                \\
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= \vec{u} + \frac{ (\vec{x} - \vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= \vec{u} + \frac{ (\vec{x} - \vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= \frac{ (\vec{x},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= \frac{ (\vec{a} + t\vec{d},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= t\frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} + \frac{ (\vec{a},\vec{w}) }{ \vec{w}^2 } \vec{w} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= t\frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} + \frac{ (\vec{a} - \vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                |\vec{a} + t\vec{d} - [t\frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} + \frac{ (\vec{a} - \vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}]| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                |t[\vec{d} - \frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } \vec{w}] + [\vec{a} - \vec{u} - \frac{ (\vec{a} - \vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}]| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{l} &= \vec{d} - \frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                \vec{m} &= \vec{a} - \vec{u} - \frac{ (\vec{a} - \vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |t\vec{l} + \vec{m}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            (t\vec{l} + \vec{m})^2 = r^2
        `)),
        illustration(``, tex(r`
            t^2\vec{l}^2 + \vec{m}^2 + 2t(\vec{l},\vec{m}) = r^2
        `)),
        illustration(``, tex(r`
            \begin{cases}
                A &= \vec{l}^2
                \\
                B &= 2(\vec{l},\vec{m})
                \\
                C &= \vec{m}^2 - r^2
                \\
                t^2A + tB + C = 0
            \end{cases}
        `)),
        illustration(``, tex(r`
            t = \frac{ -B \pm \sqrt{ B^2 - 4AC } }{ 2A }
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{d} &= \vec{b} - \vec{a}
                \\
                \vec{w} &= \vec{v} - \vec{u}
                \\
                \vec{l} &= \vec{d} - \frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                \vec{m} &= \vec{a} - \vec{u} - \frac{ (\vec{a} - \vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                A &= \vec{l}^2
                \\
                B &= 2(\vec{l},\vec{m})
                \\
                C &= \vec{m}^2 - r^2
                \\
                t &= \frac{ -B \pm \sqrt{ B^2 - 4AC } }{ 2A }
            \end{cases}
        `)),
    ]),
])
