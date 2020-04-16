class Illustration {
    constructor({ Title, Description, Index, Content }) {
        this.__title = Title;
        this.__description = Description;
        this.__index = Index;
        this.__content = Content;
    }

    get Title() {
        return this.__title;
    }
    get Description() {
        return this.__description;
    }
    get Index() {
        return this.__index;
    }
    get Content() {
        return this.__content;
    }

    toHtml() {
        const id = `illustration-${this.Index}`;

        return (
            <div id={id} class="illustration">
                <h3 class="title">
                    {this.Title.Sentences.map(sentence => sentence.toHtml())}
                    <a class="link-button" href={`#${id}`}>#</a>
                </h3>
                <div class="description">
                    {this.Description.Sentences.map(sentence => sentence.toHtml())}
                </div>
                <div class="content">
                    {this.Content.toHtml()}
                </div>
            </div>
        );
    }
}


exports = module.exports = Illustration;


const html = require(`../html`);
