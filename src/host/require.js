const hosting = require(`../hosting`);
const documenting = require(`../documenting`);


/**
 * @todo правила запису ідентифіката модуля
 * @todo різниця в поведінці між require(`x`) (package.exports) та require(`./x`) (package.main)
 */


const h = hosting;
const s = documenting.shortcuts;


const $require = s.f(`require`);
const $module = s.c(`module`);
const $exports_v = s.v(`exports`);
const $exports_p = s.p(`exports`);
const $main_s = s.lt(`"main"`);
const exports_s = s.lt(`"exports"`);
const module_exports = s.phrase([ s.c(`module`), s.lexeme(`.`), s.p(`exports`) ]);
const module_paths = s.phrase([ s.c(`module`), s.lexeme(`.`), s.p(`paths`) ]);
const free_variables = `https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BB%D1%8C%D0%BD%D1%96_%D1%96_%D0%B7%D0%B2%27%D1%8F%D0%B7%D0%B0%D0%BD%D1%96_%D0%B7%D0%BC%D1%96%D0%BD%D0%BD%D1%96`;
const builtinModules = s.phrase([ s.f(`require`), s.lexeme(`(`), s.lt(`\`module\``), s.lexeme(`).`), s.p(`builtinModules`) ]);
const require_doc = `https://nodejs.org/api/modules.html#modules_all_together`;
const require_source = `https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js`;
const cpp_addon = `https://nodejs.org/api/addons.html`;
const json_doc = `https://uk.wikipedia.org/wiki/JSON`;
const package_json_doc = `https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/`;
const package_json = s.lt(`package.json`);
const index = s.lt(`index`);
const node_modules = s.lt(`node_modules`);
const node_modules_doc = `https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders`;
const global_folders_doc = `https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders`;
const scope_doc = `https://docs.npmjs.com/misc/scope`;

