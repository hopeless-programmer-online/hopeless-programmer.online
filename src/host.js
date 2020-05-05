const path = require(`path`);
const hosting = require(`./hosting`);
const documenting = require(`./documenting`);


const d = documenting;
const h = hosting;
const s = documenting.shortcuts;


const home = require(`./host/home`);
const article_require = require(`./host/require`);
const article_1 = require(`./host/article-1`);
const article_2 = require(`./host/article-2`);


exports = module.exports = new h.Host({
    Routes : {
        "/" : home,
        "/home" : home,
        "/about" : require(`./host/about`),
        // sections
        "/articles" : new h.IndexResource({
            Index : new d.Index({
                Title : s.toSentences(`Статті`),
                Items : new d.IndexItems(
                    new d.IndexItem({
                        Content : new d.DocumentIndexItemContent({
                            Url      : `/require`,
                            Document : article_require.Document,
                        }),
                    }),
                    new d.IndexItem({
                        Content : new d.DocumentIndexItemContent({
                            Url      : `/article_1`,
                            Document : article_1.Document,
                        }),
                    }),
                    new d.IndexItem({
                        Content : new d.DocumentIndexItemContent({
                            Url      : `/article_2`,
                            Document : article_2.Document,
                        }),
                    }),
                ),
            }),
        }),
        // articles
        "/article_1" : article_1,
        "/article_2" : article_2,
        "/require" : article_require,
        // errors
        "/404" : require(`./host/404`),
        "/405" : require(`./host/405`),
        "/500" : require(`./host/500`),
        // sass
        "/css/common.css" : new h.SASSResource({
            Path : path.join(__dirname, `../sass/common.scss`),
        }),
        "/css/page.css" : new h.SASSResource({
            Path : path.join(__dirname, `../sass/page.scss`),
        }),
        "/css/index.css" : new h.SASSResource({
            Path : path.join(__dirname, `../sass/index.scss`),
        }),
        "/css/sentence.css" : new h.SASSResource({
            Path : path.join(__dirname, `../sass/sentence.scss`),
        }),
        "/css/document.css" : new h.SASSResource({
            Path : path.join(__dirname, `../sass/document.scss`),
        }),
        "/css/code.css" : new h.SASSResource({
            Path : path.join(__dirname, `../sass/code.scss`),
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
        "/media/react.svg" : new h.FileResource({
            Path : path.join(__dirname, `../media/react.svg`),
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
