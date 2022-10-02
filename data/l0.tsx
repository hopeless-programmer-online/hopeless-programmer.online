import React from 'react'
import { article, c, cm, code, cs, emp, f, fig, illustration, js, jsx, kw, link, lt, neg, note, paragraph, py, quote, section, sentence, v, l0, cpp, lts, comparison, ts } from '../classes/shortcuts'

const poc = `https://en.wikipedia.org/wiki/Proof_of_concept`
const cps = `https://en.wikipedia.org/wiki/Continuation-passing_style`
const callback = `https://uk.wikipedia.org/wiki/Callback_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`
const sugar = `https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%82%D0%B0%D0%BA%D1%81%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D1%86%D1%83%D0%BA%D0%BE%D1%80`
const closure = `https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D0%B8%D0%BA%D0%B0%D0%BD%D0%BD%D1%8F_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)`
const firstClass = `https://uk.wikipedia.org/wiki/%D0%9E%D0%B1%27%D1%94%D0%BA%D1%82_%D0%BF%D0%B5%D1%80%D1%88%D0%BE%D0%B3%D0%BE_%D0%BA%D0%BB%D0%B0%D1%81%D1%83`
const coroutine = `https://en.wikipedia.org/wiki/Coroutine`
const exception = `https://en.wikipedia.org/wiki/Exception_handling`
const asyncAwait = `https://en.wikipedia.org/wiki/Async/await`
const routine = `https://en.wikipedia.org/wiki/Subroutine`
const machine = `https://uk.wikipedia.org/wiki/%D0%9C%D0%B0%D1%88%D0%B8%D0%BD%D0%B0_%D0%A2%D1%8E%D1%80%D1%96%D0%BD%D0%B3%D0%B0`
const calling = `https://en.wikipedia.org/wiki/Calling_convention`

class L0 extends React.Component {
    public render() {
        return (
            <i style={{ fontWeight : `bold`, color : `crimson`, fontFamily : `Helvetica` }}>L<sup>0</sup></i>
        )
    }
}

