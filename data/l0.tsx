import React from 'react'
import { article, c, cm, code, cs, emp, f, fig, illustration, js, jsx, kw, link, lt, neg, note, paragraph, py, quote, section, sentence, v, l0, cpp, lts, comparison, ts } from '../classes/shortcuts'

const poc = `https://en.wikipedia.org/wiki/Proof_of_concept`
const cps = `https://en.wikipedia.org/wiki/Continuation-passing_style`
const callback = `https://uk.wikipedia.org/wiki/Callback_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`
const sugar = `https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D1%86%D1%83%D0%BA%D0%BE%D1%80`
const closure = `https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D0%B8%D0%BA%D0%B0%D0%BD%D0%BD%D1%8F_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`
const first_class = `https://uk.wikipedia.org/wiki/%D0%9E%D0%B1%27%D1%94%D0%BA%D1%82_%D0%BF%D0%B5%D1%80%D1%88%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BB%D0%B0%D1%81%D1%83`

class L0 extends React.Component {
    public render() {
        return (
            <i style={{ fontWeight : `bold`, color : `crimson`, fontFamily : `Helvetica` }}>L<sup>0</sup></i>
        )
    }
}

const note_1 = note(
    sentence(`Мені не подобається термін `, fig(`типізація`), `, який часто вживають в мережі та літературі. `),
    sentence(`Натомість, я вживатиму термін `, fig(`контроль типів`), `. `),
    sentence(`Таким чином, наприклад, `, fig(`статичний контроль типів`), ` тут можна вважати `, fig(`статичною типізацією`), `, а `, fig(`програмований контроль типів`), ` - `, fig(`програмованою типізацією`), `. `),
)

