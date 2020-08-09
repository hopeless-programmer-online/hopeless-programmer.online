const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    list,
    sentence,
    emphasis,
    figurative,
    link,
    note,
    illustration,
    js,
    kw,
    v,
    f,
    c,
    p,
    lt,
    cm,
} = s;


exports = module.exports = new h.DocumentResource({
    Document : document([ `Як впихнути Bullet Physics. `, `В браузер.`, `Через TypeScript. `, `З використанням npm.` ], {},
        section(`Про що взагалі йде мова?`, ...[
            paragraph(...[
                sentence(`Деколи хочеться намалювати в браузері гарну інтерактивну сцену з реалістичною тривимірною фізикою. `),
                sentence(`Також, при цьому деколи хочеться писати код на TypeScript. `),
                sentence(`Ще рідше виникає потреба разом з цим використовувати npm для управління пакетами. `),
                sentence(`Ну і на десерт, деколи виникає потреба в симуляції м'яких тіл або нестандартної геометрії, які не завжди мають підтримку у рушіях фізики, принаймні для JavaScript. `),
            ]),
            paragraph(...[
                sentence(`У цій маленькій статті я розповім що робити, якщо всі ці "хочу" раптом перетнулись. `),
                sentence(`Ми створимо невелику демонстраційну сцену з Bullet Physics у ролі фізичного рушія та three.js у ролі графічного. `),
                sentence(`Також ми будемо використовувати TypeScript для написання коду замість JavaScript та npm у ролі пакетного менеджера. `),
                sentence(`В решті-решт, весь написаний код буде запакований за допомогою browserify та використаний в простій html сторінці. `),
                sentence(`Сама ж сторінка буде надаватись простим express сервером на безплатному хостингу Heroku. `),
            ]),
        ]),
        section(``, ...[
            paragraph(...[
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