const code_0 = illustration(``, l0(...[
    [ `print("hello L0")` ],
]))
const code_declaration = illustration(
    sentence(`Оголошення програми в `, L0, ` не потребує службових слів. `),
    l0(...[
        [ cm(`; оголошення програми`) ],
        [ `do something() {` ],
        [ `    `, cm(`; тіло програми`) ],
        [ `}` ],
        [ `` ],
        [ cm(`; виклик програми`) ],
        [ `do something()` ],
    ]),
)
const code_arguments = illustration(
    paragraph(
        sentence(`Програма `, l0(kw(`super`)), ` є аналогом `, js(kw(`return`)), ` з інших мов і призначена для виходу та повернення результатів. `),
        sentence(`До останніх можна звернутись через двокрапку (`, l0(`:`), `) перед викликом. `),
    ),
    l0(...[
        [ cm(`; аргументи програми`) ],
        [ `reverse(x, y, z) {` ],
        [ `    `, cm(`; повернення результатів`) ],
        [ `    super(z, y, x)` ],
        [ `}` ],
        [ `` ],
        [ cm(`; отримання результатів`) ],
        [ `u, v, w : reverse(1, 2, 3)` ],
        [ `` ],
        [ `print(u, v, w) `, cm(`; 3 2 1`) ],
    ]),
)
const code_callback = illustration(
    sentence(`Програми в `, L0, ` можна передавати, повертати та зберігати. `),
    l0(...[
        [ `callback() {` ],
        [ `    print("hello from callback")` ],
        [ `}` ],
        [ `do something(callback) {` ],
        [ `    `, cm(`; виклик аргументу-програми`) ],
        [ `    callback()` ],
        [ `}` ],
        [ `` ],
        [ cm(`; програма передається як аргумент`) ],
        [ `do something(callback) `, cm(`; hello from callback`) ],
    ]),
)
const code_closure = illustration(
    sentence(`Приклад оголошення `, link(`замикання`, closure), `: програми, яка має доступ до зовнішніх змінних. `),
    l0(...[
        [ `make closure(text) {` ],
        [ `    `, cm(`; оголошення замикання`) ],
        [ `    closure() {` ],
        [ `        `, cm(`; closure має доступ до text`) ],
        [ `        print(text)` ],
        [ `    }` ],
        [ `    ` ],
        [ `    `, cm(`; повернення замикання`) ],
        [ `    super(closure)` ],
        [ `}` ],
        [ `` ],
        [ cm(`; повернення замикання`) ],
        [ `closure : make closure("hello from closure")` ],
        [ `` ],
        [ `closure() `, cm(`; hello from closure`) ],
    ]),
)
const code_global_arguments = illustration(
    paragraph(
        `Код файлу загортається в програму, в аргументи якої виносяться всі неоголошені змінні та літерали. `,
    ),
    comparison(
        l0(...[
            [ `x : +(1, 2)` ],
            [ `` ],
            [ `print("1 + 2 = ", x)` ],
        ]),
        l0(...[
            [ `main(+, 1, 2, print, "1 + 2 = ", end) {` ],
            [ `    x : +(1, 2)` ],
            [ `    ` ],
            [ `    print("1 + 2 = ", x)` ],
            [ `    ` ],
            [ `    end()` ],
            [ `}` ],
        ]),
    ),
)
const code_super = illustration(
    paragraph(
        sentence(`Перед кожним викликом `, L0, ` оголошує програму-продовження. `),
        sentence(`Ця програма відповідає за повернення і передається як неявний аргумент `, l0(kw(`super`)), `. `),
    ),
    comparison(
        l0(...[
            [ `reverse(x, y, z) {` ],
            [ `    super(z, y, x)` ],
            [ `}` ],
            [ `` ],
            [ `u, v, w : reverse(1, 2, 3)` ],
            [ `` ],
            [ `print(u, v, w)` ],
        ]),
        l0(...[
            [ `reverse(super, x, y, z) {` ],
            [ `    super(z, y, x)` ],
            [ `}` ],
            [ cm(`; оголошення продовження`) ],
            [ `continuation(u, v, w) {` ],
            [ `    print(u, v, w)` ],
            [ `}` ],
            [ `` ],
            [ cm(`; виклик програми та передача продовження`) ],
            [ `reverse(continuation, 1, 2, 3)` ],
        ]),
    ),
)
const code_outer_return = illustration(
    paragraph(
        sentence(``),
    ),
    l0(...[
        [ `outer() {` ],
        [ `    print("enter outer")` ],
        [ `    ` ],
        [ `    inner() {` ],
        [ `        `, cm(`; вихід з outer`) ],
        [ `        /super()` ],
        [ `    }` ],
        [ `    ` ],
        [ `    inner()` ],
        [ `    ` ],
        [ `    `, cm(`; ця стрічка не буде виконана`) ],
        [ `    print("leave outer")` ],
        [ `}` ],
        [ `` ],
        [ `outer()` ],
    ]),
)
const code_closure_arguments = illustration(
    paragraph(
        sentence(``),
    ),
    comparison(
        l0(...[
            [ `message(user) {` ],
            [ `    print("hello ", user)` ],
            [ `}` ],
        ]),
        l0(...[
            [ `message(print, "hello ", user) {` ],
            [ `    print("hello ", user)` ],
            [ `}` ],
        ]),
    ),
)
const code_get_buffer = illustration(
    paragraph(
        sentence(``),
    ),
    l0(...[
        [ `message(user) {` ],
        [ `    print("hello ", user)` ],
        [ `}` ],
        [ `` ],
        [ `buffer : get buffer(message)` ],
        [ `` ],
        [ `print(buffer) ; print, "hello, "` ],
    ]),
)
const code_get_template = illustration(
    paragraph(
        sentence(``),
    ),
    l0(...[
        [ cm(`; message(print, "hello, ", user)`) ],
        [ `message(user) {` ],
        [ `    print("hello ", user)` ],
        [ `}` ],
        [ `` ],
        [ `template : get template(message)` ],
        [ `targets : get targets(template)` ],
        [ `` ],
        [ `print(targets) ; [ 0, 1, 2 ]` ],
    ]),
)

