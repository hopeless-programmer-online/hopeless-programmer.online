const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);
const { illustration } = require("../server/documenting/shortcuts");


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    sentence,
    figurative,
    emphasis,
    list,
    link,
    lexeme,
    code,
    js,
    cpp,
    cs,
} = s;


const antimatter = `https://uk.wikipedia.org/wiki/%D0%90%D0%BD%D1%82%D0%B8%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D1%8F#%D0%A1%D0%B8%D0%BC%D0%B5%D1%82%D1%80%D1%96%D1%8F_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D1%97_%D1%96_%D0%B0%D0%BD%D1%82%D0%B8%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D1%96%D1%97`;
const argumentum_ad_antiquitatem = `https://uk.wikipedia.org/wiki/Argumentum_ad_antiquitatem`;
const scotsman = `https://uk.wikipedia.org/wiki/%D0%96%D0%BE%D0%B4%D0%B5%D0%BD_%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%B6%D0%BD%D1%96%D0%B9_%D1%88%D0%BE%D1%82%D0%BB%D0%B0%D0%BD%D0%B4%D0%B5%D1%86%D1%8C`;
const esoteric = `https://uk.wikipedia.org/wiki/%D0%95%D0%B7%D0%BE%D1%82%D0%B5%D1%80%D0%B8%D1%87%D0%BD%D1%96_%D0%BC%D0%BE%D0%B2%D0%B8_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F`;
const python = `https://uk.wikipedia.org/wiki/Python`;
const lua = `https://uk.wikipedia.org/wiki/Lua`;
const cdecl = `https://en.wikipedia.org/wiki/X86_calling_conventions#cdecl`;
const optlink = `https://en.wikipedia.org/wiki/X86_calling_conventions#optlink`;
const fastcall = `https://en.wikipedia.org/wiki/X86_calling_conventions#Microsoft_fastcall`;
const vectorcall = `https://en.wikipedia.org/wiki/X86_calling_conventions#Microsoft_vectorcall`;
const mmx = `https://en.wikipedia.org/wiki/MMX_%28instruction_set%29`;
const sse = `https://en.wikipedia.org/wiki/Streaming_SIMD_Extensions`;
const fsincos = `https://en.wikibooks.org/wiki/X86_Assembly/Floating_Point#Added_with_80387`;
const asm = `https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B2%D0%B0_%D0%B0%D1%81%D0%B5%D0%BC%D0%B1%D0%BB%D0%B5%D1%80%D0%B0`;

const code_1 = illustration(`Різниця між поверненням багатьох результатів та поверненням масиву в JavaScript. `, js(...[
    [ `function returnThree() {` ],
    [ `    // повернення декількох значень` ],
    [ `    return x, y, z;` ],
    [ `}` ],
    [ `` ],
    [ `const x, y, z = returnThree();` ],
    [ `` ],
    [ `function returnThree() {` ],
    [ `    // повернення масиву` ],
    [ `    return [ x, y, z ];` ],
    [ `}` ],
    [ `` ],
    [ `// деструктуризація` ],
    [ `const [ x, y, z ] = returnThree();` ],
]));
const code_2 = illustration(``, cpp(...[
    [ `VkInstance instance;` ],
    [ `` ],
    [ `VkResult result = vkCreateInstance(info, nullptr, &instance);` ],
    [ `` ],
    [ `if (result != VkResult::VK_SUCCESS)` ],
    [ `{` ],
    [ `    throw std::exception();` ],
    [ `}` ],
]));


