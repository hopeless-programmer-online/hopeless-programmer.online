const path = require(`path`);
const hosting = require(`./server/hosting`);
const documenting = require(`./server/documenting`);


const d = documenting;
const h = hosting;
const s = documenting.shortcuts;


const home = require(`./host/home`);


function file(localPath) {
    return path.join(__dirname, localPath);
}

const icon = new h.CachedResource({
    Target : new h.FileResource({
        Path : file(`../media/favicon.ico`),
    }),
});

exports = module.exports = new h.Host({
    Routes : {
        "/" : home,
        "/home" : home,
        "/about" : require(`./host/about`),
        // articles
        ...mapArticles(
            `overloading`,
            `overlapping`,
            `keywords`,
            `visitor`,
            `virtual-overlapping`,
            `segregation`,
            `auto-visitor`,
            `require`,
            `symmetry`,
            `cg-1`,
            // `cg-2`,
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
            `lua`,
        ].reduce((all, name) => ({
            ...all,
            [`/css/${name}.css`] : new h.CachedResource({
                Target : new h.SASSResource({
                    Path : file(`../sass/${name}.scss`),
                }),
            }),
        }), {}),
        // media
        [`favicon.ico`] : icon,
        [`/favicon.ico`] : icon,
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
            `cg-1/resolutions.svg`,
            `cg-1/resolutions.css`,
            `cg-1/resolutions.js`,
            `cg-2/pipeline.svg`,
            `cg-2/pipeline.css`,
            `cg-2/pipeline.js`,
            `cg-2/rasterization.svg`,
            `cg-2/rasterization.css`,
            `cg-2/rasterization.js`,
            `cg-2/viewport.svg`,
            `cg-2/screen.svg`,
            `cg-2/screen.js`,
            `cg-2/rgb.svg`,
            `cg-2/cmy.svg`,
        ].reduce((all, name) => ({
            ...all,
            [`/media/${name}`] : new h.CachedResource({
                Target : new h.FileResource({
                    Path : file(`../media/${name}`),
                }),
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
            `xml`,
            `lua`,
            `folder`,
            `default`,
        ].reduce((all, name) => ({
            ...all,
            [`/media/icons/${name}.svg`] : new h.CachedResource({
                Target : new h.FileResource({
                    Path : file(`../media/icons/${name}.svg`),
                }),
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
        [`/articles`] : new h.CachedResource({
            Target : new h.IndexResource({
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
        }),
    };
}
