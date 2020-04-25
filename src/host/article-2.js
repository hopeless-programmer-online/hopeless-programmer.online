const hosting = require(`../hosting`);
const documenting = require(`../documenting`);


const h = hosting;
const s = documenting.shortcuts;


const code_1 = require(`./article-2/code-1`);
const code_2 = require(`./article-2/code-2`);
const code_3 = require(`./article-2/code-3`);
const code_4 = require(`./article-2/code-4`);
const code_5 = require(`./article-2/code-5`);
const code_6 = require(`./article-2/code-6`);
const code_7 = require(`./article-2/code-7`);
const code_8 = require(`./article-2/code-8`);
const code_9 = require(`./article-2/code-9`);
const code_10 = require(`./article-2/code-10`);
const code_11 = require(`./article-2/code-11`);
const code_12 = require(`./article-2/code-12`);
const code_13 = require(`./article-2/code-13`);


exports = module.exports = new h.DocumentResource({
    Document : s.document([ `Думки вголос. `, `Зарезервовані слова. ` ],
        s.section(``, ...[
            s.paragraph(...[
                s.sentence(`Дуже часто мови програмування грішать тим, що змішують в одну купу ідентифікатори та ключові слова. `),
                s.sentence(`Разом з іншими недоліками це породжує цілу низку дрібних проблем. `),
                s.sentence(`Деколи вони можуть стати справжньою ложкою дьогтю як для мови в цілому, так і для окремої програми. `),
                s.sentence(`Такий стан справ мене не влаштовує. `),
                s.sentence(`А тому я вирішив привести приклади підходів котрі позбавлені подібних вад, а також мов що їх реалізують. `),
            ]),
        ]),
        s.section(`Претензії`, ...[
            s.paragraph(...[
                s.sentence(`З точки зору синтаксису зарезервовані слова є `, s.emphasis(`особливими`), ` ідентифікаторами. `),
                s.sentence(`Зазвичай вони залучені в службових конструкціях мови: галуженнях, циклах, оголошеннях і т.д. `, code_1, `. `),
                s.sentence(`Використовувати їх для іменування об'єктів `, s.emphasis(`заборонено`), `. `),
                s.sentence(`Хоч і в незначній мірі це все ж обмежує вільний до використання словниковий запас. `),
                s.sentence(`Також від цього може страждати і подальший розвиток мови. `),
                s.sentence(`Введення нових зарезервованих слів може погіршувати зворотню сумісність через можливі конфлікти з існуючими ідентифікаторами. `),
                s.sentence(`Інколи це змушує вводити в мову дещо "кострубаті" і неприродні конструкції `, code_2, `. `),
                s.sentence(`Вони рятують ситуацію в цілому, але не додають коду елегантності чи однорідності. `),
            ]),
            [
                code_1,
                code_2,
            ],
            s.paragraph(...[
                s.sentence(`Наскільки цей підхід виправданий? `),
                s.sentence(`Наскільки він потрібний в сучасних мовах програмування? `),
                s.sentence(`Чи можна взагалі хоч якось покращити ситуацію? `),
            ]),
        ]),
        s.section(s.sentence(s.emphasis(`Не`), `вирішення проблеми`), ...[
            s.paragraph(...[
                s.sentence(`Цікавий, хоч і безрезультатний хід зробили автори `, s.link(`мови C#`, `https://uk.wikipedia.org/wiki/C_Sharp`), `. `),
                s.sentence(`Вони дозволили використовувати зарезервовані слова в якості ідентифікаторів, але з однією умовою - ідентифікатор повинен починатись з символу `, s.lexeme(`@`), `. `),
                s.sentence(`Мені невідомо на який результат чекали розробники, але проблема нікуди не зникла. `),
                s.sentence(`Ми як і раніше не можемо використовувати зарезервовані слова в якості ідентифікаторів. `),
                s.sentence(`Саме ж запропоноване рішення принципово не відрізняється від використання інших префіксів `, code_3, `. `),
            ]),
            [
                code_3,
                code_4,
            ],
            s.paragraph(...[
                s.sentence(`Окрім цього такий підхід не позбавлений недоліків. `),
                s.sentence(`Наприклад, символ `, s.lexeme(`@`), ` заборонено використовувати в якості самостійної змінної. `),
                s.sentence(`З його допомогою можна оголосити і звичайні ідентифікатори, але неможливо розмістити всередині чи позаду них `, code_4, `. `),
                s.sentence(`Також він застосовується при оголошенні стрічкових літералів, а це може ускладнювати розуміння призначення такої конструкції. `),
            ]),
            s.paragraph(...[
                s.sentence(`Мета яку переслідували автори цього рішення для мене залишається не очевидною. `),
                s.sentence(`Але спроба боротись з проблемою зарезервованих слів зарахована. `),
            ]),
        ]),
        s.section(`Виділення ідентифікаторів`, ...[
            s.paragraph(...[
                s.sentence(`В `, s.link(`мові PHP`, `https://uk.wikipedia.org/wiki/PHP`), ` до цього питання підійшли з іншого боку. `),
                s.sentence(`Змінні в ній виділені в окрему синтаксичну категорію і починаються з символу `, s.lexeme(`$`), ` `, code_5, `. `),
                s.sentence(`Це відрізняє їх від функцій і службових слів, які не можуть починатись з `, s.lexeme(`$`), `. `),
                s.sentence(`Як і в попередньому випадку тут заборонені "порожні" змінні та символ `, s.lexeme(`$`), ` всередині ідентифікатора, але в цілому підхід є більш повним. `),
                s.sentence(`Змінні і службові слова чітко розділені і не перетинаються, користувачі вільні у виборі імен а розробники мови в розширенні службових конструкцій. `),
                s.sentence(`Єдиний недолік - це користувацькі функції, які й далі можуть конфліктувати з зарезервованими словами.`),
            ]),
            s.paragraph(...[
                s.sentence(`Автори `, s.link(`проміжної мови LLVM`, `https://uk.wikipedia.org/wiki/Low_Level_Virtual_Machine`), ` застосували блискуче з цієї точки зору рішення. `),
                s.sentence(`Саме з метою усунення можливих проблем зворотної сумісності, а також конфліктів між ідентифікаторами та службовими словами, `, s.link(`ідентифікатори в LLVM`, `https://releases.llvm.org/2.6/docs/LangRef.html#identifiers`), ` починаються зі спеціального префіксу. `),
                s.sentence(`Глобальні ідентифікатори (функції, глобальні змінні) починаються з символу `, s.lexeme(`@`), `, у той час як локальні (регістри, типи) - з символу `, s.lexeme(`%`), `. `),
                s.sentence(`Службові слова ж позбавлені цих префіксів, а тому конфлікти між ними неможливі`, code_6, `. `),
            ]),
            s.paragraph(...[
                s.sentence(`В `, s.link(`мові BASIC`, `https://uk.wikipedia.org/wiki/BASIC`), ` та її діалектах розвинутий схожий підхід, хоч і використаний з іншою метою. `),
                s.sentence(`Ідентифікатори змінних можна записувати зі спеціальним суфіксом, який буде явно визначати їхній тип `, code_7, `. `),
                s.sentence(`Важливо те, що це дозволяє оголошувати змінні ідентичні до службових слів не призводячи до конфліктів `, code_8, `. `),
            ]),
            [
                code_5,
                code_6,
                code_7,
                code_8,
            ],
            s.paragraph(...[
                s.sentence(`Ідею з виділенням змінних можна поширити і на решту ідентифікаторів: функції, класи, простори імен, тощо. `),
                s.sentence(`Відкритим залишається питання зі стандартною бібліотекою, адже в залежності від мови вона може використовуватись по різному. `),
                s.sentence(`Незалежно від цього такий підхід усуває проблеми зворотної сумісності при додаванні нових конструкцій в мову. `),
                s.sentence(`Додавання в мову класів чи шаблонів, атрибутів чи класифікаторів, або навіть звичайних циклів гарантовано не буде створювати конфліктів з існуючими ідентифікаторами. `),
            ]),
        ]),
        s.section(`Виділення ключових слів`, ...[
            s.paragraph(...[
                s.sentence(`Існує і діаметрально протилежний підхід. `),
                s.sentence(`Замість того щоб "виділяти" ідентифікатори можна виділити службові слова. `),
                s.sentence(`Вибір на їхню користь може бути обґрунтований тим, що частота вживання ключових слів зазвичай нижча за частоту вживання звичайних ідентифікаторів. `),
                s.sentence(`Виходячи з такої позиції користувачам може бути простіше додавати спеціальний префікс до ключового слова, а не до часто використовуваних змінних та класів. `),
            ]),
            s.paragraph(...[
                s.sentence(`Така стратегія використана в `, s.link(`мові С`, `https://uk.wikipedia.org/wiki/C_(%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`), `, де команди `, s.link(`препроцесора`, `https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D0%BE%D1%80`), ` починаються з символу решітки (`, s.lexeme(`#`), `). `),
                s.sentence(`Це виділяє їх на фоні ідентифікаторів та решти службових слів, перетворюючи на окрему `, s.link(`предметно-орієнтовану мову`, `https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D1%96%D1%94%D0%BD%D1%82%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0_%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F`), ` всередині іншої мови `, code_9, `. `),
                s.sentence(`Ще одним прикладом префіксу для виділення службових слів є обернена коса риска (`, s.lexeme(`\\`), `). `),
                s.sentence(`Вона використовується в `, s.link(`мові регулярних виразів`, `https://uk.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%B8%D0%B9_%D0%B2%D0%B8%D1%80%D0%B0%D0%B7`), ` а також в `, s.link(`мові розмітки LaTeX`, `https://uk.wikipedia.org/wiki/LaTeX`), `. `),
            ]),
            s.paragraph(...[
                s.sentence(`Також поширеним є варіант з записом службових слів між парою дужок або інших символів. `),
                s.sentence(`Так, наприклад, мови розмітки `, s.link(`XML`, `https://uk.wikipedia.org/wiki/XML`), ` та `, s.link(`HTML`, `https://uk.wikipedia.org/wiki/XML`), ` використовують кутові дужки (`, s.lexeme(`<`), ` та `, s.lexeme(`>`), `) для запису теґів `, code_10, `. `),
                s.sentence(`Іншим прикладом можуть слугувати атрибути в сучасних мовах програмування (`, s.link(`Java`, `https://uk.wikipedia.org/wiki/Java`), `, `, s.link(`C#`, `https://uk.wikipedia.org/wiki/C_Sharp`), `, `, s.link(`C++`, `https://uk.wikipedia.org/wiki/C%2B%2B`), `). `),
                s.sentence(`Нерідко їх розміщують всередині одинарних або подвійних квадратних дужок (`, s.lexeme(`[`), ` та `, s.lexeme(`]`), `). `),
            ]),
            [
                code_9,
                code_10,
            ],
        ]),
        s.section(`Змішаний підхід`, ...[
            s.paragraph(...[
                s.sentence(`Ще одна стратегія - це робота зі службовими словами як зі звичайними ідентифікаторами. `),
                s.sentence(`Тут мається на увазі те, що службові слова перестають бути контекстно-незалежними лексемами. `),
                s.sentence(`Натомість вони перетворюються на деякі "іменовані" об'єкти, до яких можна звертатись через ідентифікатори. `),
                s.sentence(`Оголошення і визначення цих об'єктів залишається "за кадром", але робота з ідентифікаторами що на них посилаються нічим не відрізняється від роботи з будь-якими іншими ідентифікаторами. `),
                s.sentence(`Таким чином стає можливе створення змінних з відповідними іменами, оскільки ідентифікатори можна перекривати. `),
                s.sentence(`Недоліком тут може виступати реалізація перекриття для конкретної мови, але це вже окрема історія. `),
                s.sentence(`Також варто зауважити що при цьому службові слова можуть повністю зберігати виключний для себе синтаксис і навіть мати спеціальні типи. `),
            ]),
            [
                code_11,
                code_12,
                code_13,
            ],
            s.paragraph(...[
                s.sentence(`Такий підхід робить можливим налаштування мови під конкретного користувача. `),
                s.sentence(`Наприклад, можливе перейменовування службових слів відповідно до певних погоджень. `),
                s.sentence(`Можна починати їх з префіксу `, code_12, `, записувати у верхньому регістрі, або ж скорочувати `, code_11, ` чи навіть розширювати `, code_13, ` їхні назви для зручності. `),
                s.sentence(`Це також може спростити процес переносу коду з однієї мови на іншу. `),
                s.sentence(`Але найважливішим тут залишається те, що усе це робиться без втручань в ядро мови, для конкретного проекту, бібліотеки чи навіть окремої функції. `),
            ]),
        ]),
        s.section(`Підсумки`, ...[
            s.paragraph(...[
                s.sentence(`Сучасний підхід до роботи зі службовими словами все ще є куди розвивати. `),
                s.sentence(`Це допомогло б з вирішенням хоч і не суттєвих, але цілком реальних проблем. `),
                s.sentence(`Окрім цього, чітке відділення їхнього синтаксису від синтаксису ідентифікаторів вже має приклади реалізації в існуючих мовах. `),
                s.sentence(`Реалізація ж змішаного підходу могла б стати щонайменше предметом перспективного дослідження. `),
            ]),
        ]),
    ),
});