export default  article([ sentence(`Мова програмування `, L0, `. `), sentence(`Програмований контроль типів. `) ], {}, ...[
    section([ `Як влаштована `, L0, `?` ], ...[
        // code_0,
        paragraph(...[
            sentence(`Основними виконуваними одиницями `, L0, ` є `, fig(`програми`), `. `),
            sentence(`Вони дуже схожі на `, link(`функції`, routine), ` з інших мов: їх можна оголошувати та викликати (див. `, code_declaration, `), вони приймають аргументи, послідовно виконують команди та повертають результати (див. `, code_arguments, `). `),
            sentence(`Програми в `, L0, ` є об'єктами `, link(`першого класу`, firstClass), `: їх можна передавати як аргументи, повертати або зберігати (див. `, code_callback, `). `),
        ]),
        code_declaration,
        code_arguments,
        code_callback,
        paragraph(...[
            sentence(`Також `, L0, ` підтримує `, link(`замикання`, closure), `: програми мають доступ до усіх змінних які оголошені до них (див. `, code_closure, `). `),
            sentence(`Неоголошені змінні виступають аргументами `, fig(`головної програми`), ` яка огортає весь код файлу (див. `, code_global_arguments, `). `),
            sentence(`Вона викликається безпосередньо інтерпретатором який і заповнює аргументи потрібними значеннями: числами, стрічками, стандартними програмами `, l0(`print`), `, `, l0(`if`), `, `, l0(`for`), `, тощо. `),
            sentence(`Таким чином, файл в `, L0, ` це програма. `),
        ]),
        code_closure,
        code_global_arguments,
        paragraph(...[
            sentence(`Повернення в `, L0, ` реалізоване через `, link(`передачу продовжень`, cps), `. `),
            sentence(link(`Синтаксичний цукор`, sugar), ` загортає весь код після виклику в `, link(`callback`, callback), ` який передається в програму як неявний аргумент `, l0(kw(`super`)), ` (див. `, code_super, `). `),
            sentence(`Оскільки `, l0(kw(`super`)), ` це програма, ми можемо приймати, повертати та зберігати його. `),
            sentence(`Це дає можливість виконувати в `, L0, ` повернення з зовнішньої програми (див. `, code_outer_return, `), реалізовувати `, link(`підпрограми`, coroutine), `, механізми `, link(`виключень`, exception), `, `, link(`асинхронні операції`, asyncAwait), `, тощо. `),
        ]),
        code_super,
        code_outer_return,
        paragraph(...[
            sentence(`Окрім `, l0(kw(`super`)), ` неявними аргументами виступають також і змінні які приймають участь у замиканні (див. `, code_closure_arguments, `). `),
            sentence(`Під час оголошення програми вони зберігаються в `, fig(`сховище`), ` та відновлюються з нього перед викликом, за аналогією до `, link(`порядку виклику`, calling), ` в низькорівневих мовах. `),
            sentence(`До сховища можна звернутись за допомогою `, l0([ f(`get buffer`), `(`, v(`program`) ,`)` ]), `, яка поверне збережений набір аргументів (див. `, code_get_buffer, `). `),
        ]),
        code_closure_arguments,
        code_get_buffer,
        paragraph(...[
            // sentence(`Оголошення в `, L0, ` теж є формою синтаксичного цукру. `),
            // sentence(`Оголошення в `, L0, ` теж є формою синтаксичного цукру навколо програми зв'язування `, l0(f(`bind`)), `. `),
            sentence(`Окрім сховища для роботи програми також необхідний її `, fig(`шаблон`), `. `),
            sentence(`Певною мірою шаблон є аналогією стану для `, link(`машини Тюрінга`, machine), ` і описує структуру програми, яка залежить лише від своїх аргументів. `),
            sentence(`Він вказує, якому аргументу програми буде передано керування і в якому порядку будуть передані параметри. `),
            sentence(`Наприклад, шаблон `, l0(`(a, b, c) -> b(a, c)`), ` позначає програму, яка передасть керування другому аргументу (`, l0(`b`), `), а перший та третій аргументи (`, l0(`a, c`), `) будуть передані в якості параметрів. `),
        ]),
        paragraph(...[
            sentence(`Шаблон зберігає свій стан як послідовність чисел: порядок наступної програми та її параметрів в аргументах. `),
            sentence(`Наприклад, для шаблону `, l0(`(a, b, c) -> b(a, c)`), ` порядком чисел буде `, l0(`1, 0, 2`), `. `),
            sentence(`Сам шаблон можна отримати за допомогою програми `, l0([ f(`get template`), `(`, v(`program`) ,`)` ]), `, а його послідовність за допомогою `, l0([ f(`get targets`), `(`, v(`template`) ,`)` ]), `. `),
        ]),
        code_get_template,
        paragraph(...[
            sentence(`Оголошення в `, L0, ` теж є формою синтаксичного цукру навколо програми зв'язування `, l0([ f(`bind`), `()` ]), `. `),
            sentence(`Її виклик поєднує шаблон та сховище, утворюючи нову програму. `),
            sentence(``),
            sentence(``),
        ]),
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
        paragraph(...[
            sentence(``),
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
    section(``, ...[
        paragraph(...[
            sentence(``),
        ]),
        paragraph(...[
            sentence(``),
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
