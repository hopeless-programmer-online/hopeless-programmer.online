const documenting = require(`./documenting`);
const html = require(`./html`);


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


exports.document = document;
