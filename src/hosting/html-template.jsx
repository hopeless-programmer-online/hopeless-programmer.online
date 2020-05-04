/**
 * @param   {string}       title
 * @param   {html.Element} content
 * @returns {html.Element}
 */
function template(title, content) {
    const date = new Date;

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
                <link rel="stylesheet" href="css/document.css" />
                {/* <script src="script.js" /> */}
            </head>
            <body class="hp-class-page">
                <header>
                    <figure>
                        <img alt="But... I..." src="media/but_i.png" style="height: 1in"/>
                        <figcaption>
                            <h2>
                                {s.sentence(`Безнадійний Програміст`).toHtml()}
                            </h2>
                            <blockquote>
                                <p>
                                    {s.sentence(s.figurative(`...коли не можеш оголосити змінну `), s.kw(`case`), s.figurative(`, тому що це службове слово...`)).toHtml()}
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
                        <figcaption>Цей сайт не існував би без цих відкритих технологій</figcaption>
                        <dl>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/HTML5">
                                    <abbr title="HTML | Hypertext Markup Language">
                                        <img src="media/html5.svg" alt="HTML5" style="width: 1in; height: 1in" />
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">
                                    <abbr title="CSS | Cascading Style Sheets">
                                        <img src="media/css3.svg" alt="CSS3" style="width: 1in; height: 1in" />
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/ECMAScript#ES2015">
                                    <abbr title="ES6 | ECMAScript 6">
                                        <img src="media/es6.svg" alt="ES6" style="width: 1in; height: 1in" />
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/React_(web_framework)#JSX">
                                    <abbr title="JSX | JavaScript XML">
                                        <img src="media/react.svg" alt="JSX" style="width: 1in; height: 1in" />
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://en.wikipedia.org/wiki/Node.js">
                                    <abbr title="NodeJS">
                                        <img src="media/nodejs.svg" alt="NodeJS" style="width: 1in; height: 1in" />
                                    </abbr>
                                </a>
                            </dd>
                            <dd>
                                <a href="https://jestjs.io">
                                    <abbr title="Jest">
                                        <img src="media/jest.svg" alt="Jest" style="width: 1in; height: 1in" />
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
