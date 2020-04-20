const path = require(`path`);
const hosting = require(`./hosting`);
const documenting = require(`./documenting`);


const h = hosting;
const s = documenting.shortcuts;


const home = require(`./host/home`);


exports = module.exports = new h.Host({
    Routes : {
        "/" : home,
        "/home" : home,
        "/about" : require(`./host/about`),
        // errors
        "/404" : new h.DocumentResource({
            Document : s.document([ `Сторінку не знайдено.`, `Код помилки : 404.` ],
                s.section(`У чому річ?`,
                    s.paragraph(
                        `Сторінка на яку ви намагаєтесь перейти не існує. `,
                        `Можливо вона була видалена, переміщена, або ніколи не існувала. `,
                    ),
                ),
            ),
        }),
        "/405" : new h.DocumentResource({
            Document : s.document([ `Метод не дозволений.`, `Код помилки : 405.` ],
                s.section(`У чому річ?`,
                    s.paragraph(
                        `Метод http за допомогою якого ви звертаєтесь до сайту не підтримується. `,
                        `Навряд чи таке могло статись випадково... ви точно не хакер? `,
                    ),
                ),
            ),
        }),
        "/500" : new h.DocumentResource({
            Document : s.document([ `Сторінку не знайдено.`, `Код помилки : 500.` ],
                s.section(`У чому річ?`,
                    s.paragraph(
                        `На сайті відбулась непередбачувана помилка. `,
                        `Вона була настільки непередбачуваною, що система навіть не в змозі надати вам її детальний опис! `,
                    ),
                    s.paragraph(
                        `Але не хвилюйтесь! `,
                        `Швидше за все перед тим як надіслати вам це повідомлення система зберегла всю важливу для розслідування інформацію. `,
                        `Наш спеціальний підрозділ з розслідування аварійних ситуацій невдовзі займеться цим. `,
                        `Начувайтесь, хакери! `,
                    ),
                ),
            ),
        }),
        // sass
        "/css/document.css" : new h.SASSResource({
            Path : path.join(__dirname, `../sass/document.scss`),
        }),
        // media
        "/media/favicon.ico" : new h.FileResource({
            Path : path.join(__dirname, `../media/favicon.ico`),
        }),
        "/media/but_i.png" : new h.FileResource({
            Path : path.join(__dirname, `../media/but_i.png`),
        }),
        "/media/html5.svg" : new h.FileResource({
            Path : path.join(__dirname, `../media/html5.svg`),
        }),
        "/media/css3.svg" : new h.FileResource({
            Path : path.join(__dirname, `../media/css3.svg`),
        }),
        "/media/es6.svg" : new h.FileResource({
            Path : path.join(__dirname, `../media/es6.svg`),
        }),
        "/media/jsx.png" : new h.FileResource({
            Path : path.join(__dirname, `../media/jsx.png`),
        }),
        "/media/nodejs.svg" : new h.FileResource({
            Path : path.join(__dirname, `../media/nodejs.svg`),
        }),
        "/media/sass.svg" : new h.FileResource({
            Path : path.join(__dirname, `../media/sass.svg`),
        }),
        "/media/jest.svg" : new h.FileResource({
            Path : path.join(__dirname, `../media/jest.svg`),
        }),
    },
});
