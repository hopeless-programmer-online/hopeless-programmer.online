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
const article_3 = require(`./host/article-3`);
const article_4 = require(`./host/article-4`);
const article_5 = require(`./host/article-5`);


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
                    new d.IndexItem({
                        Content : new d.DocumentIndexItemContent({
                            Url      : `/article_3`,
                            Document : article_3.Document,
                        }),
                    }),
                    new d.IndexItem({
                        Content : new d.DocumentIndexItemContent({
                            Url      : `/article_4`,
                            Document : article_4.Document,
                        }),
                    }),
                    new d.IndexItem({
                        Content : new d.DocumentIndexItemContent({
                            Url      : `/article_5`,
                            Document : article_5.Document,
                        }),
                    }),
                ),
            }),
        }),
        // articles
        "/article_1" : article_1,
        "/article_2" : article_2,
        "/article_3" : article_3,
        "/article_4" : article_4,
        "/article_5" : article_5,
        "/require" : article_require,
        // errors
        "/404" : require(`./host/404`),
        "/405" : require(`./host/405`),
        "/500" : require(`./host/500`),
        // sass
        ...[
            `common`,
            `page`,
            `index`,
            `sentence`,
            `document`,
            `code`,
            `javascript`,
            `c`,
            `cplusplus`,
            `csharp`,
            `php`,
            `py`,
            `qbasic`,
            `llvm`,
            `html`,
        ].reduce((all, name) => ({
            ...all,
            [`/css/${name}.css`] : new h.SASSResource({
                Path : path.join(__dirname, `../sass/${name}.scss`),
            }),
        }), {}),
        // media
        [`favicon.ico`] : new h.FileResource({
            Path : path.join(__dirname, `../media/favicon.ico`),
        }),
        ...[
            `favicon.ico`,
            `but_i.png`,
            `html5.svg`,
            `css3.svg`,
            `es6.svg`,
            `react.svg`,
            `nodejs.svg`,
            `sass.svg`,
            `jest.svg`,
        ].reduce((all, name) => ({
            ...all,
            [`/media/${name}`] : new h.FileResource({
                Path : path.join(__dirname, `../media/${name}`),
            }),
        }), {}),
        // icons
        ...[
            `c`,
            `cpp`,
            `c-sharp`,
            `css`,
            `html`,
            `javascript`,
            `json`,
            `php`,
            `python`,
            `sass`,
            `scss`,
            `xml`,
        ].reduce((all, name) => ({
            ...all,
            [`/media/icons/${name}.svg`] : new h.FileResource({
                Path : path.join(__dirname, `../media/icons/${name}.svg`),
            }),
        }), {}),
    },
});
