class Document {
    /**
     * @param {Object}    object
     * @param {Sentences} object.Title
     * @param {Date}      object.Date
     * @param {Sections}  object.Sections
     */
    constructor({ Title, Date = new DateClass, Sections = new SectionsClass }) {
        if (Title instanceof Sentences); else {
            throw new Error; // @todo
        }
        if (Date instanceof DateClass); else {
            throw new Error; // @todo
        }
        if (Sections instanceof SectionsClass); else {
            throw new Error; // @todo
        }

        const notes = new Notes(
            ...Sections.Phrases
                .filter(phrase => phrase instanceof NotePhrase)
                .map(phrase => phrase.Note)
        );

        notes.forEach((note, index) => note.__Index = index + 1);

        let illustrationIndex = 1;
        let codeIndex = 1;
        let exampleIndex = 1;

        Sections.forEach((section, index) => {
            if (section.__Index === null) {
                section.__Index = index + 1;
            }

            for (const part of section.Parts) {
                if (part instanceof IllustrationsSectionPart) {
                    for (const illustration of part.Illustrations) {
                        if (illustration.__Index === null) {
                            illustration.__Index = illustrationIndex;
                        }

                        const content = illustration.Content;

                        if (content instanceof CodeIllustrationContent) {
                            if (illustration.__Title === null) {
                                illustration.__Title = shortcuts.toParagraph(`Приклад коду №${codeIndex}`).Sentences;
                            }

                            ++codeIndex;
                        }
                        else if (content instanceof ExplorerIllustrationContent) {
                            if (illustration.__Title === null) {
                                illustration.__Title = shortcuts.toParagraph(`Приклад №${exampleIndex}`).Sentences;
                            }

                            content.Explorer.__Index = exampleIndex;

                            ++exampleIndex;
                        }

                        ++illustrationIndex;
                    }
                }
            }
        });

        /**
         * @private
         * @type    {Sentences}
         */
        this.__title = Title;
        /**
         * @private
         * @type    {Date}
         */
        this.__date = Date;
        /**
         * @private
         * @type    {Array<Section>}
         */
        this.__sections = Sections;
        /**
         * @private
         * @type    {Notes}
         */
        this.__notes = notes;
    }

    /**
     * @public
     * @type   {Sentences}
     */
    get Title() {
        return this.__title;
    }
    /**
     * @public
     * @type   {Date}
     */
    get Date() {
        return this.__date;
    }
    /**
     * @public
     * @type   {Array<Section>}
     */
    get Sections() {
        return this.__sections;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return (
            <article class="hp-class-document">
                <header>
                    <h1>
                        {this.Title.toHtml()}
                    </h1>
                </header>
                {this.Sections.map(section => section.toHtml())}
                <footer>
                    <table>
                        <tbody>
                            {this.__notes.toHtml()}
                        </tbody>
                    </table>
                </footer>
            </article>
        );
    }
}


exports = module.exports = Document;


const html = require(`../html`);
const NotePhrase = require(`./note-phrase`);
const Sentences = require(`./sentences`);
const Notes = require(`./notes`);
const Sections = require(`./sections`);
const IllustrationsSectionPart = require(`./illustrations-section-part`);
const CodeIllustrationContent = require(`./code-illustration-content`);
const ExplorerIllustrationContent = require(`./explorer-illustration-content`);
const shortcuts = require(`./shortcuts`);


const DateClass = Date;
const SectionsClass = Sections;
