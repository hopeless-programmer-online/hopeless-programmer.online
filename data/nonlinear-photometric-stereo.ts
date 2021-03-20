import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, tex } from "../classes/shortcuts";

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
                \vec{a} = \vec{l} + \vec{o}
                \\
                \vec{b} = -\vec{d}
                \\
                \dfrac
                { \vec{a} + t\vec{b} }
                { | \vec{a} + t\vec{b} |^3 }
                \cdot \vec{n} = i
            \end{cases}
        `)),
        illustration('', tex(r`
            (\vec{a} + t\vec{b}) \cdot \vec{n} = i | \vec{a} + t\vec{b} |^3
        `)),
        illustration('', tex(r`
            \dfrac
            { \vec{a_i} + x\vec{b} }
            { | \vec{a_i} + x\vec{b} |^3 }
            \cdot \vec{y} = c_i
        `)),
    ]),
])
