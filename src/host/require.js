const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);


/**
 * @todo правила запису ідентифіката модуля
 * @todo різниця в поведінці між require(`x`) (package.exports) та require(`./x`) (package.main)
 * @todo https://www.npmjs.com/package/validate-npm-package-name
 */


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    list,
    sentence,
    emphasis,
    figurative,
    link,
    note,
    illustration,
    js,
    kw,
    v,
    f,
    c,
    p,
    lt,
    cm,
} = s;


const $require = js(f(`require`));
const $module = js(v(`module`));
const $exports_v = js(v(`exports`));
const $exports_p = js(p(`exports`));
const main = s.code(`json`, p(`"main"`));
const exports_s = s.code(`json`, lt(`"exports"`));
const name = s.code(`json`, lt(`"name"`));
const module_exports = js( c(`module`), `.`, p(`exports`) );
const module_paths = js( c(`module`), `.`, p(`paths`) );
const common_js = `http://wiki.commonjs.org/wiki/Modules/1.1.1`;
const es_modules = `https://nodejs.org/api/esm.html`;
const es_modules_exports = `https://nodejs.org/api/esm.html#esm_package_entry_points`;
const npm = `https://en.wikipedia.org/wiki/Npm_(software)`;
const free_variables = `https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%BB%D1%8C%D0%BD%D1%96_%D1%96_%D0%B7%D0%B2%27%D1%8F%D0%B7%D0%B0%D0%BD%D1%96_%D0%B7%D0%BC%D1%96%D0%BD%D0%BD%D1%96`;
const nodejs_modules = `https://nodejs.org/api/modules.html`;
const builtinModules = js( f(`require`), `(`, lt(`"module"`), `).`, p(`builtinModules`) );
const posix = `https://uk.wikipedia.org/wiki/POSIX`;
const url = `https://uk.wikipedia.org/wiki/%D0%A3%D0%BD%D1%96%D1%84%D1%96%D0%BA%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9_%D0%BB%D0%BE%D0%BA%D0%B0%D1%82%D0%BE%D1%80_%D1%80%D0%B5%D1%81%D1%83%D1%80%D1%81%D1%96%D0%B2`;
const scope = `https://docs.npmjs.com/misc/scope`;
const require_doc = `https://nodejs.org/api/modules.html#modules_all_together`;
const require_source = `https://github.com/nodejs/node/blob/master/lib/internal/modules/cjs/loader.js`;
const cpp_addon = `https://nodejs.org/api/addons.html`;
const json_doc = `https://uk.wikipedia.org/wiki/JSON`;
// const package_json_doc = `https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/`;
const package_json = js(lt(`package.json`));
const index = js(lt(`index`));
const node_modules = js(lt(`node_modules`));
const node_modules_doc = `https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders`;
const global_folders_doc = `https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders`;
// const scope_doc = `https://docs.npmjs.com/misc/scope`;
const slash = js(lt(`/`));
const validate_npm = `https://www.npmjs.com/package/validate-npm-package-name`;
const filename = js(v(`__filename`));
const dirname = js(v(`__dirname`));
const load_self_reference = js(lt(`LOAD_SELF_REFERENCE`));
const utf8 = `https://uk.wikipedia.org/wiki/UTF-8`;
const shebang = `https://uk.wikipedia.org/wiki/%D0%A8%D0%B5%D0%B1%D0%B0%D0%BD%D0%B3_(Unix)`;
const $this = js(kw(`this`));
const $arguments = js(kw(`arguments`));
const $return = js(kw(`return`));
const new_target = js(kw(`new`), `.`, p(`target`));
const vm_runInThisContext = js(v(`vm`), `.`, f(`runInThisContext`));
const vm_runInThisContext_doc = `https://nodejs.org/api/vm.html#vm_vm_runinthiscontext_code_options`;
const $eval = js(f(`eval`));
const module_id = js(v(`module`), `.`, p(`id`));
const repl = `https://uk.wikipedia.org/wiki/REPL`;
const module_filename = js(v(`module`), `.`, p(`filename`));
const module_loaded = js(v(`module`), `.`, p(`loaded`));
const module_parent = js(v(`module`), `.`, p(`parent`));
const module_children = js(v(`module`), `.`, p(`children`));
const $null = js(kw(`null`));
const createRequire_doc = `https://nodejs.org/api/modules.html#modules_module_createrequire_filename`;
const require_resolve = js(f(`require`), `.`, f(`resolve`));
const require_resolve_doc = `https://nodejs.org/api/modules.html#modules_require_resolve_request_options`;
const require_resolve_paths = js(f(`require`), `.`, f(`resolve`), `.`, f(`paths`));
const require_resolve_paths_doc = `https://nodejs.org/api/modules.html#modules_require_resolve_paths_request`;
const module_createRequire = js(f(`require`), `(`, lt(`"module"`), `).`, f(`createRequire`));
const createRequire = js(f(`createRequire`));
const singleton = `https://uk.wikipedia.org/wiki/%D0%9E%D0%B4%D0%B8%D0%BD%D0%B0%D0%BA_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`;
const lazy = `https://en.wikipedia.org/wiki/Lazy_loading`;
const require_cache = js(f(`require`), `.`, p(`cache`));
const require_cache_doc = `https://nodejs.org/api/modules.html#modules_require_cache`;
const ping = js(f(`ping`));
const pong = js(f(`pong`));
const ping_s = js(lt(`./ping`));
const pong_s = js(lt(`./pong`));
const require_ping = js(f(`require`), `(`, lt(`"./ping"`), `)`);
const require_pong = js(f(`require`), `(`, lt(`"./pong"`), `)`);
const $extends = js(kw(`extends`));

const note_1 = note([
    sentence(`Мається на увазі те, що змінні виглядають так, наче оголошені у зовнішній області коду, а не всередині функції і, відповідно, доступні в будь-якому місці модуля. `),
    sentence(`Не зважаючи на це, ці змінні є унікальними для кожного модуля (про що згадується далі), а тому характеристика `, figurative(`глобальні`), ` може бути оманливою. `),
]);
const note_2 = note([
    sentence(`Це легко перевірити, якщо розмістити в каталозі обидва файли. `),
    sentence(`У цьому випадку `, $require, ` проігнорує файл без розширення. `),
]);
const note_3 = note([
    sentence(`Часто можна зустріти статті (включно з `, link(`офіційною документацією`, node_modules_doc), `), де цей етап називають пошуком в `, node_modules, `. `),
    sentence(`В переважній більшості випакдів подібна термінологія не сильно розходиться з істиною, але повний перелік каталогів все ж не обмежується `, node_modules, ` і, окрім цього, може змінюватись. `),
    sentence(`А тому, зважаючи ще й на те, що для цього переліку каталогів існує окрема стандартизована змінна - `, module_paths, ` - я вважаю є сенс оновити термінологію. `),
]);
const note_4 = note([
    sentence(`Також можна згадати про ще одну концепцію на якій побудовані модулі - `, link(`ліниве завантаження`, lazy), `. `),
]);
{
// const note_2 = s.note([
//     s.sentence(`Аналізуючи код функції `, $require, ` на `, s.link(`github`, require_source), ` мені не вдалось знайти у ньому місце, де б оброблявся випадок звернення до модуля через `, s.lt(`/`), ` і без крапок. `),
//     s.sentence(`Але оскільки в `, s.link(`офіційній документації`, require_doc), ` такий випадок вказаний - я вирішив включити його у статтю. `),
// ]);
}