exports = module.exports = new h.DocumentResource({
    Document : document([ `Думки вголос. `, `Асиметрія аргументів та результатів функції. ` ],
        {
        },
        section(`Асиметрія.`, ...[
            paragraph(...[
                sentence(`У той час як астрономи та фізики ламають голову над `, link(`порушенням симетрії`, antimatter),` між звичайною матерією та антиматерією, мені не дає спокою інший різновид порушення симетрії. `),
                sentence(`Мене непокоїть те, що функції зазвичай приймають багато аргументів, але повертають лише один результат. `),
                sentence(`Хоча, здавалося б, немає підстав проводити між ними якусь вагому різницю. `),
                sentence(`Я не знайшов окремого терміну для позначення цього явища, тому надалі буду називати його просто `, figurative(`асиметрією`), `. `),
            ]),
            paragraph(...[
                sentence(`Так от, ось ця вся `, figurative(`асиметрія`), ` - це дуже тупо. `),
                sentence(`Я б навіть сказав, що це один з найпоказовіших прецедентів безпідставних та безглуздих особливостей як в колишніх, так і в сучасних мовах. `),
                sentence(`І зараз я поясню чому. `),
            ]),
        ]),
        /**
         * Якось до Конфуція в гості завітала дуже освідчена пані і спитала:
         *  - Поясність мені, мудрецю, чому коли у жінки багато коханців, то її цькують, а коли у чоловіка багато коханок, то його поважають?
         * Перш ніж відповісти Конфуцій завантажив термінал і почав набирати код на С++.
         *  - Скажи, - спитав він здивовану гостю, - коли функція приймає багато значень, це нормально?
         *  - Так, - відповіла жінка.
         *  - А коли функція повертає багато значень?
         *  - Теж нормально. Я ж пишу на пітоні.
         * Конфуцій розлютився і викрикнув:
         *  - Дурепа! Таку притчу зіпсувала!
         */
        section(`Про що взагалі мова?`, ...[
            paragraph(...[
                sentence(`Для прикладу візьмемо С++. `),
                sentence(`Функції у цій мові можуть приймати довільну кількість значень, але повертати здатні не більше ніж одне. `),
                sentence(`Ще цікаво те, що у випадку з аргументами зовсім не обов'язково вказувати їх відсутність. `),
                sentence(`Тобто існує можливість зробити це, використовуючи зарезервоване слово void, але змушувати вас ніхто не стане. `),
                sentence(`А от з результатом так не вийде: ви повинні або вказати його тип, або вказати void. `),
            ]),
            paragraph(...[
                sentence(`Власне, "повернення кількох значень з функції" - одне з доволі частих запитань від новачків. `),
                sentence(`І в середовищі С++ існує принаймні два поширених підходи для вирішення цього завдання. `),
                sentence(`Перший - це повертати з функції структуру з потрібною кількістю полів або масив. `),
                sentence(`Другий підхід - використовувати так звані out-аргументи. `),
                sentence(`Обидва підходи використовуються не лише в С++, але й в інших мовах. `),
                sentence(`В деяких з них (наприклад в С#) вони навіть стають частиною мови і перетворюються на окремі службові слова. `),
            ]),
            paragraph(...[
                sentence(`То в чому ж полягає тупість? `),
                sentence(`Ну хоча в б тому, що це незручно та абсолютно несправедливо. `),
                sentence(`Отримання двох значень з функції вимагає додаткових зусиль, в той час як передача двох значень підтримується "з коробки". `),
                sentence(`Аргументують це по-різному, але я не знаю жодного аргументу, який би не можна було обернути проти... аргументів функції (ба-дум-тцц за каламбур). `),
            ]),
            paragraph(...[
                sentence(`Єдине частково прийнятне виправдання для цього - історичне. `),
                sentence(`Математичні функції повертають один результат, тому й мови програмування цим грішать. `),
                sentence(`Але це також говорить і про те, що немає сенсу притримуватись цієї безпідставної практики. `),
                sentence(`Якщо концепція єдиного результату з'явилась випадково і необдумано, то ніхто не заважає викорінити її в будь-який момент. `),
            ]),
        ]),
        section(`Повертайте структуру! `, ...[
            paragraph(...[
                sentence(`Це, можливо, найпопулярніша відповідь на запитання стосовно асиметрії: мовляв повертати кілька значень не можна, зате можна повернути структуру. `),
                sentence(`Правда в залежності від мови і її насичення синтаксичним цукром, можуть з'являтись й додаткові перешкоди: наприклад, може знадобитись оголошення відповідної структури. `),
                sentence(`В мовах без статичної типізації, таких як JavaScript, з цього взагалі не роблять проблему, адже навіть різниця в записі нікчемна `, code_1, `. `),
            ]),
            code_1,
            paragraph(...[
                sentence(`Хоча така відповідь гарно пояснює спосіб виходу з ситуації, але, на жаль, вона зовсім не пояснює причину її виникнення, тому аргумент з неї ніякий. `),
                sentence(`Окрім цього, виходячи з таких же міркувань цілком можна обґрунтувати абсурдність передачі кількох аргументів. `),
                sentence(`Потрібно декілька аргументів - передавай їх структурою або масивом. `),
                sentence(`В такому випадку симетрія буде збережена, адже функція буде і приймати, і повертати лише одне значення. `),
            ]),
            paragraph(...[
                sentence(`Але так ніхто не робить... `),
                sentence(`Чому? `),
                sentence(`Тому що це достобіса незручно! `),
                sentence(`Нікому й за дарма не здались всі ці одноразові структури, що вже там говорити про їх формування перед кожним викликом. `),
                sentence(`Якщо ж ми робимо зручною передачу аргументів, то чому не можемо зробити зручним і повернення значень? `),
            ]),
            paragraph(...[
                sentence(`Тому я вважаю це швидше контраргументом, який показує беззмістовність асиметрії. `),
                sentence(`Принаймні доти, доки ви не збираєтесь загортати в структури ще й аргументи функції. `),
                sentence(`Ну і на останок: це `, emphasis(`не`), ` є закликом завжди повертати набір об'єктів замість структури і масиву. `),
                sentence(`У різних ситуаціях зручними можуть бути різні підходи і проблема в тому, що один з цих підходів - повернення кількох значень - неможливий. `),
            ]),
        ]),
        section(`Output-аргументи. `, ...[
            paragraph(...[
                sentence(`Друга стратегія - це передача в функцію посилань на об'єкти, які виступатимуть `, figurative(`додатковими`), ` результатами. `),
                sentence(`Створювати такі об'єкти доводиться самостійно, перед викликом функції, а от їх ініціалізація може відбуватись по-різному: деколи цим займається функція, а деколи той, хто її викликає. `),
                sentence(`Такий підхід часто використовується в мові С і там, де використовуються написані на ній бібліотеки. `),
                sentence(`Класичним прикладом може виступати функція для створення об'єкту, результат якої говорить про статус виконання, а output-аргумент виступає посиланням на сам об'єкт `, code_2, `. `),
            ]),
            code_2,
            paragraph(...[
                sentence(`Ця ідея теж є швидше способом виходу з ситуації, ніж поясненням чи аргументом. `),
                sentence(`Основні її вади полягають у тому, що:`),
            ]),
            list(...[
                [
                    sentence(`Додаткові результати потрібно явно оголошувати, причому окремою інструкцією. `),
                ],
                [
                    sentence(`В деяких випадках такі результати повинні оголошуватись неініціалізованими, адже вони в будь якому випадку пізніше будуть змінені. `),
                    // sentence(`Це допомагає уникнути зайвих присвоювань, але залишає небезпеку звернення до неініціалізованих змінних. `),
                ],
                [
                    sentence(`З попереднього твердження випливає і неможливість оголошення такої змінної як константи. `),
                    sentence(`Після виклику функції ніхто не завадить вам змінити її значення, навіть якщо ви цього не планували. `),
                ],
            ]),
            paragraph(...[
                sentence(`Незручність при ручному створенні додаткових змінних та передачі їх адрес в функцію аналогічна до тої, що виникає при поверненні структури. `),
                sentence(`Знову таки, чому один і лише один результат все ж можна отримати зручним способом, а решту - ні? `),
                sentence(`Чому б тоді не створювати змінну вручну і для нього? `),
                sentence(`Правильно: нікому це не потрібно, до хорошого звикаєш швидко. `),
            ]),
            paragraph(...[
                sentence(`Проблема ж з ініціалізацією загрозлива не лише в плані зручності, але й в плані можливих помилок. `),
                sentence(`Якщо функція ініціалізує змінну лише за певних умов, то ніхто не може гарантувати що після її виклику ми (з будь яких причин) не звернемось до сміттєвого значення. `),
                sentence(`Якщо ж ми з міркувань безпеки просто занулимо змінну, то виконаємо зайве присвоєння. `),
                sentence(`Ось цей вибір між надійністю і швидкодією - він не лише дурнувато нав'язаний, але ще й нічим не обґрунтований. `),
            ]),
            paragraph(...[
                sentence(`Ну і на останок: про святі для декого const. `),
                sentence(`В більшості мов і в С++ зокрема немає механізмів які б змушували функцію визначити значення переданої змінної лише раз. `),
                sentence(`Також немає і механізмів, які б заборонили змінювати її значення значення після виклику функції, що її "повертає". `),
                sentence(`Таким чином ми втрачаємо можливість використати один з дієвих методів захисту від помилок - const. `),
            ]),
        ]),
        section(`Популярні мови повертають лише одне значення. `, ...[
            paragraph(...[
                sentence(`Цей `, link(`argumentum ad antiquitatem`, argumentum_ad_antiquitatem), ` теж можна почути час від часу. `),
                sentence(`Мовля, якби повернення кількох значень і справді було б необхідним, то популярні мови давно б почали його підтримувати. `),
                sentence(`А оскільки це не так, то й множинне повернення не потрібне. `),
                sentence(`У такої аргументації є щонайменше дві проблеми: `),
            ]),
            list(...[
                [
                    `По-перше, ніколи точно не окреслюються межі, де починається і закінчується "необхідність". `,
                    `Наведені приклади зазвичай категоризуються опонентом як `, link(`не справжні шотландці`, scotsman), `, а їх кількість вважається недостатньою для впровадження механізму в мову. `,
                ],
                [
                    `По-друге, це банально не відповідає дійсності. `,
                    `Існують мови, які здатні повертати декілька значень. `,
                    `Причому, це далено не якісь `, link(`езотеричні мови`, esoteric), `, вигадані винятково для цього, а досить популярні `, link(`Python`, python), ` та `, link(`Lua`, lua), `. `,
                ],
            ]),
            paragraph(...[
                sentence(`... тут про пітон ...`),
                sentence(``),
                sentence(``),
            ]),
            paragraph(...[
                sentence(`... тут про луа ...`),
                sentence(``),
                sentence(``),
            ]),
        ]),
        section(`У всьому винні регістри? `, ...[
            paragraph(...[
                sentence(`Одним з небагатьох реальних аргументів повертати з функції лише одне значення є домовленість про порядок виклику `, link(`cdecl`, cdecl), `, яка є стандартною для багатьох компіляторів С х86. `),
                sentence(`Зокрема, ця домовленість передбачає те, що аргументи функції передаються через стек, а результат повертається через регістри: EAX для цілих чисел і ST0 для чисел з плавучою точкою. `),
                sentence(`Дотримання цієї домовленості важливе, оскільки її порушення може зробити код несумісним з тими функціями та програмами, які використовують cdecl. `),
            ]),
            paragraph(...[
                sentence(`Але cdecl далеко не єдина домовленість про порядок виклику. `),
                sentence(`І хоча деякі з альтернатив відрізняються лише деталями - порядком розміщення аргументів в стеці чи збереженням регістрів - існують й цікавіші варіанти. `),
                sentence(`Наприклад, `, link(`optlink`, optlink), ` використовує регістри також і для передачі кількох перших аргументів: EAX,ECX та EDX для цілих чисел і ST0-ST3 для чисел з плавучою комою. `),
                sentence(`Також існує `, link(`__fastcall`, fastcall), ` який використовує для аргументів ECX/EDX. `),
                sentence(`Це далеко не межа, оскільки за останні десятиліття кількість доступних регістрів зросла. `),
                sentence(`Наприклад, `, link(`__vectorcall`, vectorcall), ` дозволяє використовувати для передачі перших аргументів регістри `, link(`MMX`, mmx), `/`, link(`SSE`, sse), `. `),
            ]),
            paragraph(...[
                sentence(`Отож, існує безліч способів передати велику (більшу за один) кількість аргументів в функцію за допомогою регістрів. `),
                sentence(`Навіть якщо забути про регістри - є стек, ніхто не заважає користуватись ним. `),
                sentence(`Виходить, технічної складності повертати багато значень з функції немає, а навіть якби була - її ж можна перенести і на передачу аргументів. `),
            ]),
        ]),
        section(`Приклади функцій з кількома результатами. `, ...[
            paragraph(...[
                sentence(`... тут про ділення, яке повертає частку та остачу ...`),
                sentence(`... а тут про SINCOS ...`),
                sentence(``),
            ]),
        ]),
        section(`Наслідки. `, ...[
            paragraph(...[
                sentence(`Тут про resolve(x, y, z). `),
                sentence(``),
                sentence(``),
            ]),
        ]),
        section(paragraph(`Сектанти. `, `Сектанти everywhere. `), ...[
            paragraph(...[
                sentence(``),
                sentence(``),
                sentence(``),
            ]),
        ]),
        section(``, ...[
            paragraph(...[
                sentence(``),
            ]),
        ]),
    ),
});
