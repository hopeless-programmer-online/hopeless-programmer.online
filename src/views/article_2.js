const s = require(`../documenting`).shortcuts;


const {
    l,
    cm,
} = s;


exports = module.exports = s.document([ `Думки вголос. `, `Зарезервовані слова. ` ],
    s.section(``,
        s.paragraph(
            `Дуже часто мови програмування грішать тим, що змішують в одну купу ідентифікатори та ключові слова. `,
            `Разом з іншими недоліками це породжує цілу низку дрібних проблем. `,
            `Деколи вони можуть стати справжньою ложкою дьогтю як для мови в цілому, так і для окремої програми. `,
            `Такий стан справ мене не влаштовує. `,
            `А тому я вирішив привести приклади підходів котрі позбавлені подібних вад, а також мов що їх реалізують. `,
        ),
    ),
    s.section(`Претензії`,
        s.paragraph(
            `З точки зору синтаксису зарезервовані слова є особливими ідентифікаторами. `,
            `Зазвичай вони залучені в службових конструкціях мови: галуженнях, циклах, оголошеннях і т.д. (див. Приклад коду №1). `,
            `Використовувати їх для іменування об'єктів заборонено. `,
            `Хоч і в незначній мірі це все ж обмежує вільний до використання словниковий запас. `,
            `Також від цього може страждати і подальший розвиток мови. `,
            `Введення нових зарезервованих слів може погіршувати зворотню сумісність через можливі конфлікти з існуючими ідентифікаторами. `,
            `Інколи це змушує вводити в мову дещо "кострубаті" і неприродні конструкції (див. Приклад коду №2). `,
            `Вони рятують ситуацію в цілому, але не додають коду елегантності чи однорідності. `,
        ),
        [
            s.illustration( ...[
                `Приклад коду №1`,
                `Ідентифікатори "for", "auto", "if" та "else" є зарезервованими в С++ та використовуються в спеціальних конструкціях.`,
                s.code(
                    `for (auto &value : values)`,
                    `{`,
                    `    if (value > 1.0)`,
                    `    {`,
                    `        value = 1.0;`,
                    `    }`,
                    `    else`,
                    `    {`,
                    `        value *= value;`,
                    `    }`,
                    `}`,
                ),
            ]),
            s.illustration( ...[
                `Приклад коду №2`,
                ` Боротьба за зворотню сумісність в С++.`,
                s.code(
                    `[[deprecated]]`,
                    `void f() // застаріла функція`,
                    `{`,
                    `}`,
                    ``,
                    `deprecated // чому не так?`,
                    `void g() // застаріла функція`,
                    `{`,
                    `}`,
                ),
            ]),
        ],
        s.paragraph(
            `Наскільки цей підхід виправданий? `,
            `Наскільки він потрібний в сучасних мовах програмування? `,
            `Чи можна взагалі хоч якось покращити ситуацію? `,
        ),
    ),
    s.section(`Не вирішення проблеми`,
        s.paragraph(
            `Цікавий, хоч і безрезультатний хід зробили автори мови C#. `,
            `Вони дозволили використовувати зарезервовані слова в якості ідентифікаторів, але з однією умовою - ідентифікатор повинен починатись з символу @. `,
            `Мені невідомо на який результат чекали розробники, але проблема нікуди не зникла. `,
            `Ми як і раніше не можемо використовувати зарезервовані слова в якості ідентифікаторів. `,
            `Саме ж запропоноване рішення принципово не відрізняється від використання інших префіксів (див. Приклад коду №3). `,
        ),
        [
            s.illustration( ...[
                `Приклад коду №3`,
                `Використання символу @ в C#.`,
                s.code(
                    l(`var class  = 1;    `, cm(`// помилка`)),
                    l(`var @class = 2;    `, cm(`// ok`)),
                    l(`var _class = 3;    `, cm(`// теж ok`)),
                    l(`var the_class = 3; `, cm(`// і це теж ok`)),
                ),
            ]),
            s.illustration( ...[
                `Приклад коду №4`,
                `Обмеження механізму спеціальних ідентифікаторів.`,
                s.code(
                    `var @      = 1; // помилка`,
                    `var cl@ss  = 2; // теж помилка`,
                    `var class@ = 3; // і це теж помилка`,
                ),
            ]),
        ],
        s.paragraph(
            `Окрім цього такий підхід не позбавлений недоліків. `,
            `Наприклад, символ @ заборонено використовувати в якості самостійної змінної. `,
            `З його допомогою можна оголосити і звичайні ідентифікатори, але неможливо розмістити всередині чи позаду них (див. Приклад коду №4). `,
            `Також він застосовується при оголошенні стрічкових літералів, а це може ускладнювати розуміння призначення такої конструкції. `,
        ),
        s.paragraph(
            `Мета яку переслідували автори цього рішення для мене залишається не очевидною. `,
            `Але спроба боротись з проблемою зарезервованих слів зарахована. `,
        ),
    ),
    s.section(`Виділення ідентифікаторів`,
        s.paragraph(
            `В мові PHP до цього питання підійшли з іншого боку. `,
            `Змінні в ній виділені в окрему синтаксичну категорію і починаються з символу "$" (див. Приклад коду №5). `,
            `Це відрізняє їх від функцій і службових слів, які не можуть починатись з $. `,
            `Як і в попередньому випадку тут заборонені "порожні" змінні та символ $ всередині ідентифікатора, але в цілому підхід є більш повним. `,
            `Змінні і службові слова чітко розділені і не перетинаються, користувачі вільні у виборі імен а розробники мови в розширенні службових конструкцій. `,
            `Єдиний недолік - це користувацькі функції, які й далі можуть конфліктувати з зарезервованими словами.`,
        ),
        s.paragraph(
            `Автори проміжної мови LLVM застосували блискуче з цієї точки зору рішення. `,
            `Саме з метою усунення можливих проблем зворотної сумісності, а також конфліктів між ідентифікаторами та службовими словами, ідентифікатори в LLVM починаються зі спеціального префіксу. `,
            `Глобальні ідентифікатори (функції, глобальні змінні) починаються з символу "@", у той час як локальні (регістри, типи) - з символу "%". `,
            `Службові слова ж позбавлені цих префіксів, а тому конфлікти між ними неможливі. `,
        ),
        s.paragraph(
            `В мові BASIC та її діалектах розвинутий схожий підхід, хоч і використаний з іншою метою. `,
            `Ідентифікатори змінних можна записувати зі спеціальним суфіксом, який буде явно визначати їхній тип (див. Приклад коду №7). `,
            `Важливо те, що це дозволяє оголошувати змінні ідентичні до службових слів не призводячи до конфліктів (див. Приклад коду №8). `,
        ),
        s.paragraph(
            `Ідею з виділенням змінних можна поширити і на решту ідентифікаторів: функції, класи, простори імен, тощо. `,
            `Відкритим залишається питання зі стандартною бібліотекою, адже в залежності від мови вона може використовуватись по різному. `,
            `Незалежно від цього такий підхід усуває проблеми зворотної сумісності при додаванні нових конструкцій в мову. `,
            `Додавання в мову класів чи шаблонів, атрибутів чи класифікаторів, або навіть звичайних циклів гарантовано не буде створювати конфліктів з існуючими ідентифікаторами. `,
        ),
    ),
    s.section(`Виділення ключових слів`,
        s.paragraph(
            `Існує і діаметрально протилежний підхід. `,
            `Замість того щоб "виділяти" ідентифікатори можна виділити службові слова. `,
            `Вибір на їхню користь може бути обґрунтований тим, що частота вживання ключових слів зазвичай нижча за частоту вживання звичайних ідентифікаторів. `,
            `Виходячи з такої позиції користувачам може бути простіше додавати спеціальний префікс до ключового слова, а не до часто використовуваних змінних та класів. `,
        ),
        s.paragraph(
            `Така стратегія використана в мові С, де команди препроцесора починаються з символу решітки (#). `,
            `Це виділяє їх на фоні ідентифікаторів та решти службових слів, перетворюючи на окрему предметно-орієнтовану мову всередині іншої мови (див. Приклад коду №9). `,
            `Ще одним прикладом префіксу для виділення службових слів є обернена коса риска ("\\"). `,
            `Вона використовується в мові регулярних виразів а також в мові розмітки LaTeX. `,
        ),
        s.paragraph(
            `Також поширеним є варіант з записом службових слів між парою дужок або інших символів. `,
            `Так, наприклад, мови розмітки XML та HTML використовують кутові дужки ("<" та ">") для запису теґів (див. Приклад коду №10). `,
            `Іншим прикладом можуть слугувати атрибути в сучасних мовах програмування (Java, C#, C++). `,
            `Нерідко їх розміщують всередині одинарних або подвійних квадратних дужок ("[" та "]"). `,
        ),
    ),
    s.section(`Змішаний підхід`,
        s.paragraph(
            `Ще одна стратегія - це робота зі службовими словами як зі звичайними ідентифікаторами. `,
            `Тут мається на увазі те, що службові слова перестають бути контекстно-незалежними лексемами. `,
            `Натомість вони перетворюються на деякі "іменовані" об'єкти, до яких можна звертатись через ідентифікатори. `,
            `Оголошення і визначення цих об'єктів залишається "за кадром", але робота з ідентифікаторами що на них посилаються нічим не відрізняється від роботи з будь-якими іншими ідентифікаторами. `,
            `Таким чином стає можливе створення змінних з відповідними іменами, оскільки ідентифікатори можна перекривати. `,
            `Недоліком тут може виступати реалізація перекриття для конкретної мови, але це вже окрема історія. `,
            `Також варто зауважити що при цьому службові слова можуть повністю зберігати виключний для себе синтаксис і навіть мати спеціальні типи. `,
        ),
        s.paragraph(
            `Такий підхід робить можливим налаштування мови під конкретного користувача. `,
            `Наприклад, можливе перейменовування службових слів відповідно до певних погоджень. `,
            `Можна починати їх з префіксу (див. Приклад коду №12), записувати у верхньому регістрі, або ж скорочувати (див. Приклад коду №11) чи навіть розширювати (див. Приклад коду №13) їхні назви для зручності. `,
            `Це також може спростити процес переносу коду з однієї мови на іншу. `,
            `Але найважливішим тут залишається те, що усе це робиться без втручань в ядро мови, для конкретного проекту, бібліотеки чи навіть окремої функції. `,
        ),
    ),
    s.section(`Підсумки`,
        s.paragraph(
            `Сучасний підхід до роботи зі службовими словами все ще є куди розвивати. `,
            `Це допомогло б з вирішенням хоч і не суттєвих, але цілком реальних проблем. `,
            `Окрім цього, чітке відділення їхнього синтаксису від синтаксису ідентифікаторів вже має приклади реалізації в існуючих мовах. `,
            `Реалізація ж змішаного підходу могла б стати щонайменше предметом перспективного дослідження. `,
        ),
    ),
);
