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
