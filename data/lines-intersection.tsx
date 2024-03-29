import { article, emp, fig, illustration, link, note, p, paragraph, section, sentence, tex, ts, kw, c, v, f } from '../classes/shortcuts'
import Intersection from './lines-intersection/intersection'

const dot_product = `https://uk.wikipedia.org/wiki/%D0%A1%D0%BA%D0%B0%D0%BB%D1%8F%D1%80%D0%BD%D0%B8%D0%B9_%D0%B4%D0%BE%D0%B1%D1%83%D1%82%D0%BE%D0%BA`
const r = String.raw
const ab = tex(r`\vec{ab}`)
const uv = tex(r`\vec{uv}`)
const x = tex(r`\vec{x}`)
const t = tex(r`t`)
const q = tex(r`q`)
const b_a = tex(r`\vec{b} - \vec{a}`)
const v_u = tex(r`\vec{v} - \vec{u}`)
const u_a = tex(r`\vec{u} - \vec{a}`)
const d = tex(r`\vec{d}`)
const w = tex(r`\vec{w}`)
const vtq = tex(r`
    \begin{pmatrix}
        t & -q
    \end{pmatrix}
`)
const vdw = tex(r`
    \begin{pmatrix}
        \vec{d}_x & \vec{w}_x
    \end{pmatrix}
`)
const invA = tex(r`A^{-1}`)

