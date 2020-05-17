function deduce(title, language) {
    const [ icon, extension ] =
        language === Language.JavaScript ? [ `javascript`, `.js`   ] :
        language === Language.JSON       ? [ `json`,       `.json` ] :
        language === Language.C          ? [ `c`,          `.c`    ] :
        language === Language.CPlusPlus  ? [ `cpp`,        `.cpp`  ] :
        language === Language.CSharp     ? [ `c-sharp`,    `.cs`   ] :
        language === Language.PHP        ? [ `php`,        `.php`  ] :
        language === Language.HTML       ? [ `html`,       `.html` ] :
        language === Language.CSS        ? [ `css`,        `.css`  ] :
        language === Language.SASS       ? [ `sass`,       `.sass` ] :
        language === Language.SCSS       ? [ `sass`,       `.scss` ] :
        language === Language.XML        ? [ `xml`,        `.xml`  ] :
        language === Language.Python     ? [ `python`,     `.py`   ] :
        language === Language.TeX        ? [ `tex`,        `.tex`  ] :
        language === Language.LLVM       ? [ `default`,    `.llvm` ] :
        language === Language.QBasic     ? [ `default`,    `.qb`   ] :
        [ `default`, `.txt` ];

    return [
        <img alt={icon} src={`./media/icons/${icon}.svg`} />,
        title + extension,
    ];
}


exports = module.exports = deduce;


const html = require(`../html`);
const Language = require(`./code-language`);
