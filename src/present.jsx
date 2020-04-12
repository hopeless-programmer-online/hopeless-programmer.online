const documenting = require(`./documenting`);
const html = require(`./html`);


function template(title, content) {
    return (
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="Keywords" content="Keyword" />
                <meta name="Description" content="Description"></meta>
                <title>{title}</title>
                {/* <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
                {/* <link rel="stylesheet" href="styles.css" /> */}
                {/* <script src="script.js" /> */}
            </head>
            <body>
                <div class="header">
                    <ul class="navigation">
                        <li class="button"><a href="#">Головна</a></li>
                        <li class="button"><a href="#">Статті</a></li>
                        <li class="button"><a href="#">Проекти</a></li>
                        <li class="button"><a href="#">Про цей сайт</a></li>
                    </ul>
                </div>
                <div class="content">
                    {content}
                </div>
                <div class="footer">
                    <div class="name">
                        <small>hopeless-programmer.online</small>
                    </div>
                    <div class="years">
                        <small>2020 - {(new Date).getFullYear().toString()}</small>
                    </div>
                    <div class="contacts">
                        <small>me@hopeless-programmer.online</small>
                    </div>
                    <div>
                        <small>Цей сайт не існував би без цих відкритих технологій</small>
                        <ul class="resources">
                            <li class="resource"><a href="#">HTML5</a></li>
                            <li class="resource"><a href="#">CSS3</a></li>
                            <li class="resource"><a href="#">ES6</a></li>
                            <li class="resource"><a href="#">JSX</a></li>
                            <li class="resource"><a href="#">NodeJS</a></li>
                            <li class="resource"><a href="#">Jest</a></li>
                        </ul>
                    </div>
                </div>
            </body>
        </html>
    );
}
function document(document) {
    return (
        <div class="document">
            <h1 class="title">
                {sentences(document.Title.Sentences)}
            </h1>
            <div class="sections">
                {sections(document.Sections)}
            </div>
        </div>
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
    return paragraph(part.Paragraph);
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
