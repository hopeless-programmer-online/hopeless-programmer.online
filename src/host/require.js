const hosting = require(`../hosting`);
const documenting = require(`../documenting`);


const h = hosting;
const s = documenting.shortcuts;


const $require = s.f(`require`);
const $module = s.c(`module`);
const $exports_v = s.v(`exports`);
const $exports_p = s.p(`exports`);
const $main_s = s.lt(`"main"`);
const $exports_s = s.lt(`"exports"`);
const $module_exports = s.phrase([ s.c(`module`), s.lexeme(`.`), s.p(`exports`) ]);
const free_variables = `https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BB%D1%8C%D0%BD%D1%96_%D1%96_%D0%B7%D0%B2%27%D1%8F%D0%B7%D0%B0%D0%BD%D1%96_%D0%B7%D0%BC%D1%96%D0%BD%D0%BD%D1%96`;
const builtinModules = s.phrase([ s.f(`require`), s.lexeme(`(`), s.lt(`\`module\``), s.lexeme(`).`), s.p(`builtinModules`) ]);
const require_doc = `https://nodejs.org/api/modules.html#modules_all_together`;
const require_source = `https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js`;
const cpp_addon = `https://nodejs.org/api/addons.html`;
const json_doc = `https://uk.wikipedia.org/wiki/JSON`;
const package_json_doc = `https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/`;
const package_json = s.lt(`package.json`);

const note_1 = s.note([
    s.sentence(`Мається на увазі те, що змінні виглядають так, наче оголошені у зовнішній області коду, а не всередині функції і, відповідно, доступні в будь-якому місці модуля. `),
    s.sentence(`Не зважаючи на це, ці змінні є унікальними для кожного модуля (про що згадується далі), а тому характеристика `, s.figurative(`глобальні`), ` може бути оманливою. `),
]);

const code_1 = s.illustration( ...[
    s.sentence(`Приклад роботи з модулями. `),
    s.code(
        [ `// завантаження функції для додавання` ],
        [ `const add = require("add");` ],
        [ `` ],
        [ `// функція для подвоєння числа` ],
        [ `function double(x) {` ],
        [ `    return add(x, x);` ],
        [ `}` ],
        [ `` ],
        [ `// функція для потроєння числа` ],
        [ `function triple(x) {` ],
        [ `    return add(x, double(x));` ],
        [ `}` ],
        [ `` ],
        [ `// експорт функцій назовні` ],
        [ `exports.double = double;` ],
        [ `exports.triple = triple;` ],
    ),
]);
const code_2 = s.illustration( ...[
    s.sentence(`Перелік вбудованих модулів. `),
    s.code(
        [ s.cm(`// список усіх вбудованих модулів NodeJS`) ],
        [ s.f(`require`), `(`, s.lt(`\`module\``), `).`, s.p(`builtinModules`), `;` ],
        [ s.cm(`/**`) ],
        [ s.cm(` * [`) ],
        [ s.cm(` *     "path",`) ],
        [ s.cm(` *     "http",`) ],
        [ s.cm(` *     "fs",`) ],
        [ s.cm(` *     ...`) ],
        [ s.cm(` * ]`) ],
        [ s.cm(` */`) ],
    ),
]);
const code_3 = s.illustration( ...[
    s.sentence(`Завантаження файлу використовуючи відносний шлях. `),
    s.code(
        [ `// модуль з того ж каталогу` ],
        [ `const neighbor = require("./neighbor");` ],
        [ `// модуль з вкладеного каталогу` ],
        [ `const child    = require("./folder/child");` ],
        [ `// модуль з зовнішнього каталогу` ],
        [ `const parent   = require("../parent");` ],
    ),
]);
const code_4 = s.illustration( ...[
    s.sentence(`Завантаження JSON конфігурації за допомогою `, $require, `. `),
    s.code(
        [ `// завантаження config.js(on)` ],
        [ `const config = require("./config");` ],
        [ `` ],
        [ `configureSomething(config);` ],
    ),
]);
const code_5 = s.illustration( ...[
    s.sentence(`Мінімальний вміст `, package_json, `. `),
    s.code(
        [ `{` ],
        [ `    "main": "./src/main"` ],
        [ `}` ],
    ),
]);


