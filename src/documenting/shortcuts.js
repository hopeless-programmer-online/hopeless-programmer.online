const PhraseTemplate = require(`./phrase-template`);
const TextPhraseTemplate = require(`./text-phrase-template`);
const SentenceTemplate = require(`./sentence-template`);


/**
 * @param   {string}         something
 * @returns {PhraseTemplate}
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
 * @param   {string | PhraseTemplate} something
 * @returns {PhraseTemplate}
 */
function toPhrase(something) {
    if (something instanceof PhraseTemplate) {
        return something;
    }

    return phrase(something);
}


exports.phrase = phrase;
exports.toPhrase = toPhrase;
