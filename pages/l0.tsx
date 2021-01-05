import React from 'react'
import Person from '../classes/person'
import { article, c, cm, code, cs, emp, f, fig, illustration, js, jsx, kw, link, lt, neg, paragraph, quote, section, sentence, v } from '../classes/shortcuts'
import Article from '../components/article'
import Page from '../components/page'

const esoteric = 'https://uk.wikipedia.org/wiki/%D0%95%D0%B7%D0%BE%D1%82%D0%B5%D1%80%D0%B8%D1%87%D0%BD%D1%96_%D0%BC%D0%BE%D0%B2%D0%B8_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F'

class l0 extends React.Component {
    public render() {
        return (
            <i style={{ fontWeight : 'bold', color : 'crimson', fontFamily : 'Helvetica' }}>L<sup>0</sup></i>
        )
    }
}

const example_linq = illustration('', cs(...[
    [ cm('// рейтинг студентів') ],
    [ kw('var'), ' ', v('rating'), ' =' ],
    [ '    ', kw('from'), '    ', v('student'), ' ', kw('in'), ' ', v('students') ],
    [ '    ', kw('where'), '   ', v('student'), '.', v('faculty'), ' == ', lt('"physics"') ],
    [ '    ', kw('where'), '   ', v('student'), '.', v('year'), ' == ', lt('2') ],
    [ '    ', kw('orderby'), ' ', v('student'), '.', v('score'), '' ],
    [ '    ', kw('group'), '   ', v('student'), ' ', kw('by'), ' ', v('student'), '.', v('group'), ' ', kw('into'), ' ', v('group'), '' ],
    [ '    ', kw('select'), '  ', kw('new'), ' { ', v('group'), ', ', v('student'), ' }' ],
]))
const example_jsx = illustration('', jsx(...[
    [ '', kw('class'), ' ', c('HomePage'), ' ', kw('extends'), ' ', c('React'), '.', c('Component'), ' {' ],
    [ '    ', f('render'), '() {' ],
    [ '        ', kw('return'), ' (' ],
    [ '            <', kw('article'), '>' ],
    [ '                <', kw('header'), '>' ],
    [ '                    <', kw('h1'), '>Ласкаво просимо на мій сайт!</', kw('h1'), '>' ],
    [ '                </', kw('header'), '>' ],
    [ '                <', kw('main'), '>' ],
    [ '                    <', kw('h2'), '>Заголовок</', kw('h2'), '>' ],
    [ '                    <', kw('p'), '>' ],
    [ '                        Лорем іпсум!' ],
    [ '                        Лорем іпсум!' ],
    [ '                        Лорем іпсум!' ],
    [ '                        Лорем іпсум!' ],
    [ '                    </', kw('p'), '>' ],
    [ '                </', kw('main'), '>' ],
    [ '                <', kw('footer'), '>' ],
    [ '                    мій сайт' ],
    [ '                </', kw('footer'), '>' ],
    [ '            </', kw('article'), '>' ],
    [ '        )' ],
    [ '    }' ],
    [ '}' ],
]))
const example_jsdoc = illustration('', js(...[
    [ cm('/**') ],
    [ cm(' * @param   {number} a') ],
    [ cm(' * @param   {number} b') ],
    [ cm(' * @returns {number}') ],
    [ cm(' */') ],
    [ kw('function'), ' ', f('add_numbers'), '(', v('a'), ', ', v('b'), ') {' ],
    [ '    ', kw('return'), ' ', v('a'), ' + ', v('b'), ';' ],
    [ '}' ],
]))

