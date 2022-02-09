import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, tex, ts } from "../classes/shortcuts";
import Trilaterator from "./trilateration/trilateration";

const ls = `https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D0%BB%D1%96%D0%BD%D1%96%D0%B9%D0%BD%D0%B8%D1%85_%D0%B0%D0%BB%D0%B3%D0%B5%D0%B1%D1%80%D0%B0%D1%97%D1%87%D0%BD%D0%B8%D1%85_%D1%80%D1%96%D0%B2%D0%BD%D1%8F%D0%BD%D1%8C`

const r = String.raw

const system_1 = illustration('', tex(r`
    \begin{cases}
        |\vec{p_1} - \vec{p}| &= r_1
        \\
        |\vec{p_2} - \vec{p}| &= r_2
        \\
        |\vec{p_3} - \vec{p}| &= r_3
    \end{cases}
`))
const system_2 = illustration('', tex(r`
    |\vec{a}| = \sqrt{\vec{a}^2}
`))
const system_3 = illustration('', tex(r`
    \begin{cases}
        (\vec{p_1} - \vec{p})^2 &= r_1^2
        \\
        (\vec{p_2} - \vec{p})^2 &= r_2^2
        \\
        (\vec{p_3} - \vec{p})^2 &= r_3^2
    \end{cases}
`))
const system_4 = illustration('', tex(r`
    (\vec{a} - \vec{b})^2 = \vec{a}^2 - 2(\vec{a} \cdot \vec{b}) = \vec{b}^2
`))
const system_5 = illustration('', tex(r`
    \begin{cases}
        \vec{p_1}^2 - 2(\vec{p_1} \cdot \vec{p}) + \vec{p}^2 &= r_1^2
        \\
        \vec{p_2}^2 - 2(\vec{p_2} \cdot \vec{p}) + \vec{p}^2 &= r_2^2
        \\
        \vec{p_3}^2 - 2(\vec{p_3} \cdot \vec{p}) + \vec{p}^2 &= r_3^2
    \end{cases}
`))
const system_6 = illustration('', tex(r`
    \begin{cases}
        (\vec{p_1}^2 - 2(\vec{p_1} \cdot \vec{p}) + \vec{p}^2) - (\vec{p_2}^2 - 2(\vec{p_2} \cdot \vec{p}) + \vec{p}^2) &= r_1^2 - r_2^2
        \\
        (\vec{p_2}^2 - 2(\vec{p_2} \cdot \vec{p}) + \vec{p}^2) - (\vec{p_3}^2 - 2(\vec{p_3} \cdot \vec{p}) + \vec{p}^2) &= r_2^2 - r_3^2
    \end{cases}
`))
const system_7 = illustration('', tex(r`
    \begin{cases}
        \vec{p_1}^2 - \vec{p_2}^2
        - 2(\vec{p_1} \cdot \vec{p}) + 2(\vec{p_2} \cdot \vec{p})
        + \bcancel{ \vec{p}^2 - \vec{p}^2 }
        &= r_1^2 - r_2^2
        \\
        \vec{p_2}^2 - \vec{p_3}^2
        - 2(\vec{p_2} \cdot \vec{p}) + 2(\vec{p_3} \cdot \vec{p})
        + \bcancel{ \vec{p}^2 - \vec{p}^2 }
        &= r_2^2 - r_3^2
    \end{cases}
`))
const system_8 = illustration('', tex(r`
    (k \vec{a}) \cdot \vec{b} = k(\vec{a} \cdot \vec{b})
`))
const system_9 = illustration('', tex(r`
    (\vec{x} \cdot \vec{a}) \pm (\vec{x} \cdot \vec{b}) = \vec{x} \cdot (\vec{a} \pm \vec{b})
`))
const system_10 = illustration('', tex(r`
    \begin{cases}
        (2\vec{p_2} - 2\vec{p_1}) \cdot \vec{p}
        &=
        r_1^2 - r_2^2
        - \vec{p_1}^2 + \vec{p_2}^2
        \\
        (2\vec{p_3} - 2\vec{p_2}) \cdot \vec{p}
        &=
        r_2^2 - r_3^2
        - \vec{p_2}^2 + \vec{p_3}^2
    \end{cases}
`))
const system_11 = illustration('', tex(r`
    \begin{cases}
        \vec{a_1} &= 2\vec{p_2} - 2\vec{p_1}
        \\
        \vec{a_2} &= 2\vec{p_3} - 2\vec{p_2}
        \\
        b_1 &= r_1^2 - r_2^2 - \vec{p_1}^2 + \vec{p_2}^2
        \\
        b_2 &= r_2^2 - r_3^2 - \vec{p_2}^2 + \vec{p_3}^2
        \\
        \begin{pmatrix}
            \vec{a_1}
            \\
            \vec{a_2}
        \end{pmatrix}
        \vec{p} &=
        \begin{pmatrix}
            b_1
            \\
            b_2
        \end{pmatrix}
    \end{cases}
`))
const system_12 = illustration('', tex(r`
    \begin{cases}
        A &=
        \begin{pmatrix}
            \vec{a_1}
            \\
            \vec{a_2}
        \end{pmatrix}
        \\
        \vec{b} &=
        \begin{pmatrix}
            b_1
            \\
            b_2
        \end{pmatrix}
        \\
        A \vec{p} &= \vec{b}
    \end{cases}
`))
const system_13 = illustration('', tex(r`
    \bcancel{ A^{-1} A } \vec{p} = A^{-1} \vec{b}
`))
const system_14 = illustration('', tex(r`
    \begin{cases}
        |\vec{p_1} - \vec{p}| &= r_1
        \\
        |\vec{p_2} - \vec{p}| &= r_2
        \\
        |\vec{p_3} - \vec{p}| &= r_3
        \\
        |\vec{p_4} - \vec{p}| &= r_4
    \end{cases}
`))
const system_15 = illustration('', tex(r`
    \begin{cases}
        A &=
        \begin{pmatrix}
            2\vec{p_2} - 2\vec{p_1}
            \\
            2\vec{p_3} - 2\vec{p_2}
            \\
            2\vec{p_4} - 2\vec{p_3}
        \end{pmatrix}
        \\
        \vec{b} &=
        \begin{pmatrix}
            r_1^2 - r_2^2 - \vec{p_1}^2 + \vec{p_2}^2
            \\
            r_2^2 - r_3^2 - \vec{p_2}^2 + \vec{p_3}^2
            \\
            r_3^2 - r_4^2 - \vec{p_3}^2 + \vec{p_4}^2
        \end{pmatrix}
        \\
        A \vec{p} &= \vec{b}
    \end{cases}
`))

