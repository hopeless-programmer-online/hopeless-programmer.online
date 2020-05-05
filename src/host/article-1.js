const hosting = require(`../hosting`);
const documenting = require(`../documenting`);


const h = hosting;
const s = documenting.shortcuts;


const note_1 = s.note(s.sentence(`У цій статті я буду вживати термін `, s.figurative(`перекриття`), ` замість звичного `, s.figurative(`приховування`), `. `));
const note_2 = s.note(s.sentence(`Саме тому я називаю це перекриття `, s.figurative(`незворотним`), `. `));
const note_3 = s.note(`Характерно те, що судячи зі всього розробники мови явно знали що роблять. `, `При спробі перекрити існуючий об'єкт виводиться попередження, що це недопустимо адже може спричинити неоднозначність. `);
const note_4 = s.note(`Принаймні це можна назвати додатковими можливостями. `);
const note_5 = s.note(`Варто зауважити і відсутність єдиного підходу до вирішення проблеми. `, `На відміну від часто вживаних засобів, типу звернення до полів об'єкта через крапку або виклик функції через круглі дужки, тут немає єдиного загальноприйнятого стандарту. `);
const note_6 = s.note(`Це працює лише для впорядкованих областей, по типу блоків чи тіла функції. `, `Для просторів імен або класів цей підхід незастосовний. `);


const code_1 = require(`./article-1/code-1`);
const code_2 = require(`./article-1/code-2`);
const code_3 = require(`./article-1/code-3`);
const code_4 = require(`./article-1/code-4`);
const code_5 = require(`./article-1/code-5`);
const code_6 = require(`./article-1/code-6`);
const code_7 = require(`./article-1/code-7`);
const code_8 = require(`./article-1/code-8`);
const code_9 = require(`./article-1/code-9`);
const code_10 = require(`./article-1/code-10`);
const code_11 = require(`./article-1/code-11`);
const code_12 = require(`./article-1/code-12`);
const code_13 = require(`./article-1/code-13`);


