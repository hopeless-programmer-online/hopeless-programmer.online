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

const example_1 = illustration(``, l0(...[
    [ cm(`; оголошення програми "my program" яка приймає`) ],
    [ cm(`; значення x, y, z та повертає їх у зворотному порядку`) ],
    [ ``, f(`my program`), ` (`, v(`x`), `, `, v(`y`), `, `, v(`z`), `) {` ],
    [ `    `, cm(`; виклик програми "super" (аналог return)`) ],
    [ `    `, kw(`super`), `(`, v(`x`), `, `, v(`y`), `, `, v(`z`), `)` ],
    [ `}` ],
    [ `` ],
    [ cm(`; виклик програми "my program"`) ],
    [ cm(`; та отримання результатів u, v, w`) ],
    [ ``, v(`u`), `, `, v(`v`), `, `, v(`w`), ` : `, f(`my program`), `()` ],
]))
const example_2 = illustration(``, comparison(
    l0(...[
        [ cm(`; продовження отримується неявно`) ],
        [ ``, f(`f`), ` () {` ],
        [ `    `, kw(`super`), `(1)` ],
        [ `}` ],
        [ `` ],
        [ cm(`; продовження формується та`) ],
        [ cm(`; передається неявно`) ],
        [ v(`x`), ` : `, f(`f`), `()` ],
        [ `` ],
        [ ``, f(`print`), `(`, v(`x`), `)` ],
    ]),
    l0(...[
        [ cm(`; продовження отримується явно`) ],
        [ ``, f(`f`), ` (`, f(`super`), `) {` ],
        [ `    `, f(`super`), `(`, lt(`1`), `)` ],
        [ `}` ],
        [ `` ],
        [ cm(`; формування продовження`) ],
        [ ``, f(`then`), ` (`, v(`x`), `) {` ],
        [ `    `, cm(`; отримання значень`) ],
        [ `    `, cm(`; переданих в super`) ],
        [ `    `, f(`print`), `(`, v(`x`), `)` ],
        [ `}` ],
        [ `` ],
        [ cm(`; явна передача продовження then`) ],
        [ ``, f(`f`), `(`, f(`then`), `)` ],
    ]),
))
const example_3 = illustration(``, comparison(
    l0(...[
        [ cm(`; зовнішня програма`) ],
        [ ``, f(`f`), ` (`, v(`x`), `, `, v(`y`), `) {` ],
        [ `    `, cm(`; внутрішня програма`) ],
        [ `    `, f(`g`), `(`, v(`u`), `, `, v(`v`), `) {` ],
        [ `    }` ],
        [ `}` ],
    ]),
    l0(...[
        [ cm(`; неявні параметри:`) ],
        [ cm(`; f, super`) ],
        [ cm(`; явні параметри:`) ],
        [ cm(`; x, y`) ],
        [ ``, f(`f`), ` (`, f(`f`), `, `, kw(`super`), `, `, v(`x`), `, `, v(`y`), `) {` ],
        [ `}` ],
        [ `` ],
        [ cm(`; неявні параметри:`) ],
        [ cm(`; f, super, x, y, g, super`) ],
        [ cm(`; явні параметри:`) ],
        [ cm(`; u, v`) ],
        [ ``, f(`g`), ` (`, f(`f`), `, `, kw(`super`), `, `, v(`x`), `, `, v(`y`), `, `, f(`g`), `, `, kw(`super`), `, `, v(`u`), `, `, v(`v`), `) {` ],
        [ `}` ],
    ]),
))
const example_4 = illustration(``, l0(...[
    [ cm(`; шаблон інструкції "f":`) ],
    [ cm(`; [ 0, 2, 1 ]`) ],
    [ cm(`; контроль буде передано змінній №0 - g`) ],
    [ cm(`; в якості аргументів виступатимуть`) ],
    [ cm(`; змінні №2 - y та №1 - x`) ],
    [ `f(g, x, y) {` ],
    [ `    g(y, x)` ],
    [ `}` ],
]))
const example_5 = illustration(``, l0(...[
    [ `f (super, x, y) {` ],
    [ `    then3 (z) {` ],
    [ `        `, cm(`; print виведе z після чого`) ],
    [ `        `, cm(`; передасть керування super`) ],
    [ `        print(super, z)` ],
    [ `    }` ],
    [ `    ` ],
    [ `    `, cm(`; add передасть керування then3, разом`) ],
    [ `    `, cm(`; з результатом операції додавання`) ],
    [ `    add(then3, x, y)` ],
    [ `}` ],
    [ `` ],
    [ `then () {` ],
    [ `    then2 () {` ],
    [ `        `, cm(`; тут програма завершиться`) ],
    [ `    }` ],
    [ `    `, cm(`; цей виклик f після свого виконання`) ],
    [ `    `, cm(`; передасть керування then2`) ],
    [ `    f(then2, 3, 4)` ],
    [ `}` ],
    [ ``, cm(`; після свого виконання f`) ],
    [ ``, cm(`; передасть керування then`) ],
    [ `f(then, 1, 2)` ],
]))
const example_6 = illustration(``, l0(...[
    [ `f(then, add, y, x) {` ],
    [ `    `, cm(`; наступний виклик можна записати як:`) ],
    [ `    `, cm(`; [ 1, 0, 3, 2 ]`) ],
    [ `    add(then, x, y)` ],
    [ `    `, cm(`; керування буде передано змінній №1 (add)`) ],
    [ `    `, cm(`; в якості аргументів будуть передані змінні`) ],
    [ `    `, cm(`; №0 (then), №3 (x) та №2 (y)`) ],
    [ `}` ],
]))

