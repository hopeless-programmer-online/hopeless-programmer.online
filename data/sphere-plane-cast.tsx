import React from 'react'
import { article, emp, fig, illustration, note, p, paragraph, section, sentence, tex, } from "../classes/shortcuts";

const r = String.raw

export default article(`Знаходження точки перетину рухомої сфери та площини. `, {}, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t \vec{b}
                \\
                (\vec{y} - \vec{p}) \vec{n} &= 0
                \\
                |\vec{y} - \vec{x}| &= r
                \\
                \dfrac{ \vec{x} - \vec{y} }{ |\vec{x} - \vec{y}| } \dfrac{ \vec{n} }{ |\vec{n}| } &= \pm 1
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t \vec{b}
                \\
                \vec{y} \vec{n} &= \vec{p} \vec{n}
                \\
                (\vec{x} - \vec{y}) \vec{n} &= \pm r |\vec{n}|
            \end{cases}
        `)),
        illustration(``, tex(r`
            (\vec{a} + t \vec{b}) \vec{n} - \vec{p} \vec{n} = \pm r |\vec{n}|
        `)),
        illustration(``, tex(r`
            t \vec{b} \vec{n} + \vec{a} \vec{n} - \vec{p} \vec{n} = \pm r |\vec{n}|
        `)),
        illustration(``, tex(r`
            t = \dfrac{ (\vec{p} - \vec{a}) \vec{n} \pm r |\vec{n}| }{ \vec{b} \vec{n} }
        `)),
    ]),
])
