class Code {
    /**
     * @param  {Object}   object
     * @param  {Language} object.Language
     * @param  {Lines}    object.Lines
     * @throws {Error}
     */
    constructor({ Language = LanguageEnum.PlainText, Lines = new LinesClass } = {}) {
        if (!Object.values(LanguageEnum).includes(Language)) {
            throw new Error; // @todo
        }
        if (Lines instanceof LinesClass); else {
            throw new Error; // @todo
        }

        Lines.forEach((line, index) => line.__Index = index + 1);

        /**
         * @private
         * @type    {Language}
         */
        this.__language = Language;
        /**
         * @private
         * @type    {Lines}
         */
        this.__lines = Lines;
    }

    /**
     * @public
     * @type   {Language}
     */
    get Language() {
        return this.__language;
    }
    /**
     * @public
     * @type   {Lines}
     */
    get Lines() {
        return this.__lines;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        function img(name) {
            return <img alt={name} src={`./media/icons/${name}.svg`} />;
        }

        const language = this.Language;
        const [ icon, title ] =
            language === Language.JavaScript ? [ img(`javascript`), `example.js` ] :
            language === Language.JSON       ? [ img(`json`), `example.json` ]     :
            language === Language.C          ? [ img(`c`), `example.c` ]           :
            language === Language.CPlusPlus  ? [ img(`cpp`), `example.cpp` ]       :
            language === Language.CSharp     ? [ img(`c-sharp`), `example.cs` ]    :
            language === Language.PHP        ? [ img(`php`), `example.php` ]       :
            language === Language.HTML       ? [ img(`html`), `example.html` ]     :
            language === Language.CSS        ? [ img(`css`), `example.css` ]       :
            language === Language.SASS       ? [ img(`sass`), `example.sass` ]     :
            language === Language.SCSS       ? [ img(`sass`), `example.scss` ]     :
            language === Language.XML        ? [ img(`xml`), `example.xml` ]       :
            language === Language.Python     ? [ img(`python`), `example.py` ]     :
            language === Language.TeX        ? [ img(`tex`), `example.tex` ]       :
            [ <span />, `example` ];

        return (
            <figure class="hp-class-code" data-hp-language={deduce(this.Language)}>
                <figcaption>
                    {icon}
                    {title}
                </figcaption>
                <code>
                    {this.Lines.toHtml()}
                </code>
            </figure>
        );
    }
}


exports = module.exports = Code;


const html = require(`../html`);
const Language = require(`./code-language`);
const deduce = require(`./deduce-language-attribute`);
const Lines = require(`./code-lines`);


const LanguageEnum = Language;
const LinesClass = Lines;