const model = article(sentence('Мова програмування ', l0, '. '), ...[
    section(sentence('Що таке ', l0, '? '), ...[
        paragraph(...[
            sentence(l0, ' - це мініатюрна мова програмування. '),
            sentence('Хоча ніхто не забороняє писати на ній повсякденні прикладні програми, це все ж може виявитись непомірно важкою роботою, адже ', l0, ' зовсім ', emp('не призначена'), ' для цього. '),
            sentence('Але разом з цим вона також не є жартом чи доведенням до абсурду, на відміну від, наприклад, багатьох ', link('езотеричних мов', esoteric), '. '),
            sentence('Тому в намаганні зрозуміти її марно покладатись на досвід, отриманий в роботі зі звичними мовами, адже основне призначення ', l0, ' - це не написання програм, а виявлення і дослідження меж застосовності штучних мов. '),
        ]),
        paragraph(...[
            sentence('У ', l0, ' немає жодної кінцевої мети, ', neg('лише шлях'), '. '),
            sentence('Причиною її створення були питання, але ', l0, ' не має на меті відповідати на них. '),
            sentence('Ця мова існує виключно тому, що без її існування досліджуваний з її допомогою предмет вислизає з поля зору. '),
            sentence('І це чиста правда, тому що до створення ', l0, ' я не лише не мав жодних припущень щодо можливих відповідей, а навіть не уявляв які питання потрібно ставити. '),
            sentence('Але аби пояснити що саме я маю на увазі і навіщо таки була написана ця мова мені доведеться привести кілька прикладів і ввести вас в курс справи. '),
            sentence('А до того часу навіть не намагайтесь думати про ', l0, ' як про звичайну мову програмування. '),
            sentence('Просто забудьте про це! '),
        ]),
    ]),
    section('Мовна різниця. ', ...[
        paragraph(...[
            sentence('Сьогодні існує дуже багато мов і всі вони дуже різні. '),
            sentence('Але не зважаючи на це у них є і багато схожих рис. '),
            sentence('Наскільки багато - залежить від того, що саме ми маємо на увазі коли говоримо про ', fig('схожість'), '. '),
            sentence('Наприклад, майже у всіх мовах ми можемо виконувати галуження і цикли, викликати функції і записувати вирази у зручній формі ', js([ v('a'), ' + ', v('b') ]), '. '),
            sentence('На противагу цьому деякі мови мають статичну типізацію а деякі - динамічну, одні підтримують множинне наслідування а інші - ні. '),
            sentence('Десь можливе перевантаження функцій чи операторів, десь підтримуються шаблони, десь співпрограми та асинхронний код і т.і. '),
            sentence('Чи можемо ми проводити різницю між мовами які відрізняються зовсім трохи? '),
            sentence('Якщо відмінності мізерні то чи є якийсь сенс в існуванні межі і чи може вона бути чіткою? '),
        ]),
        paragraph(...[
            sentence('Аби пояснити моє ставлення до цього я хотів би привести декілька прикладів. '),
            sentence('Перший з них стосується мови C# та однієї особливої форми запису в ній - linq. '),
            sentence('Вона стосується роботи з колекціями і є синтаксичним цукром який загалом зводиться до простої заміни тексту програми (див. ', example_linq, '). '),
            sentence('Наприклад, маючи список статей ', cs(v('articles')), ' ми можемо отримати список авторів кожної статті. '),
            sentence('Для цього нам потрібно виконати linq запит ', cs([ kw('from'), ' ', v('article'), ' ', kw('in'), ' ', v('articles'), ' ', kw('select'), ' ', v('article'), '.', v('author') ]), '. '),
            sentence('В ході компіляції цей запит буде перетворений на звичайний код ', cs([ v('articles'), '.', f('Select'), '(', v('article'), ' => ', v('article'), '.', v('author'), ')' ]), ', і від особливої форми запису не залишиться жодного сліду. '),
            sentence('Взагалі, ніхто не забороняє з самого початку використовувати методи замість запитів, що робить linq швидше надбудовою ніж фундаментальною особливістю мови. '),
        ]),
        example_linq,
        paragraph(...[
            sentence('Чи перестане C# бути C#, якщо з нього викинути linq? '),
            sentence('З одного боку - так, тому що це все ж частина мови. '),
            sentence('Але з іншого боку це зовсім не одне і те ж, якби з мови видалили конструкцію ', cs(kw('if')), ' або можливість оголошувати функції. '),
            sentence('Дуже схожа ситуація склалась з мовою JSX, яка дає можливість запису HTML/XML-подібних теґів всередині звичайного JavaScript коду (див. ', example_jsx, '). '),
            sentence('Як і у випадку з linq все зводиться до заміни тексту. '),
            sentence('Наприклад, вираз ', jsx([ '<', kw('span'), ' ', v('className'), '=', lt('"red"'), '>red text</', kw('span'), '>' ]), ' буде замінено на ', js([ c('React'), '.', f('createElement'), '(', lt('"span"'), ', { ', v('className'), ' : ', lt('"red"'), ' }, ', lt('"red text"'), ')' ]), ', тобто JSX це теж лише зручність але ніяк не новий функціонал. '),
        ]),
        example_jsx,
        paragraph(...[
            sentence('Але наскільки далеко можна зайти з таким підходом? '),
            sentence('Можливо, достатньо далеко, якщо ви пишете на JavaScript. '),
            sentence('Співпрограми в цій мові є лише синтаксичним цукром: виклик ', js(kw(`yield`)), ' насправді зводиться до повернення об\'єкта з лічильником всередині. '),
            sentence('Асинхронність тут теж примарна, тому що усі вирази на кшталт ', js([ kw('let'), ' ', v('x'), ' = ', kw('await'), ' ', f('f'), '()' ]), ' перетворюються на ', js([ f('f'), '().', f('then'), '(', v('x'), ' => { ... })' ]), '. '),
            sentence('Що залишиться з цієї мови, якщо прибрати з неї весь цукор, зробити ', fig('дієтичною'), '? '),
            sentence('Рано чи пізно ми дістанемось найбільш фундаментальних конструкції - об\'єктів (', js('{}'), '), масивів (', js('[]'), ') та індексації (', js([ v('a'), '.', v('b') ]), '). '),
            sentence('І якщо з останньою немає особливих проблем (вона зводиться до ', js([ v('a'), '[', lt('"b"'), ']' ]), '), то для формування об\'єктів можна хіба ввести спеціальні функцій. '),
            sentence('Навіть якщо так, що тоді робити з функціями? '),
            sentence('Чи можна скоротити їх? '),
        ]),
        paragraph(...[
            sentence('Можна піти й протилежним шляхом і спробувати збагатити мову новими формами запису. '),
            sentence('Зовсім не обов\'язково аби ці форми виходили за межі самої мови. '),
            sentence('Наприклад, ми можемо спробувати додати в динамічно типізовану мову деяку форму статичної типізації, записуючи обмеження що накладаються на типи в спеціально форматованих коментарях (див. ', example_jsdoc, '). '),
            sentence(' '),
            sentence(''),
        ]),
        example_jsdoc,
        // С# linq
        // JS XML
        // JS async/await
        // JS + JSDoc
    ]),
    section('', ...[
        paragraph(...[
            sentence(''),
        ]),
    ]),
])

export default class L0 extends React.Component {
    public render() {
        return (
            <Page>
                <Article model={model}/>
            </Page>
        )
    }
}