exports = module.exports = new h.DocumentResource({
    Document : s.document([ `Думки вголос. `, `Незворотне перекриття ідентифікаторів. ` ],
        {
            Date : new Date(`2019-02-07T00:00:00.000Z`),
        },
        s.section(``, ...[
            s.paragraph(...[
                s.sentence(`Явище `, s.figurative(`перекриття`), note_1, ` (`, s.figurative(`overlapping`), `) ідентифікаторів відоме ще з часів перших мов програмування. `),
                s.sentence(`Мене турбує той факт що подібна проблема дожила до наших днів і зустрічається майже в кожній сучасній мові. `),
                s.sentence(`Я вирішив присвятити цій темі окрему статтю, в якій і спробую викласти свої погляди на ситуацію. `),
            ]),
        ]),
        s.section(`Проблематика`, ...[
            [
                code_1,
            ],
            s.paragraph(...[
                s.sentence(`В приведеному коді `, code_1, ` змінна `, s.v(`x`), ` перекриває аргумент `, s.v(`x`), `. `),
                s.sentence(`Після її оголошення попередній об'єкт втрачається `, s.emphasis(`назавжди`), note_2, `. `),
                s.sentence(`І це проблема, адже однакові назви можуть бути зовсім не випадковими. `),
                s.sentence(`Якщо подібне іменування буде нести деяке `, s.figurative(`корисне навантаження`), `, то механізм перекриття стане перешкодою. `),
            ]),
            s.paragraph(...[
                `Але чому не передбачено механізму для звернення до перекритої змінної? `,
                `Чому взагалі перекриття дозволене? `,
                `В такому вигляді від нього немає користі, адже змінні все одно доведеться перейменовувати якщо знадобиться одночасний доступ до обох. `,
            ]),
        ]),
        s.section(`Життя без перекриття`, ...[
            s.paragraph(...[
                `Існують мови позбавлені подібної вади. `,
                `Використана в них стратегія не розвиває цей механізм, а позбувається від нього. `,
                s.sentence(`Наприклад, в `, s.link(`мові програмування C#`, `https://uk.wikipedia.org/wiki/C_Sharp`), ` перекриття заборонене`, note_3, `. `),
                s.sentence(`Змінні повинні оголошуватись так, щоб до них можна було звернутись з будь-якого місця в програмі `, code_2, `). `),
                s.sentence(`При цьому зберігається можливість перекривати поля класу при наслідуванні, а також аргументами функцій. `),
                s.sentence(`Це не суперечить правилам, неоднозначності в цих випадках завжди можна вирішити `, code_3, `. `),
                s.sentence(`Це дуже важливий момент, адже таке `, s.figurative(`зворотне`), ` перекриття не несе в собі явних недоліків, лише переваги`, note_4, `. `),
            ]),
            [
                code_2,
                code_3,
            ],
        ]),
        s.section(`Часткові рішення`, ...[
            s.paragraph(...[
                s.sentence(`В `, s.link(`JavaScript`, `https://uk.wikipedia.org/wiki/JavaScript`), `, `, s.link(`С++`, `https://uk.wikipedia.org/wiki/C%2B%2B`), ` та `, s.link(`Python`, `https://uk.wikipedia.org/wiki/Python`), ` проблему перекриття вирішили частково. `),
                s.sentence(`Перекриття локальних змінних залишається незворотнім процесом. `),
                s.sentence(`А от звернення до глобальних об'єктів можна відрізнити за допомогою спеціальних операторів. `),
                s.sentence(`В С++ для цього використовується оператор `, s.lexeme(`::`), ` `, code_4, `. `),
                s.sentence(`Щоб виконати таке в Python змінна повинна бути оголошена через ключове слово `, s.kw(`global`), ` `, code_5, `. `),
                s.sentence(`А в JavaScript `, s.kw(`global`), ` виступає спеціальним об'єктом, який містить в собі усі `, s.emphasis(`глобальні`), ` об'єкти в якості полів `, code_6, `. `),
            ]),
            [
                code_4,
                code_5,
                code_6,
            ],
            s.paragraph(...[
                s.sentence(`Перелічені приклади ілюструють намагання боротись з цією проблемою. `),
                s.sentence(`Але задіяні в них механізми розраховані лише на один рівень вкладення і перестають працювати для вкладень більших порядків `, code_7, `. `),
                s.sentence(`Можливо саме через невелику актуальність подібних проблем цей підхід не був розвинутий`, note_5, `. `),
                s.sentence(`Але ніколи не пізно це виправити! `),
            ]),
            [
                code_7,
            ],
        ]),
        s.section(`Звернення в порядку оголошення`, ...[
            s.paragraph(...[
                s.sentence(`Одна зі стратегій - це звернення до перекритих змінних через спеціальний префікс або ключове слово. `),
                s.sentence(`Причому зі збільшенням порядку перекриття буде збільшуватись і число таких префіксів `, code_8, `. `),
                s.sentence(`Такий підхід цілком природний і добре відомий з роботи з файловою системою. `),
                s.sentence(`Цікаво те, що з такими можливостями взагалі немає сенсу вводити обмеження на унікальність ідентифікатора в межах області`, note_6, ` `, code_9, `. `),
            ]),
            [
                code_8,
                code_9,
            ],
        ]),
        s.section(`Звернення через зовнішню область`, ...[
            s.paragraph(...[
                s.sentence(`Існує цікавий механізм, який дозволяє боротись з перекриттям полів при наслідуванні. `),
                s.sentence(`Ідея в тому, що звернення відбувається не напряму, а через ім'я відповідного класу `, code_10, `. `),
                s.sentence(`Такий підхід досить розповсюджений і його можна було б розвинути. `),
                s.sentence(`Наприклад, аргументи функції можуть бути отримані через `, s.emphasis(`однойменний`), ` префікс `, code_11, `. `),
            ]),
            [
                code_10,
                code_11,
            ],
            s.paragraph(...[
                s.sentence(`Те саме можна застосувати і до циклів, якщо дозволити їх іменування `, code_12, `. `),
                s.sentence(`Окремо варто зазначити, що це також вирішило б проблему виходу з декількох циклів `, code_13, `, оскільки команда `, s.kw(`break`), ` теж виступає заручником механізму перекриття. `),
            ]),
            [
                code_12,
                code_13,
            ],
        ]),
        s.section(`Висновки`, ...[
            s.paragraph(...[
                s.sentence(`Існуюча реалізація перекриття обмежена і позбавлена переваг. `),
                s.sentence(`Але її все ж можна розвинути, особливо приймаючи до уваги існуючі рішення схожих проблем. `),
                s.sentence(`Запропоновані у цій статті підходи інтуїтивно зрозумілі та мають відносно просту реалізацію. `),
                s.sentence(`В залежності від дизайну мови їх можна використовувати не лише окремо, але й комбіновано. `),
            ]),
        ]),
    ),
});
