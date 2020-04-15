class Section {
    constructor({ Title, Parts = [] }) {
        this.__title = Title;
        this.__parts = Parts;
    }

    get Title() {
        return this.__title;
    }
    get Parts() {
        return this.__parts;
    }

    toHtml(index) {
        if (typeof index !== `number`) {
            throw new Error; // @todo
        }

        const id = `section-${index}`;

        return (
            <div id={id} class="section">
                <h2 class="title">
                    {this.Title.Sentences.map(sentence => sentence.toHtml())}
                    <a class="link-button" href={`#${id}`}>#</a>
                </h2>
                {this.Parts.map(part => part.toHtml())}
            </div>
        );
    }
}


exports = module.exports = Section;


const html = require(`../html`);
