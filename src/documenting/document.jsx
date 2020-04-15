class Document {
    constructor({ Title, Sections }) {
        this.__title = Title;
        this.__sections = Sections;
    }

    get Title() {
        return this.__title;
    }
    get Sections() {
        return this.__sections;
    }

    /**
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
                {this.Sections.map((section, index) => section.toHtml(index + 1))}
            </article>
        );
    }
}


exports = module.exports = Document;


const html = require(`../html`);
