import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs } from "../classes/shortcuts";

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

const note_cook_torrance = note(`Наприклад, в моделі Кука-Торренса. `)

export default article([ `Модель освітлення Ламберта.` ], {}, ...[
    section(`Вступ. `, ...[
        paragraph(...[
            sentence(`Модель освітлення Ламберта є одним з перших інструментів на шляху кожного, хто вирішив зайнятись підкорення фізики світла в області комп'ютерної графіки. `),
            sentence(`Вперше ця ідея була запропонована, власне, `, link(`Йоганном Генріхом Ламбертом`, johann), ` в його книзі `, link(`Photometria`, photometria), ` 1760 року і залишається актуальною й досі, ${age} потому. `),
            sentence(`Вона використовується самостійно для розрахунку розсіювання світла на поверхні, а також як складова інших`, note_cook_torrance, ` формул для роботи зі світлом. `),
            sentence(`Хоча в її основі лежать досить прості принципи для когось вона все ж може залишатись не до кінця зрозумілою. `),
            sentence(`Тому у цій статті я спробую пролити світло на усі її деталі не залишивши в тіні жоден з них. `),
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
