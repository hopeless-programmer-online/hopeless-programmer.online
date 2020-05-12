const hosting = require(`../hosting`);
const documenting = require(`../documenting`);


const h = hosting;
const s = documenting.shortcuts;


// const code_1 = require(`./article-4/code-1`);
// const code_2 = require(`./article-4/code-2`);
// const code_3 = require(`./article-4/code-3`);
// const code_4 = require(`./article-4/code-4`);
// const code_5 = require(`./article-4/code-5`);
// const code_6 = require(`./article-4/code-6`);
// const code_7 = require(`./article-4/code-7`);
// const code_8 = require(`./article-4/code-8`);
// const code_9 = require(`./article-4/code-9`);
// const code_10 = require(`./article-4/code-10`);
// const code_11 = require(`./article-4/code-11`);
// const code_12 = require(`./article-4/code-12`);
// const code_13 = require(`./article-4/code-13`);
// const code_14 = require(`./article-4/code-14`);
// const code_15 = require(`./article-4/code-15`);
// const code_16 = require(`./article-4/code-16`);

// const note_1    = s.note(`Насправді мені просто було ліньки шукати матеріал по темі. `);

const abstract_class_wiki = `https://uk.wikipedia.org/wiki/%D0%90%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BB%D0%B0%D1%81`;
const covariance_wiki = `https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B2%D0%B0%D1%80%D1%96%D0%B0%D0%BD%D1%82%D0%BD%D1%96%D1%81%D1%82%D1%8C_%D1%96_%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B2%D0%B0%D1%80%D1%96%D0%B0%D0%BD%D1%82%D0%BD%D1%96%D1%81%D1%82%D1%8C_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`;
const smart_pointers_wiki = `https://uk.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B7%D1%83%D0%BC%D0%BD%D1%96_%D0%B2%D0%BA%D0%B0%D0%B7%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8`;
const factory_method_wiki = `https://uk.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`;
const virtual_method_wiki = `https://uk.wikipedia.org/wiki/%D0%92%D1%96%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4`;


// const std_shared_ptr             = code(`C++`, code.line(code.na(`std`), `::`, code.ca(`shared_ptr`)));
//
// const Baker                      = code(`C++`, code.line(code.ca(`Baker`)));
// const Bake                       = code(`C++`, code.line(code.fa(`Bake`), `()`));
// const Pie                        = code(`C++`, code.line(code.ca(`Pie`)));
// const PieP                       = code(`C++`, code.line(code.ca(`Pie`), `*`));
// const CinnamonBaker              = code(`C++`, code.line(code.ca(`CinnamonBaker`)));
// const CinnamonBaker_Bake         = code(`C++`, code.line(code.ca(`CinnamonBaker`), `::`, code.fa(`Bake`)));
// const CinnamonPie                = code(`C++`, code.line(code.ca(`CinnamonPie`)));
// const CinnamonPieP               = code(`C++`, code.line(code.ca(`CinnamonPie`), `*`));
//
// const std_shared_ptr_Pie         = code(`C++`, code.line(code.na(`std`), `::`, code.ca(`shared_ptr`), `<`, code.ca(`Pie`), `>`));
// const std_shared_ptr_CinnamonPie = code(`C++`, code.line(code.na(`std`), `::`, code.ca(`shared_ptr`), `<`, code.ca(`CinnamonPie`), `>`));


