const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    sentence,
    figurative,
    emphasis,
    link,
    note,
    lexeme,
    js,
    kw,
    v,
} = s;


const note_1 = note(sentence(`У цій статті я буду вживати термін `, figurative(`перекриття`), ` замість звичного `, figurative(`приховування`), `. `));
const note_2 = note(sentence(`Саме тому я називаю це перекриття `, figurative(`незворотним`), `. `));
const note_3 = note(`Характерно те, що судячи зі всього розробники мови явно знали що роблять. `, `При спробі перекрити існуючий об'єкт виводиться попередження, що це недопустимо адже може спричинити неоднозначність. `);
const note_4 = note(`Принаймні це можна назвати додатковими можливостями. `);
const note_5 = note(`Варто зауважити і відсутність єдиного підходу до вирішення проблеми. `, `На відміну від часто вживаних засобів, типу звернення до полів об'єкта через крапку або виклик функції через круглі дужки, тут немає єдиного загальноприйнятого стандарту. `);
const note_6 = note(`Це працює лише для впорядкованих областей, по типу блоків чи тіла функції. `, `Для просторів імен або класів цей підхід незастосовний. `);


const code_1 = require(`./overlapping/code-1`);
const code_2 = require(`./overlapping/code-2`);
const code_3 = require(`./overlapping/code-3`);
const code_4 = require(`./overlapping/code-4`);
const code_5 = require(`./overlapping/code-5`);
const code_6 = require(`./overlapping/code-6`);
const code_7 = require(`./overlapping/code-7`);
const code_8 = require(`./overlapping/code-8`);
const code_9 = require(`./overlapping/code-9`);
const code_10 = require(`./overlapping/code-10`);
const code_11 = require(`./overlapping/code-11`);
const code_12 = require(`./overlapping/code-12`);
const code_13 = require(`./overlapping/code-13`);


