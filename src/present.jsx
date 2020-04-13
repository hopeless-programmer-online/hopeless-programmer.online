const documenting = require(`./documenting`);
const html = require(`./html`);


function error() {
    throw new Error; // @todo
}
function template(title, content) {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="Keywords" content="Keyword" />
                <meta name="Description" content="Description"></meta>
                <title>{title} | Безнадійний Програміст</title>
                <link rel="icon" href="media/favicon.ico" type="image/x-icon" />
                {/* <link rel="stylesheet" href="styles.css" /> */}
                {/* <script src="script.js" /> */}
            </head>
            <body>
                <div class="header">
                    <div class="icon">
                        <img class="logo" alt="But... I..." src="media/but_i.png" style="width: 365px; height: 304px"/>
                        <em class="quote">...коли не можеш оголосити змінну case, тому що це службове слово...</em>
                    </div>
                    <nav class="navigation">
                        <a class="button" href="#">Головна</a>
                        <a class="button" href="#">Статті</a>
                        <a class="button" href="#">Проекти</a>
                        <a class="button" href="#">Про цей сайт</a>
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
                    <div>
                        <small>Цей сайт не існував би без цих відкритих технологій</small>
                        <nav class="resources">
                            <a class="resource" href="https://en.wikipedia.org/wiki/HTML5"><abbr title="Hypertext Markup Language">HTML5</abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets"><abbr title="Cascading Style Sheets">CSS3</abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/ECMAScript#ES2015"><abbr title="ECMAScript 6">ES6</abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/React_(web_framework)#JSX"><abbr title="JavaScript XML">JSX</abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"><abbr title="Syntactically Awesome Style Sheets">SASS</abbr></a>
                            <a class="resource" href="https://en.wikipedia.org/wiki/Node.js">NodeJS</a>
                            <a class="resource" href="https://jestjs.io">Jest</a>
                        </nav>
                    </div>
                </footer>
            </body>
        </html>
    );
}
function document(document) {
    return (
        <article class="document">
            <header class="header">
                <h1 class="title">
                    {sentences(document.Title.Sentences)}
                </h1>
            </header>
            <div class="sections">
                {sections(document.Sections)}
            </div>
        </article>
    );
}
function sections(sections) {
    return sections.map(section);
}
function section(section) {
    return (
        <div class="section">
            <h2 class="title">
                {sentences(section.Title.Sentences)}
            </h2>
            <div class="parts">
                {parts(section.Parts)}
            </div>
        </div>
    );
}
function parts(parts) {
    return parts.map(part);
}
function part(part) {
    if (part instanceof documenting.ParagraphSectionPart) {
        return paragraph(part.Paragraph);
    }
    else if (part instanceof documenting.IllustrationsSectionPart) {
        return (
            <div class="illustrations">
                {illustrations(part.Illustrations)}
            </div>
        );
    }
    else {
        throw new Error; // @todo
    }
}
function illustrations(illustrations) {
    return illustrations.map(illustration);
}
function illustration(illustration) {
    const content =
        illustration instanceof documenting.CodeIllustration ? code(illustration.Code) :
        error();

    return (
        <div id="" class="illustration">
            <h3 class="title">
                {`Ілюстрація #x`}
            </h3>
            <div class="description">
                {/* todo */}
            </div>
            <div class="content">
                {content}
            </div>
        </div>
    );
}
function code(code) {
    return (
        <code>
            <table class="code">
                {code.Lines.map((line, index) =>
                    <tr>
                        <td>{(index + 1).toString()}</td>
                        <td>{lexemes(line.Lexemes)}</td>
                    </tr>
                )}
            </table>
        </code>
    );
}
function lexemes(lexemes) {
    return lexemes.map(lexeme);
}
function lexeme(lexeme) {
    if (lexeme instanceof documenting.TextLexeme) {
        return <pre>{lexeme.String}</pre>;
    }

    throw new Error; // @todo
}
function paragraph(paragraph) {
    return (
        <p class="paragraph">
            {sentences(paragraph.Sentences)}
        </p>
    );
}
function sentences(sentences) {
    return sentences.map(sentence);
}
function sentence(sentence) {
    return (
        <span class="sentence">
            {phrases(sentence.Phrases)}
        </span>
    );
}
function phrases(phrases) {
    return phrases.map(phrase);
}
function phrase(phrase) {
    return (
        <span class="text">
            {phrase.String}
        </span>
    );
}


exports.template = template;
exports.document = document;
