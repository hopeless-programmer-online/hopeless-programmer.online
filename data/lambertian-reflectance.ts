import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, tex } from "../classes/shortcuts"
import Rotation from "./lambertian-reflectance/rotation"
import ReflectionDiffusion from "./lambertian-reflectance/reflection-diffusion"
import DirectAndReflectedLight from "./lambertian-reflectance/direct-and-reflected-light"
import MicroSurface from "./lambertian-reflectance/micro-surface"
import Hemisphere from "./lambertian-reflectance/hemisphere"
import SinCos from "./lambertian-reflectance/sin-cos"
import CosineLaw from "./lambertian-reflectance/cosine-law"
import Bunny from "./lambertian-reflectance/bunny"

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
const dot = `https://uk.wikipedia.org/wiki/%D0%A1%D0%BA%D0%B0%D0%BB%D1%8F%D1%80%D0%BD%D0%B8%D0%B9_%D0%B4%D0%BE%D0%B1%D1%83%D1%82%D0%BE%D0%BA`
const albedo = `https://uk.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D0%B1%D0%B5%D0%B4%D0%BE`
const Om = tex(r`\Omega`)
const om = tex(r`\omega`)
const om_ = tex(r`\vec{\omega}`)
const n = tex(r`\vec{n}`)

const reflection_diffusion = illustration('', ReflectionDiffusion)
const microSurface = illustration(``, MicroSurface)
const rotation = illustration(
    paragraph(...[
        sentence(`Візуалізація повороту площини в полі зору камери, та повороту самої камери відносно площини. `),
        sentence(`В обох випадках площина буде мати однаковий вигляд і розмір на екрані, який буде залежати лише від кута між векторами: напрямком на камеру `, tex(r`\vec{v}`), ` та напрямком поверхні `, tex(r`\vec{n}`), `. `),
    ]),
    Rotation,
)
const sinCos = illustration(
    paragraph(...[
    ]),
    SinCos,
)
const cosineLaw = illustration(
    paragraph(...[
        sentence(`Падіння потоку світла на поверхню. `),
        sentence(`Зі збільшенням кута збільшується й загальна площа на яку потрапляє світло. `),
        sentence(`Разом з цим, одна й та ж площа поверхні починає освітлюватись все вужчим і, відповідно, менш потужним потоком. `),
    ]),
    CosineLaw,
)
const bunny = illustration('', Bunny)

