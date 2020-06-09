/**
 * @param   {string}       title
 * @param   {html.Element} content
 * @returns {html.Element}
 */
function template(title, content) {
    const date = new Date;
    const sentence = (...x) => s.sentence(...x).toHtml();

    return (
        <html lang="uk">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="Keywords" content="Keyword" />
                <meta name="Description" content="Description"></meta>
                <title>{title} | Безнадійний Програміст</title>
                <link rel="icon" href="media/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="css/common.css" />
                <link rel="stylesheet" href="css/page.css" />
                <link rel="stylesheet" href="css/sentence.css" />
                <link rel="stylesheet" href="css/index.css" />
                <link rel="stylesheet" href="css/code.css" />
                <link rel="stylesheet" href="css/explorer.css" />
                <link rel="stylesheet" href="css/javascript.css" />
                <link rel="stylesheet" href="css/c.css" />
                <link rel="stylesheet" href="css/cplusplus.css" />
                <link rel="stylesheet" href="css/csharp.css" />
                <link rel="stylesheet" href="css/php.css" />
                <link rel="stylesheet" href="css/py.css" />
                <link rel="stylesheet" href="css/qbasic.css" />
                <link rel="stylesheet" href="css/llvm.css" />
                <link rel="stylesheet" href="css/html.css" />
                <link rel="stylesheet" href="css/document.css" />
                {/* <script src="script.js" /> */}
            </head>
            <body class="hp-class-page">
                <header>
                    <figure>
                        <img alt="But... I..." src="media/but_i.png" style="height: 1in"/>
                        <figcaption>
                            <h2>Безнадійний Програміст</h2>
                            <blockquote>
                                <p>
                                    {sentence(s.figurative(`...коли не можеш оголосити змінну `), s.js(s.kw(`case`)), s.figurative(`, тому що це службове слово...`))}
                                </p>
                            </blockquote>
                        </figcaption>
                    </figure>
                    <nav>
                        <ul>
                            <li><a href="/home">Головна</a></li>
                            <li><a href="/articles">Статті</a></li>
                            <li><a href="/about">Про цей сайт</a></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    {content}
                </main>
                <footer>
                    <address>
                        <a href="">hopeless-programmer.online</a>
                        <br />
                        <time datetime="2020-04-10">2020</time> - <time datetime={date.toISOString()}>{date.getFullYear().toString().padStart(4, 0)}</time>
                        <br />
                        Адміністрація: <a href="mailto: me@hopeless-programmer.online">me@hopeless-programmer.online</a>
                    </address>
                    <figure>
                        <figcaption>
                            Цей сайт не існував би без цих відкритих технологій
                        </figcaption>
                        <dl>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/HTML5">
                                    <abbr class="hp-class-icon" data-hp-type="html5" title="HTML | Hypertext Markup Language">
                                        HTML5
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
                                    <abbr class="hp-class-icon" data-hp-type="css3" title="CSS | Cascading Style Sheets">
                                        CSS3
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/ECMAScript#ES2015">
                                    <abbr class="hp-class-icon" data-hp-type="es6" title="ES6 | ECMAScript 6">
                                        ES6
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/React_(web_framework)#JSX">
                                    <abbr class="hp-class-icon" data-hp-type="jsx" title="JSX | JavaScript XML">
                                        JSX
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/Node.js">
                                    <abbr class="hp-class-icon" data-hp-type="node" title="NodeJS">
                                        Node.js
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://jestjs.io">
                                    <abbr class="hp-class-icon" data-hp-type="jest" title="Jest">
                                        Jest
                                    </abbr>
                                </a>
                            </dd>
                        </dl>
                    </figure>
                </footer>
            </body>
        </html>
    );
}


exports = module.exports = template;


const html = require(`../html`);
const s = require(`../documenting/shortcuts`);