const system_1 = illustration(sentence(`Система рівнянь, що описує точку `, x, ` на прямих `, ab, ` та `, uv, `. `), tex(r`
    \begin{cases}
        \vec{x} = \vec{a} + t(\vec{b} - \vec{a})
        \\
        \vec{x} = \vec{u} + q(\vec{v} - \vec{u})
    \end{cases}
`))
const system_2 = illustration(sentence(`Система після зведення. `), tex(r`
    \vec{a} + t(\vec{b} - \vec{a}) = \vec{u} + q(\vec{v} - \vec{u})
`))
const system_3 = illustration(sentence(`Заміна для відомих `, b_a, `, `, v_u, ` та `, u_a, `. `), tex(r`
    \begin{cases}
        \vec{d} &= \vec{b} - \vec{a}
        \\
        \vec{w} &= \vec{v} - \vec{u}
        \\
        \vec{c} &= \vec{u} - \vec{a}
        \\
        t\vec{d} - q\vec{w} &= \vec{c}
    \end{cases}
`))
const system_4 = illustration(sentence(`Розклад векторного представлення на систему рівнянь з окремих складових векторів. `), tex(r`
    \begin{cases}
        t\vec{d}_x - q\vec{w}_x &= \vec{c}_x
        \\
        t\vec{d}_y - q\vec{w}_y &= \vec{c}_y
        \\
        t\vec{d}_z - q\vec{w}_z &= \vec{c}_z
        \\
        ...
    \end{cases}
`))
const system_5 = illustration(sentence(`Заміна, необхідна для переходу до матричної форми. `), tex(r`
    \begin{cases}
        A &= \begin{pmatrix}
            \vec{d} & \vec{w}
        \end{pmatrix}
        \\
        A
        \begin{pmatrix}
            t
            \\
            -q
        \end{pmatrix}
        &= \vec{c}
    \end{cases}
`))
const system_6 = illustration(sentence(`Скорочення матриць. `), tex(r`
    \bcancel{
        A^{-1}
        A
    }
    \begin{pmatrix}
        t
        \\
        -q
    \end{pmatrix}
    = A^{-1}\vec{c}

    \implies

    \begin{pmatrix}
        t
        \\
        -q
    \end{pmatrix}
    = A^{-1}\vec{c}
`))
const system_7 = illustration(sentence(`Рівняння для знаходження оберненої матриці. `), tex(r`
    A =
    \begin{pmatrix}
        a & b
        \\
        c & d
    \end{pmatrix}

    \implies

    A^{-1} =
    \frac{1}{ad - bc}
    \begin{pmatrix}
        d & -b
        \\
        -c & a
    \end{pmatrix}
`))
const system_8 = illustration(
    p(
        sentence(`Рівняння для знаходження `, t, `. `),
        sentence(`Важливо, що в даному випадку `, tex(r`\begin{pmatrix} \vec{w}_y & -\vec{w}_x \end{pmatrix}`), ` є вектором а не різницею, а символ`, tex(r`\cdot`), ` позначає операцію `, link(`скалярного добутку`, dot_product), ` векторів. `),
    ),
    tex(r`
        t = \dfrac
        {
            \begin{pmatrix}
                \vec{w}_y & -\vec{w}_x
            \end{pmatrix}
            \cdot
            (\vec{u} - \vec{a})
        }
        { \vec{d}_x \vec{w}_y - \vec{w}_x \vec{d}_y }
    `)
)
const intersection_code = illustration(sentence(`Приклад коду для розрахунку точки перетину прямих `, tex(r`\vec{ab}`), ` та `, tex(r`\vec{uv}`), `. `), ts(...[
    [ kw(`type`), ` `, c(`Point`), ` = {` ],
    [ `    `, v(`x`), ` : `, c(`number`), `,` ],
    [ `    `, v(`y`), ` : `, c(`number`), `,` ],
    [ `}` ],
    [ kw(`type`), ` `, c(`Line`), ` = {` ],
    [ `    `, v(`a`), ` : `, c(`Point`), `,` ],
    [ `    `, v(`b`), ` : `, c(`Point`), `,` ],
    [ `}` ],
    [ `` ],
    [ kw(`function`), ` `, f(`intersection2D`), `({ `, v(`a`), `, `, v(`b`), ` } : `, c(`Line`), `, { `, v(`a`), ` : `, v(`u`), `, `, v(`b`), ` : `, v(`v`), ` } : `, c(`Line`), `) {` ],
    [ `    `, kw(`const`), ` `, v(`d`), ` = {` ],
    [ `        `, v(`x`), ` : `, v(`b`), `.`, v(`x`), ` - `, v(`a`), `.`, v(`x`), `,` ],
    [ `        `, v(`y`), ` : `, v(`b`), `.`, v(`y`), ` - `, v(`a`), `.`, v(`y`), `,` ],
    [ `    }` ],
    [ `    `, kw(`const`), ` `, v(`w`), ` = {` ],
    [ `        `, v(`x`), ` : `, v(`v`), `.`, v(`x`), ` - `, v(`u`), `.`, v(`x`), `,` ],
    [ `        `, v(`y`), ` : `, v(`v`), `.`, v(`y`), ` - `, v(`u`), `.`, v(`y`), `,` ],
    [ `    }` ],
    [ `` ],
    [ `    `, kw(`const`), ` `, v(`t`), ` = (` ],
    [ `        ( `, v(`w`), `.`, v(`y`), ` * (`, v(`u`), `.`, v(`x`), ` - `, v(`a`), `.`, v(`x`), `) - `, v(`w`), `.`, v(`x`), ` * (`, v(`u`), `.`, v(`y`), ` - `, v(`a`), `.`, v(`y`), `) )` ],
    [ `        /` ],
    [ `        ( `, v(`d`), `.`, v(`x`), ` * `, v(`w`), `.`, v(`y`), ` - `, v(`w`), `.`, v(`x`), ` * `, v(`d`), `.`, v(`y`), ` )` ],
    [ `    )` ],
    [ `` ],
    [ `    `, kw(`return`), ` {` ],
    [ `        `, v(`x`), ` : `, v(`a`), `.`, v(`x`), ` + `, v(`d`), `.`, v(`x`), ` * `, v(`t`), `,` ],
    [ `        `, v(`y`), ` : `, v(`a`), `.`, v(`y`), ` + `, v(`d`), `.`, v(`y`), ` * `, v(`t`), `,` ],
    [ `    }` ],
    [ `}` ],
]))

