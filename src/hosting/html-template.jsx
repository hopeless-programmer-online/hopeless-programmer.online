/**
 * @param   {string}       title
 * @param   {html.Element} content
 * @returns {html.Element}
 */
function template(title, content) {
    return (
        <html lang="uk">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="Keywords" content="Keyword" />
                <meta name="Description" content="Description"></meta>
                <title>{title} | Безнадійний Програміст</title>
                <link rel="icon" href="media/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="css/document.css" />
                {/* <script src="script.js" /> */}
            </head>
            <body>
                <a href="https://github.com/hopeless-programmer-online/hopeless-programmer.online" class="github-corner" aria-label="View source on GitHub">
                    <svg
                        width="80"
                        height="80"
                        viewBox="0 0 250 250"
                        style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
                        aria-hidden="true"
                    >
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
                        <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>
                    </svg>
                </a>
                <div class="header">
                    <div class="banner">
                        <img class="logo" alt="But... I..." src="media/but_i.png"/>
                        <div class="content">
                            <h2 class="title">Безнадійний Програміст</h2>
                            <em class="quote">...коли не можеш оголосити змінну case, тому що це службове слово...</em>
                        </div>
                    </div>
                    <nav class="navigation">
                        <a class="button" href="/home">Головна</a>
                        <a class="button" href="/about">Про цей сайт</a>
                    </nav>
                </div>
                <div class="content">
                    {content}
                </div>
                <footer class="footer">
                    <address class="address">
                        <small class="summary">hopeless-programmer.online</small>
                        <br />
                        <small class="years">2020 - {(new Date).getFullYear().toString()}</small>
                        <br />
                        <small class="contacts">Адміністрація: <a href="mailto: me@hopeless-programmer.online">me@hopeless-programmer.online</a></small>
                    </address>
                    <div class="references">
                        <small class="caption">Цей сайт не існував би без цих відкритих технологій</small>
                        <nav class="resources">
                            <a class="resource" href="https://en.wikipedia.org/wiki/HTML5"><abbr title="HTML | Hypertext Markup Language"><img src="media/html5.svg" alt="HTML5" style="width: 1in; height: 1in" /></abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"><abbr title="CSS | Cascading Style Sheets"><img src="media/css3.svg" alt="CSS3" style="width: 1in; height: 1in" /></abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/ECMAScript#ES2015"><abbr title="ES6 | ECMAScript 6"><img src="media/es6.svg" alt="ES6" style="width: 1in; height: 1in" /></abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/React_(web_framework)#JSX"><abbr title="JSX | JavaScript XML"><img src="media/jsx.png" alt="JSX" style="width: 1in; height: 1in" /></abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"><abbr title="SASS | Syntactically Awesome Style Sheets"><img src="media/sass.svg" alt="SASS" style="width: 1in; height: 1in" /></abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/Node.js"><abbr title="NodeJS"><img src="media/nodejs.svg" alt="NodeJS" style="width: 1in; height: 1in" /></abbr></a>
                            <a class="resource" href="https://jestjs.io"><abbr title="Jest"><img src="media/jest.svg" alt="Jest" style="width: 1in; height: 1in" /></abbr></a>
                        </nav>
                    </div>
                </footer>
            </body>
        </html>
    );
}


exports = module.exports = template;


const html = require(`../html`);
