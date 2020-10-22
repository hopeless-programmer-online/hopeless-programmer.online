function deduce(title, ext, language) {
    const [ icon, caption, extension ] =
        language === Language.JavaScript ? [ `javascript`, `js`,   `.js`   ] :
        language === Language.JSON       ? [ `json`,       `json`, `.json` ] :
        language === Language.C          ? [ `c`,          `c`,    `.c`    ] :
        language === Language.CPlusPlus  ? [ `cpp`,        `c++`,  `.cpp`  ] :
        language === Language.CSharp     ? [ `c-sharp`,    `c#`,   `.cs`   ] :
        language === Language.PHP        ? [ `php`,        `php`,  `.php`  ] :
        language === Language.HTML       ? [ `html`,       `html`, `.html` ] :
        language === Language.CSS        ? [ `css`,        `css`,  `.css`  ] :
        language === Language.SASS       ? [ `sass`,       `sass`, `.sass` ] :
        language === Language.SCSS       ? [ `sass`,       `scss`, `.scss` ] :
        language === Language.XML        ? [ `xml`,        `xml`,  `.xml`  ] :
        language === Language.Python     ? [ `python`,     `py`,   `.py`   ] :
        language === Language.TeX        ? [ `tex`,        `tex`,  `.tex`  ] :
        language === Language.LLVM       ? [ `default`,    `llvm`, `.llvm` ] :
        language === Language.QBasic     ? [ `default`,    `qb`,   `.qb`   ] :
        language === Language.Lua        ? [ `default`,    `lua`,  `.lua`  ] :
        [ `default`, `plain text`, `.txt` ];

    return (
        <figcaption class="hp-class-code-header">
            {/* <img alt={icon} src={`./media/icons/${icon}.svg`} /> */}
            <span class="hp-class-icon" data-hp-type={icon}>{caption}|</span>
            {title + (ext === null ? extension : ``)}
        </figcaption>
    );
}


exports = module.exports = deduce;


const html = require(`../html`);
const Language = require(`./code-language`);
