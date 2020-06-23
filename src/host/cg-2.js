const hosting = require(`../server/hosting`);
const documenting = require(`../server/documenting`);


const h = hosting;
const s = documenting.shortcuts;
const {
    document,
    section,
    paragraph,
    link,
    list,
    sentence,
    // emphasis,
    // figurative,
    // link,
    note,
    // illustration,
    // js,
    // kw,
    // v,
    // f,
    // c,
    // p,
    // lt,
    // cm,
} = s;


const mesa = `https://en.wikipedia.org/wiki/Mesa_(computer_graphics)`;


exports = module.exports = new h.DocumentResource({
    Document : document(
        [
            sentence(`Програмування комп'ютерної графіки. `),
            sentence(`OpenGL/С++. `),
            sentence(`"Привіт, трикутник!".`),
        ],
        { Date : new Date(`2020-06-24`) },
        section(`Що таке OpenGL?`, ...[
            paragraph(...[
                sentence(`OpenGL - це специфікація графічного інтерфейсу. `),
                sentence(`Якщо коротко - це набір структур та функцій, за допомогою яких можна виводити комп'ютерну графіку. `),
                sentence(`Ці функції не залежать від платформи, операційної системи чи мови програмування, а тому можуть бути реалізовані у вигляді драйверів або бібліотек коду. `),
                sentence(`Сьогодні OpenGL доступний для наступних платформ: `),
            ]),
            list(...[
                [
                    sentence(`Операційних систем Windows (включно з Windows 10), Linux та MacOS. `),
                ],
                [
                    sentence(`Відеокарт NVidia, AMD та Intel. `),
                ],
                [
                    sentence(`Доступний у вигляді бібліотек для мов С/С++, Python, C# та інших. `),
                ],
                [
                    sentence(`У якості програмної реалізації в бібліотеці `, link(`Mesa3D`, mesa), `. `),
                ],
            ]),
            paragraph(...[
                sentence(`Також у OpenGL є "дочірні" реалізації, для платформ відмінних від настільних комп'ютерів. `),
                sentence(`Усі вони в більшій мірі повторюють OpenGL, але все ж вважаються окремими бібліотеками і займають окремі ніші на ринку. `),
                sentence(`Зокрема, це:`),
            ]),
            list(...[
                [
                    sentence(`OpenGL ES. `),
                    sentence(`Використовується на мобільних пристроях та ігрових консолях. `),
                ],
                [
                    sentence(`OpenGL SC. `),
                    sentence(`Використовується на промисловому та медичному обладнанні. `),
                ],
                [
                    sentence(`WebGL. `),
                    sentence(`Використовується в браузерах. `),
                ],
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
                sentence(``),
                sentence(``),
            ]),
            paragraph(...[
                sentence(``),
                sentence(``),
                sentence(``),
            ]),
        ]),
    ),
});
