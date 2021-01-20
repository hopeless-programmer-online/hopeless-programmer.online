import React from 'react'
import { article, illustration, paragraph, section, sentence, tex, } from "../classes/shortcuts";
import Projector from './vector-projection/projector';

const r = String.raw

export default article(`Векторна проекція. `, {}, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration('', Projector),
        illustration(``, tex(r`
            \vec{a'} = \cos( \widehat{ \vec{a} \vec{b} } ) \frac{ |\vec{a}| }{ |\vec{b}| } \vec{b}
        `)),
        illustration(``, tex(r`
            \vec{a'} = \frac{ (\vec{a},\vec{b}) }{ |\vec{a}| |\vec{b}| } \frac{ |\vec{a}| }{ |\vec{b}| } \vec{b}
        `)),
        illustration(``, tex(r`
            \vec{a'} = \frac{ (\vec{a},\vec{b}) }{ (\vec{b},\vec{b}) } \vec{b}
        `)),
        illustration(``, tex(r`
            \vec{a'} = \frac{ (\vec{a},\vec{b}) }{ \vec{b}^2 } \vec{b}
        `)),
    ]),
])