const code_1 = illustration(``, ts(...[
    [ `import { matrix, multiply, inv } from 'mathjs'` ],
    [ `` ],
    [ `type Point = { x : number, y : number }` ],
    [ `` ],
    [ `function trilaterate(` ],
    [ `    p1 : Point, p2 : Point, p3 : Point,` ],
    [ `    r1 : number, r2 : number, r3 : number,` ],
    [ `) {` ],
    [ `    const A = matrix([` ],
    [ `        [ 2 * (p2.x - p1.x), 2 * (p2.y - p1.y) ],` ],
    [ `        [ 2 * (p3.x - p2.x), 2 * (p3.y - p2.y) ],` ],
    [ `    ])` ],
    [ `    const b = matrix([` ],
    [ `        [ r1**2 - r2**2 - (p1.x**2 + p1.y**2) + (p2.x**2 + p2.y**2) ],` ],
    [ `        [ r2**2 - r3**2 - (p2.x**2 + p2.y**2) + (p3.x**2 + p3.y**2) ],` ],
    [ `    ])` ],
    [ `` ],
    [ `    const [ x, y ] = multiply(inv(A), b).toArray() as number[]` ],
    [ `` ],
    [ `    return { x, y }` ],
    [ `}` ],
]))

const p = tex(r`\vec{p}`)
const p1 = tex(r`\vec{p_1}`)
const p2 = tex(r`\vec{p_2}`)
const p3 = tex(r`\vec{p_3}`)
const r1 = tex(r`r_1`)
const r2 = tex(r`r_2`)
const r3 = tex(r`r_3`)