exports = module.exports = new h.DocumentResource({
    Document : document([ `Думки вголос. `, `Незворотне перекриття ідентифікаторів. ` ],
        {
            Date : new Date(`2019-02-07T00:00:00.000Z`),
        },
        section(``, ...[
            paragraph(...[
                sentence(`Явище `, figurative(`перекриття`), note_1, ` (`, figurative(`overlapping`), `) ідентифікаторів відоме ще з часів перших мов програмування. `),
                sentence(`Мене турбує той факт що подібна проблема дожила до наших днів і зустрічається майже в кожній сучасній мові. `),
                sentence(`Я вирішив присвятити цій темі окрему статтю, в якій і спробую викласти свої погляди на ситуацію. `),
            ]),
        ]),
        section(`Проблематика`, ...[
            [
                code_1,
            ],
            paragraph(...[
                sentence(`В приведеному коді `, code_1, ` змінна `, js(v(`x`)), ` перекриває аргумент `, js(v(`x`)), `. `),
                sentence(`Після її оголошення попередній об'єкт втрачається `, emphasis(`назавжди`), note_2, `. `),
                sentence(`І це проблема, адже однакові назви можуть бути зовсім не випадковими. `),
                sentence(`Якщо подібне іменування буде нести деяке `, figurative(`корисне навантаження`), `, то механізм перекриття стане перешкодою. `),
            ]),
            paragraph(...[
                `Але чому не передбачено механізму для звернення до перекритої змінної? `,
                `Чому взагалі перекриття дозволене? `,
                `В такому вигляді від нього немає користі, адже змінні все одно доведеться перейменовувати якщо знадобиться одночасний доступ до обох. `,
            ]),
        ]),
        section(`Життя без перекриття`, ...[
            paragraph(...[
                `Існують мови позбавлені подібної вади. `,
                `Використана в них стратегія не розвиває цей механізм, а позбувається від нього. `,
                sentence(`Наприклад, в `, link(`мові програмування C#`, `https://uk.wikipedia.org/wiki/C_Sharp`), ` перекриття заборонене`, note_3, `. `),
                sentence(`Змінні повинні оголошуватись так, щоб до них можна було звернутись з будь-якого місця в програмі `, code_2, `). `),
                sentence(`При цьому зберігається можливість перекривати поля класу при наслідуванні, а також аргументами функцій. `),
                sentence(`Це не суперечить правилам, неоднозначності в цих випадках завжди можна вирішити `, code_3, `. `),
                sentence(`Це дуже важливий момент, адже таке `, figurative(`зворотне`), ` перекриття не несе в собі явних недоліків, лише переваги`, note_4, `. `),
            ]),
            [
                code_2,
                code_3,
            ],
        ]),
        section(`Часткові рішення`, ...[
            paragraph(...[
                sentence(`В `, link(`JavaScript`, `https://uk.wikipedia.org/wiki/JavaScript`), `, `, link(`С++`, `https://uk.wikipedia.org/wiki/C%2B%2B`), ` та `, link(`Python`, `https://uk.wikipedia.org/wiki/Python`), ` проблему перекриття вирішили частково. `),
                sentence(`Перекриття локальних змінних залишається незворотнім процесом. `),
                sentence(`А от звернення до глобальних об'єктів можна відрізнити за допомогою спеціальних операторів. `),
                sentence(`В С++ для цього використовується оператор `, js(lexeme(`::`)), ` `, code_4, `. `),
                sentence(`Щоб виконати таке в Python змінна повинна бути оголошена через ключове слово `, js(kw(`global`)), ` `, code_5, `. `),
                sentence(`А в JavaScript `, js(kw(`global`)), ` виступає спеціальним об'єктом, який містить в собі усі `, emphasis(`глобальні`), ` об'єкти в якості полів `, code_6, `. `),
            ]),
            [
                code_4,
                code_5,
                code_6,
            ],
            paragraph(...[
                sentence(`Перелічені приклади ілюструють намагання боротись з цією проблемою. `),
                sentence(`Але задіяні в них механізми розраховані лише на один рівень вкладення і перестають працювати для вкладень більших порядків `, code_7, `. `),
                sentence(`Можливо саме через невелику актуальність подібних проблем цей підхід не був розвинутий`, note_5, `. `),
                sentence(`Але ніколи не пізно це виправити! `),
            ]),
            [
                code_7,
            ],
        ]),
        section(`Звернення в порядку оголошення`, ...[
            paragraph(...[
                sentence(`Одна зі стратегій - це звернення до перекритих змінних через спеціальний префікс або ключове слово. `),
                sentence(`Причому зі збільшенням порядку перекриття буде збільшуватись і число таких префіксів `, code_8, `. `),
                sentence(`Такий підхід цілком природний і добре відомий з роботи з файловою системою. `),
                sentence(`Цікаво те, що з такими можливостями взагалі немає сенсу вводити обмеження на унікальність ідентифікатора в межах області`, note_6, ` `, code_9, `. `),
            ]),
            [
                code_8,
                code_9,
            ],
        ]),
        section(`Звернення через зовнішню область`, ...[
            paragraph(...[
                sentence(`Існує цікавий механізм, який дозволяє боротись з перекриттям полів при наслідуванні. `),
                sentence(`Ідея в тому, що звернення відбувається не напряму, а через ім'я відповідного класу `, code_10, `. `),
                sentence(`Такий підхід досить розповсюджений і його можна було б розвинути. `),
                sentence(`Наприклад, аргументи функції можуть бути отримані через `, emphasis(`однойменний`), ` префікс `, code_11, `. `),
            ]),
            [
                code_10,
                code_11,
            ],
            paragraph(...[
                sentence(`Те саме можна застосувати і до циклів, якщо дозволити їх іменування `, code_12, `. `),
                sentence(`Окремо варто зазначити, що це також вирішило б проблему виходу з декількох циклів `, code_13, `, оскільки команда `, js(kw(`break`)), ` теж виступає заручником механізму перекриття. `),
            ]),
            [
                code_12,
                code_13,
            ],
        ]),
        section(`Висновки`, ...[
            paragraph(...[
                sentence(`Існуюча реалізація перекриття обмежена і позбавлена переваг. `),
                sentence(`Але її все ж можна розвинути, особливо приймаючи до уваги існуючі рішення схожих проблем. `),
                sentence(`Запропоновані у цій статті підходи інтуїтивно зрозумілі та мають відносно просту реалізацію. `),
                sentence(`В залежності від дизайну мови їх можна використовувати не лише окремо, але й комбіновано. `),
            ]),
        ]),
    ),
});
