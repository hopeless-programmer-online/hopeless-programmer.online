import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs } from "../classes/shortcuts";

const note_1 = note(`Деколи використовують й інше формулювання, яке зводиться до того, що ідентифікатори позначають "сутності мови". `, `Це часто залежить ще й від того, чи можливо розглядати ідентифікатори функцій та класів як звичайні змінні в контексті конкретної мови. `)
const note_2 = note(`Хоча конкретно зі статусом null можна і посперечатись, хтось може вважати його службовим словом. `)
const note_3 = note(`Ідентифікатори 2D, 3D та інші подібні до них зазвичай неможливо сплутати з шістнадцятковим представленням чисел. `, `Останнє часто має специфічний префікс (0х) або постфікс (h), які відрізняють їх від десяткових форм у випадку відсутності цифр більших від 9-ти. `, `Наприклад, число 45 в шістнадцятковій формі буде записано як 0х2D або 2Dh, але не як 2D. `)
const note_4 = note(`Така форма запису без префіксу 0х деколи використовується в асемблері. `)
const note_5 = note(`Насправді кількість таких виключень ще й потенційно нескінченна, оскільки чисел існує нескінченно багато. `, `Від цього рятує лише скінченність пам'яті самого комп'ютера. `)
const note_6 = note(`За такого формулювання можна вважати що аналіз від'ємного числа не включає в себе символ мінус і аналізує його окремо, як оператор. `, `Також можна окремо аналізувати форму запису яка починається з крапки (.0f або .5). `)
const note_7 = note(`Що свідчить зовсім не на користь сучасних регулярних виразів. `)
const note_8 = note(`Є і більш не серйозні приклади, на кшталт wait(4ever). `)
const note_9 = note(`Не у всіх мовах це можливо. `, `Наприклад, в C# перекриття локальних змінних заборонено. `)

