const path = require(`path`);
const hosting = require(`hopeless-programmer.online/hosting`);
const documenting = require(`hopeless-programmer.online/documenting`);


const d = documenting;
const h = hosting;
const s = documenting.shortcuts;


const home = require(`./host/home`);


exports = module.exports = new h.Host({
    Routes : {
        "/" : home,
        "/home" : home,
        "/about" : require(`./host/about`),
        // articles
        ...mapArticles(
            `require`,
        ),
        // internal
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
            `explorer`,
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
                Path : path.join(__dirname, `./sass/${name}.scss`),
            }),
        }), {}),
        // media
        [`/favicon.ico`] : new h.FileResource({
            Path : path.join(__dirname, `./media/favicon.ico`),
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
                Path : path.join(__dirname, `./media/${name}`),
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
            `default`,
        ].reduce((all, name) => ({
            ...all,
            [`/media/icons/${name}.svg`] : new h.FileResource({
                Path : path.join(__dirname, `./media/icons/${name}.svg`),
            }),
        }), {}),
    },
});


function mapArticles(...names) {
    const articles = names.reduce(
        (all, name) => ({
            ...all,
            [name] : require(`./host/${name}`),
        }),
        {},
    );

    return {
        ...Object.entries(articles)
            .reduce(
                (all, [ name, article ]) => ({ ...all, [`/${name}`] : article }),
                {},
            ),
        [`/articles`] : new h.IndexResource({
            Index : new d.Index({
                Title : s.toSentences(`Статті`),
                Items : new d.IndexItems(
                    ...Object.entries(articles)
                        .map(([ name, article ]) =>
                            new d.IndexItem({
                                Content : new d.DocumentIndexItemContent({
                                    Url      : `/${name}`,
                                    Document : article.Document,
                                }),
                            }),
                        ),
                ),
            }),
        }),
    };
}
