class Document {
    /**
     * @param {Object}    object
     * @param {Sentences} object.Title
     * @param {Sections}  object.Sections
     */
    constructor({ Title, Sections = new SectionsClass }) {
        if (Title instanceof Sentences); else {
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

        Sections.forEach((section, index) => {
            if (section.__Index === null) {
                section.__Index = index + 1;
            }

            for (const part of section.Parts) {
                if (part instanceof IllustrationsSectionPart) {
                    for (const illustration of part.Illustrations) {
                        if (illustration.__Index === null {
                            illustration.__Index = illustrationIndex;
                        }

                        const content = illustration.Content;

                        if (content instanceof CodeIllustrationContent) {
                            if (illustration.__Title === null) {
                                illustration.__Title = shortcuts.toParagraph(`Приклад коду №${codeIndex}`).Sentences;
                            }

                            ++codeIndex;
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
            <article class="document">
                <header class="header">
                    <h1 class="title">
                        {this.Title.toHtml()}
                    </h1>
                </header>
                <div class="sections">
                    {this.Sections.map(section => section.toHtml())}
                </div>
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
const Section = require(`./section`);
const Sections = require(`./sections`);
const IllustrationsSectionPart = require(`./illustrations-section-part`);
const CodeIllustrationContent = require(`./code-illustration-content`);
const shortcuts = require(`./shortcuts`);


const SectionsClass = Sections;
