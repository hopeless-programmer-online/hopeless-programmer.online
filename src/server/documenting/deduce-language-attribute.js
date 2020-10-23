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
    [Language.JSON]       : `json`,
    [Language.C]          : `c`,
    [Language.CPlusPlus]  : `cplusplus`,
    [Language.CSharp]     : `csharp`,
    [Language.PHP]        : `php`,
    [Language.HTML]       : `html`,
    [Language.CSS]        : `css`,
    [Language.SASS]       : `sass`,
    [Language.SCSS]       : `scss`,
    [Language.XML]        : `xml`,
    [Language.Python]     : `python`,
    [Language.LLVM]       : `llvm`,
    [Language.QBasic]     : `qbasic`,
    [Language.TeX]        : `tex`,
    [Language.Lua]        : `lua`,
};
