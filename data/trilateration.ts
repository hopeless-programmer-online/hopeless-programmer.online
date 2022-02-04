import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, tex } from "../classes/shortcuts";
import Trilaterator from "./trilateration/trilateration";

const r = String.raw

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
        illustration(paragraph(`Розрахунок розташування точки за набором відстаней до орієнтирів. `), Trilaterator),
    ]),
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        illustration('',
            tex(r`
                \begin{cases}
                    |\vec{p_1} - \vec{p}| &= r_1
                    \\
                    |\vec{p_2} - \vec{p}| &= r_2
                    \\
                    |\vec{p_3} - \vec{p}| &= r_3
                \end{cases}
            `)
        ),
        illustration('',
            tex(r`
                |\vec{a}| = \sqrt{\vec{a}^2}
            `)
        ),
        illustration('',
            tex(r`
                \begin{cases}
                    (\vec{p_1} - \vec{p})^2 &= r_1^2
                    \\
                    (\vec{p_2} - \vec{p})^2 &= r_2^2
                    \\
                    (\vec{p_3} - \vec{p})^2 &= r_3^2
                \end{cases}
            `)
        ),
        illustration('',
            tex(r`
                (\vec{a} - \vec{b})^2 = \vec{a}^2 - 2(\vec{a} \cdot \vec{b}) = \vec{b}^2
            `)
        ),
        illustration('',
            tex(r`
                \begin{cases}
                    \vec{p_1}^2 - 2(\vec{p_1} \cdot \vec{p}) + \vec{p}^2 &= r_1^2
                    \\
                    \vec{p_2}^2 - 2(\vec{p_2} \cdot \vec{p}) + \vec{p}^2 &= r_2^2
                    \\
                    \vec{p_3}^2 - 2(\vec{p_3} \cdot \vec{p}) + \vec{p}^2 &= r_3^2
                \end{cases}
            `)
        ),
        illustration('',
            tex(r`
                \begin{cases}
                    (\vec{p_1}^2 - 2(\vec{p_1} \cdot \vec{p}) + \vec{p}^2) - (\vec{p_2}^2 - 2(\vec{p_2} \cdot \vec{p}) + \vec{p}^2) &= r_1^2 - r_2^2
                    \\
                    (\vec{p_2}^2 - 2(\vec{p_2} \cdot \vec{p}) + \vec{p}^2) - (\vec{p_3}^2 - 2(\vec{p_3} \cdot \vec{p}) + \vec{p}^2) &= r_2^2 - r_3^2
                \end{cases}
            `)
        ),
        illustration('',
            tex(r`
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
            `)
        ),
        illustration('',
            tex(r`
                (k \vec{a}) \cdot \vec{b} = k(\vec{a} \cdot \vec{b})
            `)
        ),
        illustration('',
            tex(r`
                (\vec{x} \cdot \vec{a}) \pm (\vec{x} \cdot \vec{b}) = \vec{x} \cdot (\vec{a} \pm \vec{b})
            `)
        ),
        illustration('',
            tex(r`
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
            `)
        ),
        illustration('',
            tex(r`
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
            `)
        ),
        illustration('',
            tex(r`
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
            `)
        ),
        illustration('',
            tex(r`
                \bcancel{ A^{-1} A } \vec{p} = A^{-1} \vec{b}
            `)
        ),
        illustration('',
            tex(r`
                \begin{cases}
                    |\vec{p_1} - \vec{p}| &= r_1
                    \\
                    |\vec{p_2} - \vec{p}| &= r_2
                    \\
                    |\vec{p_3} - \vec{p}| &= r_3
                    \\
                    |\vec{p_4} - \vec{p}| &= r_4
                \end{cases}
            `)
        ),
        illustration('',
            tex(r`
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
            `)
        ),
    ]),
])