export default  article(sentence(`Мова програмування `, L0, `. `), {}, ...[
    section(sentence(`Що таке `, L0, `? `), ...[
        paragraph(...[
            sentence(L0, ` - це маленька мова програмування створена мною для дослідження статичного аналізу. `),
            sentence(`Мета була проста: написати мову без статичної типізації, програми якої зможуть реалізувати її самостійно, без втручання транслятора. `),
            sentence(`Отримані мною результати охоплюють лише найпростіші концепції і на їх прикладах доводять, що такі поняття як система типів, статичний аналіз та оптимізація програми не зобов'язані бути в ядрі мови. `),
            sentence(`Їх спокійно можна виносити в користувацькі бібліотеки та залишати право їх вибору за користувачем. `),
        ]),
        illustration('', l0(...[
            [ f(`print`), `(`, lt(`"hello, world!"`), `)` ],
        ])),
        paragraph(...[
            sentence(`Хоч я і роблю акцент на контролі типів - це все ж далеко не єдиний спосіб застосування статичного аналізу. `),
            sentence(`Схожий підхід також може бути використаний для оптимізації програми, пошуку в ній вад та математичного доведення правильності її роботи. `),
            sentence(`Але все ж головною ідеєю залишаються не конкретні приклади практичного застосування, а сама концепція відділення таких систем від транслятора, від ядра мови. `),
        ]),
    ]),
    section(``, ...[
        paragraph(...[
            sentence(`Хоча при роботі над `, L0, ` я не сильно відштовхувався від якоїсь `, fig(`конкретної`), ` проблеми, для пояснення цієї роботи така проблема все ж знадобиться. `),
            sentence(fig(`Загальна`), ` проблема полягає в тому, що (як мені здається) системи типів сьогоднішніх мов дуже обмежені і надто прив'язані до самих мов та їх трансляторів. `),
            sentence(`Щоб показати чому я так вважаю - пропоную зробити крок назад: розглянути мови без статичної типізації і таким чином оцінити, яку роль вона може відігравати насправді. `),
        ]),
        paragraph(...[
            sentence(`В якості `, fig(`конкретного`), ` прикладу розглянемо функцію на JavaScript, яка перетворює число на форматовану стрічку (див. ). `),
            sentence(`Функція розраховує на те, що в якості аргументу x їй буде передано число у якого є метод toFixed(). `),
            sentence(`JavaScript не забезпечує статичного контролю типів, тому навіть не зважаючи на коментар з інформацією про них ніхто не заборонить передати в функцію, наприклад, стрічку. `),
            sentence(`Це, звичайно ж, буде помилкою, адже у стрічок немає потрібного методу і функція просто `, fig(`впаде`), `. `),
        ]),
        illustration(``, js(...[
            [ `/**` ],
            [ ` * @param   {number} x` ],
            [ ` * @returns {string}` ],
            [ ` */` ],
            [ `function formatNumber(x) {` ],
            [ `    return x.toFixed(2)` ],
            [ `}` ],
        ])),
        paragraph(...[
            sentence(`Така помилка зовсім не свідчить про недосвідченість чи непрофесійність користувача і припуститись її може кожен, хто не є роботом. `),
            sentence(`Але найгіршим у цій ситуації є `, emp(`не`), ` те, що ми не застраховані від помилки, а те, що ми навіть не можемо дізнатись про неї, доки не буде вже занадто пізно. `),
            sentence(`JavaScript аварійно зупинить виконання не в момент трансляції програми чи оголошення функції, а в момент, коли її буде викликано з неправильним аргументом. `),
            sentence(`Подібні помилки можуть роками залишатись непоміченими і жодні тести в жодних об'ємах не застрахують від них. `),
        ]),
        paragraph(...[
            sentence(`На щастя, таку помилку досить легко виявити, якщо вміти аналізувати програму ще до її запуску. `),
            sentence(`Достатньо просто перевірити усі місця виклику і пересвідчитись, що у функцію передається саме число, а не що-небудь інше. `),
            sentence(`На жаль для користувачів JavaScript, їх мова не проводить такого аналізу і не дуже сприяє його проведенню. `),
            sentence(`Але інші мови, наприклад TypeScript, усувають цей недолік (див. ). `),
            sentence(`Своєрідний статичний аналізатор який цим займається включений в саму мову, а правила згідно яких проводиться аналіз ми зокрема називаємо системою типів. `),
        ]),
        illustration(``, ts(...[
            [ `function formatNumber(x : number) {` ],
            [ `    return x.toFixed(2)` ],
            [ `}` ],
        ])),
        paragraph(...[
            sentence(`Але правила гри - система типів - міцно зв'язані з транслятором TypeScript і змінити або доповнити їх можна лише з його допомогою. `),
            sentence(``),
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
])
