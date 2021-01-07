import React from 'react'
import { article, illustration, section, tex } from '../../classes/shortcuts'
import Article from '../../components/article'
import Page from '../../components/page'

const r = String.raw
const model = article('', ...[
    section('', ...[
        illustration('', tex(r`
            \begin{cases}
                \vec{x} &= \vec{a} + t(\vec{b} - \vec{a})
                \\
                |\vec{x} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration('', tex(r`
            \begin{cases}
                \vec{d} &= \vec{b} - \vec{a}
                \\
                |\vec{a} + t\vec{d} - \vec{y}| &= r
            \end{cases}
        `)),
        illustration('', tex(r`
            \begin{cases}
                \vec{c} &= \vec{a} - \vec{y}
                \\
                (t\vec{d} + \vec{c})^2 &= r^2
            \end{cases}
        `)),
        illustration('', tex(r`
            t^2\vec{d}^2 + 2t(\vec{d},\vec{c}) + \vec{c}^2 - r^2 = 0
        `)),
        illustration('', tex(r`
            \begin{cases}
                A &= \vec{d}^2
                \\
                B &= 2(\vec{d},\vec{c})
                \\
                C &= \vec{c}^2 - r^2
                \\
                At^2 + Bt + C &= 0
            \end{cases}
        `)),
        illustration('', tex(r`
            t = \frac{ -B \pm \sqrt{B^2 - 4AC} }{ 2A }
        `)),
    ])
])

export default class VectorReflection extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
