class Document {
    /**
     * @param {Object}         object
     * @param {Paragraph}      object.Title
     * @param {Array<Section>} object.Sections
     */
    constructor({ Title, Sections = [] }) {
        if (Title instanceof Paragraph); else {
            throw new Error; // @todo
        }
        if (Sections instanceof Array); else {
            throw new Error; // @todo
        }
        if (Sections.every(section => section instanceof Section)); else {
            throw new Error; // @todo
        }

        let illustrationIndex = 1;
        let codeIndex = 1;

        Sections.forEach((section, index) => {
            if (section.__Index === null) {
                section.__Index = index + 1;
            }

            for (const part of section.Parts) {
                if (part instanceof IllustrationsSectionPart) {
                    for (const illustration of part.Illustrations) {
                        illustration.__Index = illustrationIndex;

                        const content = illustration.Content;

                        if (content instanceof CodeIllustrationContent) {
                            illustration.__Title = shortcuts.toParagraph(`Приклад коду №${codeIndex}`);

                            ++codeIndex;
                        }

                        ++illustrationIndex;
                    }
                }
            }
        });

        /**
         * @private
         * @type    {Paragraph}
         */
        this.__title = Title;
        /**
         * @private
         * @type    {Array<Section>}
         */
        this.__sections = Sections;
    }

    /**
     * @public
     * @type   {Paragraph}
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
                        {this.Title.Sentences.map(sentence => sentence.toHtml())}
                    </h1>
                </header>
                <div class="sections">
                    {this.Sections.map(section => section.toHtml())}
                </div>
            </article>
        );
    }
}


exports = module.exports = Document;


const html = require(`../html`);
const Paragraph = require(`./paragraph`);
const Section = require(`./section`);
const IllustrationsSectionPart = require(`./illustrations-section-part`);
const CodeIllustrationContent = require(`./code-illustration-content`);
const shortcuts = require(`./shortcuts`);
