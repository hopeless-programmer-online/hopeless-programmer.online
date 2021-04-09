import React from 'react'
import { article, emp, fig, illustration, note, p, paragraph, section, sentence, tex, } from "../classes/shortcuts";

const r = String.raw

export default article(`Знаходження точки перетину прямої та площини. `, {}, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t \vec{b}
                \\
                (\vec{x} - \vec{o}) \cdot \vec{n} &= 0
            \end{cases}
        `)),
        illustration(``, tex(r`
            (\vec{a} + t \vec{b} - \vec{o}) \cdot \vec{n} = 0
        `)),
        illustration(``, tex(r`
            t \vec{b} \cdot \vec{n} + (\vec{a} - \vec{o}) \cdot \vec{n} = 0
        `)),
        illustration(``, tex(r`
            t = \dfrac{ (\vec{o} - \vec{a}) \cdot \vec{n} }{ \vec{b} \cdot \vec{n} }
        `)),
    ]),
])