const code_1 = illustration(...[
    sentence(`Приклад роботи з модулями. `),
    js(
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
const code_2 = illustration(...[
    sentence(`Перелік вбудованих модулів. `),
    js(
        [ cm(`// список усіх вбудованих модулів NodeJS`) ],
        [ f(`require`), `(`, lt(`"module"`), `).`, p(`builtinModules`), `;` ],
        [ cm(`/**`) ],
        [ cm(` * [`) ],
        [ cm(` *     "path",`) ],
        [ cm(` *     "http",`) ],
        [ cm(` *     "fs",`) ],
        [ cm(` *     ...`) ],
        [ cm(` * ]`) ],
        [ cm(` */`) ],
    ),
]);
const code_3 = illustration( ...[
    sentence(`Приклад того, як може виглядати `, module_paths, ` всередині файлу `, js(lt(`C:/projects/nodejs/script.js`)), `. `),
    js(
        [ `console.log(module.paths);` ],
        [ cm(`/* `) ],
        [ cm(` * [`) ],
        [ cm(` *     "C:/projects/nodejs/node_modules",`) ],
        [ cm(` *     "C:/projects/node_modules",`) ],
        [ cm(` *     "C:/node_modules",`) ],
        [ cm(` *     "C:/Users/Hopeless Programmer/.node_modules",`) ],
        [ cm(` *     "C:/Users/Hopeless Programmer/.node_libraries",`) ],
        [ cm(` * ]`) ],
        [ cm(` */`) ],
    ),
]);
const code_4 = illustration( ...[
    sentence(`Приблизно так буде виглядати код модуля перед виконанням, загорнутий в функцію-обгортку. `),
    js(
        [ `(function (exports, require, module, __filename, __dirname) { ` ],
        [ `const other = require("other-module");` ],
        [ `` ],
        [ `console.log("my module!");` ],
        [ `` ],
        [ `exports = module.exports = "my-module";` ],
        [ `});` ],
    ),
]);
const code_5 = illustration( ...[
    sentence(`Всередині модуля `, $this, ` посилається на той же об'єкт, що й `, module_exports, `. `),
    js(
        [ `console.log(this === module.exports); // true` ],
        [ `` ],
        [ `this.kek = "kek"; // працює` ],
    ),
]);
const code_6 = illustration( ...[
    sentence(`У випадку наслідування базовий клас потрібно завантажувати до експорту, а не після. `),
    js(
        [ `const Base = require("./base");` ],
        [ `` ],
        [ `class Derived extends Base {` ],
        [ `    Do() {` ],
        [ `        kek();` ],
        [ `    }` ],
        [ `}` ],
        [ `` ],
        [ `exports = module.exports = Derived;` ],
        [ `` ],
        [ `const kek = require("./kek");` ],
    ),
]);
const explorer_1 = illustration(...[
    sentence(`Обидва способи запису шляху (з використанням `, js(lt(`/`)), ` або `, js(lt(`\\\\`)), `) підтримуються, але рекомендований `, emphasis(`лише`), ` `, link(`POSIX`, posix), `. `),
    s.explorer({
        [`script.js`] : js(
            [ `// запис шляху до файлу в форматі posix` ],
            [ `require("./module-a");` ],
            [ `` ],
            [ `// запис шляху до файлу в форматі windows` ],
            [ `require(".\\\\module-a");` ],
        ),
        [`module-a.js`] : js(
            [ `exports = module.exports = "module-a";` ],
        ),
    }),
]);
const explorer_2 = illustration(...[
    sentence(`Хоча ми й створили пакет `, js(lt(`path`)), `, ми не зможемо завантажити його через `, $require, `. `),
    s.explorer({
        [`script.js`] : js(
            [ `// буде завантажено вбудований path, а не модуль з node_modules` ],
            [ `require("path");` ],
        ),
        [`node_modules`] : {
            [`path`] : {
                [`package.json`] : s.code(`json`,
                    [ `{` ],
                    [ `    "name" : "path"` ],
                    [ `    "main" : "./path"` ],
                    [ `}` ],
                ),
                [`path.js`] : js(
                    [ `exports = module.exports = "path";` ],
                ),
            },
        },
    }),
]);
const explorer_3 = illustration(...[
    sentence(`Завантаження файлу `, index, ` з каталогу. `),
    s.explorer({
        [`script.js`] : js(
            [ `require("./my-package"); // 5` ],
        ),
        [`my-package`] : {
            [`index.js`] : js(
                [ `exports = module.exports = 5;` ],
            ),
        },
    }),
]);
const explorer_4 = illustration(...[
    sentence(`Звернення до під-модулів. `),
    s.explorer({
        [`script.js`] : js(
            [ `require("memes");     // { lol : "lol", kek : "kek" }` ],
            [ `require("memes/lol"); // "lol"` ],
            [ `require("memes/kek"); // "kek"` ],
        ),
        [`node_modules`] : {
            [`memes`] : {
                [`package.json`] : s.code(`json`,
                    [ `{` ],
                    [ `    "name"    : "memes",` ],
                    [ `    "exports" : {` ],
                    [ `        "."     : "./memes"` ],
                    [ `        "./lol" : "./lol"` ],
                    [ `        "./kek" : "./kek"` ],
                    [ `    }` ],
                    [ `}` ],
                ),
                [`memes.js`] : js(
                    [ `const lol = require("./lol");` ],
                    [ `const kek = require("./kek");` ],
                    [ `` ],
                    [ `exports.lol = lol;` ],
                    [ `exports.kek = kek;` ],
                ),
                [`lol.js`] : js(
                    [ `exports = module.exports = "lol";` ],
                ),
                [`kek.js`] : js(
                    [ `exports = module.exports = "kek";` ],
                ),
            },
        },
    }),
]);
const explorer_5 = illustration(...[
    sentence(`Приклад зміни `, module_loaded, ` після виконання коду модуля. `),
    s.explorer({
        [`script.js`] : js(
            [ `const f = require("./f");` ],
            [ `` ],
            [ `f(); // true` ],
        ),
        [`f.js`] : js(
            [ `console.log(module.loaded); // false` ],
            [ `` ],
            [ `function f() {` ],
            [ `    console.log(module.loaded);` ],
            [ `}` ],
            [ `` ],
            [ `exports = module.exports = f;` ],
        ),
    }),
]);
const explorer_6 = illustration(...[
    sentence(`Видалення модуля з `, require_cache, ` спричиняє його повторне завантаження при повторному зверненні. `),
    s.explorer({
        [`script.js`] : js(
            [ `const id = require("./a"); // loaded` ],
            [ `` ],
            [ `delete require.cache[id];` ],
            [ `` ],
            [ `require("./a"); // loaded` ],
        ),
        [`a.js`] : js(
            [ `console.log("loaded");` ],
            [ `` ],
            [ `exports = module.exports = module.id;` ],
        ),
    }),
]);
const explorer_7 = illustration(...[
    sentence(`Видалення модуля з кешу не змусить інші модулі повторно завантажити його. `),
    s.explorer({
        [`script.js`] : js(
            [ `const a = require("./a");` ],
            [ `const b = require("./b");` ],
            [ `` ],
            [ `console.log(a.x); // 5` ],
            [ `` ],
            [ `b(); // 5` ],
            [ `` ],
            [ `a.x = 10;` ],
            [ `` ],
            [ `b(); // 10` ],
            [ `` ],
            [ `delete require.cache[a.id];` ],
            [ `` ],
            [ `const a2 = require("./a");` ],
            [ `` ],
            [ `console.log(a.x); // 10` ],
            [ `console.log(a2.x); // 5` ],
            [ `` ],
            [ `b(); // 10` ],
        ),
        [`a.js`] : js(
            [ `exports = module.exports = {` ],
            [ `    id : module.id,` ],
            [ `    x  : 5,` ],
            [ `};` ],
        ),
        [`b.js`] : js(
            [ `const a = require("./a");` ],
            [ `` ],
            [ `function f() {` ],
            [ `    console.log(a.x);` ],
            [ `}` ],
            [ `` ],
            [ `exports = module.exports = f;` ],
        ),
    }),
]);
const explorer_8 = illustration(...[
    paragraph(...[
        sentence(`Функції `, ping, ` та `, pong, ` посилаються один на одного, але знаходяться у різних файлах. `),
        sentence(`Якщо завантажувати їх на початку файлу або до експорту, то незалежно від порядку одна з функцій не встигне експортувати себе для іншої. `),
        sentence(`У результаті виклик `, $require, ` поверне `, js(`{}`), `, що спричинить помилку на етапі виконання одної з функцій. `),
    ]),
    s.explorer({
        [`script.js`] : js(
            [ `const ping = require("./ping");` ],
            [ `` ],
            [ `ping(2);` ],
        ),
        [`ping.js`] : js(
            [ `const pong = require("./pong");` ],
            [ `` ],
            [ `function ping(n) {` ],
            [ `    console.log("ping");` ],
            [ `` ],
            [ `    pong(n);` ],
            [ `}` ],
            [ `` ],
            [ `exports = module.exports = ping;` ],
        ),
        [`pong.js`] : js(
            [ `const ping = require("./ping");` ],
            [ `` ],
            [ `function pong(n) {` ],
            [ `    console.log("pong");` ],
            [ `` ],
            [ `    if (n <= 0) {` ],
            [ `        return;` ],
            [ `    }` ],
            [ `` ],
            [ `    ping(n - 1);` ],
            [ `}` ],
            [ `` ],
            [ `exports = module.exports = pong;` ],
        ),
    }),
]);
const explorer_9 = illustration(...[
    sentence(`Проблеми зникають, якщо завантажувати модулі пілся власного експорту . `),
    s.explorer({
        [`script.js`] : js(
            [ `const ping = require("./ping");` ],
            [ `` ],
            [ `ping(2);` ],
        ),
        [`ping.js`] : js(
            [ `function ping(n) {` ],
            [ `    console.log("ping");` ],
            [ `` ],
            [ `    pong(n);` ],
            [ `}` ],
            [ `` ],
            [ `exports = module.exports = ping;` ],
            [ `` ],
            [ `const pong = require("./pong");` ],
        ),
        [`pong.js`] : js(
            [ `function pong(n) {` ],
            [ `    console.log("pong");` ],
            [ `` ],
            [ `    if (n <= 0) {` ],
            [ `        return;` ],
            [ `    }` ],
            [ `` ],
            [ `    ping(n - 1);` ],
            [ `}` ],
            [ `` ],
            [ `exports = module.exports = pong;` ],
            [ `` ],
            [ `const ping = require("./ping");` ],
        ),
    }),
]);
{
// const code_3 = s.illustration( ...[
//     s.sentence(`Завантаження файлу використовуючи відносний шлях. `),
//     s.code(
//         [ `// модуль з того ж каталогу` ],
//         [ `const neighbor = require("./neighbor");` ],
//         [ `// модуль з вкладеного каталогу` ],
//         [ `const child    = require("./folder/child");` ],
//         [ `// модуль з зовнішнього каталогу` ],
//         [ `const parent   = require("../parent");` ],
//     ),
// ]);
// const code_4 = s.illustration( ...[
//     s.sentence(`Завантаження JSON конфігурації за допомогою `, $require, `. `),
//     s.code(
//         [ `// завантаження config.js(on)` ],
//         [ `const config = require("./config");` ],
//         [ `` ],
//         [ `configureSomething(config);` ],
//     ),
// ]);
// const code_5 = s.illustration( ...[
//     s.sentence(`Мінімальний вміст `, package_json, `. `),
//     s.code(
//         [ `{` ],
//         [ `    "main": "./src/main"` ],
//         [ `}` ],
//     ),
// ]);
}

exports = module.exports = new h.DocumentResource({
    Document : document(sentence(`Все що я знаю про: `, $require, `. `), {},
        section(`Що таке модулі?`, ...[
            paragraph(...[
                sentence(`Зазвичай код програми не зберігається в одному-єдиному файлі. `),
                sentence(`Якщо файлів багато - виникають питання щодо того, як код у різних файлах взаємодіє. `),
                sentence(`Це може включати в себе порядок виконання файлів, залежності між ними, доступ до змінних оголошених у зовнішніх файлах та інше. `),
                sentence(`Модулі - це свого роду домовленість про те, як повинна відбуватись ця взаємодія. `),
            ]),
            paragraph(...[
                sentence(`Вцілому, для мови JavaScript є різні погодження щодо систем модулів. `),
                sentence(`Деякі призначені для браузерів, інші до певної міри платформо-незалежні, а деякі навіть потребують розширення синтаксису. `),
                // [1] @todo написати про те, що в останніх версія NodeJS також є можливість використовувати модулі ECMAScript
                sentence(`Наша цільова платформа - NodeJS - використовує систему модулів `, link(`CommonJS`, common_js), `[1], а вже вона визначає потрібну нам функцію - `, $require, `. `),
            ]),
            paragraph(...[
                sentence(`Але тут варто наголосити на тому, що хоч формально модулі в NodeJS це модулі CommonJS, не всі CommonJS модулі повинні бути такими, якими вони є в NodeJS. `),
                sentence(`Це правило працює лише в один бік, а тому надалі говорячи про модулі ми будемо мати на увазі виключно їх реалізацію в NodeJS. `),
            ]),
            paragraph(...[
                sentence(``),
            ]),
        ]),
        section(`Як працюють модулі?`, ...[
            paragraph(...[
                sentence(`В NodeJS кожен файл є окремим модулем. `),
                sentence(`Модулі ізольовані один від одного, тобто будь-які змінні оголошені всередині одного модуля будуть недоступні іншим модулям. `),
                s.sentence(`У кожному модулі є дві глобальні`, note_1, ` `, link(`вільні змінні`, free_variables), `: `, $require, ` та `, $module , `. `),
                s.sentence(`Можна вважати, що ці змінні оголошені `, figurative(`за кулісами`), ` модуля, але у тій же області видимості. `),
                s.sentence(`Таким чином, можна змінити їхні значення за допомогою оператору присвоювання (`, js(`=`), `), але неможливо перекрити їх за допомогою службових слів `, js(kw(`let`)), ` та `, js(kw(`const`)), ` і пізніше ми дізнаємось чому. `),
                s.sentence(`Кожен модуль інтерпретується (зазвичай лише один раз) як звичайний код JavaScript - зверху-вниз -, а ця пара слугує основою для експорту вмісту модуля назовні, та імпорту вмісту зовнішніх модулів`, code_1, `. `),
            ]),
            code_1,
            paragraph(...[
                sentence(`Змінна `, $require, `, загалом, є звичайною функцією (`, js(c(`Function`)), `). `),
                sentence(`Вона приймає `, figurative(`ідентифікатор`), ` модуля - стрічку -, і повертає його вміст. `),
                sentence(`В залежності від ідентифікатора модуля та розташування файлу з якого викликається `, $require, `, результати можуть відрізнятись. `),
                sentence(`У випадку якщо потрібний модуль не знайдено - функція кине помилку (`, js(c(`Error`)), `). `),
                sentence(`Окрім цього, функція має набір додаткових, властивих лише їй полів, призначених для отримання інформації про модулі та керування їх завантаженням. `),
                sentence(`Деталі її роботи ми і будемо розглядати у даній статті. `),
            ]),
            paragraph(...[
                sentence(`Змінна `, $module , ` є звичайним об'єктом (`, js(c(`Object`)), `). `),
                sentence(`Окрім усього іншого, вона містить поле `, $exports_p, `, яке слугує зв'язною ланкою для звернення до модуля ззовні. `),
                sentence(`Це поле, і `, emphasis(`лише`), ` воно, буде повернено при зверненні до модуля. `),
                sentence(`Таким чином, функція `, $require, ` при зверненні до певного модуля повертає те значення, яке було збережено у полі `, module_exports, ` цього модуля. `),
                sentence(`Також у кожному модулі є вільна `, emphasis(`змінна`), ` `, $exports_v, `. `),
                sentence(`Це звичайна змінна, яка посилається на вже згадане поле `, module_exports, `, а її основне призначення - скорочення запису при зверненні до цього поля. `),
                sentence(`На початку виконання модуля `, module_exports, ` (і, відповідно, `, $exports_v, `) посилається на порожній об'єкт (`, js(`{}`), `), а тому можлива дуже коротка форма запису екпорту змінних, в стилі `, js( c(`exports`), `.`, p(`lol`), ` = `, v(`lol`) ), `. `),
            ]),
            paragraph(...[
                sentence(`Важливо підкреслити те, що змінні `, $require, ` та `, $module , ` є унікальними для кожного модуля. `),
                sentence(`Їх наповнення та поведінка залежить від багатьох дрібних чинників, про що ми і поговоримо далі. `),
                sentence(`Але важливо ще й те, що навіть приймаючи до уваги особливості цих двох змінних - вони не перестають бути звичайними об'єктами JavaScript. `),
                sentence(`Весь їхній функціонал може бути описаний звичайним кодом зі змінних та функцій, без залучення особливого синтаксису та розширення мови. `),
                sentence(`Це якісно відрізняє модулі CommonJS від інших модулів, наприклад модулів `, link(`ECMAScript`, es_modules), `. `),
            ]),
        ]),
        section(`Різновиди модулів в NodeJS.`, ...[
            paragraph(...[
                sentence(`Щоб зрозуміти як працює `, $require, ` нам потрібно знати що в принципі ми можемо завантажити з її допомогою. `),
                sentence(`Модулі що використовуються в NodeJS за походженням можна умовно розділити на три категорії:`),
            ]),
            list(...[
                [
                    sentence(`Вбудовані модулі. `),
                    sentence(`Ці модулі повністю інтегровані в NodeJS та надаються разом з його дистрибутивом. `),
                ],
                [
                    sentence(`Локальні модулі. `),
                    sentence(`Зазвичай так можна назвати ті модулі, які безпосередньо описують нашу програму. `),
                    sentence(`Вони часто завантажуються з використанням відносного шляху, а до їх переліку можна включити файли з класами, функціями, конфігурацією, тощо. `),
                ],
                [
                    sentence(`Пакети з реєстру npm. `),
                    sentence(`Ці модулі здебільшого є повністю самостійними сутностями, що призначені для виконання специфічних завдань. `),
                    sentence(`Більшість з них знаходиться у вільному доступі і може бути завантажена атоматично за допомогою `, link(`менеджера пакетів NodeJS`, npm), `. `),
                    sentence(`Для них відведені спеціальні каталоги - `, node_modules, `, про які ми поговоримо згодом. `),
                ],
            ]),
            paragraph(...[
                sentence(`Такий поділ часто можна зустріти в інших статтях або почути від досвідчених користувачів. `),
                sentence(`Але у цій статті я буду використовувати також і альтернативну класифікацію. `),
                sentence(`Зокрема, через деталі роботи функції `, $require, ` та підходу до завантаження модулів вцілому. `),
                sentence(`І зараз я поясню чому. `),
            ]),
            paragraph(...[
                sentence(`В `, link(`офіційній документації для модулів`, nodejs_modules), ` не часто оперують такими термінами як `, figurative(`пакети npm`), `. `),
                sentence(`І це не випадково. `),
                sentence(`Як ми побачимо далі, не всі модулі розташовані в `, node_modules, ` зобов'язані мати відношення до npm. `),
                sentence(`Також, пакет npm можна без проблем завантажити навіть без одного з його головних його атрибутів - файлу `, package_json, `. `),
                sentence(`Ну і далеко не кожен модуль з файлом `, package_json, ` є пакетом. `),
            ]),
            paragraph(...[
                sentence(`У зв'язку з цим, пропоную `, emphasis(`на додачу`), ` до загальноприйнятої класифікації умовно розділити модулі за їх `, figurative(`структурою`), ` на наступні три категорії:`),
            ]),
            list(...[
                [
                    sentence(`Вбудовані модулі. `),
                    sentence(`В межах цієї статті ми будемо вважати, що вони не мають реального відображення на файли, як інші модулі. `),
                ],
                [
                    sentence(`Модулі - файли. `),
                    sentence(`Ці модулі представлені одним-єдиним файлом і не передбачають додатковий пошук у внутрішніх каталогах. `),
                ],
                [
                    sentence(`Модулі - каталоги. `),
                    sentence(`Ці модулі представлені як, власне, каталоги. `),
                    sentence(`При роботі з ними враховується наявність особливих файлів всередині каталогу, які можуть суттєво впливати на правила пошуку. `),
                    sentence(`Вони особливо цікаві, оскільки згідно з правилами роботи `, $require, ` саме їх завантаження містить найбільше особливостей. `),
                ],
            ]),
        ]),
        section(`Ідентифікатор модуля.`, ...[
            paragraph(...[
                // [2] @todo згадати про те що це НЕ module.id
                sentence(`Ключем до завантаження модуля слугує стрічка, що передається в функцію `, $require, ` і яку ми будемо називати `, figurative(`ідентифікатором модуля`), `[2]. `),
                sentence(`Усього існує три можливі `, figurative(`форми запису`), ` ідентифікатора модуля:`),
            ]),
            list(...[
                [
                    sentence(`Ідентифікатор вбудованого модуля.`),
                ],
                [
                    sentence(`Відносний шлях до модуля в якості ідентифікатора.`),
                ],
                [
                    sentence(`Повний ідентифікатор модуля. `),
                    sentence(`Ця форма запису також передбачає наявність ідентифікатора області, а також шлях до підмодуля. `),
                ],
            ]),
            paragraph(...[
                sentence(`Вбудовані модулі - це найпростіший різновид модулів з якими ви можете зіштовхнутись. `),
                sentence(`Прикладами їх ідентифікаторів є `, js(lt(`"path"`)), `, `, js(lt(`"fs"`)), ` або `, js(lt(`"url"`)), `. `),
                // [3] @todo уточними, що назвати модуль вийде, а от завантажити його - ні
                sentence(`Ці ідентифікатори зарезервовані і їх не вийде використати для іменування інших типів модулів[3]. `),
                sentence(`Їх повний перелік можна отримати за допомогою функції `, builtinModules, ` `, code_2, `. `),
            ]),
            code_2,
            paragraph(...[
                sentence(`Також модуль можна завантажити за допомогою відносного шляху, на кшталт `, js(lt(`"./path/to/module"`)), `. `),
                sentence(`Такий шлях радять записувати в форматі аналогічному до того, що використовується в `, link(`POSIX`, posix), `, а саме - з використанням косої риски (`, slash, `) в якості розділювача. `),
                sentence(`Запис через `, emphasis(`подвійну`), ` обернену косу риску (`, js(lt(`\\\\`)), `) теж спрацює, але його радять уникати `, explorer_1, `. `),
            ]),
            explorer_1,
            paragraph(...[
                sentence(`Для цієї форми працюють ті ж обмеження, що і для шляхів в файловій системі та `, link(`URL`, url), `. `),
                sentence(`Зокрема, заборонені символи які використовуються в якості контролюючих, пропуски до або після ідентифікатора, тощо. `),
                sentence(`Також варто звернути увагу на те, що вказувати розширення файлів не обов'язково і згодом ми з'ясуємо чому. `),
                sentence(`Ще варто знати що завантажувати таким чином можна не лише файли, але про це теж згодом. `),
            ]),
            paragraph(...[
                sentence(`Остання форма запису ідентифікатора модуля - це його повне ім'я. `),
                sentence(`Воно може складатись з декількох частин в певному порядку, а саме: `),
            ]),
            list(...[
                [
                    sentence(`Префікс `, link(`області`, scope), `. `),
                    sentence(`Ця частина починається з символу `, js(lt(`@`)), `, за яким йде ідентифікато. `),
                    sentence(`Прикладом такого префікса може бути `, js(lt(`@types`)), `, `, js(lt(`@babel`)), ` або `, js(lt(`@my-scope`)), `.`),
                ],
                [
                    sentence(`Ідентифікатор модуля. `),
                    sentence(`Наприклад, `, js(lt(`typescript`)), ` або `, js(lt(`mime-types`)), `. `),
                ],
                [
                    sentence(`Шлях до підмодуля, який складається з ідетифікаторів розділених косою рискою (`, slash, `). `),
                    sentence(`Це може бути як єдиний ідентифікатор (наприклад, `, js(lt(`submodule`)), `) так і декілька (наприклад, `, js(lt(`path/to/submodule`)), `). `),
                ],
            ]),
            paragraph(...[
                sentence(`Префікс області та шлях до підмодуля не є обов'язковими. `),
                sentence(`Усі складові з'єднуються між собою за допомогою косої риски (`, slash, `) і разом нагадують щось на кшталт `, js(lt(`@my-scope/my-module/my-submodule/my-class`)), `. `),
                sentence(`До ідентифікаторів з яких складаються ці частини висувається ряд вимог, а саме:`),
            ]),
            list(...[
                sentence(`Повний ідентифікатор повинен бути не порожнім. `),
                sentence(`Довжина повного ідентифікатора повинна не перевищувати 214 симолів. `),
                sentence(`Літери повинні бути записані лише в нижньому регістрі. `),
                sentence(`Повний ідентифікатор не повинен містити символів, які не дозволені при записі `, link(`URL`, url), ` (оскільки ім'я може бути використане в якості URL). `),
                sentence(`Ідентифікатор не повинен починатись з символів `, js(lt(`.`)), ` та `, js(lt(`_`)), `. `),
                sentence(`Ідентифікатор не повинен містити пропусків на початку, або в кінці. `),
                [
                    sentence(`Ідентифікатор повинен відрізнятись від зарезервованих імен, таких як:`),
                    list(...[
                        sentence(js(lt(`node.js`)), ` та `, js(lt(`io.js`)), `. `),
                        sentence(`Вбудовані модулі NodeJS (`, js(lt(`path`)), `, `, js(lt(`fs`)), ` та інші). `),
                        sentence(`Зарезервовані назви, наприклад `, js(lt(`node_modules`)), ` або `, js(lt(`favicon.ico`)), `. `),
                    ]),
                ],
            ]),
            paragraph(...[
                sentence(`Задля спрощення перевірки імені модуля на коректність існує спеціальний `, link(`пакет npm`, validate_npm), `. `),
                sentence(`З його допомогою можна перевірити чи відповідає ім'я вашого пакету усім необхідним вимогам. `),
            ]),
        ]),
        section(`Пошук`, ...[
            paragraph(...[
                sentence(`Ми вже можемо приблизно уявити які бувають модулі і як записуються їх ідентифікатори. `),
                sentence(`Тепер можна перейти до головної страви - розібратись як же працює функція `, $require, `. `),
                sentence(`Загалом в її роботі можна виділити кілька послідовних етапів, а саме:`),
            ]),
            list(...[
                [
                    sentence(`Пошук джерела коду. `),
                    sentence(`На цьому етапі `, $require, ` визначається з тим, де знаходиться файл, код якого потрібно виконати. `),
                    sentence(`Цей етап складається в основному з аналізу ідентифікатора і пошуку потрібного файлу серед набору каталогів. `),
                ],
                [
                    // [3] пояснити, що тут не мається на увазі контекст виконання
                    sentence(`Створення контексту[3]. `),
                    sentence(`Як ми знаємо, кожен модуль має унікальний котекст зі своїми глобальними змінними. `),
                    sentence(`Головне завдання цього етапу - створити цей контекст і правильно його налаштувати. `),
                ],
                [
                    sentence(`Виконання коду. `),
                    sentence(`Тут `, $require, ` виконує тіло модуля, разом з цим завантажуючи модулі, необхідні для його роботи. `),
                ],
                [
                    sentence(`Кешування. `),
                    sentence(`Виконавши тіло модуля `, $require, ` зберігає його змінну `, module_exports, ` для використання при повторних зверненнях. `),
                    sentence(`Таким чином, в більшості випадків кожен модуль виконується лише раз. `),
                ],
            ]),
            paragraph(...[
                sentence(`Серед цих етапів пошук є одним з найбільш заплутаних. `),
                sentence(`Він сильно залежить від того, який ідентифікатор був переданий в `, $require, `: ідентифікатор вбудованого модуля, відносний шлях чи лише назва модуля. `),
                sentence(`Вбудовані модулі завантажуються одразу ж, без будь якого додаткового пошуку, а тому ми продовжимо розглядати лише випадки з відносним шляхом та назвою. `),
                sentence(`Єдине що варто пам'ятати - це те, що якщо ідентифікатор переданий в `, $require, ` збігається з назвою вбудованого модуля (перелік `, builtinModules, `) - то подальший аналіз і пошук не проводяться. `),
                sentence(`Зокрема це означає те, що навіть якщо назвати власний модуль або пакет таким іменем, то алгоритм просто проігнорує його `, explorer_2, `. `),
            ]),
            explorer_2,
        ]),
        section(`Завантаження з використанням відносного шляху.`, ...[
            paragraph(...[
                sentence(`Як було згадано вище, якщо ідентифікатор модуля починається зі стрічок `, js(lt(`"/"`)), `, `, js(lt(`"./"`)), ` або `, js(lt(`"../"`)), `, то завантаження буде проводитись так, наче ідентифікатор це шлях до модуля відносно того файлу, з якого проводиться виклик `, $require, `. `),
                sentence(`Якщо ж бути точнішим, то можна сказати що завантаження відбувається відносно каталогу, в якому розміщується файл. `),
                sentence(`Шлях до самого файлу зберігається в глобальній змінній `, filename, `, а до файлу - в `, dirname, `. `),
            ]),
            paragraph(...[
                sentence(`Наприклад, якщо виклик відбувається з файлу `, js(lt(`"C:/projects/script.js"`)), `, то `, filename, ` буде рівна `, js(lt(`"C:/projects/script.js"`)), `, а `, dirname, `, відповідно, рівна `, js(lt(`"C:/projects"`)), `. `),
                sentence(`Таким чином, якщо в цьому файлі викликати `, $require, ` і передати в нього шлях `, js(lt(`"./path/to/module"`)), `, то шлях до модуля який потрібно завантажити буде рівний `, js(lt(`"C:/projects/path/to/module"`)), `. `),
            ]),
            paragraph(...[
                sentence(`Маючи повний шлях до модуля, `, $require, ` буде спочатку намагатись завантажити його як файл, а потім як каталог. `),
                sentence(`Якщо розширення не вказане, то на етапі завантаження файлу `, $require, ` буде намагатись встановити його самотужки, перебираючи набір відомих розширень. `),
                // sentence(`Для цього, спочатку функція послідовно перевірить, чи існують за вказаним шляхом файли з наступними розширеннями:`),
                sentence(`Так, якщо ми звертаємось до модуля `, js(lt(`"./memes"`)), `, то алгоритм буде намагатись завантажити наступні файли:`),
            ]),
            list(...[
                sentence(`Файл `, emphasis(`без розширення`), `: `, js(lt(`"./memes"`)), `, інтерпретований як JavaScript. `),
                sentence(`Файл з розширення `, js(lt(`.js`)), `: `, js(lt(`"./memes.js"`)), `, інтерпретований як JavaScript. `),
                sentence(`Файл з розширення `, js(lt(`.json`)), `: `, js(lt(`"./memes.json"`)), `, інтерпретований як `, link(`JSON`, json_doc), `. `),
                sentence(`Файл з розширення `, js(lt(`.node`)), `: `, js(lt(`"./memes.node"`)), `, інтерпретований як `, link(`модуль С++`, cpp_addon), `. `),
            ]),
            paragraph(...[
                sentence(`Важливо розуміти, що `, $require, ` додає розширення лише тоді, коли воно не вказано, а не просто `, figurative(`дописує`), ` його до шляху. `),
                sentence(`Тому, у випадку якщо ми завантажуємо `, js(lt(`"./memes.json"`)), ` - `, $require, ` звернеться саме до нього, а не до файлу `, js(lt(`"./memes"`)), ` без розширення`, note_2, `. `),
                sentence(``),
            ]),
            paragraph(...[
                sentence(`Якщо потрібного файлу не знайдено - `, $require, ` перейде до завантаження каталогу. `),
                sentence(`На цьому етапі функція використовує один особливий файл - `, package_json, `, але ми почнемо з огляду того випадку, коли цей файл відсутній. `),
                sentence(`Отож, якщо в потрібному каталозі немає такого файлу - алгоритм спробує завантажити файл `, index, ` `, explorer_3, `. `),
                sentence(`Майже як і у випадку з завантаженням файлу, тут `, $require, ` буде по черзі перебирати відомі розширення. `),
                sentence(`Єдина відмінність - буде `, emphasis(`пропущений`), ` файл без розширення. `),
            ]),
            explorer_3,
            paragraph(...[
                sentence(`Якщо ж `, package_json, ` на місці - функція інтерпретує його вміст як JSON і звернеться до поля `, main, `. `),
                sentence(`Вміст цього поля - це шлях до файлу який потрібно завантажити, вказаний відносно каталогу. `),
                sentence(`Його бажано, хоча й не обов'язково починати зі стрічки `, js(lt(`"./"`)), ` або `, js(lt(`"../"`)), `. `),
                sentence(`Також важливо, що це саме шлях до файлу, тому посилатись таким чином на інший каталог не вийде. `),
                sentence(`Якщо ж поля, або файлу за вказаним шляхом не існує - то `, $require, ` почне завантажувати файл `, index, `. `),
                sentence(`Якщо ж і його нема - буде кинута помилка. `),
            ]),
            paragraph(...[
                sentence(`Як бачимо, завантажити модуль можна і не знаючи його розширення. `),
                sentence(`Також користувачу абсолютно не потрібно знати лежить за вказаним шляхом файл, чи каталог. `),
                sentence(`Такий підхід може здатись дивним, але його можна використати для заміни файла на каталог, або `, js(lt(`.js`)), ` файла на `, js(lt(`.json`)), ` без необхідності змінювати ідентифікатори всередині `, $require, `. `),
                sentence(`Проте варто бути обережним, адже необачно названі або розміщені в неправильному місці файли можуть призвести до неочікуваної для користувача поведінки. `),
            ]),
        ]),
        section(sentence(`Що означає `, load_self_reference, ` ?`), ...[
            paragraph(...[
                sentence(`В офіційній документації, а саме в `, s.link(`блоці псевдокоду`, require_doc), ` що описує алгоритм роботи `, $require, `, можна знайти цікаву функцію: `, load_self_reference, `. `),
                sentence(`Комусь - а особливо комусь без досвіду роботи з модулями в NodeJS - вона може здатись незрозумілою і на це є вагомі причини. `),
                sentence(`Зараз ми спробуємо краще зрозуміти її, але перед цим зробимо один важливий висновок: якщо хочете зрозуміло і однозначно описати якийсь алгоритм - не вимахуйтесь і опишіть його на JavaScript. `),
            ]),
            paragraph(...[
                sentence(load_self_reference, ` є першим етапом для завантаження модулів, ідентифікатори яких записані в формі імені, а не відносного шляху. `),
                sentence(`Цей етап створений для того, щоб ми могли завантажити наш модуль через власне ім'я всередині нього ж самого. `),
                sentence(`Функція припускає, що файл з якого відбувається виклик `, $require, ` сам є частиною якогось модуля-каталогу. `),
                sentence(`В першу чергу вона шукає місце де знаходиться `, package_json, `, рухаючись вгору по ієрархії каталогів. `),
                sentence(`Якщо їй не вдається знайти такий файл, або якщо у ньому відсутнє поле `, exports_s, ` - функція передає керування далі, до алгоритму завантаження модулів з `, module_paths, ` про який ми поговоримо згодом. `),
            ]),
            paragraph(...[
                sentence(`Якщо ж `, package_json, ` і `, exports_s, ` в ньому присутні - функція також перевіряє поле `, name, `. `),
                sentence(`Це поле визначає назву пакету npm. `),
                sentence(`Якщо вміст цього поля збігається з початком ідентифікатора що був переданий в `, $require, ` - ми на вірному шляху. `),
                sentence(`Розглянемо кілька таких прикладів:`),
            ]),
            list(...[
                [
                    sentence(js(f(`require`), `(`, lt(`"my-module"`), `)`), ` та `, js(lt(`"name"`), ` = `, lt(`"my-module"`)), `. `),
                ],
                [
                    sentence(js(f(`require`), `(`, lt(`"@my-scope/my-module"`), `)`), ` та `, js(lt(`"name"`), ` = `, lt(`"@my-scope/my-module"`)), `. `),
                ],
                [
                    sentence(js(f(`require`), `(`, lt(`"@my-scope/my-module/path/to/sub-module"`), `)`), ` та `, js(lt(`"name"`), ` = `, lt(`"@my-scope/my-module"`)), `. `),
                ],
            ]),
            paragraph(...[
                sentence(`У всіх цих прикладах поле та ідентифікатор збігаються до певного місця. `),
                sentence(`Це означає, що модуль який нам потрібен або і є цим самим модулем, або є його складовою частиною. `),
                sentence(`Так, для випадку `, js(lt(`"@my-scope/my-module/path/to/sub-module"`)), ` нам потрібен саме під-модуль `, js(lt(`path/to/sub-module`)), `, який міститься всередині `, js(lt(`"@my-scope/my-module"`)), `. `),
                sentence(`Тут у гру вступає поле `, exports_s, ` з `, package_json, `, яке визначає які саме під-модулі нашого модуля можна завантажувати ззовні, а які ні. `),
            ]),
            paragraph(...[
                sentence(`Детально про поле `, exports_s, ` можна дізнатись з `, link(`офіційної документації`, es_modules_exports), ` модульів ECMAScript. `),
                sentence(`Для нас важливо те, що воно, на додачу до поля `, main, `, визначає який файл потрібно завантажувати при зверненні до модуля, а також до яких під-модулів можна звертатись. `),
                sentence(`Якщо `, exports_s, ` стрічка, то вона інтерпретується як відносний шлях до файлу. `),
                sentence(`Але, на відміну від поля `, main, `, цей шлях обов'язково повинен починатись з `, js(lt(`"./"`)), `. `),
            ]),
            paragraph(...[
                sentence(`Якщо `, exports_s, ` це об'єкт, то його ключі будуть інтерпретовані як шляхи всередині `, $require, `, а значення - як відносні шляхи до файлів. `),
                sentence(`Так, наприклад, можна визначити модуль `, js(lt(`memes`)), ` з під-модулями `, js(lt(`lol`)), ` та `, js(lt(`kek`)), ` `, explorer_4, `. `),
                sentence(`Для цього `, exports_s, ` повинен бути об'єктом, де ключами будуть стрічки `, js(lt(`"./lol"`)), ` та `, js(lt(`"./kek"`)), `. `),
                sentence(`У цьому випадку стрічка `, js(lt(`"."`)), ` буде визначати файл, який буде завантажений при зверненні безпосередньо до `, js(lt(`memes`)), `. `),
            ]),
            explorer_4,
            paragraph(...[
                sentence(`Важливо, що поле `, exports_s, ` таким чином повністю описує доступні під-модулі. `),
                sentence(`Якщо при зверненні до модуля потрібний під-модуль не буде знайдено - `, $require, ` кине помилку. `),
                sentence(`Якщо ж `, package_json, ` або `, exports_s, ` всередині нього відсутні - алгоритм перейде до наступного етапу: пошуку модуля серед `, module_paths, `. `),
            ]),
        ]),
        section(sentence(`Шляхи `, module_paths, `.`), ...[
            paragraph(...[
                sentence(`Якщо ідентифікатор модуля не збігається з ідентифікатором жодного вбудованого модуля і не є відносним шляхом, `, $require, ` починає пошук потрібного модуля серед набору шляхів `, module_paths, note_3, ` `, code_3, `. `),
                sentence(`Це поле є масивом стрічок - повних шляхів до каталогів, в яких слід шукати модулі. `),
                sentence(`Пошук відбувається послідовно і якщо модуль не знайдено за першим шляхом, алгоритм переходить до наступного. `),
                sentence(`Якщо ж модуль не вдається знайти за жодним зі шляхів - `, $require, ` кидає помилку. `),
            ]),
            code_3,
            paragraph(...[
                sentence(`Набір шляхів `, module_paths, ` складається за певним правилом і сильно залежить від розташування того модуля, в якому відбуваєтсья виклик `, $require, `. `),
                sentence(`Першими у цьому масиві виступатимуть шляхи до каталогів `, node_modules, `. `),
                sentence(`Пошук в такому каталозі буде доданий для того каталогу, в якому розміщений файл з якого проводиться виклик `, $require, `, а також для усіх батьківських каталогів цього каталогу. `),
                sentence(`Іншими словами, спочатку `, $require, ` буде шукати потрібний модуль всередині `, node_modules, ` розташованої біля файлу, потім в `, node_modules, ` батьківського каталогу, потім в батьківському каталозі того і так далі аж до кореня файлової системи. `),
                sentence(`Наприклад, якщо `, $require, ` викликається з файлу `, js(lt(`C:/path/to/file.js`)), `, то набір шляхів `, module_paths, ` буде `, emphasis(`починатись`), ` наступною послідовністю:`),
            ]),
            list(
                js(lt(`C:/path/to/node_modules`)),
                js(lt(`C:/path/node_modules`)),
                js(lt(`C:/node_modules`)),
            ),
            paragraph(...[
                sentence(`Далі, за наявності `, link(`змінної оточення`, global_folders_doc), ` `, js(lt(`NODE_PATH`)), `, в цей масив будуть включені вказані в ній шляхи. `),
                sentence(`Після них також будуть додані шляхи до спеціальних каталогів `, js(lt(`.node_modules`)), ` та `, js(lt(`.node_libraries`)), `, котрі, `, emphasis(`наголошую`), `, починаються з крапки. `),
                sentence(`Ці каталоги знаходяться в домашньому каталозі користувача. `),
                sentence(`Так, для користувача `, js(lt(`Hopeless Programmer`)), `, наприклад, ці шляхи будуть чимось на зразок `, js(lt(`C:/Users/Hopeless Programmer/.node_modules`)), ` та `, js(lt(`C:/Users/Hopeless Programmer/.node_libraries`)), ` відповідно. `),
                sentence(`Офіційна документація налогошує на тому, що ці шляхи підтримуються з історичних причин, а усі потрібні модулі наполегливо радять зберігати в локальних каталогах `, node_modules, `. `),
            ]),
        ]),
        section(sentence(`Пошук в `, module_paths, `.`), ...[
            paragraph(...[
                sentence(`Пошук в `, module_paths, ` відбувається за правилами дуже схожими до тих, що використовуються в `, load_self_reference, `. `),
                sentence(`Набір шляхів в `, module_paths, ` перебирається послідовно і в кожному з них проводиться пошук потрібного модуля. `),
                sentence(`Спочатку, як і на етапі `, load_self_reference, `, `, $require, ` намагається інтерпретувати ідентифікатор як комбінацію області, імені та шляху до під-модуя. `),
                sentence(`Якщо це вдається, то алгоритм шукає за шляхом з `, module_paths, ` каталог відповідного модуля з файлом `, package_json, `. `),
            ]),
            paragraph(...[
                sentence(`Наприклад, для `, js(f(`require`), `(`, lt(`"@my-scope/my-module"`), `)`), ` і елементу `, module_paths, ` зі значенням `, js(lt(`"C:/projects/my-project/node_modules"`)), ` алгоритм буде шукати файл за шляхом `, js(lt(`"C:/projects/my-project/node_modules/@my-scope/my-module/package.json"`)), `. `),
                sentence(`Як можна побачити, на відміну від `, load_self_reference, ` поле `, name, ` не відіграє тут жодної ролі. `),
                sentence(`Натомість важливий шлях до модуля, зокрема імена каталогів з областю та файлом `, package_json, `. `),
                sentence(`Тому, якщо ці назви будуть відрізнятись від тих що вказані в полі `, name, ` - можна отримати неочікувану поведінку при завантаженні модуля зсередини і ззовні нього самого. `),
            ]),
            paragraph(...[
                sentence(`...тут потрібно дописати про дічь з PACKAGE_EXPORTS_TARGET_RESOLVE...`),
            ]),
            paragraph(...[
                sentence(``),
            ]),
            paragraph(...[
                sentence(`На останок варто згадати про те, що існує легкий спосіб встановити шлях до файлу який буде завантажений `, $require, `. `),
                sentence(`Сама `, $require, ` має `, link(`поле`, require_resolve_doc), ` `, require_resolve, ` яке є функцією. `),
                sentence(`Ця функція приймає ідентифікатор модуля та повертає шлях до файлу який завантажила б `, $require, `, якби була викликана з таким ідентифікатором. `),
                sentence(`Також існує `, link(`функція`, require_resolve_paths_doc), ` `, require_resolve_paths, `, яка також приймає ідентифікатор і повертає набір шляхів у яких `, $require, ` проводила б пошук для даного ідентифікатора. `),
                sentence(`Ці функції рідко знаходять застосування, але можуть бути дуже корисними коли потрібно зрозуміти як працює сама `, $require, ` або ж коли потрібно відтворити її роботу. `),
            ]),
        ]),
        section(`Створення контексту модуля.`, ...[
            paragraph(...[
                sentence(`Маючи шлях до файлу, `, $require, ` завантажує його як стрічку з кодуванням `, link(`utf-8`, utf8), `. `),
                sentence(`За наявності, з файлу видаляється `, link(`шебанг`, shebang), `. `),
                sentence(`Тепер, коли код модуля завантажено, потрібно виконати його з власними глобальними змінними. `),
                sentence(`Усього їх п'ять: `, $exports_v, `, `, $require, `, `, $module, `, `, filename, ` та `, dirname, `. `),
                sentence(`Для цього, до стрічки завантаженої з файлу додається `, figurative(`обгортка`), `, що містить усі згадані вище змінні в якості аргументів і перетворює стрічку на код функції `, code_4, `. `),
            ]),
            code_4,
            paragraph(...[
                sentence(`Таким чином модуль це по суті одна велика функція. `),
                sentence(`Він виконується як функція, приймає аргументи як функція, а також містить службові слова `, $this, `, `, $arguments, `, `, $return, ` та `, new_target, `. `),
                sentence(`Це пояснює той факт, що ми не можемо перекрити змінні на кшталт `, $require, ` або `, filename, `. `),
                sentence(`Вони, будучи аргументами, вже оголошені і можуть бути перекриті лише в окремому блоці. `),
                sentence(`Ці нюнаси, як, наприклад, можливість передчасного закінчення виконання тіла модуля за допомогою `, $return, `, рідко експлуатують, але знати про них корисно. `),
                sentence(`На майбутнє достатньо пам'ятати лише про те, що тіла модулів поводяться як звичайні функції. `),
                sentence(`А тому, у разі виникнення питань, можна просто уявити що б сталось якби на місці модуля була відповідна функція. `),
            ]),
            paragraph(...[
                sentence(`Отримана стрічка перетворюється у функцію `, link(`за допомогою`, vm_runInThisContext_doc), ` `, vm_runInThisContext, `. `),
                sentence(`На відміну від `, $eval, ` це не дає коду можливість звернутись до локальних змінних, що забезпечує захист від можливих конфліктів з тілом функції. `),
                sentence(`Я не знайшов про це згадок в `, link(`офіційній документації`, nodejs_modules), `, проте виходячи з `, link(`оригінального коду`, require_source), ` під час виклику тіла модуля в якості `, $this, ` передається `, module_exports, `. `),
                sentence(`Це означає, що потенційно можливо використовувати `, $this, ` для експорту `, code_5, `, хоча це може не сподобатись деяким розробникам або середовищам. `),
            ]),
            code_5,
        ]),
        section(`Виконання модуля.`, ...[
            paragraph(...[
                sentence(`Перед виконанням коду модуля `, $require, ` заповнює відповідний йому об'єкт `, $module, ` необхідними полями. `),
                sentence(`Окрім вже розглянутих `, module_exports, ` та `, module_paths, ` це також:`),
            ]),
            list(...[
                [
                    sentence(module_id, ` - унікальний ідентифікатор модуля. `),
                ],
                [
                    sentence(module_filename, ` - шлях до файлу з кодом модуля. `),
                ],
                [
                    sentence(module_loaded, ` - прапорець, який вказує чи завершено завантаження модуля. `),
                ],
                [
                    sentence(module_parent, ` - посилання на модуль, який вперше завантажив відповідний модуль. `),
                ],
                [
                    sentence(module_children, ` -масив посилань на модулі які були вперше завантажені відповідним модулем. `),
                ],
            ]),
            paragraph(...[
                sentence(`Поле `, module_id, ` слугує унікальним ідентифікатором модуля і в NodeJS, зазвичай, є повним шляхом до файлу з його кодом. `),
                sentence(`В особливих випадках, наприклад, всередині `, link(`REPL`, repl), `, воно може бути стрічкою `, js(lt(`"<repl>"`)), `, а не шляхом. `),
                sentence(`Також, це моле може бути стрічкою `, js(lt(`"."`)), ` якщо файл виконується через команду `, s.code(``, `npm start`), `. `),
            ]),
            paragraph(...[
                sentence(`Варто зауважити, що використання повного шляху в якості ідентифікатора в певній мірі є особливістю саме NodeJS. `),
                sentence(`Тому у випадках коли потрібен саме шлях до файлу є сенс працювати з полем `, module_filename, ` `),
                sentence(`За аналогією з `, module_id, ` в частині випадків шлях до файлу просто не існує і це поле рівне `, $null, `. `),
            ]),
            paragraph(...[
                sentence(`Останнє важливе для нас поле - це `, module_loaded, `. `),
                sentence(`Перед виконанням коду воно рівне `, js(lt(`false`)), `, а після набуває значення `, js(lt(`true`)), `. `),
                sentence(`За допомогою нього ми можемо, наприклад, визначити всередині функції чи був код модуля виконаний до кінця, чи він все ще виконується `, explorer_5, `. `),
            ]),
            explorer_5,
            paragraph(...[
                sentence(`Також, окрім `, $module, ` на цьому етапі створюються та передаються в функцію й інші змінні. `),
                sentence(`Так, в якості `, filename, ` в функцію передається `, module_filename, ` а в якості `, dirname, ` передається щось на кшталт `, js(f(`require`), `(`, lt(`"path"`), `).`, f(`dirname`), `(`, v(`module`), `.`, p(`filename`), `)`), `. `),
                sentence(`Функція `, $require, ` для даного модуля теж створюється тут. `),
                sentence(`Взагалі, ми і самі можемо створити таку за допомогою `, link(`спеціальної функції`, createRequire_doc), ` `, module_createRequire, `. `),
                sentence(`В якості аргументу вона приймає шлях, який використовується в якості опірного для завантаження локальних файлів та побудови набору `, module_paths, `. `),
                sentence(`І хоч під капотом самого `, $require, ` використовується дещо інша функція, сама `, createRequire, ` може бути корисною якщо потрібно завантажувати модулі так, наче `, $require, ` викликається з зовсім іншого місця. `),
                sentence(``),
            ]),
            paragraph(...[
                sentence(`Підсумовуючи можна сказати, що виконання модуля це ніщо інше як виклик функції. `),
                sentence(`У цьому процесі немає магії, він наповнений лише звичайними операціями JavaScript, на кшталт присвоювання змінних та викликів інших функцій. `),
                sentence(`Трохи згодом ми ще торкнемось особливостей цього процесу і розглянемо деякі поширені ситуації. `),
            ]),
        ]),
        section(`Кешування.`, ...[
            paragraph(...[
                sentence(`На дуже поверхневому рівні можна вважати що концепція модулів базується на використанні `, link(`шаблона одинак`, singleton), note_4, `. `),
                sentence(`Це означає, що кожен модуль присутній у програмі в єдиному екземплярі і, відповідно, його код повинен виконуватись лише раз. `),
                sentence(`Такий підхід має як переваги, так і недоліки, але ми зосередимось в першу чергу на особливостях важливих при роботі з `, $require, `. `),
            ]),
            paragraph(...[
                sentence(`Аби запобігти повторному виконанню коду модулі кешуються. `),
                sentence(`Після того як встановлений повний шлях до модуля, а відтак і його `, module_id, `, у гру вступає спеціальна змінна `, require_cache, `. `),
                sentence(`Вона посилається на об'єкт-реєстр єдиний для усіх функцій `, $require, `. `),
                sentence(`Його ключами виступають `, module_id, `, а значеннями - відповідні об'єкти `, $module, `. `),
                sentence(`Якщо потрібний модуль вже міститься в `, require_cache, ` то функція вже не буде завантажувати вміст файлу і виконувати його, а просто поверне існуючий `, module_exports, `. `),
                sentence(`Якщо ж модуль завантажується вперше, то після (НІ, НЕ ПІСЛЯ! ДО!!!) виконання відповідний йому об'єкт `, $module, ` буде поміщений `, require_cache, `. `),
            ]),
            paragraph(...[
                sentence(`За потреби `, require_cache, ` можна змінювати, зокрема видаляти або додавати потрібні поля. `),
                sentence(`Якщо модуль був видалений з кешу, то при наступному зверненні до нього через `, $require, ` він буде виконаний знову `, explorer_6, `. `),
                sentence(`Якщо ж для існуючого (або навіть не існуючого) модуля замінити відповідне значення, то `, $require, ` при наступних викликах буде повертати його. `),
                sentence(`Згідно з `, link(`офіційною документацією`, require_cache_doc), ` єдиним винятком є вбудовані модулі: їх можна встановити до завантаження, але не можна змусити їх завантажуватись повторно. `),
            ]),
            explorer_6,
            paragraph(...[
                sentence(`...тут про те, що до закінчення завантажння модуля буде повертатись його поточне `, module_exports, `...`),
            ]),
        ]),
        section(`Проблеми: кешування.`, ...[
            paragraph(...[
                sentence(`Дуже важливо черговий раз наголосити на тому, що `, $require, ` не робить жодної магії чи чудес. `),
                sentence(`На мою думку саме приписування містичних властивостей функціям JavaScript і нерозуміння або неповне розуміння принципів його роботи і меж його можливостей веде до великої кількості помилок. `),
                sentence(`Зокрема це стосується і помилок, пов'язаних з використанням `, require_cache, `. `),
            ]),
            paragraph(...[
                sentence(`Наприклад, важливо прояснити що саме лише видалення модуля з `, require_cache, ` не змусить усіх його користувачів повторно його завантажити. `),
                sentence(`Ті модулі які вже завантажили модуль будуть зберігати посилання на попередній, вже не актуальний об'єкт `, module_exports, ` `, explorer_7, `. `),
                sentence(`Після повторного завантаження модуля буде створений новий об'єкт, а отримати його зможуть лише ті модулі, які повторно викличуть `, $require, `. `),
                sentence(`Це не перетворює `, require_cache, ` на цілковито безнадійний інструмент, але вимагає повного розуміння його внутрішніх механізмів при роботі з ним. `),
            ]),
            explorer_7,
            paragraph(...[
                sentence(`З цією особливістю можна боротись `, emphasis(`лише до певної міри`), `, використовуючи такі поля як `, module_children, ` та `, module_parent, `. `),
                sentence(`З їх допомогою можна встановити ті модулі, які `, emphasis(`першими`), ` завантажували потрібний модуль. `),
                sentence(`Маючи цю інформацію можна видаляти з кешу їх, потім їхніх користувачів, і так аж доки не буде досягнутий рівень де видаляти модулі вже не потрібно. `),
                sentence(`Але такий підхід допоможе лише в обмеженій кількості випадків, а механізмів щоб дізнатись усіх користувачів модуля на даний момент немає. `),
            ]),
        ]),
        section(`Проблеми: порядок завантаження та циклічні залежності.`, ...[
            paragraph(...[
                sentence(`Може статись так, що сильно зв'язані частини програми розкидані по різних файлах. `),
                sentence(`В таких ситуаціях може виникнути одна дуже специфічна, важка до зневадження але легка до діагностування проблема: `, $require, ` повертає порожній об'єкт. `),
                sentence(`Це не причина відмовлятись від розподілу по файлах, а лише причина знати принципи роботи `, $require, ` і JavaScript вцілому. `),
                sentence(`Є один надійний рецепт як це виправити, про що і піде мова далі. `),
            ]),
            paragraph(...[
                sentence(`Ситуація яку ми розглядаємо відбувається тоді, коли два або більше файли завантажують один одного через `, $require, ` або опосередковано. `),
                sentence(`Наприклад, у нас є дві функції `, ping, ` та `, pong, ` розташовані в окремих файлах `, explorer_8, `. `),
                sentence(`Якщо кожна з них буде завантажувати іншу на початку файлу, то в залежності від того хто буде завантажувати першим, один з викликів `, $require, ` поверне порожній об'єкт. `),
                sentence(`Але чому?`),
            ]),
            explorer_8,
            paragraph(...[
                sentence(`Припустимо що якийсь зовнішній модуль завантажує одну або обидві наші функції. `),
                sentence(`Котра з них буде першою не принципово, тому давайте будемо вважати що це `, ping, `. `),
                sentence(`Коли зовнішній модуль викличе `, require_ping , `, то модуль `, ping_s, ` ще не буде завантажений і почнеться його виконання. `),
                sentence(`В процесі цього виконання він і сам викличе `, $require, `, причому це буде `, require_pong , `. `),
            ]),
            paragraph(...[
                sentence(`А зараз найцікавіше: якщо тепер, коли модуль `, ping_s, ` все ще `, emphasis(`не`), ` завершив свого виконання, хтось спробує завантажити його через `, require_ping , `, то цей виклик `, $require, ` поверне поточне значення `, module_exports, ` для модуля `, ping_s, `, тобто порожній об'єкт. `),
                sentence(`Так от, в процесі свого виконання `, ping_s, ` завантажить `, pong_s, `, а той, в свою чергу, в першу чергу викличе `, require_ping , `. `),
                sentence(`Цей виклик, як ми вже з'ясували, не кине помилку, а поверне порожній об'єкт який буде збережено в змінній `, ping, `. `),
                sentence(`Далі, коли `, pong_s, ` завершить своє виконання відпрацює і виклик `, require_pong , ` всередині `, ping_s, `. `),
            ]),
            paragraph(...[
                sentence(`Вже після цього, цей і наступний виклики `, require_ping , ` будуть повертати функцію, але буде вже пізно. `),
                sentence(`На етапі виконання, а саме в момент виклику `, ping, ` всередині `, pong, ` ми отримаємо помилку. `),
                sentence(`Вона буде пов'язана з тим, що `, $require, ` на попередньому етапі повернула порожній об'єкт, хоча ми очікували на функцію. `),
                sentence(`Кінець історії. `),
            ]),
            paragraph(...[
                sentence(`Такої проблеми `, emphasis(`можна`), ` уникнути, а головне - досить просто. `),
                sentence(`Достатньо лише розмістити виклик `, require_pong , ` після експорту, щоб `, ping, ` почала завантажувати `, pong, ` лише після того як сама експортувала себе `, explorer_9, `. `),
                sentence(`Це може здатись дивним, адже виглядає наче для оголошення функції `, ping, ` нам вже потрібен `, pong, `, але це не так. `),
                sentence(`Цю особливість мови JavaScript ми можем трактувати так, наче ще на початку області видимості (в даному випадку файлу) всі потрібні змінні, у тому числі і константи вже оголошені, але не ініціалізовані. `),
                sentence(`А тому ми можемо оголосити функцію, яка буде посилатись на змінну, а вже сама змінна набуде свого значення після виклику `, require_pong , `. `),
            ]),
            explorer_9,
            paragraph(...[
                sentence(`За таких умов всі модулі зможуть правильно експортувати свій вміст ще до того як почнуть завантажувати інших, що й усуне проблему. `),
                sentence(`Цей підхід - виклик `, $require, ` лише після експорту - можна використовувати майже завжди. `),
                sentence(`Виключеннями є ті випадки, у яких ми зв'язані спеціальними конструкціями яким потрібен ідентифікатор `, figurative(`тут і зараз`), `. `),
                sentence(`Наприклад, це може бути службове слово `, $extends, `. `),
                sentence(`В такому разі потрібний модуль можна завантажити ще до експорту, а вже після нього завантажити решту модулів `, code_6, `. `),
                sentence(`Оскільки перехресне наслідування в JavaScript неможливе, то не виникне і ситуації коли обидва класи хочуть завантажити один-одного до експорту. `),
                sentence(`Можливо існують й інші випадки, не пов'язані з наслідуванням, але я з такими не зустрічався. `),
            ]),
            code_6,
            paragraph(...[
                sentence(``),
                sentence(``),
            ]),
        ]),
    ),
});
