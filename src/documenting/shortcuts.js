const PhraseTemplate = require(`./phrase-template`);
const TextPhraseTemplate = require(`./text-phrase-template`);
const SentenceTemplate = require(`./sentence-template`);


/**
 * @param   {string}         something
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
 * @param   {PhraseTemplate | string} something
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
 * @param   {Array<PhraseTemplate | string>} somethings
 * @returns {Array<PhraseTemplate>}
 * @throws  {Error}
 */
function toPhrases(somethings) {
    return somethings.map(toPhrase);
}
/**
 * @param  {...PhraseTemplate | string} somethings
 * @throws {Error}
 */
function sentence(...somethings) {
    const phrases = toPhrases(somethings);

    return new SentenceTemplate({
        Phrases : phrases,
    });
}
/**
 * @param   {SentenceTemplate | PhraseTemplate | string} something
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
 * @param   {Array<SentenceTemplate | PhraseTemplate | string>} somethings
 * @returns {Array<SentenceTemplate>}
 * @throws  {Error}
 */
function toSentences(somethings) {
    return somethings.map(toSentence);
}


exports.phrase = phrase;
exports.toPhrase = toPhrase;
exports.toPhrases = toPhrases;
exports.sentence = sentence;
exports.toSentence = toSentence;
exports.toSentences = toSentences;
