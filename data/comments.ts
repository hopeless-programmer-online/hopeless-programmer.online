import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, py, lts } from "../classes/shortcuts";

export default article([ `Думки вголос. `, `Коментарі. ` ], { created : new Date() }, ...[
    section(``, ...[
        paragraph(...[
            sentence(``),
            sentence(``),
            sentence(``),
        ]),
    ]),
    section(`Жити без коментарів можна, але сумно. `, ...[
        paragraph(...[
            sentence(`Найгірша можлива ситуація для мови - це повна відсутність в ній коментарів. `),
            sentence(`І JSON чудовий цьому приклад. `),
            sentence(`Простота зробила його чи не стандартним форматом для різноманітного роду конфігураційних файлів і повідомлень, але неможливість додавати коментарі створює величезні незручності в роботі з ним. `),
            sentence(`Без них неможливо ні додати нотатки стосовно того чи іншого поля, ні перелічити його можливі значення, ні тримати в коді альтернативні, наперед заготовані конфігурації. `),
        ]),
        paragraph(...[
            sentence(`Аргументом проти додавання в JSON коментарів була неможливість їх однозначного збереження після читання з файлу. `),
            sentence(`Оскільки під час цього текст перетворюється у внутрішнє для мови представлення`, note(`Наприклад, набір об'єктів та примітивів JavaScript. `), ` інформація про коментарі та їх розміщення втрачається. `),
            sentence(`Відповідно, коментарі не лише буде неможливо використати при роботі з цим представленням, але й проста операція читання JSON з файлу і його ж збереження без внесення будь яких видимих змін буде видаляти з файлу коментарі. `),
            sentence(`Для когось це може бути досить неочікувано. `),
        ]),
        paragraph(...[
            sentence(`Але несправедливість полягає в тому, що подібна операція в будь якому випадку видаляє з файлу деяку інформацію. `),
            sentence(`Наприклад, інформацію про форматування або закінчення рядків. `),
            sentence(`Якби JSON допускав коментарі то принципово нічого не змінилося б: він не перестав би бути однозначним форматом `, fig(`без втрат`), `. `),
            sentence(`Він ніколи таким і не був. `),
            sentence(`Але коментарями могли б принаймні скористатись ті, хто використовує JSON лише для читання. `),
        ]),
        paragraph(...[
            sentence(`В решті-решт ніхто не забороняє написати парсер, який зберігає форматування та коментарі і може відновити їх. `),
            sentence(`Але тепер пізно: JSON без коментарів роками використовується в найрізноманітніших програмах які перестануть працювати, якщо у ньому з'являться коментарі. `),
            sentence(`Декого це дратує настільки, що вони обирають новіші формати`, note(`Наприклад, JSON5. `), ` або використовують нестандартні парсери`, note(`Наприклад, TypeScript та ESLint допускають в своїх конфігураційних JSON файлах коментарі. `), `, які вміють розпізнавати коментарі. `),
        ]),
    ]),
    section(`Неповноцінні коментарі.`, ...[
        paragraph(...[
            sentence(`Навіть якщо в мові є коментарі це ще не означає, що вони будуть зручними. `),
            sentence(`Мови HTML та XML схожі навіть в недоліках, адже обоє дозволяють лише коментарі для блоків: `, code(`HTML`, cm(`<!-- -->`)), `. `),
            sentence(`Це робить їх схожими на теги, але аж ніяк не додає зручності. `),
            sentence(`Схожа проблема існує і в CSS, яка до певного моменту підтримувала лише коментарі для блоків `, code(`CSS`, cm(`/* */`)), ` і не вміла працювати з `, code(`CSS`, cm(`//`)), `. `),
            sentence(`Згодом така можливість з'явилась, але замість коментування рядків запис `, code(`CSS`, cm(`//`)), ` вимикає цілу конструкцію, перед якою з'являється. `),
            sentence(`Ось це справді неочікувано, на відміну від зникнення коментарів з JSON файлу! `),
        ]),
        paragraph(...[
            sentence(`Одні лише коментарі можуть стати причиною використовувати замість CSS альтернативи, такі як SASS або LESS. `),
            sentence(`Але існують й обернені випадки: Python натомість підтримує лише коментарі для рядків `, py(cm(`#`)), `. `),
            sentence(`Звичайно, форматування відіграє важливу роль в цій мові, але все ж необхідність коментувати кожен окремий рядок не є тим, чим варто пишатись. `),
            // @todo
            // @todo
            // @todo
            sentence(`--- тут потрібно пояснити, що це може заважити в коментуванні кількох аргументів під час виклику функції, або при коментуванні великих ділянок коду ---`),
            // @todo
            // @todo
            // @todo
        ]),
    ]),
    section(`Недоліки, що передаються шляхом копіювання.`, ...[
        paragraph(...[
            sentence(`Одним з найбільш популярних стилів коментарів сьогодні є `, cpp(cm(`//`)), ` для рядків та `, cpp(cm(`/* */`)), ` для блоків. `),
            sentence(`Його можна зустріти в C, C++, C#, Java, JavaScript, TypeScript та багатьох інших мовах, які скопіювали синтаксис одна з одної. `),
            sentence(`Але разом зі стилем коментарів також було необдумано скопійовано усі їх недоліки. `),
        ]),
        paragraph(...[
            sentence(`Так, наприклад, в жодній з наведених вище мов неможливі вкладені коментарі, тобто конструкції `, cpp(cm(`/* */`)), ` всередині інших `, cpp(cm(`/* */`)), `. `),
            sentence(`Схожа ситуація склалась і в HTML/XML з їхніми `, code(`HTML`, cm(`<!-- -->`)), `, а також в CSS/SCSS, які запозичили коментарі в JavaScript. `),
            sentence(`Якщо спробувати закоментувати вже закоментований блок, то коментар зупиниться на першій же послідовності `, cpp(cm(`*/`)), `, а весь текст до наступної буде інтерпретований як помилка. `),
            sentence(`Це заважає поступово `, fig(`вимикати`), ` код під час зневаджування та коментувати великі шматки коду, який вже містить блокові коментарі. `),
            sentence(`Сьогодні IDE дозволяють спростити це за допомогою гарячих клавіш, які коментують виділені рядки. `),
            sentence(`Але це працює лише для коду який правильно розділений на рядки і усього цього можна було б уникнути, якби мови просто не мали такого промаху в дизайні. `),
        ]),
        paragraph(...[
            sentence(`Ще одна проблема таких коментарів це їх взаємодія зі стрічками. `),
            sentence(`Якщо на шляху блокового коментаря знайдеться стрічка з послідовністю `, cpp(cm(`*/`)), `, то коментар зупиниться на ній. `),
            sentence(`Використання символів `, cpp(cm(`/`)), ` та `, cpp(cm(`*`)), ` які є дуже близькими до решти мовних конструкцій має ще один небажаний наслідок: в таких мовах навряд чи колись з'явиться оператор ділення `, py(`//`), `, як в Python. `),
            sentence(`Це може звучати ще неприємніше якщо згадати, що в JavaScript є оператор піднесення до степеня `, js(`**`), ` і `, js(`//`), ` міг би виконувати обернену функцію - отримання кореня. `),
            // @todo
            // @todo
            // @todo : можливо це варто подати як потенційний недолік
            sentence(`Набагато краща ситуація в JavaScript з літералами для регулярних виразів: вони більш-менш захищені від колізій з `, cpp(cm(`//`)), ` та `, cpp(cm(`/* */`)), `, нехай і ціною додавання зайвого символу `, cpp(lt(`\\`)), `. `),
        ]),
    ]),
    section(`Винятки з правила.`, ...[
        paragraph(...[
            sentence(`Хтось може сказати, що коментарі не надто важливі для мов і всі ці недоліки нікого не обходять. `),
            sentence(`І це неправда! `),
            sentence(`Виявляється існують мови, в яких наведені вище проблем вирішені. `),
            sentence(`На відміну від С++ і купи інших вже згаданих мов, в Haskell з якоїсь невідомої причини зовсім немає проблем з вкладеними коментарями! `),
            sentence(`Ви можете розмістити один `, code(`Haskell`, cm(`{- -}`)), ` всередині іншого і коментарі будуть працювати як очікувано. `),
            sentence(`Вкладені коментарі підтримує і Kotlin, який теж запозичив `, cpp(cm(`/* */`)), ` в С++ але не полінувався виправити його недоліки. `),
        ]),
        paragraph(...[
            sentence(`Окремо варто згадати і про Lua, яка хоча і не підтримує вкладені коментарі, натомість реалізує концепцію `, fig(`багаторівневих`), `. `),
            sentence(`На відміну від популярних `, cpp(cm(`/* */`)), ` ліва та права частини блокового коментаря Lua - `, code(`Lua`, cm(`--[[ ]]`)), ` - можуть містити довільну кількість знаків `, code(`Lua`, cm(`=`)), ` всередині себе. `),
            sentence(`Блок закінчується тоді, коли знаходиться символ `, code(`Lua`, cm(`]]`)), ` з відповідною кількість таких знаків: `, code(`Lua`, cm(`--[=[`)), ` закривається `, code(`Lua`, cm(`]=]`)), `, `, code(`Lua`, cm(`--[====[`)), ` закривається `, code(`Lua`, cm(`]====]`)), ` і так далі. `),
            sentence(`Це дозволяє мати кілька `, fig(`рівнів`), ` коментарів, які гарантовано не заважатимуть один одному. `),
            sentence(`Такий підхід дуже схожий з сирими стрічками в С++, які також містять спеціальні маркери на початку (`, cpp(lts(`R"==(`)), `) та в кінці (`, cpp(lts(`)=="`)), `) стрічки. `),
        ]),
    ]),
    section(`Підсумки.`, ...[
        paragraph(...[
            sentence(`Коментарі необхідні. `),
            sentence(`Не лише як коментарі. `),
            sentence(`Коментування рядків. `),
            sentence(`Коментування блоків. `),
            sentence(`Коментування інструкцій. `),
            sentence(`Вкладені коментарі. `),
            sentence(`Коментування від початку файлу і до кінця. `),
            sentence(`Коментарі та стрічки. `),
            sentence(`Багаторівневі коментарі. `),
            sentence(`Аналогія з сирими стрічками. `),
        ]),
    ]),
])
