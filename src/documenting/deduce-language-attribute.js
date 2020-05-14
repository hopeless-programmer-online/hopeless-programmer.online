/**
 * @param   {Language} language
 * @returns {string}
 */
function deduceLanguageAttribute(language) {
    if (!Object.values(Language).includes(language)) {
        throw new Error; // @todo
    }

    if (language in lookup); else {
        throw new Error; // @todo
    }

    const attribute = lookup[language];

    return attribute;
}


exports = module.exports = deduceLanguageAttribute;


const Language = require(`./code-language`);


const lookup = {
    [Language.PlainText]  : `plain-text`,
    [Language.JavaScript] : `javascript`,
};
