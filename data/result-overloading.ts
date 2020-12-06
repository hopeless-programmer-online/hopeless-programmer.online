import Article from "../classes/article";
import Section from "../classes/section";
import Sentences from "../classes/sentences";
import { code, illustration, p, sen, link } from "../classes/shortcuts";

const overload = 'https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D1%96%D1%97'

export default new Article({
    title : new Sentences({ array : [
        sen(`Думки вголос. `),
        sen(`Перевантаження за результатом. `),
    ] }),
    sections : [
        new Section({
            title : new Sentences({ array : [] }),
            parts : [
                p(
                    sen(`Деякі зі статично-типізованих мов програмування підтримують механізм `, link(overload, `перевантаження функцій`), `1. `),
                    `Це виражається в тому, що під одним іменем можна оголосити декілька функцій, які будуть відрізнятись за кількістю аргументів або типами цих аргументів. `,
                    `Характерною ознакою конкретно такої реалізації є те, що перевантаження ігнорує результат. `,
                    `Наслідком такого підходу є неможливість існування двох функцій з однаковими іменами, які відрізняються лише типом результату (див. Приклад коду №1). `,
                    `Метою цієї сторінки є висловлення ідеї, що подібне обмеження – нісенітниця. `,
                ),
                illustration(`Приклад коду №1`,
                    `Використання перевантажених за результатом функцій в представленні художника. `,
                    code(`C++`,
                        'int   f() {',
                        '    return 1;',
                        '}',
                        'float f() {',
                        '    return 2.0;',
                        '}',
                        '',
                        'int   x = f();',
                        'float y = f();',
                        '',
                        'print(x); // 1',
                        'print(y); // 2',
                    ),
                ),
            ],
        }),
    ],
})
