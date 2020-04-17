const Phrase = require(`./phrase`);
const TextPhrase = require(`./text-phrase`);
const Sentence = require(`./sentence`);
const Paragraph = require(`./paragraph`);
const Lexeme = require(`./lexeme`);
const TextLexeme = require(`./text-lexeme`);
const CodeLine = require(`./code-line`);
const SectionPart = require(`./section-part`);
const ParagraphSectionPart = require(`./paragraph-section-part`);
const Section = require(`./section`);
const Document = require(`./document`);


/**
 * @typedef {string}                          PhraseSource
 * @typedef {Phrase | PhraseSource}           PhraseLike
 * @typedef {PhraseLike}                      SentenceSource
 * @typedef {Sentence | SentenceSource}       SentenceLike
 * @typedef {SentenceLike}                    ParagraphSource
 * @typedef {Paragraph | ParagraphSource}     ParagraphLike
 * @typedef {string}                          LexemeSource
 * @typedef {Lexeme | LexemeSource}           LexemeLike
 * @typedef {LexemeLike}                      CodeLineSource
 * @typedef {CodeLine | CodeLineSource}       CodeLineLike
 * @typedef {Paragraph}                       SectionPartSource
 * @typedef {SectionPart | SectionPartSource} SectionPartLike
 */


/**
 * @param   {PhraseSource} something
 * @returns {Phrase}
 * @throws  {Error}
 */
function phrase(something) {
    if (typeof something === `string`) {
        return new TextPhrase({
            String : something,
        });
    }

    throw new Error; // @todo
}
/**
 * @param   {PhraseLike} something
 * @returns {Phrase}
 * @throws  {Error}
 */
function toPhrase(something) {
    if (something instanceof Phrase) {
        return something;
    }

    return phrase(something);
}
/**
 * @param   {Array<PhraseLike>} somethings
 * @returns {Array<Phrase>}
 * @throws  {Error}
 */
function toPhrases(somethings) {
    return somethings.map(toPhrase);
}
/**
 * @param  {...SentenceSource} somethings
 * @throws {Error}
 */
function sentence(...somethings) {
    const phrases = toPhrases(somethings);

    return new Sentence({
        Phrases : phrases,
    });
}
/**
 * @param   {SentenceLike} something
 * @returns {Sentence}
 * @throws  {Error}
 */
function toSentence(something) {
    if (something instanceof Sentence) {
        return something;
    }

    return sentence(something);
}
/**
 * @param   {Array<SentenceLike>} somethings
 * @returns {Array<Sentence>}
 * @throws  {Error}
 */
function toSentences(somethings) {
    return somethings.map(toSentence);
}
/**
 * @param   {...ParagraphSource} somethings
 * @returns {Paragraph}
 * @throws  {Error}
 */
function paragraph(...somethings) {
    const sentences = toSentences(somethings);

    return new Paragraph({
        Sentences : sentences,
    });
}
/**
 * @param   {ParagraphLike} something
 * @returns {Paragraph}
 * @throws  {Error}
 */
function toParagraph(something) {
    if (something instanceof Paragraph) {
        return something;
    }

    return paragraph(something);
}
/**
 * @param   {LexemeSource} something
 * @returns {Lexeme}
 * @throws  {Error}
 */
function lexeme(something) {
    if (typeof something === `string`) {
        return new TextLexeme({
            String : something,
        });
    }

    throw new Error; // @todo
}
/**
 * @param   {LexemeLike} something
 * @returns {Lexeme}
 * @throws  {Error}
 */
function toLexeme(something) {
    if (something instanceof Lexeme) {
        return something;
    }

    return lexeme(something);
}
/**
 * @param   {Array<LexemeLike>} somethings
 * @returns {Array<Lexeme>}
 * @throws  {Error}
 */
function toLexemes(somethings) {
    return somethings.map(toLexeme);
}
/**
 * @param   {...CodeLineSource} somethings
 * @returns {CodeLine}
 * @throws  {Error}
 */
function codeLine(...somethings) {
    const lexemes = toLexemes(somethings);

    return new CodeLine({
        Lexemes : lexemes,
    });
}
/**
 * @param   {CodeLineLike} something
 * @returns {CodeLine}
 * @throws  {Error}
 */
function toCodeLine(something) {
    if (something instanceof CodeLine) {
        return something;
    }

    return codeLine(something);
}
/**
 * @param   {Array<CodeLineLike>} somethings
 * @returns {Array<CodeLine>}
 * @throws  {Error}
 */
function toCodeLines(somethings) {
    return somethings.map(toCodeLine);
}
/**
 * @param   {SectionPartSource} something
 * @returns {SectionPart}
 * @throws  {Error}
 */
function sectionPart(something) {
    if (something instanceof Paragraph) {
        return new ParagraphSectionPart({
            Paragraph : something,
        });
    }

    throw new Error; // @todo
}
/**
 * @param   {SectionPartLike} something
 * @returns {SectionPart}
 * @throws  {Error}
 */
function toSectionPart(something) {
    if (something instanceof SectionPart) {
        return something;
    }

    return sectionPart(something);
}
/**
 * @param   {Array<SectionPartLike>} somethings
 * @returns {Array<SectionPart>}
 * @throws  {Error}
 */
function toSectionParts(somethings) {
    return somethings.map(toSectionPart);
}
/**
 * @param   {ParagraphLike}      title
 * @param   {...SectionPartLike} parts
 * @returns {Section}
 * @throws  {Error}
 */
function section(title, ...parts) {
    const sectionTitle = toParagraph(title);
    const sectionParts = toSectionParts(parts);

    return new Section({
        Title : sectionTitle,
        Parts : sectionParts,
    });
}
/**
 * @param   {ParagraphLike} title
 * @param   {...Section}    sections
 * @returns {Document}
 */
function document(title, ...sections) {
    const documentTitle = toParagraph(title);

    return new Document({
        Title : documentTitle,
        Sections : sections,
    });
}


exports.phrase = phrase;
exports.toPhrase = toPhrase;
exports.toPhrases = toPhrases;
exports.sentence = sentence;
exports.toSentence = toSentence;
exports.toSentences = toSentences;
exports.paragraph = paragraph;
exports.toParagraph = toParagraph;
exports.lexeme = lexeme;
exports.toLexeme = toLexeme;
exports.toLexemes = toLexemes;
exports.codeLine = codeLine;
exports.toCodeLine = toCodeLine;
exports.toCodeLines = toCodeLines;
exports.sectionPart = sectionPart;
exports.toSectionPart = toSectionPart;
exports.toSectionParts = toSectionParts;
exports.section = section;
exports.document = document;
