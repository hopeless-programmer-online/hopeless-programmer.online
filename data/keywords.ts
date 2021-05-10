import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs } from "../classes/shortcuts";

const code_1  = illustration(
    sentence(`Ідентифікатори `, cpp(kw(`for`)), `, `, cpp(kw(`auto`)), `, `, cpp(kw(`if`)), ` та `, cpp(kw(`else`)), ` є зарезервованими в С++ та використовуються в спеціальних конструкціях.`),
    cpp(...[
        [ kw(`for`), ` (`, kw(`auto`), ` &`, v(`value`), ` : `, v(`values`), `)` ],
        [ `{` ],
        [ `    `, kw(`if`), ` (`, v(`value`), ` > `, lt(`1.0`), `)` ],
        [ `    {` ],
        [ `        `, v(`value`), ` = `, lt(`1.0`), `;` ],
        [ `    }` ],
        [ `    `, kw(`else`) ],
        [ `    {` ],
        [ `        `, v(`value`), ` *= `, v(`value`), `;` ],
        [ `    }` ],
        [ `}` ],
    ]),
)
const code_2  = illustration(
    `Боротьба за зворотню сумісність в С++.`,
    cpp(...[
        [ `[[`, kw(`deprecated`), `]]` ],
        [ c(`void`), ` `, f(`f`), `() `, cm(`// застаріла функція`) ],
        [ `{` ],
        [ `}` ],
        [ `` ],
        [ kw(`deprecated`), ` `, cm(`// чому не так?`) ],
        [ c(`void`), ` `, f(`g`), `()   `, cm(`// застаріла функція`) ],
        [ `{` ],
        [ `}` ],
    ]),
)
const code_3  = illustration(
    sentence(`Використання символу `, cs(`@`), ` в C#.`),
    cs(...[
        [ kw(`var`), ` `, v(`class`), `     = `, lt(`1`), `; `, cm(`// помилка`) ],
        [ kw(`var`), ` `, v(`@class`), `    = `, lt(`2`), `; `, cm(`// ok`) ],
        [ kw(`var`), ` `, v(`_class`), `    = `, lt(`3`), `; `, cm(`// теж ok`) ],
        [ kw(`var`), ` `, v(`the_class`), ` = `, lt(`3`), `; `, cm(`// і це теж ok`) ],
    ]),
)
const code_4  = illustration(
    `Обмеження механізму спеціальних ідентифікаторів.`,
    cs(...[
        [ kw(`var`), ` `, v(`@`), `      = `, lt(`1`), `; `, cm(`// помилка`) ],
        [ kw(`var`), ` `, v(`cl@ss`), `  = `, lt(`2`), `; `, cm(`// теж помилка`) ],
        [ kw(`var`), ` `, v(`class@`), ` = `, lt(`3`), `; `, cm(`// і це теж помилка`) ],
    ]),
)
const code_5  = illustration(
    `Оголошення змінних та функцій в PHP.`,
    code(`PHP`, ...[
        [ cm(`# оголошення змінних`) ],
        [ v(`$one`), `   = `, lt(`1`), `;` ],
        [ v(`$two`), `   = `, lt(`2`), `;` ],
        [ v(`$three`), ` = `, lt(`3`), `;` ],
        [ `` ],
        [ cm(`# оголошення функцій`) ],
        [ kw(`function`), ` `, f(`first_function`), `()  { ... }` ],
        [ kw(`function`), ` `, f(`second_function`), `() { ... }` ],
        [ kw(`function`), ` `, f(`third_function`), `()  { ... }` ],
    ]),
)
const code_6  = illustration(
    sentence(`Локальні та глобальні ідентифікатори в LLVM починаються з префіксів `, code('LLVM', `%`), ` та `, code('LLVM', `@`), ` відповідно.`),
    code(`LLVM`, ...[
        [ kw(`define`), ` `, c(`i32`), ` `, f(`@mul_add`), `(`, c(`i32`), ` `, v(`%x`), `, `, c(`i32`), ` `, v(`%y`), `, `, c(`i32`), ` `, v(`%z`), `) { `, cm(`; глобальний ідентифікатор`) ],
        [ kw(`entry`), `:` ],
        [ `  `, v(`%tmp`), `  = `, f(`mul`), ` `, c(`i32`), ` `, v(`%x`), `, `, v(`%y`), `    `, cm(`; локальний ідентифікатор`) ],
        [ `  `, v(`%tmp2`), ` = `, f(`add`), ` `, c(`i32`), ` `, v(`%tmp`), `, `, v(`%z`), `  `, cm(`; ще один локальний ідентифікатор`) ],
        [ `  `, kw(`ret`), ` `, c(`i32`), ` `, v(`%tmp2`) ],
        [ `}` ],
    ]),
)
const code_7  = illustration(
    `Приклади суфіксів в QBasic.`,
    code('BASIC', ...[
        [ v(`integer%`), ` = `, lt(`1`), `      `, cm(`'ціле число`) ],
        [ v(`real#`), `    = `, lt(`1.2`), `    `, cm(`'дробове число`) ],
        [ v(`string$`), `  = `, lt(`"text"`), ` `, cm(`'стрічка`) ],
    ]),
)
const code_8  = illustration(
    `Оголошення змінної не конфліктує зі службовим словом.`,
    code('BASIC', ...[
        [ v(`PRINT$`), ` = `, lt(`"text to be printed"`) ],
        [ kw(`PRINT`), ` `, v(`PRINT$`) ],
    ]),
)
const code_9  = illustration(
    `Використання препроцесору в мові С.`,
    code(`C`, ...[
        [ kw(`#if`), ` `, v(`__MY_HEADER__`) ],
        [ kw(`#define`), ` `, v(`__MY_HEADER__`) ],
        [ kw(`#endif`) ],
    ]),
)
const code_10 = illustration(
    `Теґи в html.`,
    code(`HTML`, ...[
        [ kw(`<`), kw(`div`), kw(`>`) ],
        [ `    `, kw(`<`), kw(`b`), kw(`>`), `Hello, world!`, kw(`</`), kw(`b`), kw(`>`) ],
        [ kw(`</`), kw(`div`), kw(`>`) ],
    ]),
)
const code_11 = illustration(
    `Скорочення службових слів в JS.`,
    js(...[
        [ kw(`function`), ` `, f(`f`), `() {` ],
        [ `    ...` ],
        [ `}` ],
        [ `` ],
        [ kw(`var`), ` `, kw(`fn`), ` = `, kw(`function`), `;` ],
        [ `` ],
        [ kw(`fn`), ` `, f(`g`), `() {` ],
        [ `    ...` ],
        [ `}` ],
    ]),
)
const code_12 = illustration(
    `Робота зі службовими словами як з ідентифікаторами в С++.`,
    cpp(...[
        [ kw(`using`), ` `, kw(`@if`), `   = `, kw(`if`), `;` ],
        [ kw(`using`), ` `, kw(`@else`), ` = `, kw(`else`), `;` ],
        [ kw(`using`), ` `, kw(`@for`), `  = `, kw(`for`), `;` ],
        [ kw(`using`), ` `, kw(`@auto`), ` = `, kw(`auto`), `;` ],
        [ `` ],
        [ kw(`@for`), ` (`, kw(`@auto`), ` &`, v(`value`), ` : `, v(`values`), `)` ],
        [ `{` ],
        [ `    `, kw(`@if`), ` (`, v(`value`), ` > `, lt(`1.0`), `)` ],
        [ `    {` ],
        [ `        `, v(`value`), ` = `, lt(`1.0`), `;` ],
        [ `    }` ],
        [ `    `, kw(`@else`) ],
        [ `    {` ],
        [ `        `, v(`value`), ` *= `, v(`value`), `;` ],
        [ `    }` ],
        [ `}` ],
    ]),
)
const code_13 = illustration(
    `Деталізація службових слів в Python.`,
    code('Python', ...[
        [ kw(`def`), ` `, f(`f`), `():` ],
        [ `    `, kw(`pass`) ],
        [ `` ],
        [ kw(`function`), ` = `, kw(`def`) ],
        [ `` ],
        [ kw(`function`), ` `, f(`g`), `():` ],
        [ `    `, kw(`pass`) ],
    ]),
)


