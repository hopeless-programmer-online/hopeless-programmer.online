const Document = require(`./document`);
const Section = require(`./section`);
const SectionPart = require(`./section-part`);
const ParagraphSectionPart = require(`./paragraph-section-part`);
const IllustrationsSectionPart = require(`./illustrations-section-part`);
const Illustration = require(`./illustration`);
const Paragraph = require(`./paragraph`);
const Sentence = require(`./sentence`);
const Phrase = require(`./phrase`);
const TextPhrase = require(`./text-phrase`);
const Code = require(`./code`);
const CodeLine = require(`./code-line`);
const Lexeme = require(`./lexeme`);
const TextLexeme = require(`./text-lexeme`);


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


exports.textPhrase = textPhrase;
exports.toTextPhrase = toTextPhrase;
exports.toTextPhrases = toTextPhrases;
exports.sentence = sentence;
exports.toSentence = toSentence;
exports.toSentences = toSentences;
exports.paragraph = paragraph;