export default article([ `Знаходження точки за набором відстаней до неї. `, `Трилатерація. ` ], {}, ...[
    section(`Як працює GPS? `, ...[
        paragraph(...[
            sentence(`У повсякденному житті існує така проблема, як встановлення власного (або чужого, якщо ви сталкер) розташування в просторі. `),
            sentence(`Вручну це можна відносно легко й точно зробити в місті, посеред величезної кількості добре відомих орієнтирів. `),
            sentence(`Але що робити, якщо людина загубилась в лісі або посеред гір? `),
            sentence(`Насправді це доволі легко вирішується за допомогою телефону і GPS, або навіть звичайного оператора мобільного зв'язку. `),
            sentence(`Але в такому разі, як це роблять вони? `),
            sentence(`Відповідь проста: математика. `),
        ]),
        paragraph(...[
            sentence(`Один зі способів визначення розташування використовує набір `, fig(`відстаней`), ` до заздалегідь відомих орієнтирів і називається `, fig(`трилатерацією`), `. `),
            sentence(`Наприклад, знаючи розташування трьох антен стільникового зв'язку та відстань від кожної з них до абонента ми можемо відносно точно розрахувати його координати. `),
            sentence(`На пальцях це можна пояснити наступним чином: знаючи відстань від вежі до абонента ми можемо `, fig(`звузити`), ` коло його пошуків до, буквально, кола навколо цієї вежі. `),
            sentence(`Знаючи відстань до двох веж ми отримаємо два кола і оскільки абонент повинен одночасно перебувати на обох, його єдиними можливими координатами будуть дві точки перетину цих кіл. `),
            sentence(`Додавання третього кола виключить одну з цих точок, остаточно викривши розташування абонента. `),
        ]),
    ]),
    section(`Розрахунки. `, ...[
        paragraph(...[
            sentence(`Почати варто з формулювання проблеми. `),
            sentence(`При пошуку точки `, p, ` для двовимірного випадку нам потрібні три орієнтири - точки `, p1, `, `, p2, ` та `, p3, `. `),
            sentence(`Ми знаємо, що відстані від них до `, p, ` становлять `, r1, `, `, r2, ` та `, r3, ` відповідно, тому можемо записати це через формулу для довжини вектору (див. `, system_1, `). `),
            sentence(`Довжина ми можемо розкласти на квадратний корінь зі скалярного квадрату (див. `, system_2, `), після чого можемо позбутися кореня через піднесення обох частин рівняння до квадрату (див. `, system_3, `). `),
        ]),
        system_1,
        system_2,
        system_3,
        paragraph(...[
            sentence(`Оскільки шуканий вектор `, p, ` знаходиться під квадратом, необхідно винести його. `),
            sentence(`Для цього розгорнемо квадрати за формулою (див. `, system_4, `), після чого отримаємо `, p, ` в квадраті та в скалярному добутку з точками орієнтирами (див. `, system_5, `). `),
        ]),
        system_4,
        system_5,
        paragraph(...[
            sentence(`Може здатись, наче тепер, через `, tex(r`\vec{p}^2`), ` нам доведеться розв'язувати квадратне векторне рівняння, але це не так. `),
            sentence(`Ми можемо легко усунути квадрати невідомого `, p, ` віднімаючи рівняння одне від одного. `),
            sentence(`Наприклад, відняти друге рівняння від першого і третє від другого (див. `, system_6, `). `),
            sentence(`Розкривши дужки ми побачимо, що квадрати скоротились, залишивши самі лише скалярні добутки (див. `, system_7, `). `),
        ]),
        system_6,
        system_7,
        paragraph(...[
            sentence(`Тепер можна внести множники всередину скалярних добутків (див. `, system_8, `) та об'єднати їх користуючись відповідним правилом (див. `, system_9, `). `),
            sentence(`Таким чином ми отримаємо усього лише один скалярний добуток з `, p, ` для кожного рівняння. `),
            sentence(`Зауважимо, що другий аргумент добутку складається з відомих нам векторів `, p2, ` та `, p1, ` або `, p3, ` та `, p2, `, як і правді частини рівнянь складаються з відомих `, r1, `, `, r2, ` та `, r3, ` (див. `, system_10, `). `),
            sentence(`З таким вже можна працювати у вигляді матриць. `),
        ]),
        system_8,
        system_9,
        system_10,
        paragraph(...[
            sentence(`Тепер, аби спростити подальший запис, можемо використати заміну для відомих аргументів скалярного добутку та скалярів з правої частини (див. `, system_11, `). `),
            sentence(`Якщо ж записати це у формі добутку матриці та вектора то отримаємо класичну `, link(`систему лінійних рівнянь`, ls), ` (див. `, system_12, `). `),
            sentence(`Ми можемо розв'язати її знайшовши обернену матрицю `, tex(r`A^{-1}`), `, яка скоротиться з `, tex(r`A`), ` при множенні на обидві частини рівняння (див. `, system_13, `). `),
            sentence(`Оскільки матриця `, tex(r`A`), ` і вектор `, tex(r`\vec{b}`), ` відомі, `, tex(r`A^{-1}\vec{b}`), ` і є нашим розв'язок. `),
        ]),
        system_11,
        system_12,
        system_13,
    ]),
    section(`Практичне застосування. `, ...[
        paragraph(...[
            sentence(``),
        ]),
        code_1,
        illustration(paragraph(`Розрахунок розташування точки за набором відстаней до орієнтирів. `), Trilaterator),
        system_14,
        system_15,
    ]),
])
