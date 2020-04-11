const Document = require(`./document`);
const Section = require(`./section`);
const SectionPart = require(`./section-part`);
const ParagraphSectionPart = require(`./paragraph-section-part`);
const IllustrationsSectionPart = require(`./illustrations-section-part`);
const CodeIllustration = require(`./code-illustration`);
const Paragraph = require(`./paragraph`);
const Sentence = require(`./sentence`);
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
function toParagraph(something) {
    if (something instanceof Paragraph) {
        return something;
    }

    return paragraph(something);
}
function lexeme(something) {
    if (typeof something === `string`) {
        return new TextLexeme({
            String : something,
        });
    }

    throw new Error; // @todo
}
function toLexeme(something) {
    if (something instanceof Lexeme) {
        return something;
    }

    return lexeme(something);
}
function toLexemes(somethings) {
    return somethings.map(toLexeme);
}
function codeLine(...something) {
    const lexemes = toLexemes(something);

    return new CodeLine({
        Lexemes : lexemes,
    });
}
function toCodeLine(something) {
    if (something instanceof CodeLine) {
        return something;
    }

    return codeLine(something);
}
function toCodeLines(somethings) {
    return somethings.map(toCodeLine);
}
function code(...somethings) {
    const lines = toCodeLines(somethings);

    return new Code({
        Lines : lines,
    });
}
function sectionPart(something) {
    if (something instanceof Paragraph) {
        return new ParagraphSectionPart({
            Paragraph : something,
        });
    }
    if (something instanceof Code) {
        return new IllustrationsSectionPart({
            Illustrations : [
                new CodeIllustration({
                    Code : something,
                }),
            ],
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
exports.toLexeme = toLexeme;
exports.toLexemes = toLexemes;
exports.codeLine = codeLine;
exports.toCodeLines = toCodeLines;
exports.code = code;
exports.sectionPart = sectionPart;
exports.toSectionPart = toSectionPart;
exports.toSectionParts = toSectionParts;
exports.section = section;
exports.document = document;
