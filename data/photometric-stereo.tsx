import React from 'react'
import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, tex } from "../classes/shortcuts";

const r = String.raw

const stereo = `https://en.wikipedia.org/wiki/Photometric_stereo`

export default article([ `Відновлення властивостей поверхні з фото. `, `Фотометричне стерео. ` ], {}, ...[
    section(`Передмова. `, ...[
        paragraph(...[
            sentence(`Нинішній рівень комп'ютерної графіки важко порівняти з тим, що був лише 30 років тому. `),
            sentence(`За цей час якісь картинки кардинально змінилась: роздільні здатності екранів та текстур виросли на порядок, а складнощі сцен - на два. `),
            sentence(`Але ці числа не до кінця передають всю величину змін, адже разом зі збільшенням кількісних показників росла й якісні. `),
            sentence(`Сучасні моделі освітлення не лише використовують складніші підходи для виводу графічних об'єктів, але й потребують набагато більше даних для їх опису. `),
        ]),
        paragraph(...[
            sentence(`До таких даних майже завжди входять різноманітні `, fig(`карти матеріалу`), `, які описують різноманітні фізичні властивості поверхонь. `),
            sentence(`І найпоширенішими картами матеріалів є карти нормалей, які описують напрямок поверхні. `),
            sentence(`Вони дозволяють покращити деталізацію лише за рахунок додаткових тексту, без створення нової геометрії. `),
            sentence(`Це робить їх дуже важливим в сфері графіки і піднімає питання про те як їх отримувати. `),
        ]),
        paragraph(...[
            sentence(`Один з можливих напрямків отримання нормалей - це створення таких карт на основі фотометричних даних: виділення з реальних зображень. `),
            sentence(`Він особливо привабливий в тих випадках, коли запропонований метод дозволяє відновити точні нормалі реальних об'єктів без втручання художників. `),
            sentence(`З однієї сторони це робить процес автономним, а отже швидшим і масштабованішим. `),
            sentence(`З іншої сторони - це зводить до мінімуму можливі `, fig(`забруднення`), `, які можуть навмисно вноситись людьми з метою зробити картинку привабливішою, хоча з точки зору фізики вона буде менш правильна. `),
        ]),
        paragraph(...[
            sentence(`Один з таких методів я випадково `, fig(`винайшов`), ` під час роботи над моєю курсовою кілька років тому. `),
            sentence(`Як нещодавно виявилось, я повторно відкрив `, link(`фотометричне стерео`, stereo), ` винайдене ще в 1980-у році. `),
            sentence(`Не зважаючи на свій поважний вік цей підхід і досі є непоганою відправною точкою для точного аналітичного комп'ютерного зору та тривимірної реконструкції. `),
            sentence(`У цій статті ми детально розберемо принципи його роботи, вади та межі застосовності. `),
        ]),
    ]),
    section(`Модель освітлення. `, ...[
        paragraph(...[
            sentence(`Класична техніка фотометричного стерео відштовхується від моделі освітлення Ламберта. `),
            sentence(``),
            sentence(``),
            sentence(``),
        ]),
        paragraph(...[
            sentence(``),
            sentence(``),
        ]),
    ]),
    section(`Метод найменших квадратів. `, ...[
        illustration(``, tex(r`
            E(\vec{x}) = \sum_{n=0}^{N} (i_n - \vec{l_n} \cdot \vec{x})^2
        `)),
        illustration(``, tex(r`
            \begin{matrix}
                \dfrac{\partial E}{\partial \vec{x}_1} &= -2 \displaystyle \sum_{n=0}^{N} (i_n - \vec{l_n} \cdot \vec{x}) \vec{l_n}_1
                \\
                \dfrac{\partial E}{\partial \vec{x}_2} &= -2 \displaystyle \sum_{n=0}^{N} (i_n - \vec{l_n} \cdot \vec{x}) \vec{l_n}_2
                \\
                \dfrac{\partial E}{\partial \vec{x}_3} &= -2 \displaystyle \sum_{n=0}^{N} (i_n - \vec{l_n} \cdot \vec{x}) \vec{l_n}_3
            \end{matrix}
        `)),
        illustration(``, tex(r`
            \begin{matrix}
                \dfrac{\partial E}{\partial \vec{x}_1} = 0 \implies
                    \vec{x}_1 \displaystyle \sum_{n=0}^{N} \vec{l_n}^2_1
                    +
                    \vec{x}_2 \displaystyle \sum_{n=0}^{N} \vec{l_n}_1 \vec{l_n}_2
                    +
                    \vec{x}_3 \displaystyle \sum_{n=0}^{N} \vec{l_n}_1 \vec{l_n}_3
                    =
                    \displaystyle \sum_{n=0}^{N} i_n \vec{l_n}_1
                \\
                \dfrac{\partial E}{\partial \vec{x}_2} = 0 \implies
                    \vec{x}_1 \displaystyle \sum_{n=0}^{N} \vec{l_n}_1 \vec{l_n}_2
                    +
                    \vec{x}_2 \displaystyle \sum_{n=0}^{N} \vec{l_n}_2^2
                    +
                    \vec{x}_3 \displaystyle \sum_{n=0}^{N} \vec{l_n}_2 \vec{l_n}_3
                    =
                    \displaystyle \sum_{n=0}^{N} i_n \vec{l_n}_2
                \\
                \dfrac{\partial E}{\partial \vec{x}_3} = 0 \implies
                    \vec{x}_1 \displaystyle \sum_{n=0}^{N} \vec{l_n}_1 \vec{l_n}_3
                    +
                    \vec{x}_2 \displaystyle \sum_{n=0}^{N} \vec{l_n}_2 \vec{l_n}_3
                    +
                    \vec{x}_3 \displaystyle \sum_{n=0}^{N} \vec{l_n}_3^2
                    =
                    \displaystyle \sum_{n=0}^{N} i_n \vec{l_n}_3
            \end{matrix}
        `)),
        illustration(``, tex(r`
            \begin{pmatrix}
                \displaystyle \sum_{n=0}^{N} \vec{l_n}^2_1
                &&
                \displaystyle \sum_{n=0}^{N} \vec{l_n}_1 \vec{l_n}_2
                &&
                \displaystyle \sum_{n=0}^{N} \vec{l_n}_1 \vec{l_n}_3
                \\
                \displaystyle \sum_{n=0}^{N} \vec{l_n}_1 \vec{l_n}_2
                &&
                \displaystyle \sum_{n=0}^{N} \vec{l_n}_2^2
                &&
                \displaystyle \sum_{n=0}^{N} \vec{l_n}_2 \vec{l_n}_3
                \\
                \displaystyle \sum_{n=0}^{N} \vec{l_n}_1 \vec{l_n}_3
                &&
                \displaystyle \sum_{n=0}^{N} \vec{l_n}_2 \vec{l_n}_3
                &&
                \displaystyle \sum_{n=0}^{N} \vec{l_n}_3^2
            \end{pmatrix}
            \vec{x} =
            \begin{pmatrix}
                \displaystyle \sum_{n=0}^{N} i_n \vec{l_n}_1
                \\
                \displaystyle \sum_{n=0}^{N} i_n \vec{l_n}_2
                \\
                \displaystyle \sum_{n=0}^{N} i_n \vec{l_n}_3
            \end{pmatrix}
        `)),
        illustration(``, tex(r`
            \begin{cases}
                L =
                \begin{pmatrix}
                    \vec{l_1}
                    \\
                    \vec{l_2}
                    \\
                    ...
                    \\
                    \vec{l_N}
                \end{pmatrix}
                \\
                i =
                \begin{pmatrix}
                    i_1
                    \\
                    i_2
                    \\
                    ...
                    \\
                    i_N
                \end{pmatrix}
                \\
                ( L \times L^{T} ) \vec{x} = L^{T} i
            \end{cases}
        `)),
        illustration(``, tex(r`
        `)),
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
