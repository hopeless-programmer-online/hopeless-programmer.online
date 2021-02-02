import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs } from "../classes/shortcuts"
import CosineLaw from "./lambertian-reflectance/cosine-law"
import Diffusion from "./lambertian-reflectance/diffusion"
import DirectAndReflectedLight from "./lambertian-reflectance/direct-and-reflected-light"

const model = `https://uk.wikipedia.org/wiki/%D0%9B%D0%B0%D0%BC%D0%B1%D0%B5%D1%80%D1%82%D0%BE%D0%B2%D0%B5_%D0%B2%D1%96%D0%B4%D0%B1%D0%B8%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F`
const johann = `https://uk.wikipedia.org/wiki/%D0%99%D0%BE%D0%B3%D0%B0%D0%BD%D0%BD_%D0%93%D0%B5%D0%BD%D1%80%D1%96%D1%85_%D0%9B%D0%B0%D0%BC%D0%B1%D0%B5%D1%80%D1%82`
const photometria = `https://en.wikipedia.org/wiki/Photometria`
const spectralon = `https://en.wikipedia.org/wiki/Spectralon`
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

const note_lambert = note(`Наприклад, в моделі Oren-Nayar. `)
const note_direction = note(`Насправді це не зовсім так, адже промінь поширюється вздовж певного напрямку. `, `Але в загальному випадку при такій зміні розташування камери незмінним буде залишатись лише цей єдиний промінь, решта ж зображення буде змінюватись. `)

export default article([ `Модель освітлення Ламберта.` ], {}, ...[
    section(`Що таке модель відбиття Ламберта? `, ...[
        paragraph(...[
            sentence(link(`Модель відбиття`, model), ` `, link(`Ламберта`, johann), ` була оприлюднена 1760-го року в його ж книзі `, link(`Photometria`, photometria), `. `),
            sentence(`Вона описує взаємодію шорстких поверхонь зі світлом: скільки світла і в якому напрямку такі поверхні відбивають. `),
            sentence(`Ця модель найточніше підходить для матеріалів, що добре розсіюють світло і яскравість яких не залежить від нахилу відносно спостерігача. `),
            sentence(`Зокрема, ними є папір, гіпс, необроблене дерево та `, link(`спектралон`, spectralon), `. `),
            sentence(`Не зважаючи на те що модель Ламберта була сформована ${age} років тому, вона й досі знаходить своє застосування в областях комп'ютерної графіки та комп'ютерного зору. `),
            sentence(``),
        ]),
        paragraph(...[
            sentence(`В основі моделі Ламберта лежать дві прості ідеї: розсіювання світла та залежність його інтенсивності від кута падіння. `),
            sentence(`На противагу дзеркальній моделі, за якої світловий потік відбивається під тим же кутом, під яким і падає, модель Ламберта передбачає ідеальне розсіювання. `),
            sentence(`Весь світловий потік що потрапляє на поверхню рівномірно розсіюється у всіх можливих напрямках. `),
            sentence(`Тому з будь якої точки огляду поверхня буде виглядати однаково, на відміну від того ж дзеркала, зображення на якому буде змінюватись разом з ракурсом. `),
        ]),
        illustration('', Diffusion),
        paragraph(...[
            sentence(`Друга ідея полягає в тому, що зі збільшенням кута між світлом та поверхнею зменшується його інтенсивність. `),
            sentence(``),
            sentence(``),
            sentence(``),
        ]),
        // illustration('', CosineLaw),
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
        // paragraph(...[
        //     sentence(link(`Модель відбиття Ламберта`, model), ` є одним з перших інструментів для роботи зі світлом в арсеналі комп'ютерної графіки. `),
        //     sentence(`Вперше вона була запропонована, власне, `, link(`Йоганном Генріхом Ламбертом`, johann), ` в його книзі `, link(`Photometria`, photometria), ` 1760 року і залишається актуальною й досі, ${age} потому. `),
        //     sentence(`Вона використовується як самостійно, для розрахунку розсіювання світла на поверхні, так і як складова інших моделей`, note_lambert, `. `),
        //     sentence(`Хоча в її основі лежать досить прості принципи для когось вона все ж може залишатись не до кінця зрозумілою. `),
        //     sentence(`Тому у цій статті я спробую пролити світло на усі її деталі, не залишивши в тіні жоден з них. `),
        // ]),
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