export default article([ `Думки вголос. `, `Зарезервовані слова. ` ], { created : new Date('2019-02-24') }, ...[
    section(``, ...[
        paragraph(...[
            sentence(`Дуже часто мови програмування грішать тим, що змішують в одну купу ідентифікатори та ключові слова. `),
            sentence(`Разом з іншими недоліками це породжує цілу низку дрібних проблем. `),
            sentence(`Деколи вони можуть стати справжньою ложкою дьогтю як для мови в цілому, так і для окремої програми. `),
            sentence(`Такий стан справ мене не влаштовує. `),
            sentence(`А тому я вирішив привести приклади підходів котрі позбавлені подібних вад, а також мов що їх реалізують. `),
        ]),
    ]),
    section(`Претензії`, ...[
        paragraph(...[
            sentence(`З точки зору синтаксису зарезервовані слова є `, emp(`особливими`), ` ідентифікаторами. `),
            sentence(`Зазвичай вони залучені в службових конструкціях мови: галуженнях, циклах, оголошеннях і т.д. (див. `, code_1, `). `),
            sentence(`Використовувати їх для іменування об'єктів `, emp(`заборонено`), `. `),
            sentence(`Хоч і в незначній мірі це все ж обмежує вільний до використання словниковий запас. `),
            sentence(`Також від цього може страждати і подальший розвиток мови. `),
            sentence(`Введення нових зарезервованих слів може погіршувати зворотню сумісність через можливі конфлікти з існуючими ідентифікаторами. `),
            sentence(`Інколи це змушує вводити в мову дещо `, fig(`кострубаті`), ` і неприродні конструкції (див. `, code_2, `). `),
            sentence(`Вони рятують ситуацію в цілому, але не додають коду елегантності чи однорідності. `),
        ]),
        code_1,
        code_2,
        paragraph(...[
            sentence(`Наскільки цей підхід виправданий? `),
            sentence(`Наскільки він потрібний в сучасних мовах програмування? `),
            sentence(`Чи можна взагалі хоч якось покращити ситуацію? `),
        ]),
    ]),
    section(sentence(emp(`Не`), ` вирішення проблеми`), ...[
        paragraph(...[
            sentence(`Цікавий, хоч і безрезультатний хід зробили автори `, link(`мови C#`, `https://uk.wikipedia.org/wiki/C_Sharp`), `. `),
            sentence(`Вони дозволили використовувати зарезервовані слова в якості ідентифікаторів, але з однією умовою - ідентифікатор повинен починатись з символу `, cs(`@`), `. `),
            sentence(`Мені невідомо на який результат чекали розробники, але проблема нікуди не зникла. `),
            sentence(`Ми як і раніше не можемо використовувати зарезервовані слова в якості ідентифікаторів. `),
            sentence(`Саме ж запропоноване рішення принципово не відрізняється від використання інших префіксів (див. `, code_3, `). `),
        ]),
        code_3,
        code_4,
        paragraph(...[
            sentence(`Окрім цього такий підхід не позбавлений недоліків. `),
            sentence(`Наприклад, символ `, code('C#', `@`), ` заборонено використовувати в якості самостійної змінної. `),
            sentence(`З його допомогою можна оголосити і звичайні ідентифікатори, але неможливо розмістити всередині чи позаду них (див. `, code_4, `). `),
            sentence(`Також він застосовується при оголошенні стрічкових літералів, а це може ускладнювати розуміння призначення такої конструкції. `),
        ]),
        paragraph(...[
            sentence(`Мета яку переслідували автори цього рішення для мене залишається не очевидною. `),
            sentence(`Але спроба боротись з проблемою зарезервованих слів зарахована. `),
        ]),
    ]),
    section(`Виділення ідентифікаторів`, ...[
        paragraph(...[
            sentence(`В `, link(`мові PHP`, `https://uk.wikipedia.org/wiki/PHP`), ` до цього питання підійшли з іншого боку. `),
            sentence(`Змінні в ній виділені в окрему синтаксичну категорію і починаються з символу `, code(`PHP`, `$`), ` (див. `, code_5, `). `),
            sentence(`Це відрізняє їх від функцій і службових слів, які не можуть починатись з `, code(`PHP`, `$`), `. `),
            sentence(`Як і в попередньому випадку тут заборонені `, fig(`порожні`), ` змінні та символ `, code(`PHP`, `$`), ` всередині ідентифікатора, але в цілому підхід є більш повним. `),
            sentence(`Змінні і службові слова чітко розділені і не перетинаються, користувачі вільні у виборі імен а розробники мови в розширенні службових конструкцій. `),
            sentence(`Єдиний недолік - це користувацькі функції, які й далі можуть конфліктувати з зарезервованими словами.`),
        ]),
        paragraph(...[
            sentence(`Автори `, link(`проміжної мови LLVM`, `https://uk.wikipedia.org/wiki/Low_Level_Virtual_Machine`), ` застосували блискуче з цієї точки зору рішення. `),
            sentence(`Саме з метою усунення можливих проблем зворотної сумісності, а також конфліктів між ідентифікаторами та службовими словами, `, link(`ідентифікатори в LLVM`, `https://releases.llvm.org/2.6/docs/LangRef.html#identifiers`), ` починаються зі спеціального префіксу. `),
            sentence(`Глобальні ідентифікатори (функції, глобальні змінні) починаються з символу `, code(`LLVM`, `@`), `, у той час як локальні (регістри, типи) - з символу `, code('LLVM', `%`), `. `),
            sentence(`Службові слова ж позбавлені цих префіксів, а тому конфлікти між ними неможливі (див. `, code_6, `). `),
        ]),
        paragraph(...[
            sentence(`В `, link(`мові BASIC`, `https://uk.wikipedia.org/wiki/BASIC`), ` та її діалектах розвинутий схожий підхід, хоч і використаний з іншою метою. `),
            sentence(`Ідентифікатори змінних можна записувати зі спеціальним суфіксом, який буде явно визначати їхній тип (див. `, code_7, `). `),
            sentence(`Важливо те, що це дозволяє оголошувати змінні ідентичні до службових слів не призводячи до конфліктів (див. `, code_8, `). `),
        ]),
        code_5,
        code_6,
        code_7,
        code_8,
        paragraph(...[
            sentence(`Ідею з виділенням змінних можна поширити і на решту ідентифікаторів: функції, класи, простори імен, тощо. `),
            sentence(`Відкритим залишається питання зі стандартною бібліотекою, адже в залежності від мови вона може використовуватись по різному. `),
            sentence(`Незалежно від цього такий підхід усуває проблеми зворотної сумісності при додаванні нових конструкцій в мову. `),
            sentence(`Додавання в мову класів чи шаблонів, атрибутів чи класифікаторів, або навіть звичайних циклів гарантовано не буде створювати конфліктів з існуючими ідентифікаторами. `),
        ]),
    ]),
    section(`Виділення ключових слів`, ...[
        paragraph(...[
            sentence(`Існує і діаметрально протилежний підхід. `),
            sentence(`Замість того щоб `, fig(`виділяти`), ` ідентифікатори можна виділити службові слова. `),
            sentence(`Вибір на їхню користь може бути обґрунтований тим, що частота вживання ключових слів зазвичай нижча за частоту вживання звичайних ідентифікаторів. `),
            sentence(`Виходячи з такої позиції користувачам може бути простіше додавати спеціальний префікс до ключового слова, а не до часто використовуваних змінних та класів. `),
        ]),
        paragraph(...[
            sentence(`Така стратегія використана в `, link(`мові С`, `https://uk.wikipedia.org/wiki/C_(%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`), `, де команди `, link(`препроцесора`, `https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D0%BE%D1%80`), ` починаються з символу решітки (`, code(`C`, `#`), `). `),
            sentence(`Це виділяє їх на фоні ідентифікаторів та решти службових слів, перетворюючи на окрему `, link(`предметно-орієнтовану мову`, `https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D1%96%D1%94%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0_%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F`), ` всередині іншої мови (див. `, code_9, `). `),
            sentence(`Ще одним прикладом префіксу для виділення службових слів є обернена коса риска (`, js(`\\`), `). `),
            sentence(`Вона використовується в `, link(`мові регулярних виразів`, `https://uk.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%B8%D0%B9_%D0%B2%D0%B8%D1%80%D0%B0%D0%B7`), ` а також в `, link(`мові розмітки LaTeX`, `https://uk.wikipedia.org/wiki/LaTeX`), `. `),
        ]),
        paragraph(...[
            sentence(`Також поширеним є варіант з записом службових слів між парою дужок або інших символів. `),
            sentence(`Так, наприклад, мови розмітки `, link(`XML`, `https://uk.wikipedia.org/wiki/XML`), ` та `, link(`HTML`, `https://uk.wikipedia.org/wiki/XML`), ` використовують кутові дужки (`, code(`HTML`, `<`), ` та `, code(`HTML`, `>`), `) для запису теґів (див. `, code_10, `). `),
            sentence(`Іншим прикладом можуть слугувати атрибути в сучасних мовах програмування (`, link(`Java`, `https://uk.wikipedia.org/wiki/Java`), `, `, link(`C#`, `https://uk.wikipedia.org/wiki/C_Sharp`), `, `, link(`C++`, `https://uk.wikipedia.org/wiki/C%2B%2B`), `). `),
            sentence(`Нерідко їх розміщують всередині одинарних або подвійних квадратних дужок (`, cs(`[`), ` та `, cs(`]`), `). `),
        ]),
        code_9,
        code_10,
    ]),
    section(`Змішаний підхід`, ...[
        paragraph(...[
            sentence(`Ще одна стратегія - це робота зі службовими словами як зі звичайними ідентифікаторами. `),
            sentence(`Тут мається на увазі те, що службові слова перестають бути контекстно-незалежними лексемами. `),
            sentence(`Натомість вони перетворюються на деякі `, fig(`іменовані`), ` об'єкти, до яких можна звертатись через ідентифікатори. `),
            sentence(`Оголошення і визначення цих об'єктів залишається `, fig(`за кадром`), `, але робота з ідентифікаторами що на них посилаються нічим не відрізняється від роботи з будь-якими іншими ідентифікаторами. `),
            sentence(`Таким чином стає можливе створення змінних з відповідними іменами, оскільки ідентифікатори можна перекривати. `),
            sentence(`Недоліком тут може виступати реалізація перекриття для конкретної мови, але це вже окрема історія. `),
            sentence(`Також варто зауважити що при цьому службові слова можуть повністю зберігати виключний для себе синтаксис і навіть мати спеціальні типи. `),
        ]),
        code_11,
        code_12,
        code_13,
        paragraph(...[
            sentence(`Такий підхід робить можливим налаштування мови під конкретного користувача. `),
            sentence(`Наприклад, можливе перейменовування службових слів відповідно до певних погоджень. `),
            sentence(`Можна починати їх з префіксу (див. `, code_12, `), записувати у верхньому регістрі, або ж скорочувати (див. `, code_11, `) чи навіть розширювати (див. `, code_13, `) їхні назви для зручності. `),
            sentence(`Це також може спростити процес переносу коду з однієї мови на іншу. `),
            sentence(`Але найважливішим тут залишається те, що усе це робиться без втручань в ядро мови, для конкретного проекту, бібліотеки чи навіть окремої функції. `),
        ]),
    ]),
    section(`Підсумки`, ...[
        paragraph(...[
            sentence(`Сучасний підхід до роботи зі службовими словами все ще є куди розвивати. `),
            sentence(`Це допомогло б з вирішенням хоч і не суттєвих, але цілком реальних проблем. `),
            sentence(`Окрім цього, чітке відділення їхнього синтаксису від синтаксису ідентифікаторів вже має приклади реалізації в існуючих мовах. `),
            sentence(`Реалізація ж змішаного підходу могла б стати щонайменше предметом перспективного дослідження. `),
        ]),
    ]),
])
