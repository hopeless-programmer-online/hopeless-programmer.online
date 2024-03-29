import { illustration, paragraph, sentence, link, section, article, note, list, ref, fig, neg, kw, cm, cpp, c, f, v, lt, js, emp, code, cs, ns } from "../classes/shortcuts";

const code_1  = illustration('Фабрика. ', cpp(...[
    [ '', kw('class'), ' ', c('Product'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', kw('virtual'), ' ~', f('Product'), '() = ', kw('default'), ';' ],
    [ '};' ],
    [ '' ],
    [ '', kw('class'), ' ', c('Factory'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', kw('virtual'), ' ', c('Product'), '* ', f('Create'), '() = ', lt('0'), ';' ],
    [ '};' ],
]))
const code_2  = illustration('Реалізація фабрики.', cpp(...[
    [ '', kw('class'), ' ', c('ProductA'), ':' ],
    [ '    ', kw('public'), ' ', c('Product'), '' ],
    [ '{' ],
    [ '};' ],
    [ '' ],
    [ '', kw('class'), ' ', c('FactoryA'), ':' ],
    [ '    ', kw('public'), ' ', c('Factory'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', c('Product'), '* ', f('Create'), '() ', kw('override'), '' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', kw('new'), ' ', c('ProductA'), '();' ],
    [ '    }' ],
    [ '};' ],
    [ '' ],
    [ '', cm('// не залежить від ProductA та FactoryA') ],
    [ c('void'), ' ', f('useProduct'), '(', c('Factory'), '* ', v('factory'), ')' ],
    [ '{' ],
    [ '    ', kw('auto'), ' ', v('product'), ' = ', v('factory'), '->', f('Create'), '();' ],
    [ '};' ],
]))
const code_3  = illustration('Пироги та кондитери.',cpp(...[
    [ '', kw('class'), ' ', c('Pie'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', kw('virtual'), ' ~', f('Pie'), '() = ', kw('default'), ';' ],
    [ '};' ],
    [ '' ],
    [ '', kw('class'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', kw('virtual'), ' ', c('Pie'), '* ', f('Bake'), '() = ', lt('0'), ';' ],
    [ '};' ],
]))
const code_4  = illustration('Кориця.', cpp(...[
    [ '', cm('// пиріг з корицею') ],
    [ '', kw('class'), ' ', c('CinnamonPie'), ':' ],
    [ '    ', kw('public'), ' ', c('Pie'), '' ],
    [ '{' ],
    [ '};' ],
    [ '' ],
    [ '', cm('// "корицевий" пекар') ],
    [ '', kw('class'), ' ', c('CinnamonBaker'), ':' ],
    [ '    ', kw('public'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', c('Pie'), '* ', f('Bake'), '() ', kw('override'), '' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', kw('new'), ' ', c('CinnamonPie'), '();' ],
    [ '    }' ],
    [ '};' ],
]))
const code_5  = illustration('Ірис.', cpp(...[
    [ '', cm('// пиріг з ірисом') ],
    [ '', kw('class'), ' ', c('ButterscotchPie'), ':' ],
    [ '    ', kw('public'), ' ', c('Pie'), '' ],
    [ '{' ],
    [ '};' ],
    [ '' ],
    [ '', cm('// "ірисовий" пекар') ],
    [ '', kw('class'), ' ', c('ButterscotchBaker'), ':' ],
    [ '    ', kw('public'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', c('Pie'), '* ', f('Bake'), '() ', kw('override'), '' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', kw('new'), ' ', c('ButterscotchPie'), '();' ],
    [ '    }' ],
    [ '};' ],
]))
const code_6  = illustration('Аби працювати з CinnamonPie нам потрібно виконати приведення типів.', cpp(...[
    [ '', kw('auto'), ' ', v('baker'), '       = ', kw('new'), ' ', c('CinnamonBaker'), '();' ],
    [ '', kw('auto'), ' ', v('pie'), '         = ', v('baker'), '->', f('Bake'), '(); ', cm('// Pie*') ],
    [ '', kw('auto'), ' ', v('cinnamonPie'), ' = ', kw('dynamic_cast'), '<', c('CinnamonPie'), '>(', v('pie'), ');' ],
]))
const code_7  = illustration('Заміна типу результату при заміщенні методу.', cpp(...[
    [ '', cm('// "корицевий" пекар') ],
    [ '', kw('class'), ' ', c('CinnamonBaker'), ':' ],
    [ '    ', kw('public'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', cm('// повертаємо CinnamonPie* замість Pie*') ],
    [ '    ', c('CinnamonPie'), '* ', f('Bake'), '() ', kw('override'), '' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', kw('new'), ' ', c('CinnamonPie'), '();' ],
    [ '    }' ],
    [ '};' ],
]))
const code_8  = illustration('Ніяких проблем.', cpp(...[
    [ '', kw('class'), ' ', c('Pie'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', kw('virtual'), ' ~', f('Pie'), '() = ', kw('default'), ';' ],
    [ '};' ],
    [ '' ],
    [ '', kw('class'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', kw('virtual'), ' ', ns('std'), '::', c('shared_ptr'), '<', c('Pie'), '> ', f('Bake'), '() = ', lt('0'), ';' ],
    [ '};' ],
]))
const code_9  = illustration('Заміна типу результату при заміщенні методу.', cpp(...[
    [ '', cm('// "корицевий" пекар') ],
    [ '', kw('class'), ' ', c('CinnamonBaker'), ':' ],
    [ '    ', kw('public'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', cm('// помилка std::shared_ptr<CinnamonPie> та') ],
    [ '    ', cm('// std::shared_ptr<Pie> не є коваріантними') ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('CinnamonPie'), '> ', f('Bake'), '() ', kw('override'), '' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', ns('std'), '::', f('make_shared'), '<', c('CinnamonPie'), '>();' ],
    [ '    }' ],
    [ '};' ],
]))
const code_10 = illustration('Спроба одночасно і замістити, і перекрити віртуальний метод.', cpp(...[
    [ '', cm('// "корицевий" пекар') ],
    [ '', kw('class'), ' ', c('CinnamonBaker'), ':' ],
    [ '    ', kw('public'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', cm('// цей метод заміщує віртуальний метод базового класу') ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('Pie'), '>          ', c('Baker'), '::', f('Bake'), '() ', kw('override'), ';' ],
    [ '    ' ],
    [ '    ', cm('// а цей перекриває його, не заміщує') ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('CinnamonPie'), '>  ', f('Bake'), '();' ],
    [ '};' ],
]))
const code_11 = illustration('Ось як це могло б працювати.', cpp(...[
    [ c('void'), ' ', f('process_interface'), '(', c('Baker'), '* ', v('baker'), ')' ],
    [ '{' ],
    [ '    ', cm('// тут ми отримуємо Pie') ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('Pie'), '>         ', v('type'), ' = ', v('baker'), '.', f('Bake'), '();' ],
    [ '}' ],
    [ c('void'), ' ', f('process_implementation'), '(', c('CinnamonBaker'), '* ', v('baker'), ')' ],
    [ '{' ],
    [ '    ', cm('// а тут - CinnamonPie') ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('CinnamonPie'), '> ', v('type'), ' = ', v('baker'), '.', f('Bake'), '();' ],
    [ '}' ],
    [ '' ],
    [ c('void'), ' ', f('main'), '()' ],
    [ '{' ],
    [ '    ', cm('// створюємо "корицевого" пекаря') ],
    [ '    ', c('CinnamonBaker'), '* ', v('baker'), ' = ', kw('new'), ' ', c('CinnamonBaker'), '(', v('type'), ');' ],
    [ '    ' ],
    [ '    ', cm('// в цій функції буде отримано std::shared_ptr<CinnamonPie>') ],
    [ '    ', f('process_implementation'), '(', v('baker'), ');' ],
    [ '    ' ],
    [ '    ', cm('// а в цій - std::shared_ptr<Pie>') ],
    [ '    ', f('process_interface'), '(', v('baker'), ');' ],
    [ '}' ],
]))
const code_12 = illustration('Ось що про нашу проблему думає C#.', cs(...[
    [ '', cm('// шаблон для імітації розумних вказівників') ],
    [ '', kw('class'), ' ', c('shared_ptr'), '<T> {}' ],
    [ '' ],
    [ '', cm('// Класи для пирогів') ],
    [ '', kw('class'), ' ', c('Pie'), ' {}' ],
    [ '', kw('class'), ' ', c('CinnamonPie'), ': ', c('Pie'), ' {}' ],
    [ '' ],
    [ '', cm('// "інтерфейс" для пекаря') ],
    [ '', kw('abstract'), ' ', kw('class'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '    ', kw('public'), ' ', kw('abstract'), ' ', c('shared_ptr'), '<', c('Pie'), '> ', f('Bake'), '();' ],
    [ '}' ],
    [ '' ],
    [ '', cm('// проміжний клас для обходу обмежень мови') ],
    [ '', kw('class'), ' ', c('IntermediateCinnamonBaker'), ': ', c('Baker'), '' ],
    [ '{' ],
    [ '    ', cm('// заміщуємо віртуальний метод') ],
    [ '    ', kw('public'), ' ', kw('override'), ' ', c('shared_ptr'), '<', c('Pie'), '> ', f('Bake'), '()' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', kw('new'), ' ', c('shared_ptr'), '<', c('Pie'), '>();' ],
    [ '    }' ],
    [ '}' ],
    [ '' ],
    [ '', cm('// реалізація "корицевого" пекаря') ],
    [ '', kw('class'), ' ', c('CinnamonBaker'), ': ', c('IntermediateCinnamonBaker'), '' ],
    [ '{' ],
    [ '    ', cm('// перекриваємо віртуальний метод') ],
    [ '    ', kw('public'), ' ', kw('new'), ' ', c('shared_ptr'), '<', c('CinnamonPie'), '> ', f('Bake'), '()' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', kw('new'), ' ', c('shared_ptr'), '<', c('CinnamonPie'), '>();' ],
    [ '    }' ],
    [ '}' ],
]))
const code_13 = illustration('Явна вказівка на те, що метод потрібно перекрити, а не замістити.', cpp(...[
    [ '', kw('class'), ' ', c('CinnamonBaker'), ':' ],
    [ '    ', kw('public'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '    ...' ],
    [ '', kw('public'), ':' ],
    [ '    ', cm('// перекриваємо метод') ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('CinnamonPie'), '> ', f('Bake'), '() ', kw('overlap'), ';' ],
    [ '};' ],
]))
const code_14 = illustration('Перша стратегія обходу даної вади - назвати методи довгими і надмірними іменами.', cpp(...[
    [ '', kw('class'), ' ', c('Pie'), '' ],
    [ '{' ],
    [ '};' ],
    [ '', kw('class'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', kw('virtual'), ' ', ns('std'), '::', c('shared_ptr'), '<', c('Pie'), '> ', f('BakePie'), '();' ],
    [ '};' ],
    [ '' ],
    [ '', kw('class'), ' ', c('CinnamonPie'), ': ', kw('public'), ' ', c('Pie'), '' ],
    [ '{' ],
    [ '};' ],
    [ '', kw('class'), ' ', c('CinnamonBaker'), ': ', kw('public'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('public'), ':' ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('Pie'), '>         ', f('BakePie'), '() ', kw('override'), ';' ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('CinnamonPie'), '> ', f('BakeCinnamonPie'), '(); ', cm('// OK!') ],
    [ '};' ],
]))
const code_15 = illustration('Звичайний метод викликає віртуальний, який в свою чергу забезпечує поліморфізм.', cpp(...[
    [ '', kw('class'), ' ', c('Pie'), '' ],
    [ '{' ],
    [ '};' ],
    [ '', kw('class'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('protected'), ':' ],
    [ '    ', kw('virtual'), ' ', ns('std'), '::', c('shared_ptr'), '<', c('Pie'), '> ', f('BakePie'), '() = ', lt('0'), ';' ],
    [ '', kw('public'), ':' ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('Pie'), '> ', f('Bake'), '()' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', f('BakePie'), '();' ],
    [ '    }' ],
    [ '};' ],
]))
const code_16 = illustration('Тепер похідний клас може в деякому розумінні і перекрити і замістити необхідний метод.', cpp(...[
    [ '', kw('class'), ' ', c('CinnamonPie'), ': ', kw('public'), ' ', c('Pie'), '' ],
    [ '{' ],
    [ '};' ],
    [ '', kw('class'), ' ', c('CinnamonBaker'), ': ', kw('public'), ' ', c('Baker'), '' ],
    [ '{' ],
    [ '', kw('protected'), ':' ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('Pie'), '> ', f('BakePie'), '() ', kw('override'), '' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', ns('std'), '::', f('static_pointer_cast'), '(', f('Bake'), '());' ],
    [ '    }' ],
    [ '', kw('public'), ':' ],
    [ '    ', ns('std'), '::', c('shared_ptr'), '<', c('CinnamonPie'), '> ', f('Bake'), '()' ],
    [ '    {' ],
    [ '        ', kw('return'), ' ', ns('std'), '::', f('make_shared'), '<', c('CinnamonPie'), '>();' ],
    [ '    }' ],
    [ '};' ],
]))

const abstract_class_wiki       = 'https://uk.wikipedia.org/wiki/%D0%90%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BB%D0%B0%D1%81'
const covariance_wiki           = 'https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B2%D0%B0%D1%80%D1%96%D0%B0%D0%BD%D1%82%D0%BD%D1%96%D1%81%D1%82%D1%8C_%D1%96_%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%B0%D0%B2%D0%B0%D1%80%D1%96%D0%B0%D0%BD%D1%82%D0%BD%D1%96%D1%81%D1%82%D1%8C_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)'
const smart_pointers_wiki       = 'https://uk.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B7%D1%83%D0%BC%D0%BD%D1%96_%D0%B2%D0%BA%D0%B0%D0%B7%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8'
const factory_method_wiki       = 'https://uk.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B1%D1%80%D0%B8%D1%87%D0%BD%D0%B8%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)'
const virtual_method_wiki       = 'https://uk.wikipedia.org/wiki/%D0%92%D1%96%D1%80%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4'
const open_close_wiki           = 'https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF_%D0%B2%D1%96%D0%B4%D0%BA%D1%80%D0%B8%D1%82%D0%BE%D1%81%D1%82%D1%96/%D0%B7%D0%B0%D0%BA%D1%80%D0%B8%D1%82%D0%BE%D1%81%D1%82%D1%96'
const dependency_inversion_wiki = 'https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF_%D1%96%D0%BD%D0%B2%D0%B5%D1%80%D1%81%D1%96%D1%97_%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9'
const method_override           = 'https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D1%96%D1%89%D0%B5%D0%BD%D0%BD%D1%8F_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%83'
const smart_pointers            = 'https://uk.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B7%D1%83%D0%BC%D0%BD%D1%96_%D0%B2%D0%BA%D0%B0%D0%B7%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8'
const csharp                    = 'https://uk.wikipedia.org/wiki/C_Sharp'

const std_shared_ptr             = cpp(v('std'), '::', c('shared_ptr'));
const Baker                      = cpp(c('Baker'));
const Bake                       = cpp(f('Bake'), '()');
const Pie                        = cpp(c('Pie'));
const PieP                       = cpp(c('Pie'), '*');
const CinnamonBaker              = cpp(c('CinnamonBaker'));
const CinnamonBaker_Bake         = cpp(c('CinnamonBaker'), '::',f('Bake'));
const CinnamonPie                = cpp(c('CinnamonPie'));
const CinnamonPieP               = cpp(c('CinnamonPie'), '*');
const std_shared_ptr_Pie         = cpp(v('std'), '::', c('shared_ptr'), '<', c('Pie'), '>');
const std_shared_ptr_CinnamonPie = cpp(v('std'), '::', c('shared_ptr'), '<', c('CinnamonPie'), '>');
const shared_ptr                 = cs(c('shared_ptr'));
const IType                      = cs(c('IType'));
const IVariable                  = cs(c('IVariable'));


export default article([ 'Мистецтво війни з С++. ', 'Перекриття віртуальних методів. ' ], { created : new Date('2019-04-01') }, ...[
    section('', ...[
        paragraph(...[
            sentence('Не завжди недоліки мови можна побачити неозброєним оком. '),
            sentence('Деякі з них проявляються лише при вирішенні дуже специфічних завдань. '),
            sentence('Про існування цього я не знав аж доки кілька років тому не вирішив почати писати ', fig('правильний код'), '. '),
        ]),
        paragraph(...[
            sentence('Я вирішував банальну задачу але з використанням популярних і часто рекомендованих підходів. '),
            sentence('Серед них були ', neg('інтерфейси'), ' чисті ', link('абстрактні класи', abstract_class_wiki), ', ', link('коваріантність', covariance_wiki), ', ', link('розумні вказівники', smart_pointers_wiki), ' та ', link('фабричний метод', factory_method_wiki), '. '),
            sentence('І можливо все було б добре, якби я не спробував застосувати всі підходи одночасно. '),
            sentence('У підсумку мені таки вдалось змусити все працювати, але не без велосипедів та милиць. '),
            sentence('І виною всьому був той факт, що в ', link('С++', 'https://uk.wikipedia.org/wiki/C%2B%2B'), ' неможливо перекрити ', link('віртуальний метод', virtual_method_wiki), '. '),
            sentence('Вам напевно цікаво як все це пов\'язано? '),
        ]),
    ]),
    section('Мета?', ...[
        paragraph(...[
            sentence('Розглянемо шаблон проектування ', link('фабричний метод', factory_method_wiki), '. '),
            sentence('Його ідея полягає в тому, що ми делегуємо деякому об\'єкту - фабриці - створення інших об\'єктів ', code_1, '. '),
            sentence('При цьому і продукт який повертає фабрика, і метод його створення є поліморфними. '),
            sentence('Такий підхід дозволяє розширювати продукт та змінювати алгоритм його попередньої обробки, не втручаючись в код який цей продукт використовує ', code_2, '. '),
        ]),
        code_1,
        code_2,
        paragraph(...[
            sentence('Шаблон фабричний метод є дуже популярним, оскільки він дає змогу системі ', link('розширюватись', open_close_wiki), ' і робить користувачів залежними не від реалізацій, а ', link('від абстракцій', dependency_inversion_wiki), '. '),
            sentence('Проте реалізація цього шаблону в С++ може зіштовхнутись з проблемами. '),
            sentence('Зокрема, фабричний метод може виявитись несумісним з іншими цікавими підходами. '),
            sentence('Щоб показати це давайте спробуємо додати до нього коваріантність та розумні вказівники. '),
        ]),
    ]),
    section('Пироги!', ...[
        // [
        //     illustration([ 'Ірисово-корицевий пиріг. ', 'З любов'ю від Торіель. ' ], picture('./../../media/images/butterscotch_cinnamon_pie.png')),
        // ],
        paragraph(...[
            sentence('В якості прикладу ми розглянемо кондитерські вироби. '),
            sentence('Зокрема, пироги. '),
            sentence('Нам потрібен пекар який здатен їх пекти ', code_3, '. '),
            sentence('Причому пекарі та пироги розділені на два конкуруючі табори: пекарі які печуть пироги з корицею ', code_4, ' та пекарі які печуть пироги з ірисом ', code_5, '. '),
            sentence('В даному випадку пекар виступає фабрикою, а пиріг - продуктом цієї фабрики. '),
        ]),
        code_3,
        code_4,
        code_5,
    ]),
    section('Час покращувати код!', ...[
        paragraph(...[
            sentence('Можна звернути увагу на те, що метод ', CinnamonBaker_Bake, ' завжди повертає екземпляр класу ', CinnamonPie, '. '),
            sentence('Це важливо, адже можуть існувати користувачі які працює з класом ', CinnamonBaker, ' безпосередньо', note('Насправді мені просто було ліньки шукати матеріал по темі. '), '. '),
            sentence('В такому випадку вони могли б працювати з класом ', CinnamonPie, ' замість ', Pie, '. '),
            sentence('Але через те що ', CinnamonBaker_Bake, ' повертає ', PieP, ' а не ', CinnamonPieP, ' їм доведеться виконувати зайве приведення, та ще й вручну ', code_6, '. '),
        ]),
        paragraph(...[
            sentence('Аби запобігти цьому ми можемо використати той факт що класи ', Pie, ' та ', CinnamonPie, ' ', link('коваріанті', covariance_wiki), '. '),
            sentence('Це дозволяє нам замінити тип результату методу ', CinnamonBaker_Bake, ' при ', link('заміщенні', method_override), ' та повертати ', CinnamonPieP, ' замість ', PieP, ' ', code_7, '. '),
            sentence('Аналогічно можна вчинити і з ', fig('ірисовими'), ' класами. '),
        ]),
        code_6,
        code_7,
    ]),
    section('Розумні вказівники?',
        paragraph(
            sentence('Але є ще дещо що ми можемо ', fig('покращити'), '. '),
            sentence('Працювати з ', fig('сирими'), ' вказівниками не надто приємно, оскільки це спонукає до ручного керування пам\'яттю. '),
            sentence('На щастя саме з цих міркувань в С++ були додані ', link('розумні вказівники', smart_pointers), ', які представлені в тому числі і шаблонним класом ', std_shared_ptr, '. '),
        ),
        paragraph(
            sentence('Було б просто чудово якби ми могли усього лише замінити ', fig('зірочки'), ' на ', std_shared_ptr, ' і не докладати зайвих зусиль. '),
            sentence('Але С++ не дозволить зробити це так просто ', code_8, code_9, '. '),
            sentence('З інтерфейсом - абстрактними класами ', Pie, ' та ', Baker, ' - жодних проблем, на нього подібна заміна ніяк не вплине. '),
            sentence('А от реалізація зіштовхнеться з труднощами... '),
        ),
        code_8,
        code_9,
        paragraph(
            sentence('Справа в тому що класи ', std_shared_ptr_Pie, ' та ', std_shared_ptr_CinnamonPie, ' не є коваріантними. '),
            sentence('Це природно, адже вони навіть не зв\'язані ієрархією. '),
            sentence('Такий зв\'язок мають лише аргументи цих шаблонів, що, в принципі, погоду не змінює. '),
            sentence('Привести шаблони до такої ж ієрархії теж не варіант', note('Тих засобів, якими оперують шаблони в С++, в загальному випадку може бути недостатньо.'), '... що ж робити? '),
        ),
        paragraph(
            sentence('Можна було б провернути хитрий трюк ', code_10, '. '),
            sentence('По-перше, потрібно замістити віртуальний метод ', Bake, ' з класу ', Baker, ', тобто реалізувати його. '),
            sentence('По-друге, треба оголосити в класі ', CinnamonBaker, ' новий метод і перекрити попередній, той що оголошено в базовому класі ', Baker, '. '),
            sentence('Цей новий метод повертатиме ', std_shared_ptr_CinnamonPie, ' і може взагалі бути не віртуальним. '),
        ),
        code_10,
        paragraph(
            sentence('Таким чином ми могли б вбити двох зайців одним пострілом ', code_11, '! '),
            sentence('Користувач, що буде працювати з ', CinnamonBaker, ' через ', Baker, ' буде звертатись до заміщеного методу ', Bake, ', який повертає ', std_shared_ptr_Pie, '. '),
            sentence('Якщо ж працювати з об\'єктом через основний клас - ', CinnamonBaker, ' - ми будемо звертатись до перекритого методу ', Bake, ' і отримувати ', std_shared_ptr_CinnamonPie, '. '),
        ),
        code_11,
    ),
    section('Зруйновані надії, розбиті серця...',
        paragraph(
            sentence('Але в С++ неможливо зробити подібний трюк. '),
            sentence('Вся справа в тому, що ми не можемо перекрити віртуальний метод. '),
            sentence('Будь які спроби такого перекриття будуть сприйматись компілятором як намагання замістити віртуальний метод. '),
            sentence('Службових слів для вирішення подібних неоднозначностей немає. '),
        ),
        paragraph(
            sentence('І це проблема. '),
            sentence('Окрім цього, такий стан справ не дуже виправданий. '),
            sentence('Наприклад, в мові програмування ', link('C#', csharp), ' подібної проблеми не існує. '),
            sentence('Ми вільні як заміщувати віртуальні методи, так і перекривати їх. '),
            sentence('Єдиний недолік - не вийде зробити це одночасно, в тілі одного класу', note('В C# дану задачу можна було б вирішити і набагато простіше. ', 'Але задля коректності порівняння механізмів мови C# та С++ я наклав додаткові умови. ', sentence('Зокрема я використав шаблонний клас для ', shared_ptr, ' замість вбудованих посилань та оголосив ', IType, ' і ', IVariable, ' як абстрактні класи, а не як інтерфейси. '), 'Таким чином порівняння є більш справедливим, оскільки ми вирішуємо одну і ту ж задачу одними і тими ж методами. '), ' ', code_12, '. '),
        ),
        code_12,
        paragraph(
            sentence('Цікаво, що заважало реалізувати подібне в С++? '),
            sentence('Як на мене, то мові явно не вистачає службового слова яке б вказувало що даний віртуальний метод потрібно перекрити а не замістити. '),
            sentence('Можливо таким службовим словом міг би стати ', cpp(kw('overlap')), ' ', code_13, '. '),
        ),
        code_13,
    ),
    section('Милиці та ве́лики!',
        paragraph(
            sentence('Оскільки в С++ не передбачено штатних засобів для вирішення даної задачі - доведеться вдатись до винахідництва. '),
            sentence('Обійти цей недолік можна по різному, але я приведу тут лише два класичних підходи. '),
        ),
        paragraph(
            sentence('Перша стратегія банальна і проста - ми просто дамо другому методу інше ім\'я. '),
            sentence('Так, це не дуже гарно, але принаймні це працює. '),
            sentence('Якщо ми маємо можливість змінювати базовий клас то є сенс обізвати методи відповідно до назви класів які вони повертають ', code_14, '. '),
        ),
        code_14,
        paragraph(
            sentence('Але є і інша стратегія, причому вона дозволяє зберегти однакові назви публічних методів. '),
            sentence('Оскільки віртуальні методи перекривати не можна - ми будемо перекривати звичайні. '),
            sentence('Але щоб забезпечити поліморфізм ми введемо додатковий віртуальний метод який і буде надавати змогу змінити поведінку в похідних класах ', code_15, '. '),
            sentence('В даному випадку метод ', Bake, ' не віртуальний, його можна перекрити. '),
            sentence('Але доки його викликають через посилання на базовий клас ', Baker, ' він завжди буде повертати ', std_shared_ptr_Pie, '. '),
        ),
        code_15,
        paragraph(
            sentence('При реалізації похідного класу нам необхідно замістити ', cpp(f('BakePie'), '()'), '. '),
            sentence('Тут ми зможемо проводити ручне приведення типів, перетворювати ', std_shared_ptr_CinnamonPie, ' в ', std_shared_ptr_Pie, '. '),
            sentence('Але з іншого боку у нас зберігається можливість перекрити ', Bake, ' і повертати саме той клас, який є актуальним при роботі з ', CinnamonBaker, ' ', code_16, '. '),
        ),
        code_16,
    ),
    section('Підсумки',
        paragraph(
            sentence('Остання реалізація виглядає трохи дивною, вивернутою назовні. '),
            sentence('Це і справді так, адже віртуальним довелось зробити зовсім інший метод. '),
            sentence('Але принаймні вона дозволяє забезпечити однакові назви для публічних методів. '),
        ),
        paragraph(
            sentence('Це сумно що в наші дні доводиться вдаватись до подібних трюків. '),
            sentence('Але якщо дуже хочеться працювати з С++ і разом з цим використовувати популярні підходи до проектування, то, схоже, такі хитрощі неминучі. '),
            sentence('Залишається лише сподіватись на краще :с '),
        ),
    ),
])