exports = module.exports = new h.DocumentResource({
    Document : s.document(s.sentence(`Все що я знаю про: `, $require, `. `), {},
        s.section(`Модулі. `, ...[
            // s.paragraph(...[
            //     // s.sentence(`Існують різні підходи до організації роботи модулів. `),
            //     // s.sentence(`NodeJS використовує модулі CommonJS, а той, в свою чергу, визначає функцію `, $require, `. `),
            // ]),
            s.paragraph(...[
                s.sentence(`В NodeJS кожен файл є окремим модулем. `),
                s.sentence(`Модулі ізольовані один від одного, тобто будь-які змінні оголошені всередині одного модуля будуть недоступні іншим модулям. `),
                s.sentence(`У кожному модулі є дві глобальні`, note_1, ` `, s.link(`вільні змінні`, free_variables), `: `, $require, ` та `, $module , `. `),
                s.sentence(`Можна вважати, що ці змінні оголошені `, s.figurative(`за кулісами`), ` модуля, але у тій же області видимості. `),
                s.sentence(`Таким чином, можна змінити їхні значення за допомогою оператору присвоювання (`, s.lexeme(`=`), `), але неможливо перекрити їх за допомогою службових слів `, s.kw(`let`), ` та `, s.kw(`const`), ` і пізніше ми дізнаємось чому. `),
                s.sentence(`Кожен модуль інтерпретується (зазвичай лише один раз) як звичайний код JavaScript - зверху-вниз -, а ця пара слугує основою для експорту вмісту модуля назовні, та імпорту вмісту зовнішніх модулів`, code_1, `. `),
            ]),
            code_1,
            s.paragraph(...[
                s.sentence(`Змінна `, $require, `, загалом, є звичайною функцією (`, s.c(`Function`), `). `),
                s.sentence(`Вона приймає ідентифікатор модуля - стрічку -, і повертає його вміст. `),
                s.sentence(`В залежності від ідентифікатора модуля та розташування файлу з якого викликається `, $require, `, результати можуть відрізнятись. `),
                s.sentence(`У випадку якщо потрібний модуль не знайдено - функція кине помилку (`, s.c(`Error`), `). `),
                s.sentence(`Окрім цього, функція має набір додаткових, властивих лише їй полів, призначених для отримання інформації про модулі та керування їх завантаженням. `),
                s.sentence(`Деталі її роботи ми і будемо розглядати у даній статті. `),
            ]),
            s.paragraph(...[
                s.sentence(`Змінна `, $module , ` є звичайним об'єктом (`, s.c(`Object`), `). `),
                s.sentence(`Окрім усього іншого, вона містить поле `, $exports_p, `, яке слугує зв'язною ланкою для звернення до модуля ззовні. `),
                s.sentence(`Це поле, і `, s.emphasis(`лише`), ` воно, буде повернено при зверненні до модуля. `),
                s.sentence(`Таким чином, функція `, $require, ` при зверненні до певного модуля повертає те значення, яке було збережено у полі `, $module_exports, ` цього модуля. `),
                s.sentence(`Також у кожному модулі є вільна `, s.emphasis(`змінна`), ` `, $exports_v, `. `),
                s.sentence(`Це звичайна змінна, яка посилається на вже згадане поле `, $module_exports, `, а її основне призначення - скорочення запису при зверненні до цього поля. `),
                s.sentence(`На початку виконання модуля `, $module_exports, ` (і, відповідно, `, $exports_v, `) посилається на порожній об'єкт (`, s.lexeme(`{}`), `), а тому можлива дуже коротка форма запису екпорту змінних, в стилі `, s.phrase([ s.c(`exports`), s.lexeme(`.`), s.p(`lol`), s.lexeme(` = `), s.v(`lol`) ]), `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Важливо підкреслити те, що змінні `, $require, ` та `, $module , ` є унікальними для кожного модуля. `),
                s.sentence(`Їх наповнення та поведінка залежить від багатьох дрібних чинників, про що ми і поговоримо далі. `),
                s.sentence(`Але важливо ще й те, що навіть приймаючи до уваги особливості цих двох змінних - вони не перестають бути звичайними об'єктами JavaScript. `),
                s.sentence(`Весь їхній функціонал може бути описаний звичайним кодом зі змінних та функцій, без залучення особливого синтаксису та розширення мови. `),
                s.sentence(`Це якісно відрізняє модулі CommonJS від інших модулів, наприклад модулів ECMAScript. `),
            ]),
        ]),
        s.section(`Пошук. `, ...[
            s.paragraph(...[
                s.sentence(`Детальний опис того як саме працює `, $require, ` можна знайти в `, s.link(`офіційній документації`, require_doc), `, або розібравшись в його `, s.link(`коді`, require_source), ` на github. `),
                s.sentence(`Обидва ці варіанти не надто приємні, особливо враховуючи стиль написання псевдокоду в документації. `),
                s.sentence(`Далі ми спробуємо розібратись в деталях роботи `, $require, ` відштовхуючись від різноманітних сценаріїв які виникають, або гіпотетично можуть виникнути під час роботи. `),
                s.sentence(`Це допоможе нам підтвердити або спростовувати наші уявлення про поведінку цієї функції, а також зробити конкретні висновки про межі її застосовності. `),
            ]),
            s.paragraph(...[
                s.sentence(`В першу чергу, при зверненні до модуля функція `, $require, ` визначається з тим, де розміщується його код. `),
                s.sentence(`Частина модулів NodeJS є вбудованою (наприклад `, s.lt(`path`), `) і має певний пріоритет на цьому етапі. `),
                s.sentence(`Повний перелік ідентифікаторів цих модулів можна отримати за допомогою звернення до `, builtinModules, ` `, code_2, `. `),
                s.sentence(`Для нас важливо те, що ідентифікатори цих модулів є вийнятковими і при зверненні до них `, $require, ` негайно повертає їхній вміст, оминаючи всі подальші етапи. `),
                s.sentence(`Така особливість алгоритму має певні наслідки, які стануть зрозумілими дещо згодом, а саме: ми не зможемо завантажити модулі, ідентифікатори яких збігаються з ідентифікаторами вбудованих модулів NodeJS. `),
            ]),
            code_2,
            s.paragraph(...[
                s.sentence(`Якщо модуль не є вбудованим, `, $require, ` буде намагатись встановити розташування файлу в якому міститься його код. `),
                s.sentence(`Один з можливих варіантів - це завантаження коду з файлу, шлях до якого вказаний відносно до того файлу, з якого і був  виконаний виклик `, $require, `. `),
                s.sentence(`Це можливо, якщо в якості ідентифікатора модуля передати в функцію стрічку, що починається як `, s.lt(`/`), `, `, s.lt(`./`), ` або `, s.lt(`../`), `. `),
                s.sentence(`В першому варіанті шлях буде трактуватись як глобальний, відносно кореня файлової системи. `),
                s.sentence(`У двох інших випадках - за аналогією зі шляхами в файловій системі, відносно поточного каталогу. `),
            ]),
            code_3,
        ]),
        s.section(`Завантаження файлу. `, ...[
            s.paragraph(...[
                s.sentence(`Коли відносний шлях встановлено - `, $require, ` починає процес пошуку потрібного файлу, який відбувається у декілька етапів.  `),
                s.sentence(`Якщо розширення файлу не вказано, то для випадку `, s.phrase([ s.f(`require`), s.lexeme(`(`), s.lt(`"./memes"`), s.lexeme(`)`) ]), ` алгоритм буде намагатись по черзі завантажувати наступні файли:`),
            ]),
            s.list(...[
                s.sentence(`Файл `, s.emphasis(`без розширення`), `: `, s.lt(`"./memes"`), `, інтерпретований як JavaScript. `),
                s.sentence(`Файл з розширення `, s.lt(`.js`), `: `, s.lt(`"./memes.js"`), `. `),
                s.sentence(`Файл з розширення `, s.lt(`.json`), `: `, s.lt(`"./memes.json"`), `, інтерпретований як `, s.link(`JSON`, json_doc), `. `),
                s.sentence(`Файл з розширення `, s.lt(`.node`), `: `, s.lt(`"./memes.node"`), `, інтерпретований як `, s.link(`модуль С++`, cpp_addon), `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Якщо потрібного файлу не знайдено - функція кине помилку. `),
                s.sentence(`З такого порядку завантаження можна зробити три важливих висновки. `),
                s.sentence(`По-перше, `, $require, ` буде намагатись завантажити файл `, s.emphasis(`без розширення`), `, причому буде робити це `, s.emphasis(`в першу чергу`), `. `),
                s.sentence(`По-друге, `, $require, ` - це найлегший спосіб завантажити просту конфігурацію `, code_4, `. `),
                s.sentence(`До того ж, ця конфігурація може бути як звичайним JSON файлом, так і CommonJS модулем. `),
                s.sentence(`По-третє, вказувати розширення файлу не обов'язково. `),
                s.sentence(`Ця особливість може в незначній мірі допомогти, якщо в подальшому розширення файлу зміниться, або сам файл буде замінений каталогом. `),
            ]),
            code_4,
        ]),
        s.section(`Завантаження каталогу. `, ...[
            s.paragraph(...[
                s.sentence(`Якщо потрібного файлу не існує, але існує каталог з таким же іменем, `, $require, ` перейде до наступного етапу: завантаження каталогу. `),
                s.sentence(`Цей етап сильно пов'язаний з пакетами npm та, зокрема, зі спеціальним файлом, в якому ці пакети зберігають свої метадані: `, s.link(`package.json`, package_json_doc), `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Простіше буде почати з огляду того випадку, коли у вказаному каталозі відсутній `, package_json,`. `),
                s.sentence(`В такому разі `, $require, ` буде шукати в цьому каталозі інший спеціальний файл - `, s.lt(`index.js`), `. `),
                s.sentence(`Якщо бути точним, то алгоритм буде послідовно шукати файли `, s.lt(`index`), ` з наступними розширеннями:`),
            ]),
            s.list(...[
                s.sentence(`Файл з розширення `, s.lt(`.js`), `: `, s.lt(`"index.js"`), `. `),
                s.sentence(`Файл з розширення `, s.lt(`.json`), `: `, s.lt(`"index.json"`), `, інтерпретований як `, s.link(`JSON`, json_doc), `. `),
                s.sentence(`Файл з розширення `, s.lt(`.node`), `: `, s.lt(`"index.node"`), `, інтерпретований як `, s.link(`модуль С++`, cpp_addon), `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Дуже важливим буде зауважити те, що на відміну від завантаження файлу з попереднього розділу, у цьому випадку файл без розширення `, s.emphasis(`ігнорується`), `. `),
                s.sentence(`Важко сказати наскільки виправданою є така практика - використання файлу `, s.lt(`index`), ` замість `, package_json, `. `),
                s.sentence(`Але про неї безумовно є сенс знати, щоб зрозуміти як працюють `, s.figurative(`пакети`), ` без файлу `, package_json, `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Підсумовуючи все сказане вище - можна зробити ще два короткі висновки. `),
                s.sentence(`По-перше, `, package_json, ` не особливо то і потрібен для того, щоб завантажити вміст каталогу. `),
                s.sentence(`По-друге, на відміну від завантаження файлу, у цьому випадку `, s.lt(`index`), ` без розширення не буде завантажено. `),
            ]),
        ]),
        s.section(s.sentence(`Завантаження `, package_json, `. `), ...[
            s.paragraph(...[
                s.sentence(`Якщо в каталозі за вказаним шляхом існує файл `, package_json, `, то `, $require, ` завантажить і інтерпретує його як JSON. `),
                s.sentence(`Зараз у цьому файлі для нас важливе лише одне поле - `, $main_s, `. `),
                s.sentence(`Воно повинно містити шлях до потрібного файлу відносно того, каталогу в якому знаходиться `, package_json, ` `, code_5, `. `),
                s.sentence(`Якщо цього поля або файлу немає - буде завантажено файл `, s.lt(`index`), ` за вищезгаданою схемою. `),
                s.sentence(`Важливо, що шлях до файлу не обов'язково починати з крапки, він все одно буде вважатись відносним. `),
                s.sentence(``),
            ]),
            code_5,
        ]),
        /*s.section(`Загальні принципи. `, ...[
            s.paragraph(...[
                s.sentence(`Перед тим як говорити про деталі `, require_, ` є сенс описати загальні принципи його роботи. `),
                s.sentence(`Весь процес можна умовно розбити на 3 етапи: `),
            ]),
            s.list(...[
                `Пошук модуля. `,
                `Виконання. `,
                `Кешування. `,
            ]),
            s.paragraph(...[
                s.sentence(`В процесі пошуку `, require_, ` визначається з джерелом коду потрібного модуля. `),
                s.sentence(`Далі, цей код буде виконаний в ізольованій області, зі своїми власними змінними `, require_, ` та `, module_, `. `),
                s.sentence(`Після того як код виконано а `, exports_, ` заповнений відповідними значеннями, ця змінна зберігається в кеші. `),
                s.sentence(`При подальших звернення до цього ж модуля він вже не буде виконуватись. `),
                s.sentence(`Натомість, буде повернене значення збережене в кеші. `),
                s.sentence(``),
            ]),
            s.paragraph(...[
                s.sentence(`Одразу варто зазначити що це лише загальна картина того що відбувається і вагомий внесок несуть саме деталі. `),
            ]),
        ]),*/
        /*s.section(`Пошук`, ...[
            s.paragraph(...[
                s.sentence(`Одразу після початку пошуку `, require_, ` перевіряє чи переданий ідентифікатор збігається з назвою якогось з модулів ядра. `),
                s.sentence(`Це модулі типу `, s.lt(`path`), ` або `, s.lt(`fs`), `, вбудовані в NodeJS, а їх повний перелік можна отримати за допомогою властивості `, s.p(`builtinModules`), ` модуля `, s.lt(`fs`), code_1, `. `),
                s.sentence(`Якщо потрібний модуль знайдений в ядрі - він одразу ж і повертається. `),
                s.sentence(`Якщо ж ні - пошук продовжується далі. `),
                s.sentence(`Вже на цьому етапі можна зробити важливий висновок: не варто називати власний модуль іменем, зарезервованим за модулем ядра. `),
            ]),
            [
                code_1,
            ],
            s.paragraph(...[
                s.sentence(`Якщо передана в `, require_, ` стрічка починається з послідовності символів `, s.lt(`/`), `, `, s.lt(`./`), ` або `, s.lt(`../`), ` - алгоритм буде трактувати це як шлях відносно файлу з якого відбувався виклик функції. `),
                s.sentence(`Спочатку за вказаним шляхом буде шукатись файл без розширення, потім файл з розширенням `, s.lt(`.js`), `, потім `, s.lt(`.json`), `, потім `, s.lt(`.node`), `. `),
                s.sentence(`Важливо те, що `, s.lt(`.json`), ` файл буде перетворений у відповідний йому об'єкт, а файл без розширення буде інтерпретуватись як файл з розширенням `, s.lt(`.js`), `. `),
                s.sentence(`Тут теж можна зробити два маленьких висновки: 1. `, require_, ` - це найпростіший спосіб завантажити `, s.lt(`json`), ` об'єкт. 2. Файл без розширення буде завантажуватись в першу чергу і якщо про це не знати то є ризик натрапити на неочікувану поведінку. `),
            ]),
            s.paragraph(...[
                s.sentence(`Якщо за вказаним шляхом не існує файлу, але існує каталог - події будуть розвиватись по-іншому. `),
                s.sentence(`В першу чергу алгоритм буде шукати у вказаному каталозі файл `, s.lt(`package.json`), `. `),
                s.sentence(`Якщо такого файлу не існує, то аглоритм намагатиметься послідовно завантажити з каталогу файли `, s.lt(`index.js`), `, `, s.lt(`index.json`), ` та `, s.lt(`index.node`), ` за аналогією з завантаженням файлу. `),
                s.sentence(`І ще два важливі висновоки: 1. У цьому конкретному випадку файл без розширення не буде завантажуватись. 2. Файл `, s.lt(`package.json`), ` грає роль навіть при завантаженні з використанням відносного шляху. `),
            ]),
            s.paragraph(...[
                s.sentence(`За умови що `, s.lt(`package.json`), ` існує, алгоритм завантажить його та буде шукати в ньому поле `, s.p(`main`), `. `),
                s.sentence(`Значення цього поля буде трактуватись як відносний шлях до файлу з кодом модуля. `),
                s.sentence(`Якщо ж такого поля або файлу немає - алгоритм буде намагатись завантажити файли `, s.lt(`index.*`), `. `),
                s.sentence(`Також важливо підкреслити, що поле `, s.p(`main`), ` трактується саме як шлях до файлу і з його допомогою вже не вийде посилатись на інший `, s.lt(`package.json`), `. `),
            ]),
            s.paragraph(...[
                s.sentence(``),
                s.sentence(``),
            ]),
            s.paragraph(...[
                s.sentence(``),
                s.sentence(``),
            ]),
        ]),*/
    ),
});
