const hosting = require(`../hosting`);
const documenting = require(`../documenting`);


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    sentence,
    note,
    list,
    figurative,
    link,
    lexeme,
    kw,
    cpp,
    c,
} = s;


const code_1 = require(`./article-3/code-1`);
const code_2 = require(`./article-3/code-2`);
const code_3 = require(`./article-3/code-3`);
const code_4 = require(`./article-3/code-4`);
const code_5 = require(`./article-3/code-5`);
const code_6 = require(`./article-3/code-6`);
const code_7 = require(`./article-3/code-7`);

const note_1 = note(sentence(`Я буду використовувати терміни `, /*term*/(`перевантаження`), ` або `, /*term*/(`перевантаження функцій`), ` маючи на увазі загальний підхід, який також включає перевантаження методів, `, link(`операторів`, `https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%96%D0%B2`), `, функторів, etc.. `));

const using_namespace = cpp( kw(`using`), lexeme(` `), kw(`namespace`) );
const auto = cpp(kw(`auto`));
const static_cast = cpp(kw(`static_cast`));

exports = module.exports = new h.DocumentResource({
    Document : document([ `Думки вголос. `, `Перевантаження за результатом. ` ],
        {
            Date : new Date(`2019-01-22T00:00:00.000Z`),
        },
        section(``, ...[
            code_1,
            paragraph(...[
                sentence(`Деякі зі статично-типізованих мов програмування підтримують механізм `, link(`перевантаження функцій`, `https://uk.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D1%96%D1%97`), note_1, `. `),
                sentence(`Це виражається в тому, що під одним іменем можна оголосити декілька функцій, які будуть відрізнятись за кількістю аргументів або типами цих аргументів. `),
                sentence(`Характерною ознакою конкретно такої реалізації є те, що перевантаження ігнорує результат. `),
                sentence(`Наслідком такого підходу є неможливість існування двох функцій з однаковими іменами, які відрізняються лише типом результату `, code_1, `. `),
                sentence(`Метою цієї сторінки є висловлення ідеї, що подібне обмеження – нісенітниця. `),
            ]),
        ]),
        section(`Немає перевантаження – немає проблеми`, ...[
            paragraph(
                sentence(`Існують мови програмування, які не підтримують перевантаження. Очевидних (особисто для мене) причин такої стратегії є декілька: `),
            ),
            list(...[
                sentence(`Мова сформувалась в часи, коли `, /*negation(`земля ще була пласкою`),*/ ` перевантаження ще не винайшли. `),
                sentence(`Мова не є статично-типізованою. `),
                sentence(`Автори мови вважають, що перевантаження ускладнює розуміння кінцевої програми. `),
            ]),
            paragraph(...[
                sentence(`Серед таких мов, наприклад, `, link(`мова програмування С`, `https://uk.wikipedia.org/wiki/C_(%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`), ` та `, link(`JavaScript`, `https://uk.wikipedia.org/wiki/JavaScript`), `. `),
                sentence(`Беручи до уваги хоча б солідний вік мови С (46 років на момент написання цього документу) – можна зробити наступний висновок: можна жити і без перевантаження. `),
                sentence(`Таким чином, в певній мірі це є питанням смаку. `),
            ]),
        ]),
        section(`Винятки`, ...[
            paragraph(...[
                sentence(`Свого роду винятком є той нюанс, що перевантаження базується на сигнатурі функції. `),
                sentence(`А вона, у деяких мовах, може включати в себе додаткові компоненти. `),
                sentence(`Наприклад, в `, link(`мові програмування С++`, `https://uk.wikipedia.org/wiki/C%2B%2B`), ` можливе перевантаження методу за типом результату, але лише якщо два таких методи окрім цього відрізняються ще й кваліфікатором `, cpp(kw(`const`)), ` `, code_2, `. `),
                sentence(`Таким чином цей виняток зовсім і не виняток, оскільки перевантаження все ж залучає не лише результат. `),
                sentence(`Але не виділити цей випадок в окрему категорію я не міг, тому що при поверхневому аналізі створюється видимість саме того, що нам потрібно - перевантаження за результатом. `),
            ]),
            code_2,
        ]),
        section(`Аргументація`, ...[
            paragraph(...[
                sentence(`Один з аргументів проти перевантаження за результатом, який у той самий час не відноситься до категорії `, figurative(`програма стане нечитабельною`), ` – це принципова неможливість вибору між двома такими функціями (принаймні за відсутності яких-небудь орієнтирів). `),
                sentence(`І цей аргумент абсолютно небезпідставний. `),
                sentence(`І справді, якщо розмістити в єдиній інструкції виклик такої двозначної функції – компілятор не матиме жодних об’єктивних підстав для вибору між ними `, code_3, `. `),
                sentence(`Функція, яка повертає `, cpp(c(`int`)), `, нічим не гірша від функції, яка повертає `, cpp(c(`float`)), `. `),
                sentence(`Таким чином вибрати якусь одну (окрім як випадковим чином) стає неможливо і програма не має шансів на успішну компіляцію. `),
            ]),
            code_3,
        ]),
        section(`Контраргументація`, ...[
            paragraph(...[
                sentence(`Але це щось дуже для нас знайоме, десь ми вже це бачили… насправді, принаймні в мові програмування С++, є вже існуючі приклади схожої неоднозначності. `),
            ]),
            paragraph(...[
                sentence(`Наприклад, два простори імен, які містять об’єкти з однаковими іменами. `),
                sentence(`Якщо вкладені об’єкти таких просторів розгорнути в поточну область за допомогою інструкції `, using_namespace, ` `, code_4, `, то при зверненні до цих об’єктів-близнюків компілятор не зможе зорієнтуватись котрий з них нам необхідний і зупинить компіляцію. `),
                sentence(`Розробнику доведеться вирішити цю неоднозначність за допомогою оператора `, cpp(lexeme(`::`)), `, явно вказавши всередині якого з просторів імен необхідно шукати об’єкт. `),
            ]),
            code_4,
            paragraph(...[
                sentence(`Ще одним прикладом є використання оператора `, auto, ` в парі з, несподівано, перевантаженими функціями. `),
                sentence(`Якщо спробувати ініціалізувати змінну оголошену через `, auto, ` перевантаженою функцією, то компілятор не зможе вивести її тип `, code_5, `. `),
                sentence(`Розробнику доведеться або прибрати `, auto, `, або використати `, static_cast, ` і привести функцію до одної з існуючих сигнатур, таким чином явно вказавши якою з них він хоче ініціалізувати вказівник на функцію. `),
            ]),
            code_5,
        ]),
        section(`Питання`, ...[
            paragraph(...[
                sentence(`А що, власне кажучи, завадило впровадити подібні механізми при роботі з функціями, які відрізняються лише типом результату? `),
                sentence(`Можна було б додати спеціальний оператор, який дозволяв би явно вказувати тип, який повертає неоднозначна функція, що викликається. `),
                sentence(`Або ж повторно використати `, static_cast, ` для вирішення цієї неоднозначності. `),
                sentence(`Вичерпних прийнятних аргументів, які, знову ж таки, не належали б до категорії `, figurative(`програма стане нечитабельною`), `, я не знаходжу. `),
            ]),
        ]),
        section(`Можливості`, ...[
            paragraph(...[
                sentence(`Тим не менше, навіть попри обмеженість прикладів використання, даний підхід має декілька природних властивостей, які мінімізують можливість виникнення неоднозначностей. `),
            ]),
            paragraph(...[
                sentence(`В першу чергу можна розглянути той варіант, коли множина нашої неоднозначної функції включає таку функцію, яка нічого повертає. `),
                sentence(`Було б природно робити вибір в її користь по замовчуванню, якщо мова йде про виклик функції, результат якої нікуди не передається і ніде не зберігається `, code_6, `. `),
            ]),
            code_6,
            paragraph(...[
                sentence(`Автоматизацію процесу вирішення неоднозначностей також можна було б реалізувати по аналогії з виведенням в шаблонах `, code_7, `. `),
                sentence(`Наприклад, якщо результат неоднозначної функції передається в іншу функцію, то обрати можна саме ту варіацію, результат якої збігається з аргументом. `),
            ]),
            code_7,
        ]),
        section(`Висновки`, ...[
            paragraph(...[
                sentence(`Перевантаження функцій за результатом не є життєво-важливим механізмом для мови. `),
                sentence(`Тим не менше, подібне твердження можна сказати як про перевантаження загалом, так і про інші можливості та особливості мов. `),
            ]),
            paragraph(...[
                sentence(`Більше того, важко оцінити необхідність і вигідність механізму до його повноцінного впровадження. `),
                sentence(`Лише після випробувань на практиці ми можем сміливо стверджувати про актуальність того чи іншого підходу. `),
                sentence(`Сама ж відсутність можливості провести такі випробування лише обмежує вже наші власні можливості в роботі, в тому числі й до пошуку нових, ще не відкритих засобів. `),
            ]),
            paragraph(...[
                sentence(`Але найбільш суперечливим моментом в цій історії є те, що ті проблеми, які заважають реалізувати механізм перевантаження за результатом, успішно подолані в інших областях. `),
                sentence(`Подібне відношення не лише робить будь-яку мову менш повною, але й є проявом несправедливості і лицемірства зі сторони розробників мови. `),
                sentence(`Або ж просто говорить про їх несерйозне відношення до роботи. `),
            ]),
            paragraph(...[
                sentence(`Підсумовуючи все вищезгадане я можу прийти до висновку, що подібний механізм явно не буде зайвим, а його відсутність лише збіднює мову. `),
            ]),
        ]),
    ),
});
