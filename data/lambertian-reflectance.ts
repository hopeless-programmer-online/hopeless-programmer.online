import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs } from "../classes/shortcuts"
import DirectAndReflectedLight from "./lambertian-reflectance/direct-and-reflected-light"

const johann = `https://uk.wikipedia.org/wiki/%D0%99%D0%BE%D0%B3%D0%B0%D0%BD%D0%BD_%D0%93%D0%B5%D0%BD%D1%80%D1%96%D1%85_%D0%9B%D0%B0%D0%BC%D0%B1%D0%B5%D1%80%D1%82`
const photometria = `https://en.wikipedia.org/wiki/Photometria`
const age = (() => {
    const ms = (new Date).valueOf() - new Date('1760').valueOf()
    const y = (ms / (1000 * 60 * 60 * 24 * 365)).toFixed(0)
    const l = Number(y[y.length - 1])
    const end =
        l === 1 ? 'рік'   :
        l < 4   ? 'роки'  :
        'років'

    return `${y} ${end}`
})()

const note_cook_torrance = note(`Наприклад, в моделі Кука-Торенса. `)

const direct_reflected = illustration('', DirectAndReflectedLight)

export default article([ `Модель освітлення Ламберта.` ], {}, ...[
    section(`Передмова. `, ...[
        paragraph(...[
            sentence(`Модель відбиття Ламберта є одним з перших інструментів для роботи зі світлом в арсеналі комп'ютерної графіки. `),
            sentence(`Вперше вона була запропонована, власне, `, link(`Йоганном Генріхом Ламбертом`, johann), ` в його книзі `, link(`Photometria`, photometria), ` 1760 року і залишається актуальною й досі, ${age} потому. `),
            sentence(`Вона використовується як самостійно, для розрахунку розсіювання світла на поверхні, так і як складова інших моделей`, note_cook_torrance, `. `),
            sentence(`Хоча в її основі лежать досить прості принципи для когось вона все ж може залишатись не до кінця зрозумілою. `),
            sentence(`Тому у цій статті я спробую пролити світло на усі її деталі, не залишивши в тіні жоден з них. `),
        ]),
    ]),
    section(`Відбиття світла. `, ...[
        paragraph(...[
            sentence(`Зображення яке ми бачимо є світлом, що потрапляє в наші очі з навколишнього середовища. `),
            sentence(`Це або світло що було безпосередньо випромінене певним джерелом, або світло що було випромінене джерелом і потім відбите певною поверхнею в нашу сторону. `),
            sentence(`Взагалі кажучи, в обох випадках світло також взаємодіє і з середовищем в якому рухається, але ми не буде розглядати ці процеси в межах моделі Ламберта. `),
            sentence(`Відтак, ми вже можемо розділити світло що бачимо на дві категорії: пряме і відбите (див. `, direct_reflected, `). `),
        ]),
        direct_reflected,
        paragraph(...[
            sentence(`Пряме світло залежить лише від властивостей його джерела і, в принципі, не приховує в собі якихось особливих таємниць. `),
            sentence(`Тому ми будемо розглядати категорію відбитого світла: як воно взаємодіє з поверхнею, змінюється і яка його частина досягає нас. `),
            sentence(`Важливо, що в процесі свого розповсюдження світло може відбиватись багато разів від різних об'єктів. `),
            sentence(`Весь цей процес доволі складно розрахувати повністю, тому ми обмежимось лише першим відбиттям. `),
            sentence(``),
            sentence(``),
        ]),
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