exports = module.exports = new h.DocumentResource({
    Document : s.document([ `Мистецтво війни з С++. `, `Перекриття віртуальних методів. ` ],
        {
            Date : new Date(`2019-04-01T00:00:00.000Z`),
        },
        s.section(``,
            s.paragraph(
                s.sentence(`Не завжди недоліки мови можна побачити неозброєним оком. `),
                s.sentence(`Деякі з них проявляються лише при вирішенні дуже специфічних завдань. `),
                s.sentence(`Про існування цього я не знав аж доки кілька років тому не вирішив почати писати `, s.figurative(`правильний код`), `. `),
            ),
            s.paragraph(
                s.sentence(`Я вирішував банальну задачу але з використанням популярних і часто рекомендованих підходів. `),
                s.sentence(`Серед них були `, /*negation(`інтерфейси`),*/ ` чисті `, s.link(`абстрактні класи`, abstract_class_wiki), `, `, s.link(`коваріантність`, covariance_wiki), `, `, s.link(`розумні вказівники`, smart_pointers_wiki), ` та `, s.link(`фабричний метод`, factory_method_wiki), `. `),
                s.sentence(`І можливо все було б добре, якби я не спробував застосувати всі підходи одночасно. `),
                s.sentence(`У підсумку мені таки вдалось змусити все працювати, але не без велосипедів та милиць. `),
                s.sentence(`І виною всьому був той факт, що в `, s.link(`С++`, `https://uk.wikipedia.org/wiki/C%2B%2B`), ` неможливо перекрити `, s.link(`віртуальний метод`, virtual_method_wiki), `. `),
                s.sentence(`Вам напевно цікаво як все це пов'язано? `),
            ),
        ),
        /*article.section(`Мета?`,
            paragraph(
                sentence(`Розглянемо шаблон проектування `, link(`фабричний метод`, `https://uk.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`), `. `),
                sentence(`Його ідея полягає в тому, що ми делегуємо деякому об'єкту - фабриці - створення інших об'єктів (див. `, reference(require(`./code_1.js`)), `). `),
                sentence(`При цьому і продукт який повертає фабрика, і метод його створення є поліморфними. `),
                sentence(`Такий підхід дозволяє розширювати продукт та змінювати алгоритм його попередньої обробки, не втручаючись в код який цей продукт використовує (див. `, reference(require(`./code_2.js`)), `). `),
            ),
            [
                require(`./code_1.js`),
                require(`./code_2.js`),
            ],
            paragraph(
                sentence(`Шаблон фабричний метод є дуже популярним, оскільки він дає змогу системі `, link(`розширюватись`, `https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF_%D0%B2%D1%96%D0%B4%D0%BA%D1%80%D0%B8%D1%82%D0%BE%D1%81%D1%82%D1%96/%D0%B7%D0%B0%D0%BA%D1%80%D0%B8%D1%82%D0%BE%D1%81%D1%82%D1%96`), ` і робить користувачів залежними не від реалізацій, а `, link(`від абстракцій`, `https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF_%D1%96%D0%BD%D0%B2%D0%B5%D1%80%D1%81%D1%96%D1%97_%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9`), `. `),
                sentence(`Проте реалізація цього шаблону в С++ може зіштовхнутись з проблемами. `),
                sentence(`Зокрема, фабричний метод може виявитись несумісним з іншими цікавими підходами. `),
                sentence(`Щоб показати це давайте спробуємо додати до нього коваріантність та розумні вказівники. `),
            ),
        ),
        article.section(`Пироги!`,
            [
                illustration([ `Ірисово-корицевий пиріг. `, `З любов'ю від Торіель. ` ], picture(`./../../media/images/butterscotch_cinnamon_pie.png`)),
            ],
            paragraph(
                sentence(`В якості прикладу ми розглянемо кондитерські вироби. `),
                sentence(`Зокрема, пироги. `),
                sentence(`Нам потрібен пекар який здатен їх пекти (див. `, reference(require(`./code_3.js`)), `). `),
                sentence(`Причому пекарі та пироги розділені на два конкуруючі табори: пекарі які печуть пироги з корицею (див. `, reference(require(`./code_4.js`)), `) та пекарі які печуть пироги з ірисом (див. `, reference(require(`./code_5.js`)), `). `),
                sentence(`В даному випадку пекар виступає фабрикою, а пиріг - продуктом цієї фабрики. `),
            ),
            [
                require(`./code_3.js`),
                require(`./code_4.js`),
                require(`./code_5.js`),
            ],
        ),
        article.section(`Час покращувати код!`,
            paragraph(
                sentence(`Можна звернути увагу на те, що метод `, CinnamonBaker_Bake, ` завжди повертає екземпляр класу `, CinnamonPie, `. `),
                sentence(`Це важливо, адже можуть існувати користувачі які працює з класом `, CinnamonBaker, ` безпосередньо`, note_1, `. `),
                sentence(`В такому випадку вони могли б працювати з класом `, CinnamonPie, ` замість `, Pie, `. `),
                sentence(`Але через те що `, CinnamonBaker_Bake, ` повертає `, PieP, ` а не `, CinnamonPieP, ` їм доведеться виконувати зайве приведення, та ще й вручну (див. `, reference(require(`./code_6.js`)), `). `),
            ),
            paragraph(
                sentence(`Аби запобігти цьому ми можемо використати той факт що класи `, Pie, ` та `, CinnamonPie, ` `, link(`коваріанті`, `https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B2%D0%B0%D1%80%D1%96%D0%B0%D0%BD%D1%82%D0%BD%D1%96%D1%81%D1%82%D1%8C_%D1%96_%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B2%D0%B0%D1%80%D1%96%D0%B0%D0%BD%D1%82%D0%BD%D1%96%D1%81%D1%82%D1%8C_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`), `. `),
                sentence(`Це дозволяє нам замінити тип результату методу `, CinnamonBaker_Bake, ` при `, link(`заміщенні`, `https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D1%96%D1%89%D0%B5%D0%BD%D0%BD%D1%8F_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%83`), ` та повертати `, CinnamonPieP, ` замість `, PieP, ` (див. `, reference(require(`./code_7.js`)), `). `),
                sentence(`Аналогічно можна вчинити і з `, figurative(`ірисовими`), ` класами. `),
            ),
            [
                require(`./code_6.js`),
                require(`./code_7.js`),
            ],
        ),
        article.section(`Розумні вказівники?`,
            paragraph(
                sentence(`Але є ще дещо що ми можемо `, figurative(`покращити`), `. `),
                sentence(`Працювати з `, figurative(`сирими`), ` вказівниками не надто приємно, оскільки це спонукає до ручного керування пам'яттю. `),
                sentence(`На щастя саме з цих міркувань в С++ були додані `, link(`розумні вказівники`, `https://uk.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B7%D1%83%D0%BC%D0%BD%D1%96_%D0%B2%D0%BA%D0%B0%D0%B7%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8`), `, які представлені в тому числі і шаблонним класом `, std_shared_ptr, `. `),
            ),
            paragraph(
                sentence(`Було б просто чудово якби ми могли усього лише замінити `, figurative(`зірочки`), ` на `, std_shared_ptr, ` і не докладати зайвих зусиль. `),
                sentence(`Але С++ не дозволить зробити це так просто (див. `, reference(require(`./code_8.js`)), ` та `, reference(require(`./code_9.js`)), `). `),
                sentence(`З інтерфейсом - абстрактними класами `, Pie, ` та `, Baker, ` - жодних проблем, на нього подібна заміна ніяк не вплине. `),
                sentence(`А от реалізація зіштовхнеться з труднощами... `),
            ),
            [
                require(`./code_8.js`),
                require(`./code_9.js`),
            ],
            paragraph(
                sentence(`Справа в тому що класи `, std_shared_ptr_Pie, ` та `, std_shared_ptr_CinnamonPie, ` не є коваріантними. `),
                sentence(`Це природно, адже вони навіть не зв'язані ієрархією. `),
                sentence(`Такий зв'язок мають лише аргументи цих шаблонів, що, в принципі, погоду не змінює. `),
                sentence(`Привести шаблони до такої ж ієрархії теж не варіант`, note_2, `... що ж робити? `),
            ),
            paragraph(
                sentence(`Можна було б провернути хитрий трюк (див. `, reference(require(`./code_10.js`)), `). `),
                sentence(`По-перше, потрібно замістити віртуальний метод `, Bake, ` з класу `, Baker, `, тобто реалізувати його. `),
                sentence(`По-друге, треба оголосити в класі `, CinnamonBaker, ` новий метод і перекрити попередній, той що оголошено в базовому класі `, Baker, `. `),
                sentence(`Цей новий метод повертатиме `, std_shared_ptr_CinnamonPie, ` і може взагалі бути не віртуальним. `),
            ),
            [
                require(`./code_10.js`),
            ],
            paragraph(
                sentence(`Таким чином ми могли б вбити двох зайців одним пострілом (див. `, reference(require(`./code_11.js`)), `)! `),
                sentence(`Користувач, що буде працювати з `, CinnamonBaker, ` через `, Baker, ` буде звертатись до заміщеного методу `, Bake, `, який повертає `, std_shared_ptr_Pie, `. `),
                sentence(`Якщо ж працювати з об'єктом через основний клас - `, CinnamonBaker, ` - ми будемо звертатись до перекритого методу `, Bake, ` і отримувати `, std_shared_ptr_CinnamonPie, `. `),
            ),
            [
                require(`./code_11.js`),
            ],
        ),
        article.section(`Зруйновані надії, розбиті серця...`,
            paragraph(
                sentence(`Але в С++ неможливо зробити подібний трюк. `),
                sentence(`Вся справа в тому, що ми не можемо перекрити віртуальний метод. `),
                sentence(`Будь які спроби такого перекриття будуть сприйматись компілятором як намагання замістити віртуальний метод. `),
                sentence(`Службових слів для вирішення подібних неоднозначностей немає. `),
            ),
            paragraph(
                sentence(`І це проблема. `),
                sentence(`Окрім цього, такий стан справ не дуже виправданий. `),
                sentence(`Наприклад, в мові програмування `, link(`C#`, `https://uk.wikipedia.org/wiki/C_Sharp`), ` подібної проблеми не існує. `),
                sentence(`Ми вільні як заміщувати віртуальні методи, так і перекривати їх. `),
                sentence(`Єдиний недолік - не вийде зробити це одночасно, в тілі одного класу`, note_3, ` (див. `, reference(require(`./code_12.js`)), `). `),
            ),
            [
                require(`./code_12.js`),
            ],
            paragraph(
                sentence(`Цікаво, що заважало реалізувати подібне в С++? `),
                sentence(`Як на мене, то мові явно не вистачає службового слова яке б вказувало що даний віртуальний метод потрібно перекрити а не замістити. `),
                sentence(`Можливо таким службовим словом міг би стати `, code(`C++`, code.line(code.nw(`overlap`, `%special-1%`))), ` (див. `, reference(require(`./code_13.js`)), `). `),
            ),
            [
                require(`./code_13.js`),
            ],
        ),
        article.section(`Милиці та ве́лики!`,
            paragraph(
                sentence(`Оскільки в С++ не передбачено штатних засобів для вирішення даної задачі - доведеться вдатись до винахідництва. `),
                sentence(`Обійти цей недолік можна по різному, але я приведу тут лише два класичних підходи. `),
            ),
            paragraph(
                sentence(`Перша стратегія банальна і проста - ми просто дамо другому методу інше ім'я. `),
                sentence(`Так, це не дуже гарно, але принаймні це працює. `),
                sentence(`Якщо ми маємо можливість змінювати базовий клас то є сенс обізвати методи відповідно до назви класів які вони повертають (див. `, reference(require(`./code_14.js`)), `). `),
            ),
            [
                require(`./code_14.js`),
            ],
            paragraph(
                sentence(`Але є і інша стратегія, причому вона дозволяє зберегти однакові назви публічних методів. `),
                sentence(`Оскільки віртуальні методи перекривати не можна - ми будемо перекривати звичайні. `),
                sentence(`Але щоб забезпечити поліморфізм ми введемо додатковий віртуальний метод який і буде надавати змогу змінити поведінку в похідних класах (див. `, reference(require(`./code_15.js`)), `). `),
                sentence(`В даному випадку метод `, Bake, ` не віртуальний, його можна перекрити. `),
                sentence(`Але доки його викликають через посилання на базовий клас `, Baker, ` він завжди буде повертати `, std_shared_ptr_Pie, `. `),
            ),
            [
                require(`./code_15.js`),
            ],
            paragraph(
                sentence(`При реалізації похідного класу нам необхідно замістити `, code(`C++`, code.line(code.fa(`BakePie`), `()`)), `. `),
                sentence(`Тут ми зможемо проводити ручне приведення типів, перетворювати `, std_shared_ptr_CinnamonPie, ` в `, std_shared_ptr_Pie, `. `),
                sentence(`Але з іншого боку у нас зберігається можливість перекрити `, Bake, ` і повертати саме той клас, який є актуальним при роботі з `, CinnamonBaker, ` (див. `, reference(require(`./code_16.js`)), `). `),
            ),
            [
                require(`./code_16.js`),
            ],
        ),
        article.section(`Підсумки`,
            paragraph(
                sentence(`Остання реалізація виглядає трохи дивною, вивернутою назовні. `),
                sentence(`Це і справді так, адже віртуальним довелось зробити зовсім інший метод. `),
                sentence(`Але принаймні вона дозволяє забезпечити однакові назви для публічних методів. `),
            ),
            paragraph(
                sentence(`Це сумно що в наші дні доводиться вдаватись до подібних трюків. `),
                sentence(`Але якщо дуже хочеться працювати з С++ і разом з цим використовувати популярні підходи до проектування, то, схоже, такі хитрощі неминучі. `),
                sentence(`Залишається лише сподіватись на краще :с `),
            ),
        ),*/
    ),
});
