const PhraseTemplate = require(`./phrase-template`);
const TextPhraseTemplate = require(`./text-phrase-template`);
const SentenceTemplate = require(`./sentence-template`);
const ParagraphTemplate = require(`./paragraph-template`);
const SectionPartTemplate = require(`./section-part-template`);
const ParagraphSectionPartTemplate = require(`./paragraph-section-part-template`);
const SectionTemplate = require(`./section-template`);


/**
 * @typedef {string}                                          PhraseTemplateSource
 * @typedef {PhraseTemplate | PhraseTemplateSource}           PhraseTemplateLike
 * @typedef {PhraseTemplateLike}                              SentenceTemplateSource
 * @typedef {SentenceTemplate | SentenceTemplateSource}       SentenceTemplateLike
 * @typedef {SentenceTemplateLike}                            ParagraphTemplateSource
 * @typedef {ParagraphTemplate | ParagraphTemplateSource}     ParagraphTemplateLike
 * @typedef {ParagraphTemplate}                               SectionPartTemplateSource
 * @typedef {SectionPartTemplate | SectionPartTemplateSource} SectionPartTemplateLike
 */


/**
 * @param   {PhraseTemplateSource} something
 * @returns {PhraseTemplate}
 * @throws  {Error}
 */
function phrase(something) {
    if (typeof something === `string`) {
        return new TextPhraseTemplate({
            String : something,
        });
    }

    throw new Error; // @todo
}
/**
 * @param   {PhraseTemplateLike} something
 * @returns {PhraseTemplate}
 * @throws  {Error}
 */
function toPhrase(something) {
    if (something instanceof PhraseTemplate) {
        return something;
    }

    return phrase(something);
}
/**
 * @param   {Array<PhraseTemplateLike>} somethings
 * @returns {Array<PhraseTemplate>}
 * @throws  {Error}
 */
function toPhrases(somethings) {
    return somethings.map(toPhrase);
}
/**
 * @param  {...SentenceTemplateSource} somethings
 * @throws {Error}
 */
function sentence(...somethings) {
    const phrases = toPhrases(somethings);

    return new SentenceTemplate({
        Phrases : phrases,
    });
}
/**
 * @param   {SentenceTemplateLike} something
 * @returns {SentenceTemplate}
 * @throws  {Error}
 */
function toSentence(something) {
    if (something instanceof SentenceTemplate) {
        return something;
    }

    return sentence(something);
}
/**
 * @param   {Array<SentenceTemplateLike>} somethings
 * @returns {Array<SentenceTemplate>}
 * @throws  {Error}
 */
function toSentences(somethings) {
    return somethings.map(toSentence);
}
/**
 * @param   {...ParagraphTemplateSource} somethings
 * @returns {ParagraphTemplate}
 * @throws  {Error}
 */
function paragraph(...somethings) {
    const sentences = toSentences(somethings);

    return new ParagraphTemplate({
        Sentences : sentences,
    });
}
/**
 * @param   {ParagraphTemplateLike} something
 * @returns {ParagraphTemplate}
 * @throws  {Error}
 */
function toParagraph(something) {
    if (something instanceof ParagraphTemplate) {
        return something;
    }

    return paragraph(something);
}
/**
 * @param   {SectionPartTemplateSource} something
 * @returns {SectionPartTemplate}
 * @throws  {Error}
 */
function sectionPart(something) {
    if (something instanceof ParagraphTemplate) {
        return new ParagraphSectionPartTemplate({
            Paragraph : something,
        });
    }

    throw new Error; // @todo
}
/**
 * @param   {SectionPartTemplateLike} something
 * @returns {SectionPartTemplate}
 * @throws  {Error}
 */
function toSectionPart(something) {
    if (something instanceof SectionPartTemplate) {
        return something;
    }

    return sectionPart(something);
}
/**
 * @param   {Array<SectionPartTemplateLike>} somethings
 * @returns {Array<SectionPartTemplate>}
 * @throws  {Error}
 */
function toSectionParts(somethings) {
    return somethings.map(toSectionPart);
}
/**
 * @param   {ParagraphTemplateLike}      title
 * @param   {...SectionPartTemplateLike} parts
 * @returns {SectionTemplate}
 * @throws  {Error}
 */
function section(title, ...parts) {
    const sectionTitle = toParagraph(title);
    const sectionParts = toSectionParts(parts);

    return new SectionTemplate({
        Title : sectionTitle,
        Parts : sectionParts,
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
exports.sectionPart = sectionPart;
exports.toSectionPart = toSectionPart;
exports.toSectionParts = toSectionParts;
exports.section = section;