export default  article([ sentence(`Мова програмування `, L0, `. `), sentence(`Програмований контроль типів. `) ], {}, ...[
    section(sentence(`Що таке `, L0, `? `), ...[
        paragraph(...[
            sentence(L0, ` - це невелика експериментальна мова програмування створена мною у 2021-у році. `),
            sentence(`Вона не є настільки ж повноцінною мовою, як, наприклад, JavaScript чи C: писати програми на ній складно. `),
            sentence(`Але це від неї і не вимагається, адже `, L0, ` створювалась винятково в якості прикладу доведення концепції програмованого контролю типів. `),
            sentence(`Далі у цій статті я поясню, що саме маю на увазі під цією концепцією, а також познайомлю читачів з самою мовою. `),
        ]),
        paragraph(...[
            sentence(`Поширений сьогодні підхід до контролю типів`, note_1, ` полягає у накладанні обмежень на змінні чи аргументи функцій. `),
            sentence(`Ці обмеження описуються за допомогою фіксованого набору правил, таких як числа, стрічки чи структури. `),
            sentence(`На відміну від цього програмований контроль передбачає, що ці обмеження реалізуються шляхом написання програм. `),
            sentence(`Іншими словами, замість вказування типів ми створюємо алгоритми, які аналізують структуру нашої програми. `),
            sentence(`А оскільки, як відомо, запрограмувати можливо все що завгодно, програмований контроль може бути розв'язком невирішуваних проблем для класичних підходів. `),
        ]),
        illustration(``, comparison(
            js(...[
                [ `function add(x, y) {` ],
                [ `    return x + y` ],
                [ `}` ],
            ]),
            ts(...[
                [ `function add(x : number, y : number) : number {` ],
                [ `    return x + y` ],
                [ `}` ],
            ]),
        )),
        paragraph(...[
            sentence(`Мова `, L0, ` була спроектована таким чином, щоб максимально спростити такий аналіз і показати, що програмований підхід принципово можливий. `),
            sentence(`У ній немає зручних структур які полегшують написання коду але як ми побачимо далі, разом з ними відсутня й потреба в складному алгоритмі перевірки. `),
            sentence(`Це не дозволяє використовувати `, L0, ` в повсякденному житті, але її приклад може показати, як контроль типів міг би бути реалізований в майбутніх мовах. `),
            sentence(`Гнучкіший, надійніший, програмований. `),
        ]),
    ]),
    section(`Проблема контролю типів. `, ...[
        paragraph(...[
            sentence(`Класичний контроль типів не є повноцінним. `),
            sentence(`З його допомогою неможливо описати `, fig(`будь-які`), ` обмеження: лише ті, які передбачені фіксованим набором правил та їх комбінацій. `),
            sentence(`Наприклад, реалізуючи функцію ділення ми не можемо гарантувати, що дільник не буде рівний нулю: для цього просто не існує відповідного правила. `),
            sentence(`Може здатись, що достатньо просто додати таке правило в мову, але це не вирішить проблему в цілому. `),
            sentence(`По-перше, конкретне правило спрацює лише для обмеженого набору випадків. `),
            sentence(`Для решти доведеться вводити нові правила, яких в загальному може бути нескінченно багато. `),
            sentence(`По-друге, це вимагатиме внесення змін в саму мову - в її транслятор - що по суті рівноцінне створенню нової мови. `),
        ]),
        illustration(``, ts(...[
            [ `// немає гарантії, що y != 0` ],
            [ `function divide(x : number, y : number) {` ],
            [ `    return x / y` ],
            [ `}` ],
        ])),
        paragraph(...[
            sentence(`Існує безліч інших прикладів які роблять підхід додавання правил `, fig(`за потреби`), ` неефективним. `),
            sentence(`Наприклад, не існує типу для опису відсортованого масиву, навіть при тому що в програмуванні сортування є досить поширеною операцією. `),
            sentence(`Без такого контролю ми не лише не можемо перевірити, що правильно реалізували сортування, але й не можемо гарантувати передачу такого масиву в алгоритми які покладаються на сортування. `),
            sentence(`Для інтерфейсів роботи з файлами ми не можемо гарантувати, що перед методами `, ts(`read()`), ` та `, ts(`write()`), ` був викликаний `, ts(`open()`), ` і не був викликаний `, ts(`close()`), `. `),
            // sentence(`Деякі з цих проблем ми вирішуємо у інший спосіб, просто тому, що сьогодні контроль типів не може тут нічим зарадити. `),
            sentence(`Навіть якщо ввести нові типи для цих проблем знайдуться сотні інших, яким доведеться чекати на власні типи. `),
        ]),
        illustration(``, ts(...[
            [ `// тип Sorted гарантує, що повернений масив відсортований` ],
            [ `function mySort(array : number[]) : Sorted<number> {` ],
            [ `    // реалізація` ],
            [ `}` ],
        ])),
        illustration(``, ts(...[
            [ `// тип Sorted гарантує, що переданий масив відсортований` ],
            [ `function binarySearch(x : number, array : Sorted<number>) {` ],
            [ `    // ...` ],
            [ `}` ],
        ])),
        illustration(``, ts(...[
            [ `file.open()` ],
            [ `` ],
            [ `file.read() // ok` ],
            [ `file.write() // ok` ],
            [ `` ],
            [ `file.close()` ],
            [ `` ],
            [ `file.read() // помилка, файл не відкрито` ],
        ])),
        paragraph(...[
            sentence(`Все зводиться до того, що з наявною системою типів ми не можемо описати `, fig(`будь-що`), `. `),
            sentence(`Навіть якщо ми знаємо як перевірити чи масив відсортовано, ми не можемо записати це у вигляді типу в TypeScript або C++. `),
            sentence(`Це дуже схоже на те, як неможливо написати `, fig(`будь-яку`), ` програму на SQL або HTML: обидві мови є дуже обмежено застосовними та декларативними`, note(`А друга так взагалі не є мовою програмування. `), `. `),
            sentence(`Вони призначені для опису того `, fig(`що`), ` ми хочемо отримати, але не `, fig(`яким чином`), `. `),
            sentence(`З їх допомогою неможливо записати алгоритм, послідовність дій. `),
            sentence(`Такі ж обмежені декларативні мови ми використовуємо сьогодні для опису типів. `),
        ]),
        paragraph(...[
            sentence(`Тому, можливо, замість обмеженого набору типів є сенс використовувати саме програмований підхід. `),
            sentence(`Якби для контролю типів необхідно було написати програму яка його реалізує, це б `, fig(`розв'язало руки`), ` розробникам. `),
            sentence(`Контроль перестав би залежати від мови і перейшов би в зону відповідальності користувацьких бібліотек. `),
            sentence(`Для перевірки того як це могло б виглядати і створювалась  `, L0, `. `),
        ]),
    ]),
    section(sentence(`Мова програмування `, L0, `. `), ...[
        paragraph(...[
            sentence(L0, ` вкрай мінімалістична мова. `),
            sentence(`Її основною виконуваною одиницею є `, fig(`програма`), `, а весь синтаксис складається лише з двох конструкцій`, note(`Окрім коментарів, які я чомусь вирішив не враховувати. `), `: `, fig(`оголошення`), ` та `, fig(`виклику`), `. `),
            sentence(`Оголошення програми схоже на оголошення звичайної функції в JavaScript чи Python але не потребує службових слів. `),
            sentence(`Програми взагалі дуже схожі на функції: у них є аргументи, список команд, можливість зупинитись та повернути значення, тощо. `),
            sentence(`Як і функції в багатьох мовах, програми в `, L0, ` є об'єктами першого класу: ми можемо передавати їх в якості аргументів та повертати. `),
        ]),
        illustration(``, l0(...[
            [ `; оголошення програми` ],
            [ `main() {` ],
            [ `    ; тіло програми` ],
            [ `    print("hello, world!")` ],
            [ `}` ],
        ])),
        illustration(``, l0(...[
            [ `; оголошення програми` ],
            [ `main(callback) {` ],
            [ `    ; виклик програми аргументу` ],
            [ `    callback()` ],
            [ `}` ],
            [ `callback() {` ],
            [ `    print("hello, callback!")` ],
            [ `}` ],
            [ `` ],
            [ `main(callback)` ],
        ])),
        illustration(``, comparison(
            l0(...[
                [ `f()` ],
                [ `g()` ],
                [ `h()` ],
            ]),
            l0(...[
                [ `super f() {` ],
                [ `    super g() {` ],
                [ `        h()` ],
                [ `    }` ],
                [ `    ` ],
                [ `    g(super g)` ],
                [ `}` ],
                [ `` ],
                [ `f(super f)` ],
            ]),
        )),
        paragraph(...[
            sentence(`Виклик програми теж виглядає як виклик звичайної функції: достатньо записати круглі дужки `, l0(`()`), ` та перелічити аргументи`, note(sentence(`Аргументами в `, L0, ` можуть бути лише прості значення. `), sentence(`Виклики типу `, l0(`f(g())`), ` не підтримуються. `)), `. `),
            sentence(`Програми в `, L0, ` здатні повернути одразу декілька результатів за допомогою `, l0([ kw(`super`), `()` ]), `, а на стороні виклику до них можна звернутись через кому та записавши перед викликом двокрапку `, l0(`:`), `. `),
            sentence(l0(kw(`super`)), ` не є службовим словом - це неявний аргумент-продовження, який передається в кожну програму. `),
            sentence(`Вся `, L0, ` побудована на ідеї передачі продовжень: замість повернення значень продовження передаються в якості функцій зворотнього виклику. `),
            sentence(`Це відбувається неявно, наче весь код після виклику загортається в callback, а програма отримує додатковий аргумент. `),
            sentence(`Таким чином, повернення з програми в `, L0, ` насправді є викликом програми. `),
        ]),
        illustration(``, l0(...[
            [ `my program(x, y, z) {` ],
            [ `    ; повернення результатів` ],
            [ `    super(1, 2, 3)` ],
            [ `}` ],
            [ `` ],
            [ `; отримання результатів` ],
            [ `u, v, w : my program(a, b, c)` ],
        ])),
        illustration(``, comparison(
            l0(...[
                [ `; оголошення програми` ],
                [ `program(x, y) {` ],
                [ `    super(x, y)` ],
                [ `}` ],
                [ `` ],
                [ `; виклик програми` ],
                [ `u, v : program(1, 2)` ],
                [ `` ],
                [ `; вивід результату` ],
                [ `print(u, v)` ],
            ]),
            l0(...[
                [ `; оголошення програми` ],
                [ `program(super, x, y) {` ],
                [ `    super(x, y)` ],
                [ `}` ],
                [ `` ],
                [ `; оголошення продовження` ],
                [ `super(u, v) {` ],
                [ `    ; вивід результату` ],
                [ `    print(u, v)` ],
                [ `}` ],
                [ `` ],
                [ `; виклик програми, передача продовження` ],
                [ `program(super, 1, 2)` ],
            ]),
        )),
        paragraph(...[
            sentence(`Під час оголошення програма замикає усі змінні оголошені до неї, даючи можливість звернутись до них під час виклику. `),
            sentence(`Замкнені змінні зберігаються у вигляді неявних аргументів, які `, L0, ` відновить зі спеціального сховища безпосередньо перед викликом. `),
            sentence(`Як і у випадку з `, l0([ kw(`super`), `()` ]), ` все це відбувається неявно, а ззовні виглядає так, наче програма була викликана з усіма потрібними аргументами. `),
            sentence(`Звичайно замкнені змінні також об'єднуються і з продовженнями: в решті-решт під час виклику кожна програма отримує довжелезний список з усіх змінних та продовжень, явних та неявних. `),
            sentence(`Але все це залишається непомітним, схованим від користувача. `),
        ]),
        illustration(``, l0(...[
            [ `; якась змінна` ],
            [ `value : get value()` ],
            [ `` ],
            [ `; оголошення програми` ],
            [ `my program() {` ],
            [ `    ; тут можна звернутись до value` ],
            [ `    super(value)` ],
            [ `}` ],
        ])),
        illustration(``, comparison(
            l0(...[
                [ `; зовнішня змінна` ],
                [ `x : get x()` ],
                [ `` ],
                [ `; оголошення програми` ],
                [ `my program(y) {` ],
                [ `    super(x, y)` ],
                [ `}` ],
                [ `` ],
                [ `; виклик програми` ],
                [ `my program(2)` ],
            ]),
            l0(...[
                [ `; зовнішня змінна` ],
                [ `x : get x()` ],
                [ `` ],
                [ `; оголошення програми` ],
                [ `; x тепер явний аргумент` ],
                [ `my program(x, y) {` ],
                [ `    super(x, y)` ],
                [ `}` ],
                [ `` ],
                [ `; виклик програми` ],
                [ `my program(x, 2)` ],
            ]),
        )),
    ]),
    section(sentence(`Внутрішня структура програми. `), ...[
        paragraph(...[
            sentence(`Остання важлива особливість `, L0, ` полягає в тому, що оголошення програми теж є викликом. `),
            sentence(`Для роботи замикань, під час оголошення програми потрібно зберегти всі попередньо оголошені змінні в сховище. `),
            sentence(`Цим займається спеціальна програма зв'язування: `, l0([ kw(`bind`), `()` ]), `. `),
            sentence(`Але оскільки виклик `, l0(kw(`bind`)), ` нічим не відрізняється від будь якого іншого виклику, перед ним потрібно оголосити програму-продовження та зв'язати її з зовнішніми змінними. `),
            sentence(`Тому `, l0(kw(`bind`)), ` працює одночасно з двома програмами: цільовою програмою яка оголошується та програмою-продовженням. `),
            sentence(`Після зв'язування обох керування буде передано в продовження, яке отримає всі аргументи `, l0(kw(`bind`)), ` та зв'язану цільову програму. `),
        ]),
        illustration(``, l0(...[
            [ `; #continuation - незв'язане продовження` ],
            [ `; #target - незв'язана цільова програма` ],
            [ `; arg0-N - неявні аргументи` ],
            [ `bind(#continuation, #target, arg0, arg1, ..., argN) {` ],
            [ `    ; тут відбувається магія зв'язування` ],
            [ `    ; target - зв'язана цільова програма` ],
            [ `    ; arg0, arg1 ... argN збережені в сховищі target` ],
            [ `    ; передача керування в продовження` ],
            [ `    #continuation(arg0, arg1, ..., argN, target)` ],
            [ `}` ],
        ])),
        illustration(
            paragraph(...[
                sentence(`Приклад процесу зв'язування. `),
                sentence(`Незв'язані `, l0(f(`#program`)), ` та `, l0(f(`#continuation`)), ` мають однаковий набір аргументів, який заповнюється під час зв'язування. `),
                sentence(`Зв'язаний `, l0(f(`program`)), ` міститиме `, l0(f(`print`)), `, `, l0(lt(`"hello"`)), l0(lt(`"done"`)), ` та `, l0(f(`program`)), ` (посилання на самого себе) у власному сховищі і зможе відновити їх під час виклику. `),
                sentence(`Приклад не є повним і не ілюструє зв'язування команд всередині `, l0(f(`program`)), ` та продовження. `),
            ]),
            comparison(
                l0(...[
                    [ `; зовнішні змінні:` ],
                    [ `; print, "hello", "done"` ],
                    [ `` ],
                    [ `; оголошення програми` ],
                    [ `program() {` ],
                    [ `    print("hello")` ],
                    [ `}` ],
                    [ `` ],
                    [ `; весь код після оголошення` ],
                    [ `; по суті є продовженням` ],
                    [ `program()` ],
                    [ `` ],
                    [ `print("done")` ],
                ]),
                l0(...[
                    [ `; #program - незв'язана program` ],
                    [ `#program(print, "hello", "done", program) {` ],
                    [ `    print("hello")` ],
                    [ `}` ],
                    [ `; #continuation - незв'язане продовження` ],
                    [ `#continuation(print, "hello", "done", program) {` ],
                    [ `    program()` ],
                    [ `    ` ],
                    [ `    print("done")` ],
                    [ `}` ],
                    [ `` ],
                    [ `; зв'язування` ],
                    [ `bind(#continuation, #program, print, "hello", "done")` ],
                ]),
            ),
        ),
        paragraph(...[
            sentence(`Описана вище послідовність дій застосовується лише при оголошенні, але не під час виклику. `),
            sentence(`Через необхідність окремо передавати явні аргументи для нього процес розбитий на два етапи: підготовка продовження та передача керування. `),
            sentence(`Для простоти сприйняття наведені вище приклади не демонстрували усієї картини - окремих етапів зв'язування та передачі керування для кожної команди. `),
            sentence(`Але насправді подібні дії відбуваються завжди. `),
            sentence(`Кожна команда `, L0, ` зводиться або до зв'язування, або до двох кроків зв'язування та передачі керування. `),
        ]),
        paragraph(...[
            sentence(`На такому рівні програми втрачають свою звичну структуру і перетворюються на ланцюжок окремих ланок: незв'язаних програм. `),
            sentence(`Кожна така ланка виконує лише один крок: вказує наступну ланку для виконання - `, l0(kw(`bind`)), ` або іншу вже зв'язану програму - і порядок, в якому необхідно передавати аргументи. `),
            sentence(`Оскільки всі аргументи наступної ланки містяться в списку попередньої, не існує жодних зовнішніх змінних. `),
            sentence(`Знаючи про структуру такого ланцюжка і його початковий стан можна проводити аналіз програми не запускаючи її. `),
        ]),
    ]),
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        paragraph(...[
            sentence(``),
        ]),
    ]),
])