const note_1 = s.note([
    s.sentence(`Мається на увазі те, що змінні виглядають так, наче оголошені у зовнішній області коду, а не всередині функції і, відповідно, доступні в будь-якому місці модуля. `),
    s.sentence(`Не зважаючи на це, ці змінні є унікальними для кожного модуля (про що згадується далі), а тому характеристика `, s.figurative(`глобальні`), ` може бути оманливою. `),
]);
const note_2 = s.note([
    s.sentence(`Аналізуючи код функції `, $require, ` на `, s.link(`github`, require_source), ` мені не вдалось знайти у ньому місце, де б оброблявся випадок звернення до модуля через `, s.lt(`/`), ` і без крапок. `),
    s.sentence(`Але оскільки в `, s.link(`офіційній документації`, require_doc), ` такий випадок вказаний - я вирішив включити його у статтю. `),
]);
const note_3 = s.note([
    s.sentence(`Часто можна зустріти статті (включно з `, s.link(`офіційною документацією`, node_modules_doc), `), де цей етап називають пошуком в `, node_modules, `. `),
    s.sentence(`В переважній більшості випакдів подібна термінологія не сильно розходиться з істиною, але повний перелік каталогів все ж не обмежується `, node_modules, ` і, окрім цього, може змінюватись. `),
    s.sentence(`А тому, зважаючи ще й на те, що для цього переліку каталогів існує окрема стандартизована змінна - `, module_paths, ` - я вважаю є сенс оновити термінологію. `),
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
const code_6 = s.illustration( ...[
    s.sentence(`Приклад того, як може виглядати `, module_paths, ` всередині файлу `, s.lt(`C:/projects/nodejs/script.js`), `. `),
    s.code(
        [ `console.log(module.paths);` ],
        [ s.cm(`/* `) ],
        [ s.cm(` * [`) ],
        [ s.cm(` *     "C:/projects/nodejs/node_modules",`) ],
        [ s.cm(` *     "C:/projects/node_modules",`) ],
        [ s.cm(` *     "C:/node_modules",`) ],
        [ s.cm(` *     "C:/Users/Hopeless Programmer/.node_modules",`) ],
        [ s.cm(` *     "C:/Users/Hopeless Programmer/.node_libraries",`) ],
        [ s.cm(` * ]`) ],
        [ s.cm(` */`) ],
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
                s.sentence(`Таким чином, функція `, $require, ` при зверненні до певного модуля повертає те значення, яке було збережено у полі `, module_exports, ` цього модуля. `),
                s.sentence(`Також у кожному модулі є вільна `, s.emphasis(`змінна`), ` `, $exports_v, `. `),
                s.sentence(`Це звичайна змінна, яка посилається на вже згадане поле `, module_exports, `, а її основне призначення - скорочення запису при зверненні до цього поля. `),
                s.sentence(`На початку виконання модуля `, module_exports, ` (і, відповідно, `, $exports_v, `) посилається на порожній об'єкт (`, s.lexeme(`{}`), `), а тому можлива дуже коротка форма запису екпорту змінних, в стилі `, s.phrase([ s.c(`exports`), s.lexeme(`.`), s.p(`lol`), s.lexeme(` = `), s.v(`lol`) ]), `. `),
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
                s.sentence(`В першому варіанті шлях буде трактуватись як глобальний, відносно кореня файлової системи`, note_2, `. `),
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
                s.sentence(`Якщо бути точним, то алгоритм буде послідовно шукати файли `, index, ` з наступними розширеннями:`),
            ]),
            s.list(...[
                s.sentence(`Файл з розширення `, s.lt(`.js`), `: `, s.lt(`"index.js"`), `. `),
                s.sentence(`Файл з розширення `, s.lt(`.json`), `: `, s.lt(`"index.json"`), `, інтерпретований як `, s.link(`JSON`, json_doc), `. `),
                s.sentence(`Файл з розширення `, s.lt(`.node`), `: `, s.lt(`"index.node"`), `, інтерпретований як `, s.link(`модуль С++`, cpp_addon), `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Дуже важливим буде зауважити те, що на відміну від завантаження файлу з попереднього розділу, у цьому випадку файл без розширення `, s.emphasis(`ігнорується`), `. `),
                s.sentence(`Важко сказати наскільки виправданою є така практика - використання файлу `, index, ` замість `, package_json, `. `),
                s.sentence(`Але про неї безумовно є сенс знати, щоб зрозуміти як працюють `, s.figurative(`пакети`), ` без файлу `, package_json, `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Підсумовуючи все сказане вище - можна зробити ще два короткі висновки. `),
                s.sentence(`По-перше, `, package_json, ` не особливо то і потрібен для того, щоб завантажити вміст каталогу. `),
                s.sentence(`По-друге, на відміну від завантаження файлу, у цьому випадку `, index, ` без розширення не буде завантажено. `),
            ]),
        ]),
        s.section(s.sentence(`Завантаження `, package_json, `. `), ...[
            s.paragraph(...[
                s.sentence(`Якщо в каталозі за вказаним шляхом існує файл `, package_json, `, то `, $require, ` завантажить і інтерпретує його як JSON. `),
                s.sentence(`Зараз у цьому файлі для нас важливе лише одне поле - `, $main_s, `. `),
                s.sentence(`Воно повинно містити шлях до потрібного файлу відносно того каталогу, в якому знаходиться `, package_json, ` `, code_5, `. `),
            ]),
            code_5,
            s.paragraph(...[
                s.sentence(`Якщо цього поля або файлу немає - буде завантажено файл `, index, ` за вищезгаданою схемою. `),
                s.sentence(`Важливо, що шлях до файлу не обов'язково починати з крапки, він все одно буде вважатись відносним. `),
                s.sentence(`Також не обов'язково вказувати розширення файлу. `),
                s.sentence(`Ще один важливий факт це те, що шлях інтерпретується саме як шлях до файлу і посилатись на інший каталог або `, package_json, ` не вийде. `),
                s.sentence(`Ну і останній важливий висновок: файлу на який вказує поле `, $main_s, ` може і не бути. `),
                s.sentence(`В такому разі `, $require, ` просто перейде до завантаження файлу `, index, `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Нагадую, що усі описані вище кроки поки що стосуються лише тих випадків, у яких ідентифікатор модуля трактується як `, s.emphasis(`відносний шлях`), `. `),
                s.sentence(`Як ми побачимо далі, більшість з цих кроків можна поширити і на решту ситуацій, але варто пам'ятати що деталі можуть відрізнятись. `),
                s.sentence(`У разі якщо щось пішло не так - є сенс зазирнути в документацію і сформувати чітке уявлення про те, що саме повинно відбуватись в даному випадку. `),
            ]),
        ]),
        s.section(s.sentence(`Тут про `, s.lt(`LOAD_SELF_REFERENCE`), `. `), ...[
            s.paragraph(...[
                s.sentence(``),
            ]),
        ]),
        s.section(s.sentence(`Шляхи `, module_paths, `.`), ...[
            s.paragraph(...[
                s.sentence(`Якщо ідентифікатор модуля не збігається з ідентифікатором жодного вбудованого модуля і не є відносним шляхом, `, $require, ` починає пошук потрібного модуля серед набору шляхів `, module_paths, note_3, ` `, code_6, `. `),
                s.sentence(`Це поле є масивом стрічок - повних шляхів до каталогів, в яких слід шукати модулі. `),
                s.sentence(`Пошук відбувається послідовно і якщо модуль не знайдено за першим шляхом, алгоритм переходить до наступного. `),
                s.sentence(`Якщо ж модуль не вдається знайти за жодним зі шляхів - `, $require, ` кидає помилку. `),
            ]),
            code_6,
            s.paragraph(...[
                s.sentence(`Набір шляхів `, module_paths, ` складається за певним правилом і сильно залежить від розташування того модуля, в якому відбуваєтсья виклик `, $require, `. `),
                s.sentence(`Першими у цьому масиві виступатимуть шляхи до каталогів `, node_modules, `. `),
                s.sentence(`Пошук в такому каталозі буде доданий для того каталогу, в якому розміщений файл з якого проводиться виклик `, $require, `, а також для усіх батьківських каталогів цього каталогу. `),
                s.sentence(`Іншими словами, спочатку `, $require, ` буде шукати потрібний модуль всередині `, node_modules, ` розташованої біля файлу, потім в `, node_modules, ` батьківського каталогу, потім в батьківському каталозі того і так далі аж до кореня файлової системи. `),
                s.sentence(`Наприклад, якщо `, $require, ` викликається з файлу `, s.lt(`C:/path/to/file.js`), `, то набір шляхів `, module_paths, ` буде `, s.emphasis(`починатись`), ` наступною послідовністю:`),
            ]),
            s.list(
                s.lt(`C:/path/to/node_modules`),
                s.lt(`C:/path/node_modules`),
                s.lt(`C:/node_modules`),
            ),
            s.paragraph(...[
                s.sentence(`Далі, за наявності `, s.link(`змінної оточення`, global_folders_doc), ` `, s.lt(`NODE_PATH`), `, в цей масив будуть включені вказані в ній шляхи. `),
                s.sentence(`Після них також будуть додані шляхи до спеціальних каталогів `, s.lt(`.node_modules`), ` та `, s.lt(`.node_libraries`), `, котрі, `, s.emphasis(`наголошую`), `, починаються з крапки. `),
                s.sentence(`Ці каталоги знаходяться в домашньому каталозі користувача. `),
                s.sentence(`Так, для користувача `, s.lt(`Hopeless Programmer`), `, наприклад, ці шляхи будуть чимось на зразок `, s.lt(`C:/Users/Hopeless Programmer/.node_modules`), ` та `, s.lt(`C:/Users/Hopeless Programmer/.node_libraries`), ` відповідно. `),
                s.sentence(`Офіційна документація налогошує на тому, що ці шляхи підтримуються з історичних причин, а усі потрібні модулі наполегливо радять зберігати в локальних каталога `, node_modules, `. `),
            ]),
        ]),
        s.section(s.sentence(`Пошук в `, module_paths, `.`), ...[
            s.paragraph(...[
                s.sentence(`Хоча пошук модуля в `, module_paths, ` багато в чому схожий з тим пошуком, який відбується за відносним шляхом, він все ж має одну `, s.emphasis(`дуже суттєву`), ` відмінність. `),
                s.sentence(`Ідея крутиться навколо `, exports_s, ` - ще одного поля файлу `, package_json, `. `),
                s.sentence(`Воно слугує джерелом інформації про те, які шляхи всередині самого модуля є відкритими до завантаження через `, $require, `, а які є приватними. `),
                s.sentence(`Тобто `, exports_s, ` визначає чи можемо ми завантажити файл `, s.lt(`doge`), ` всередині модуля `, s.lt(`memes`), ` як `, s.phrase([ $require, s.lexeme(`(`), s.lt(`"memes/doge"`), s.lexeme(`)`) ]), ` і яким чином буде інтепретуватись шлях до цього файлу. `),
                s.sentence(`Але давайте про все це по-порядку...`),
            ]),
            s.paragraph(...[
                s.sentence(`На цьому етапі у нас вже є сформований список каталогів в яких потрібно проводити пошук - `, module_paths, `. `),
                s.sentence(`Рухаючись по ньому `, $require, ` трактує ідентифікатор потрібного нам модуля як комбінацію його імені та шляху всередині самого модуля за наявності такого. `),
                s.sentence(`Цей внутрішній шлях починається з косої риски (`, s.lt(`/`), `) і є послідовністю ідентифікаторів модулів розділених нею ж. `),
                s.sentence(`Наприклад, це може бути `, s.phrase([ $require, s.lexeme(`(`), s.lt(`"my-module/path/to/submodule"`), s.lexeme(`)`) ]), `, де ідентифікатором модуля буде вважатись `, s.lt(`my-module`), ` а внутрішнім шляхом - `, s.lt(`/path/to/submodule`), `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Додатково, ідентифікатор самого модуля може починатись зі `, s.emphasis(`спеціального`), ` префіксу який вказує на `, s.link(`область`, scope_doc), `. `),
                s.sentence(`Такий префікс повинен починатись з символу `, s.lt(`@`), ` закінчуватись косою рискою (`, s.lt(`/`), `), а між ними - містити ідентифікатор області. `),
                s.sentence(`Такий префікс дозволяє оголошувати модулі з іменами, які вже є зарезервовані за вбудованими модулями, або пакетами npm, при цьому не створюючи неоднозначностей. `),
                s.sentence(`Наприклад, можна оголосити модуль `, s.lt(`@my/path`), ` і це не буде конфліктувати з вбудованим модулем `, s.lt(`path`), `. `),
            ]),
            s.paragraph(...[
                s.sentence(``),
            ]),
        ]),
        // s.section(``, ...[
        //     s.paragraph(...[
        //         s.sentence(``),
        //     ]),
        // ]),
    ),
});
