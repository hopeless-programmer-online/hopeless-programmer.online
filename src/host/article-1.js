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


// const code_1 = require(`./article-2/code-1`);


exports = module.exports = new h.DocumentResource({
    Document : s.document([ `Думки вголос. `, `Незворотне перекриття ідентифікаторів. ` ],
        s.section(``, ...[
            s.paragraph(...[
                s.sentence(`Явище `, s.figurative(`перекриття`), note_1, ` (`, s.figurative(`overlapping`), `) ідентифікаторів відоме ще з часів перших мов програмування. `),
                s.sentence(`Мене турбує той факт що подібна проблема дожила до наших днів і зустрічається майже в кожній сучасній мові. `),
                s.sentence(`Я вирішив присвятити цій темі окрему статтю, в якій і спробую викласти свої погляди на ситуацію. `),
            ]),
        ]),
        s.section(`Проблематика`, ...[
            // [
            //     require(`./code_1.js`),
            // ],
            s.paragraph(...[
                s.sentence(`В приведеному коді (див. `, /*reference(require(`./code_1.js`)),*/ `) змінна `, /*code(`C++`, code.line(`х`)),*/ ` перекриває аргумент `, /*code(`C++`, code.line(`х`)),*/ `. `),
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
                s.sentence(`Змінні повинні оголошуватись так, щоб до них можна було звернутись з будь-якого місця в програмі (див. `, /*reference(require(`./code_2.js`)),*/ `). `),
                s.sentence(`При цьому зберігається можливість перекривати поля класу при наслідуванні, а також аргументами функцій. `),
                s.sentence(`Це не суперечить правилам, неоднозначності в цих випадках завжди можна вирішити (див. `, /*reference(require(`./code_3.js`)),*/ `). `),
                s.sentence(`Це дуже важливий момент, адже таке `, s.figurative(`зворотне`), ` перекриття не несе в собі явних недоліків, лише переваги`, note_4, `. `),
            ]),
            // [
            //     require(`./code_2.js`),
            //     require(`./code_3.js`),
            // ],
        ]),
        s.section(`Часткові рішення`, ...[
            s.paragraph(...[
                s.sentence(`В `, s.link(`JavaScript`, `https://uk.wikipedia.org/wiki/JavaScript`), `, `, s.link(`С++`, `https://uk.wikipedia.org/wiki/C%2B%2B`), ` та `, s.link(`Python`, `https://uk.wikipedia.org/wiki/Python`), ` проблему перекриття вирішили частково. `),
                s.sentence(`Перекриття локальних змінних залишається незворотнім процесом. `),
                s.sentence(`А от звернення до глобальних об'єктів можна відрізнити за допомогою спеціальних операторів. `),
                s.sentence(`В С++ для цього використовується оператор `, /*code(`C++`, code.line(`::`)),*/ ` (див. `, /*reference(require(`./code_4.js`)),*/ `). `),
                s.sentence(`Щоб виконати таке в Python змінна повинна бути оголошена через ключове слово `, /*code(`Python`, code.line(code.kw(`global`))),*/ ` (див. `, /*reference(require(`./code_5.js`)),*/ `). `),
                s.sentence(`А в JavaScript `, /*code(`JavaScript`, code.line(`global`)),*/ ` виступає спеціальним об'єктом, який містить в собі усі `, s.emphasis(`глобальні`), ` об'єкти в якості полів (див. `, /*reference(require(`./code_6.js`)),*/ `). `),
            ]),
            // [
            //     require(`./code_4.js`),
            //     require(`./code_5.js`),
            //     require(`./code_6.js`),
            // ],
            s.paragraph(...[
                s.sentence(`Перелічені приклади ілюструють намагання боротись з цією проблемою. `),
                s.sentence(`Але задіяні в них механізми розраховані лише на один рівень вкладення і перестають працювати для вкладень більших порядків (див. `, /*reference(require(`./code_7.js`)),*/ `). `),
                s.sentence(`Можливо саме через невелику актуальність подібних проблем цей підхід не був розвинутий`, note_5, `. `),
                s.sentence(`Але ніколи не пізно це виправити! `),
            ]),
            // [
            //     require(`./code_7.js`),
            // ],
        ]),
        s.section(`Звернення в порядку оголошення`, ...[
            s.paragraph(...[
                s.sentence(`Одна зі стратегій - це звернення до перекритих змінних через спеціальний префікс або ключове слово. `),
                s.sentence(`Причому зі збільшенням порядку перекриття буде збільшуватись і число таких префіксів (див. `, /*reference(require(`./code_8.js`)),*/ `). `),
                s.sentence(`Такий підхід цілком природний і добре відомий з роботи з файловою системою. `),
                s.sentence(`Цікаво те, що з такими можливостями взагалі немає сенсу вводити обмеження на унікальність ідентифікатора в межах області`, note_6, ` (див. `, /*reference(require(`./code_9.js`)),*/ `). `),
            ]),
            // [
            //     require(`./code_8.js`),
            //     require(`./code_9.js`),
            // ],
        ]),
        s.section(`Звернення через зовнішню область`, ...[
            s.paragraph(...[
                s.sentence(`Існує цікавий механізм, який дозволяє боротись з перекриттям полів при наслідуванні. `),
                s.sentence(`Ідея в тому, що звернення відбувається не напряму, а через ім'я відповідного класу (див. `, /*reference(require(`./code_10.js`)),*/ `). `),
                s.sentence(`Такий підхід досить розповсюджений і його можна було б розвинути. `),
                s.sentence(`Наприклад, аргументи функції можуть бути отримані через `, /*emphasis(`однойменний`),*/ ` префікс (див. `, /*reference(require(`./code_11.js`)),*/ `). `),
            ]),
            // [
            //     require(`./code_10.js`),
            //     require(`./code_11.js`),
            // ],
            s.paragraph(...[
                s.sentence(`Те саме можна застосувати і до циклів, якщо дозволити їх іменування (див. `, /*reference(require(`./code_12.js`)),*/ `). `),
                s.sentence(`Окремо варто зазначити, що це також вирішило б проблему виходу з декількох циклів (див. `, /*reference(require(`./code_13.js`)),*/ `), оскільки команда `, /*code(`C++`, code.line(code.kw(`break`))),*/ ` теж виступає заручником механізму перекриття. `),
            ]),
            // [
            //     require(`./code_12.js`),
            //     require(`./code_13.js`),
            // ],
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