export default article([ `Думки вголос. `, `Цифрова сегрегація ідентифікаторів.` ], ...[
    section(``, ...[
        paragraph(...[
            sentence(`Історично склалось так, що ідентифікатори в мовах програмування повинні не починатись з цифр. `),
            sentence(`І хоча переважна більшість розробників приймає це, я не вважаю такий стан справ достатньо виправданим. `),
            sentence(`Числові ідентифікатори можна і потрібно використовувати. `),
            sentence(`Для цього достатньо відмовитись від ідеї поділу слів на літерали та ідентифікатори і ставитись до них однаково, не зважаючи на те з якого символу вони починаються. `),
        ]),
    ]),
    section(`Ідентифікатори та літерали.`, ...[
        paragraph(...[
            sentence(`Стандартною практикою є поділ слів мови на ідентифікатори та літерали. `),
            sentence(`В той час як ідентифікатори позначають змінні`, note_1, ` літерали призначені для запису чисел, стрічок та інших об'єктів з певними сталими формами запису. `),
            sentence(`Цікаво те, що правила запису ідентифікаторів мають низку нюансів та виключень. `),
            sentence(`Якщо не приймати до уваги особливостей окремих мов то можна сформулювати наступні умови зовнішнього вигляду ідентифікаторів: `),
        ]),
        list(...[
            `Ідентифікатор є непорожньою довільною неперервною послідовністю літер, цифр, нижніх підкреслень або деяких спеціальних символів. `,
            `Ідентифікатор повинен не збігатись зі службовими словами та літералами. `,
            `Ідентифікатор повинен не починатись з цифри. `,
        ]),
        paragraph(...[
            sentence(`Перша умова унеможливлює існування ідентифікаторів з пропусками, переносами рядка, дужками, лапками та іншим. `),
            sentence(`Друга - надає особливий статус службовим словам які в переважній більшості випадків задовольняють першу умову. `),
            sentence(`Наприклад, хоча слово class є неперервною послідовністю літер воно все ж зарезервоване для оголошення класів і не може бути використане в якості ідентифікатора. `),
        ]),
        paragraph(...[
            sentence(`На перший погляд може здатись наче правило про літерали зайве, адже зазвичай це послідовності цифр або текст поміщений в лапки. `),
            sentence(`Але в класичному розумінні слова true, false та null є літералами`, note_2, `, а тому їх потрібно вводити в якості окремого виключення з правил. `),
            sentence(`Також можна згадати про типізовані числові літерали (0u, 0f, 0x0h) та форму запису експоненти (1e10) які теж виходять за межі "послідовності цифр". `),
        ]),
        paragraph(...[
            sentence(`Третя ж умова виглядає дивно. `),
            sentence(`Навіть якщо в мові присутні числа з літерами (вже згадані 0u та 0f) то такі збіги можна виключити другою умовою, яка забороняє ідентифікаторам збігатись з літералами. `),
            sentence(`Окрім цього таке обмеження робить неможливим існування ідентифікаторів які не конфліктують з літералами, на кшталт 1st, 2nd, 2D, 3D`, note_3, ` та інших. `),
            sentence(`Дивно що саме цим правилом зазвичай пояснюють неможливість оголошення відповідних ідентифікаторів. `),
        ]),
    ]),
    section(`Аргументація...`, ...[
        paragraph(...[
            sentence(`Один з найпопулярніших аргументів "першого символу" - це простота даного рішення. `),
            sentence(`У більшості мов ми не можемо уникнути числових літералів які містять літери. `),
            sentence(`Навіть якщо закрити очі на С/С++ та їхні 0u і 0f, то залишається низка інших мов з двійковою (101b) та шістнадцятковою (101h`, note_4, ` або 0x101) формою запису чисел, а також спеціальною формою запису експоненти (1е10). `),
            sentence(`Якщо дозволити ідентифікатори що починаються з цифри але не конфліктують з літералами то з'явиться величезна`, note_5, ` кількість "виключень з правил". `),
        ]),
        paragraph(...[
            sentence(`Ще один популярний аргумент наголошує на тому що такий підхід полегшує написання транслятора та засобів для підсвітки синтаксису в редакторах. `),
            sentence(`Якщо числа завжди починаються з цифри`, note_6, ` то на етапі синтаксичного аналізу можна ще з першого символу віднести їх до окремої категорії токенів. `),
            sentence(`Якщо ж вводити виключення для допустимих ідентифікаторів які не створюють конфліктів - то може бути проблематично вказати такі правила синтаксичного аналізу при використанні стандартних засобів - регулярних виразів`, note_7, `. `),
            sentence(`Навіть якщо й існують виправдані приклади використання таких ідентифікаторів, то їхня кількість надто незначна і не варта ускладнення існуючих засобів і стандартного підходу до синтаксичного аналізу. `),
        ]),
        paragraph(...[
            sentence(`Існує ще один, набагато менш популярний аргумент. `),
            sentence(`Його непопулярність може бути пояснена тим що здебільшого застосовний він лише до однієї єдиної мови - JavaScript - оскільки зав'язаний на її особливості. `),
            sentence(`Проблема полягає в тому що за певних умов JavaScript дозволяє використання неявно оголошених змінних. І в такому випадку якщо десь в коді зустрічається використання ідентифікатора який виглядає наче літерал то ми не можемо точно сказати що це за об'єкт. `),
            sentence(`Це може бути як, власне, літерал, так і змінна яка була оголошена десь в іншому місці через службове слово var. `),
            sentence(`В будь-якій іншій мові таку неоднозначність можна було б вирішити виходячи з порядку оголошення та області видимості, але не в JavaScript. `),
        ]),
    ]),
    section(`...з якою я не згідний.`, ...[
        paragraph(...[
            sentence(`Будь який з перерахованих вище аргументів можна посилити стандартними проблеми які пов'язані з неоднозначністю та перекриттям ідентифікаторів. `),
            sentence(`Так історично склалось і ми вже звикли до того що п'ятірка в коді позначає цифру 5 а не якусь змінну. `),
            sentence(`Навіть якщо закрити очі на це то незмінним залишається той факт що більшість сучасних мов все ж дозволяють перекриття, хоч і не надають механізмів для боротьби з ним. `),
            sentence(`Тобто навіть якщо ми знайдемо достатньо підстав для того щоб оголосити змінну 5, то після цього оголошення ми вже не зможемо звернутись до літералу 5. А це вже глухий кут. `),
        ]),
        paragraph(...[
            sentence(`Але особисто мені мало цих аргументів, навіть якщо комусь іншому їх вистачає. `),
            sentence(`Мене не влаштовує винятковий статус цифр в питанні оголошення ідентифікаторів. `),
            sentence(`Також мене не влаштовує виправдання яке спрощує життя розробникам компіляторів, але погіршує його користувачам мови. `),
            sentence(`Мені байдуже наскільки складно аналізувати текст програми, все таки цим займається мій комп'ютер і розумні люди які пишуть компілятор. `),
            sentence(`Для них то це точно не повинно бути нерозв'язною проблемою. `),
            sentence(`А те що числові ідентифікатори страждають від проблем з перекриттям в черговий раз підкреслює актуальність саме проблеми перекриття, не числових ідентифікаторів. `),
            sentence(`Особливо зважаючи на те що ця проблема стає перешкодою і в інших областях. `),
        ]),
    ]),
    section(`Реальні приклади?`, ...[
        paragraph(...[
            sentence(`Не зважаючи на те що цю проблему можна було б вирішити винятково з академічного інтересу, завжди знайдуться люди яким буде цікаво побачити хоча б один реальний приклад використання таких числових ідентифікаторів. `),
            sentence(`І одразу ж можна привести вже згадані ідентифікатори для позначення порядку або пріоритету: 1st, 2nd, 3rd, 4th, 5th і т.д.`, note_8, `. `),
            sentence(`Також цифру в якості першого символу можна використати для позначення об'єктів які описують простір або текстури: 1D, 2D, 3D, 4D. `),
            sentence(`Ну і гріх було б не згадати про те як жахливо (тому що по іншому ніяк) цей недолік обходять в С++, використовуючи імена _1, _2, _3 і т.д. в просторі імен std::placeholders. `),
        ]),
    ]),
    section(`Літералові ідентифікатори.`, ...[
        paragraph(...[
            sentence(`А все ж можна було б обіграти зовсім по іншому, не перетворюючи числа та стрічки на винятки з правил. `),
            sentence(`Одна з можливих стратегій - це перетворення літералів на ідентифікатори. `),
            sentence(`При цьому літерали оголошуються неявно, десь "за кулісами" глобальної області видимості. `),
        ]),
        paragraph(...[
            sentence(`Незалежно від моделі перекриття ідентифікаторів яка використовується в конкретній мові, за таких умов можна використовувати ті ідентифікатори які не конфліктують з літералами. `),
            sentence(`Сюди входять 1st/2nd, 1D/2D, 4ever та інші. `),
            sentence(`Якщо ж мова дозволяє перекривати ідентифікатори у вкладених областях`, note_9, ` то стають доступними і звичайні числа та стрічки. `),
            sentence(`У вже згаданому випадку з std::placeholders це точно не було б зайвим. `),
        ]),
        paragraph(...[
            sentence(`Важливо підкреслити те що така поведінка нічим не відрізняється від існуючих правил роботи з ідентифікаторами. `),
            sentence(`Єдине що змінюється - це неявне для користувача оголошення усіх необхідних в конкретному файлі літералів "за кулісами". `),
            sentence(`Також цей підхід може бути корисний для роботи зі стрічковими ідентифікаторами, які можуть містити пропуски та спеціальні символи. `),
            sentence(`Важливо врахувати і те що сучасні середовища розробки могли б при потребі не зображати лапки навколо тексту. `),
            sentence(`Це можна було б використати для візуального представлення коду не вдаючись до класичних верблюжого, зміїного або шашличного регістрів. `),
        ]),
        paragraph(...[
            sentence(`Синтаксичний аналіз такого коду теж не складає проблем. `),
            sentence(`Специфічні для літералів токени замінюються перевіркою оголошення ідентифікаторів під час звернення до них. `),
            sentence(`Якщо в конкретній області ідентифікатор не був оголошений і його текст може бути інтерпретований як число - він інтерпретується як число. `),
            sentence(`Якщо ж ідентифікатор вже оголошений - використовується відповідна змінна. `),
            sentence(`Ззовні ж усе виглядає так, наче в глобальній області неявно оголошені усі можливі числа та стрічки. `),
        ]),
        paragraph(...[
            sentence(`Проблемою залишається звернення до перекритих літералів. `),
            sentence(`Варто зауважити, що сучасні підходи до написання коду рідко передбачають використання чисел та стрічок в чистому вигляді. `),
            sentence(`Зазвичай їх використовують в якості констант або завантажених з файлу конфігурацій, що мінімізує ризики колізій в результаті перекриття. `),
            sentence(`Але все ж деколи це може стати перешкодою, як і в низці інших дрібних областей. `),
            sentence(`А тому важливо розвивати механізми для звернення до перекритих об'єктів, а не уникати тих які є вразливими до цієї вади. `),
        ]),
    ]),
    section(`Висновки.`, ...[
        paragraph(...[
            sentence(`Числові ідентифікатори майже не зустрічаються в сучасних мовах. `),
            sentence(`Це говорить про те що необхідність в них поки недостатньо виправдовує зміни в популярних підходах до розробки синтаксичних аналізаторів. `),
            sentence(`Сьогоднішній підхід до літералів породжує не достатньо виправдані винятки в дизайні мов та робить роботу з ідентифікаторами неоднорідною. `),
            sentence(`Якщо ж відмовитись від класичних підходів - можна уникнути цих обмежень. `),
        ]),
    ]),
])
