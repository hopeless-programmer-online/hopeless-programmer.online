import { article, illustration, paragraph, section, sentence, tex, } from "../classes/shortcuts";

const r = String.raw

export default article(`Віддзеркалення вектора. `, {}, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration(``, tex(r`
            \vec{a'} = 2 proj(\vec{a},\vec{b}) - \vec{a} = 2\vec{b}\frac{(\vec{a},\vec{b})}{\vec{b}^2} - \vec{a}
        `)),
    ]),
])
