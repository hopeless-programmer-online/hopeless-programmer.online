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
        // articles
        "/article_2" : require(`./host/article-2`),
        // errors
        "/404" : require(`./host/404`),
        "/405" : require(`./host/405`),
        "/500" : require(`./host/500`),
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
