import { article, emp, fig, illustration, note, p, paragraph, section, sentence, tex, } from "../classes/shortcuts";

const r = String.raw

export default article(``, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t(\vec{b} - \vec{a})
                \\
                \vec{y} &= \vec{u} + \frac{ (\vec{x} - \vec{u},\vec{v} - \vec{u}) }{ (\vec{v}-\vec{u}, \vec{v}-\vec{u}) } (\vec{v} - \vec{u})
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
                \vec{y} &= \frac{ (\vec{x}, \vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= \frac{ (\vec{a} + t\vec{d}, \vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= t\frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } + \frac{ (\vec{a},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration(``, tex(r`
            |\vec{x} - \vec{y}| = r \iff \sqrt{ (\vec{x} - \vec{y})^2 } = r \iff (\vec{x} - \vec{y})^2 = r^2
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t\vec{d}
                \\
                \vec{y} &= t\frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } + \frac{ (\vec{a},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                (\vec{x} - \vec{y})^2 &= r^2
            \end{cases}
        `)),
        illustration(``, tex(r`
            (\vec{a} + t\vec{d} - t\frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 } + \frac{ (\vec{a},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w})^2 = r^2
        `)),
        illustration(``, tex(r`
            (t[\vec{d} - \frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 }] + [\vec{a} + \frac{ (\vec{a},\vec{w}) }{ \vec{w}^2 } \vec{w} + \vec{u} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}])^2 = r^2
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{l} &= \vec{d} - \frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 }
                \\
                \vec{m} &= \vec{a} + \vec{u} + \frac{ (\vec{a},\vec{w}) }{ \vec{w}^2 } \vec{w} - \frac{ (\vec{u},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                (t\vec{l} + \vec{m})^2 &= r^2
            \end{cases}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{l} &= \vec{d} - \frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 }
                \\
                \vec{m} &= \vec{a} + \vec{u} + \frac{ (\vec{a} - \vec{w},\vec{w}) }{ \vec{w}^2 } \vec{w}
                \\
                (t\vec{l} + \vec{m})^2 &= r^2
            \end{cases}
        `)),
        illustration(``, tex(r`
            (\vec{a} \pm \vec{b})^2 = \vec{a}^2 + \vec{b}^2 \pm 2(\vec{a},\vec{b})
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
                At^2 + Bt + C &= 0
            \end{cases}
        `)),
        illustration(``, tex(r`
            At^2 + Bt + C = 0 \implies t = \frac{ -B \pm \sqrt{ B^2 - 4AC } }{ 2A }
        `)),
        illustration(``, tex(r`
            \begin{cases}
                \vec{d} &= \vec{b} - \vec{a}
                \\
                \vec{w} &= \vec{v} - \vec{u}
                \\
                \vec{l} &= \vec{d} - \frac{ (\vec{d},\vec{w}) }{ \vec{w}^2 }
                \\
                \vec{m} &= \vec{a} + \vec{u} + \frac{ (\vec{a} - \vec{w},\vec{w}) }{ \vec{w}^2 } \vec{w}
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