const note_zero_line = note(
    sentence(`Наприклад, якщо `, tex(r`\vec{a} = \vec{b}`), `, то `, tex(r`\vec{d}_x`), ` і `, tex(r`\vec{d}_y`), ` рівні нулю. `),
    sentence(`Це, в свою чергу, створює ділення на нуль (див. `, system_8, `) що і робить неможливим подальші обчислення. `),
)

export default article(`Знаходження точки перетину прямих. `, { created : new Date(`2021-03-07`) }, ...[
    section(`Навіщо це потрібно? `, ...[
        paragraph(...[
            sentence(`Навіть при написанні дуже простої гри на кшталт пінг-понгу може виникнути потреба в математиці, яку ми не звикли використовувати в повсякденному житті - лінійній алгебрі. `),
            sentence(`Зокрема, це може знадобитись для того аби обчислити точне місце зіткнення м'яча з ракеткою або межами ігрового поля. `),
            sentence(`І це відносно легко зробити якщо вважати м'яч у вигляді точки що рухається по прямій а перешкоду з якою він зіштовхується - у вигляді прямої обмеженої двома точками. `),
        ]),
    ]),
    section(`Представлення. `, ...[
        paragraph(...[
            sentence(`Обчислення які ми будемо проводити залежать від розмірності простору, адже дві прямі можуть перетинатись як в двовимірному просторі, так і в тривимірному або й навіть в просторах більшої розмірності. `),
            sentence(`Особливого змісту обмежувати себе якоюсь конкретною розмірністю немає, тому ми будемо розв'язувати цю задачу для довільного випадку. `),
            // sentence(`Але навіщо обмежувати себе якоюсь певною розмірністю, якщо можна вирішити завдання для довільного випадку? `),
            // sentence(`Тому наші обчислення не будуть залежати від розмірності простору. `),
            sentence(`Але варто зауважити, що для перетину дві прямі повинні лежати в одній площині, що, по-перше, дуже малоймовірно для довільних прямих та по-друге має свої обмеження при обчисленнях з використанням чисел з плавучою комою. `),
        ]),
        paragraph(...[
            sentence(`Траєкторією руху м'яча ми будемо вважати пряму `, ab, `, а перешкодою з якою він буде зіштовхуватися - пряму `, uv, `. `),
            sentence(`Нам потрібно визначити чи ці дві прямі взагалі перетинаються і якщо це так - також точку цього перетину `, x, `. `),
            sentence(`Оскільки `, x, ` може розміщуватись на `, ab, ` в будь якому місці ми запишемо її розташування у вигляді функції `, tex(r`\vec{x} = \vec{a} + t(\vec{b} - \vec{a})`), `, де `, tex(r`t \in [0, 1]`), `. `),
            sentence(`Хоча ця точка також лежатиме і на `, uv, ` і її розташування залежатиме від `, t, `, ми все ж поки не знаємо форми цієї залежності. `),
            sentence(`Тому ми опишемо `, x, ` на `, uv, ` через функцію `, tex(r`\vec{x} = \vec{u} + q(\vec{v} - \vec{u})`), ` з окремою змінною `, tex(r`q \in [0, 1]`), `. `),
        ]),
    ]),
    section(`Обчислення. `, ...[
        paragraph(...[
            sentence(`Тепер можна почати пошук `, x, `. `),
            sentence(`Для цього ми запишемо наші прямі `, ab, ` та `, uv, ` в систему рівнянь (див. `, system_1, `) та спробуємо її розв'язати, тобто знайти функцію яка б повертала нам `, x, `. `),
            sentence(`Її одразу ж можна звести до єдиного рівняння (див. `, system_2, `), що залежить від `, t, ` та `, q, ` і почати шукати їх`, note(`Адже знаючи принаймні одну з цих змінних ми можемо знайти й `, x, `. `), `. `),
            sentence(`Тепер перенесемо всі шукані доданки в ліву частину рівняння та зробимо заміну (див. `, system_3, `) для відомих `, b_a, `, `, v_u, ` та `, u_a, `. `),
        ]),
        system_1,
        system_2,
        system_3,
        paragraph(...[
            sentence(`Комусь може здатись, що таку систему з `, fig(`начебто`), ` єдиним рівнянням і двома невідомими розв'язати не вийде, але це не так. `),
            sentence(`Справа в тому, що ми маємо справу з векторними числами, а не скалярними. `),
            sentence(`Тому, насправді, кількість рівнянь та невідомих значень інша`, note(`Та і для загального випадку це залежить від розмірності простору в якому ми працюємо. `), `. `),
            sentence(`Якщо розкласти вектори на окремі складові `, tex(r`\vec{d}_x`), `, `, tex(r`\vec{d}_y`), `, `, tex(r`\vec{d}_z`), ` і т.і. то кількість рівнянь`, note(`Не враховуючи рівнянь для заміни відомих значень. `), ` стане рівною розмірності простору (див. `, system_4, `). `),
            sentence(``),
            sentence(``),
        ]),
        system_4,
        paragraph(...[
            sentence(`Для тих хто зіштовхувався з лінійною алгеброю такий вигляд системи може здатись дуже знайомим. `),
            sentence(`Справа в тому, що кожне окреме рівняння - наприклад, `, tex(r`t\vec{d}_x - q\vec{w}_x = \vec{c}_x`), ` - по суті є скалярним добутком векторів `, vtq, ` та `, vdw, `, а результатом цієї операції є скаляр `, tex(r`\vec{c}_x`), `. `),
            sentence(`Таким чином, уся система в цілому є нічим іншим як добутком матриці на вектор. `),
            sentence(`Щоправда, ця матриця складається з `, emp(`векторів-стовпців`), ` `, d, ` та `, w, `, а не з векторів рядків. `),
            sentence(``),
        ]),
        system_5, system_6,
        paragraph(...[
            sentence(`Маючи уявлення про те, як виглядають потрібні для множення нам матриця та вектор ми можемо провести відповідну заміну (див. `, system_5, `). `),
            sentence(`Тепер, якщо помножити кожну частину рівняння на обернену матрицю - `, invA, ` - ми отримаємо рівняння з якого можна вивести потрібні нам `, t, ` і `, q, ` (див. `, system_6, `). `),
            sentence(`Обернення матриць вищих порядків є досить складною операцією, тому ми приведемо формулу лише для двовимірного випадку (див. `, system_7, `). `),
        ]),
        system_7,
    ]),
    section(`Підсумки. `, ...[
        paragraph(...[
            sentence(`Тепер, знаючи кінці прямих `, ab, ` та `, uv, ` ми можемо обчислити `, t, ` або `, q, `. `),
            sentence(`Кінцева формула для них (навіть для двовимірного випадку) є досить громіздкою. `),
            sentence(`Але, на щастя, для знаходження `, x, ` нам достатньо обчислити лише одне зі значень (див. `, system_8, `). `),
        ]),
        system_8,
        paragraph(...[
            sentence(`Ще одним важливим моментом є те, що маючи розв'язок рівняння ми можемо оцінити межі його застосовності. `),
            sentence(`Головним чинником тут є операція обернення матриці, яка можлива не завжди, а лише за наявності ненульового визначника. `),
            sentence(`Як легко побачити з двовимірного випадку, це робить неможливим знаходження точки перетину тоді, коли відстань між кінцями хоча б одного з відрізків є нульовою`, note_zero_line, `. `),
            sentence(`І справді, за таких умов відрізок вироджується в точку і ні про який перетин мови йти не може. `),
            sentence(`Також проблеми виникають якщо прямі паралельні, а для більших розмірностей тоді, коли вони не лежать в одній площині. `),
        ]),
        illustration(sentence(`Візуалізація точки перетину `, x, ` для прямих `, ab, ` та `, uv, `. `), Intersection),
        intersection_code,
    ]),
])
