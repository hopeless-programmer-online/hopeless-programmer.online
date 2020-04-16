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
                {this.Sections.map(section => section.toHtml())}
            </article>
        );
    }
}


exports = module.exports = Document;


const html = require(`../html`);
const Paragraph = require(`./paragraph`);
const Section = require(`./section`);
