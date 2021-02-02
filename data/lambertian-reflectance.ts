import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, tex } from "../classes/shortcuts"
import CosineLaw from "./lambertian-reflectance/cosine-law"
import ReflectionDiffusion from "./lambertian-reflectance/reflection-diffusion"
import DirectAndReflectedLight from "./lambertian-reflectance/direct-and-reflected-light"

const r = String.raw
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
const oren_nayar = `https://en.wikipedia.org/wiki/Oren%E2%80%93Nayar_reflectance_model`
const cook_torrance = `https://en.wikipedia.org/wiki/Specular_highlight#Cook%E2%80%93Torrance_model`
const steradian = `https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D1%80%D0%B0%D0%B4%D1%96%D0%B0%D0%BD`
const Om = tex(r`\Omega`)
const om = tex(r`\omega`)

const reflection_diffusion = illustration('', ReflectionDiffusion)

export default article([ `Модель освітлення Ламберта.` ], {}, ...[
    section(`Що таке модель відбиття Ламберта? `, ...[
        paragraph(...[
            sentence(link(`Модель відбиття`, model), ` `, link(`Ламберта`, johann), ` була оприлюднена 1760-го року в його ж книзі `, link(`Photometria`, photometria), `. `),
            sentence(`Вона описує взаємодію шорстких поверхонь зі світлом: скільки світла і в якому напрямку вони відбивають. `),
            sentence(`Ця модель найточніше підходить для матеріалів, що добре розсіюють світло і яскравість яких не залежить від нахилу відносно спостерігача. `),
            sentence(`Зокрема, такими є папір, гіпс, необроблене дерево та `, link(`спектралон`, spectralon), `. `),
            sentence(`Не зважаючи на те що модель Ламберта була сформована ${age} років тому, вона й досі знаходить своє застосування в областях комп'ютерної графіки та комп'ютерного зору. `),
            sentence(``),
        ]),
    ]),
    section(`Розсіювання світла. `, ...[
        paragraph(...[
            sentence(`В основі моделі Ламберта лежать дві прості ідеї: розсіювання світла та залежність його інтенсивності від кута падіння. `),
            sentence(`На противагу дзеркальній моделі, за якої світловий потік відбивається під тим же кутом, під яким і падає, модель Ламберта передбачає ідеальне розсіювання (див. `, reflection_diffusion, `). `),
            sentence(`Весь світловий потік що потрапляє на поверхню рівномірно розсіюється у всіх можливих напрямках. `),
            sentence(`Тому з будь якої точки огляду поверхня буде виглядати однаково, на відміну від того ж дзеркала, зображення на якому буде змінюватись разом з ракурсом. `),
        ]),
        // @todo: додати дуги?
        // @todo: додати анімацію падіння променів?
        // @todo: додати промені-хвилі?
        reflection_diffusion,
        paragraph(...[
            sentence(`Такий характер розсіювання світла можна пояснити формою поверхні на мікроскопічному рівні. `),
            sentence(`Деякі більш пізні моделі, такі як модель `, link(`Орена-Наяра`, oren_nayar), ` або `, link(`Кука-Торенса`, cook_torrance), ` інтерпретують макроскопічну поверхню як набір мікроскопічних граней. `),
            sentence(`Кожна така грань може мати власну орієнтацію і вносити свій вклад в освітлення навіть залишаючись невидимою для неозброєного ока. `),
            sentence(`У випадку моделі Ламберта грані орієнтовані випадковим чином, причому їхні напрямки розподілені рівномірно. `),
            sentence(`Кожна така грань може відбивати світло як дзеркало, але за рахунок рівномірного розподілу світловий потік врешті буде розсіяний у всіх напрямках. `),
        ]),
        // додати ілюстрацію розсіювання мікрогранями
        paragraph(...[
            sentence(`Модель відбиття Ламберта не передбачає ні падіння світла з-під поверхні, ні його відбиття під поверхню. `),
            sentence(`Таким чином, множина всіх можливих напрямків обмежується одиничною півсферою `, Om, ` над поверхнею і її площею, яка становить `, tex(r`2\pi`), ` `, link(`стерадіан`, steradian), ` (далі ср). `),
            sentence(`Якщо вважати, що сума усього світла з усіх напрямків `, Om, ` рівна `, tex(r`E_{\Omega}`), `, то сума світла яку можна буде спостерігати під тілесним кутом `, om, ` повинна бути рівна `, tex(r`E_{\Omega} \frac{\omega}{\Omega}`), ` або `, tex(r`E_{\Omega} \frac{\omega}{2\pi}`), `. `),
            sentence(`Як можна побачити, поки що ця величина не залежить від кута під яким спостерігається поверхня. `),
        ]),
        // додати ілюстрацію з тілесними кутами
    ]),
    section(`Правило косинуса. `, ...[
        paragraph(...[
            sentence(`Друга ідея полягає в тому, що зі збільшенням кута між світлом та поверхнею зменшується його інтенсивність. `),
            sentence(``),
            sentence(``),
            sentence(``),
        ]),
        illustration('', CosineLaw),
        paragraph(...[
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
