import { article, c, cm, code, cs, emp, f, fig, illustration, js, jsx, kw, link, lt, neg, note, paragraph, py, quote, section, sentence, v, l0, cpp, lts, comparison, ts, tex } from '../classes/shortcuts'
import CosineLaw from './lambertian-reflectance/cosine-law'

const brdf = `https://uk.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D0%BC%D0%B5%D0%BD%D0%B5%D0%B2%D0%B0_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D1%96%D1%8F_%D0%B2%D1%96%D0%B4%D0%B1%D0%B8%D0%B2%D0%BD%D0%BE%D1%97_%D0%B7%D0%B4%D0%B0%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%96`
const lambert = `https://uk.wikipedia.org/wiki/%D0%9B%D0%B0%D0%BC%D0%B1%D0%B5%D1%80%D1%82%D0%BE%D0%B2%D0%B5_%D0%B2%D1%96%D0%B4%D0%B1%D0%B8%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F`

const r = String.raw

export default  article(`Закон косинуса Ламберта.`, {}, ...[
    section(``, ...[
        paragraph(...[
            sentence(`Закон косинуса Ламберта встановлює обмеження на те, яку кількість енергії поверхня може отримати від джерела прямого світла. `),
            sentence(`Він стверджує, що ця кількість є пропорційною до косинуса кута під яким світло падає на поверхню. `),
            sentence(`Оскільки в загальному поверхня не може випромінювати більше світла ніж отримує, закон косинуса є важливим при розрахунку освітлення. `),
            sentence(`Він використовується в якості одного з головних чинників в багатьох формулах та моделях: зокрема, в `, link(`двосторонній функції відбивальної здатності`, brdf), ` та в `, link(`моделі освітлення Ламберта`, lambert), `. `),
        ]),
    ]),
    section(`Природа ефекту. `, ...[
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
        illustration(``, CosineLaw),
    ]),
    section(``, ...[
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
    ]),
])
