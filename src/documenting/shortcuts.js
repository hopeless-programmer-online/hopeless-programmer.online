const Document = require(`./document`);
const Section = require(`./section`);
const SectionPart = require(`./section-part`);
const ParagraphSectionPart = require(`./paragraph-section-part`);
const Paragraph = require(`./paragraph`);
const Sentence = require(`./sentence`);
const TextPhrase = require(`./text-phrase`);


function textPhrase(something) {
    if (typeof something === `string`) {
        return new TextPhrase({
            String : something,
        });
    }

    throw new Error(); // @todo
}
function toTextPhrase(something) {
    if (something instanceof TextPhrase) {
        return something;
    }

    return textPhrase(something);
}
function toTextPhrases(somethings) {
    return somethings.map(toTextPhrase);
}
function sentence(...somethings) {
    const phrases = toTextPhrases(somethings);

    return new Sentence({
        Phrases : phrases,
    });
}
function toSentence(something) {
    if (something instanceof Sentence) {
        return something;
    }

    return sentence(something);
}
function toSentences(somethings) {
    return somethings.map(toSentence);
}
function paragraph(...somethings) {
    const sentences = toSentences(somethings);

    return new Paragraph({
        Sentences : sentences,
    });
}
function toParagraph(something) {
    if (something instanceof Paragraph) {
        return something;
    }

    return paragraph(something);
}
function sectionPart(something) {
    if (something instanceof Paragraph) {
        return new ParagraphSectionPart({
            Paragraph : something,
        });
    }

    throw new Error(); // @todo
}
function toSectionPart(something) {
    if (something instanceof SectionPart) {
        return something;
    }

    return sectionPart(something);
}
function toSectionParts(somethings) {
    return somethings.map(toSectionPart);
}
function section(titleLike, ...partsLike) {
    const title = toParagraph(titleLike);
    const parts = toSectionParts(partsLike);

    return new Section({
        Title : title,
        Parts : parts,
    });
}
function document(titleLike, ...sections) {
    const title = toParagraph(titleLike);

    return new Document({
        Title : title,
        Sections : sections,
    });
}


exports.textPhrase = textPhrase;
exports.toTextPhrase = toTextPhrase;
exports.toTextPhrases = toTextPhrases;
exports.sentence = sentence;
exports.toSentence = toSentence;
exports.toSentences = toSentences;
exports.paragraph = paragraph;
exports.toParagraph = toParagraph;
exports.sectionPart = sectionPart;
exports.toSectionPart = toSectionPart;
exports.toSectionParts = toSectionParts;
exports.section = section;
exports.document = document;