export default article([ `Модель освітлення Ламберта.` ], {}, ...[
    section(`Що таке модель відбиття Ламберта? `, ...[
        paragraph(...[
            sentence(link(`Модель відбиття`, model), ` `, link(`Ламберта`, johann), ` була оприлюднена 1760-го року в його ж книзі `, link(`Photometria`, photometria), `. `),
            sentence(`Вона описує взаємодію шорстких поверхонь зі світлом: скільки світла і в якому напрямку вони відбивають. `),
            sentence(`Ця модель найточніше підходить для матеріалів, що добре розсіюють світло і яскравість яких не залежить від нахилу відносно спостерігача. `),
            sentence(`Зокрема, такими є папір, гіпс, необроблене дерево та `, link(`спектралон`, spectralon), `. `),
            sentence(`Не зважаючи на те що модель Ламберта була сформована ${age} тому, вона й досі знаходить своє застосування в областях комп'ютерної графіки та комп'ютерного зору. `),
            sentence(``),
        ]),
    ]),
    section(`Розсіювання світла. `, ...[
        paragraph(...[
            sentence(`В основі моделі Ламберта лежать дві прості ідеї: розсіювання світла та залежність інтенсивності світла що надходить з поверхні від кута його падіння на поверхню. `),
            sentence(`На противагу дзеркальній моделі, за якої світловий потік відбивається під тим же кутом, під яким і падає, модель Ламберта передбачає ідеальне розсіювання (див. `, reflection_diffusion, `). `),
            sentence(`Весь світловий потік що потрапляє на поверхню рівномірно розсіюється у всіх можливих напрямках. `),
            sentence(`Тому з будь якої точки огляду поверхня буде виглядати однаково, на відміну від того ж дзеркала, зображення на якому буде змінюватись разом з ракурсом. `),
        ]),
        // @todo: додати дуги кутів?
        // @todo: додати анімацію падіння променів?
        // @todo: додати промені-хвилі?
        reflection_diffusion,
        paragraph(...[
            sentence(`Такий характер розсіювання світла можна пояснити формою поверхні на мікроскопічному рівні. `),
            sentence(`Деякі більш пізні моделі, такі як модель `, link(`Орена-Наяра`, oren_nayar), ` або `, link(`Кука-Торенса`, cook_torrance), ` інтерпретують макроскопічну поверхню як набір мікроскопічних граней (див. `, microSurface, `). `),
            sentence(`Тобто навіть якщо поверхня здається нам рівною на одному масштабі, вона може містити безліч нерівностей при збільшенні. `),
            sentence(`Ці нерівності можна розцінювати як окремі грані, які можуть мати власну орієнтацію і вносити свій вклад в освітлення, навіть залишаючись невидимою для неозброєного ока. `),
            sentence(`Можна вважати, що у випадку моделі Ламберта грані орієнтовані випадковим чином, причому їх напрямки розподілені рівномірно. `),
            sentence(`Кожна така грань може відбивати світло як дзеркало, але за рахунок рівномірного розподілу їх нахилу світловий потік врешті буде розсіяний у всіх напрямках. `),
        ]),
        // @todo: додати анімацію падіння променів?
        // @todo: додати промені-хвилі?
        microSurface,
        paragraph(...[
            sentence(`Що можна розуміти під `, fig(`усіма напрямками`), ` в даному випадку? `),
            sentence(`Модель відбиття Ламберта не передбачає ні падіння світла з-під поверхні, ні його відбиття під неї. `),
            sentence(`Таким чином, множина всіх можливих напрямків обмежується одиничною півсферою `, Om, ` над поверхнею і її площею, яка становить `, tex(r`2\pi`), ` `, link(`стерадіан`, steradian), ` (далі ср). `),
            sentence(`Якщо вважати, що сума усього світла з усіх напрямків `, Om, ` рівна `, tex(r`E_{\Omega}`), `, то сума світла яку можна буде спостерігати під тілесним кутом з площею `, om, ` повинна бути рівна `, tex(r`E_{\Omega} \dfrac{\omega}{\Omega}`), ` або `, tex(r`E_{\Omega} \dfrac{\omega}{2\pi}`), `. `),
        ]),
        // @todo: додати ілюстрацію з тілесними кутами
        illustration('', Hemisphere),
        paragraph(...[
            sentence(`Тут дуже важливо розуміти роль саме тілесних, а не звичайних кутів. `),
            sentence(`Справа в тому, що коли світло падає на поверхню, відбивається від неї, чи просто сприймається оком ми завжди маємо справу з певною областю простору з якої це світло надходить або в сторону якої воно випромінюється. `),
            sentence(`Тому якщо на поверхню яка описується моделлю Ламберта падає, скажімо, 10 одиниць світла, то ці 10 одиниць будуть рівномірно розподілені по усій площі півсфери. `),
            sentence(`І якщо ми спостерігатимемо за поверхнею таким чином, що охопимо 20% площі півсфери то ми будемо отримувати 20% усього світла що впало на поверхню, тобто 2 одиниці. `),
            sentence(`Якщо ж ми зможемо розмістити сенсори вздовж усіх напрямків півсфери і покрити усю її площу, то ми будемо отримувати рівно стільки світла, скільки впало на поверхню. `),
        ]),
    ]),
    section(`Правило косинуса. `, ...[
        paragraph(...[
            sentence(`Друга ідея полягає в тому, що зі збільшенням кута між світлом та поверхнею зменшується його інтенсивність. `),
            sentence(`Це пов'язане з тим, що при нахилі поверхні з деякою сталою площею до спостерігача зменшується загальна область яку вона займає в полі зору. `),
            sentence(`Якщо під прямим кутом була видима деяка площа поверхні, то зі збільшенням кута загальна площа огляду для спостерігача буде залишатись сталою, але відносна площа поверхні буде прямувати до нуля. `),
            sentence(`Таким чином, хоч спостерігач зможе охопити поглядом більшу територію, частка яку займає конкретна поверхня на загальній площі буде зменшуватись. `),
        ]),
        cosineLaw,
        paragraph(...[
            sentence(`Видима кількість поверхні пропорційна косинусу кута між напрямком погляду та перпендикуляром до цієї поверхні - нормаллю. `),
            sentence(`Якщо напрямок під яким спостерігають поверхню позначити `, om_, ` а нормаль `, n, `, то спостережувана площа буде пропорційна до `, tex(r`cos(\widehat{\vec{\omega} \vec{n}})`), `, де `, tex(r`\widehat{\vec{\omega} \vec{n}}`), ` це кут між вказаними векторами. `),
            sentence(`Як відомо, косинус кута між двома нормалізованими векторами (тобто такими, що їхня довжина рівна одиниці) рівний `, link(`скалярному добутку`, dot), ` цих векторів. `),
            sentence(`Тому у випадку нормалізованих `, om_, ` та `, n, ` шукана площа пропорційна `, tex(r`\vec{\omega} \cdotp \vec{n}`), `, де `, tex(r`\cdotp`), ` позначає скалярний добуток. `),
            sentence(`В загальному ж випадку - для не нормалізованих векторів - площа пропорційна до `, tex(r`\dfrac{ \vec{\omega} \cdotp \vec{n} }{ |\vec{\omega}| |\vec{n}| }`), `. `),
        ]),
    ]),
    section(`Звідки косинус? `, ...[
        paragraph(...[
            sentence(`Важливо розуміти яким чином в рівнянні з'являється косинус кута. `),
            sentence(`При зміні нахилу поверхні відносно спостерігача насправді не важливо хто обертається: поверхня чи спостерігач навколо неї (див. `, rotation, `). `),
            sentence(`Відповідно, достатньо знайти формулу яка б описувала площину що обертається в полі зору камери. `),
        ]),
        rotation,
        paragraph(...[
            sentence(`Оскільки при повороті відстані між вершинами об'єкту не змінюються ми можемо описати краї площини як протилежні точки на одиничному колі (див. `, sinCos, `). `),
            sentence(`Самі ж точки на колі описуються синусом і косинусом кута а вибір між ними - синус чи косинус - залежить від того як і відносно чого ми вимірюємо кути: одним словом, від погодження системи координат. `),
            sentence(`Ми використовуватимемо косинус тому, що для нульового кута він буде давати максимальне значення - одиницю, а для кута 90° - нуль. `),
        ]),
        sinCos,
        paragraph(...[
            sentence(`Як видно з ілюстрацій (див. `, rotation, `), за невеликого кута огляду поверхня займає на екрані максимально можливу площу. `),
            sentence(`Разом зі зменшенням кута зменшується й площа поверхні на екрані, а при куті 90° поверхня `, fig(`зникає`), `, оскільки її відносна площа стає близькою до нуля. `),
            sentence(`Якщо поставити на місце камери потік світла, то відношення видимої площі поверхні до усієї площі екрану буде говорити нам яка частина світлового потоку падає на поверхню. `),
            sentence(`Це відношення і фігурує в моделі Ламберта і виражається в якості скалярного добутку `, tex(r`\vec{\omega} \cdotp \vec{n}`), `. `),
        ]),
        // illustration('', tex(r`
        //     I = \partial\omega_o \dfrac{ \partial \omega_i }{ \Omega }
        // `)),
    ]),
    section(`Кут огляду. `, ...[
        paragraph(...[
            sentence(`Правило косинуса стосується не лише кута під яким світло падає на поверхню, але й кута під яким її спостерігають. `),
            sentence(`Але у випадку спостерігача цей ефект повністю компенсується, оскільки зі збільшенням кута також збільшується й кількість поверхні що потрапляє в поле зору. `),
        ]),
        paragraph(...[
            sentence(`Якщо під кутом `, tex(r`0\degree`), ` в поле зору потрапляє площа поверхні рівна 10 одиницям, то під кутом `, tex(r`60\degree`), ` ці 10 одиниць поверхні будуть займати в полі зору вже `, tex(r`10 \cdot cos(60\degree)`), `, тобто 5 одиниць. `),
            sentence(`Але поле зору при цьому не зміниться і буде продовжувати охоплювати 10 одиниць. `),
            sentence(`Якщо решта поля зору буде заповнена такою ж поверхнею на яку падає таке ж світло, то ця додаткова кількість поверхні повністю компенсує ефект що виникає внаслідок кута огляду. `),
            sentence(`Таким чином, якщо ми розглядаємо поверхню яка займає все поле зору, то правило косинуса для кута огляду не буде впливати на результат. `),
        ]),
    ]),
    section(`Відбивальна здатність. `, ...[
        paragraph(...[
            sentence(`Модель Ламберта передбачає ще одну невелику деталь: коефіцієнт відбиття або `, link(`альбедо`, albedo), `. `),
            sentence(`Справа в тому, що не всі матеріали взаємодіють зі світлом однаково. `),
            sentence(`Якщо не вдаватись в деталі процесів які за цим стоять, то можна вважати що якась частина світла відбивається, якась поглинається, а якась пропускається під поверхню. `),
            sentence(`Нас цікавить лише перший коефіцієнт, який є відношенням усього світла що впало на поверхню до кількості світла що відбилась від неї. `),
        ]),
        paragraph(...[
            sentence(`По суті альбедо можна вважати `, fig(`власним`), ` кольором матеріалу, який не залежить від освітлення. `),
            sentence(`Зазвичай його позначають як `, tex(r`\rho`), ` з діапазоном значень `, tex(r`[0, 1]`), `. `),
            sentence(`В залежності від контексту це може бути або скаляр, або набір значень, адже в залежності від частоти (кольору) світла альбедо може мати різні значення. `),
            sentence(`В нашому випадку ми буде працювати з трикомпонентним альбедо `, tex(r`\vec{\rho}`), ` зі значеннями для червоного (`, tex(r`\rho_r`), `), зеленого (`, tex(r`\rho_g`), `) та синього (`, tex(r`\rho_b`), `) частин спектру. `),
        ]),
    ]),
    section(``, ...[
        paragraph(...[
            sentence(`Тепер ми можемо скласти окремі частини моделі разом. `),
            sentence(`По-перше, ми врахуємо розсіювання світла на півсфері додавши коефіцієнт `, tex(r`\dfrac{\omega_o}{2\pi}`), `, де `, tex(r`\omega_o`), ` це тілесний кут під яким спостерігається поверхня. `),
            sentence(`По-друге, ми застосуємо правило косинуса і додамо `, tex(r`\dfrac{ \vec{n} \cdotp \vec{w_i} }{ |\vec{n}| |\vec{w_i}| }`), `, де `, tex(r`\vec{n}`), ` це нормаль поверхні а `, tex(r`\vec{w_i}`), ` - напрямок на світло. `),
            sentence(`Наостанок, ми додамо в формулу альбедо - `, tex(r`\vec{\rho}`), `. `),
        ]),
        illustration('', tex(r`
            \vec{I} =
            \vec{\rho}
            \dfrac{\omega_o}{2\pi}
            \dfrac{ \vec{n} \cdotp \vec{w_i} }{ |\vec{n}| |\vec{w_i}| }
        `)),
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
    ]),
    section(``, ...[
        bunny,
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
