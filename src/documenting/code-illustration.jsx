const Illustration = require(`./illustration`);


class CodeIllustration extends Illustration {
    constructor({ Title, Description, Code }) {
        super({ Title, Description });

        this.__code = Code;
    }

    get Code() {
        return this.__code;
    }

    toHtml() {
        // @todo: id

        return (
            <div id="" class="illustration">
                <h3 class="title">
                    {this.Title.Sentences.map(sentence => sentence.toHtml())}
                    <a class="link-button" href="#">#</a>
                </h3>
                <div class="description">
                    {this.Description.Sentences.map(sentence => sentence.toHtml())}
                </div>
                <div class="content">
                    {this.Code.toHtml()}
                </div>
            </div>
        );
    }
}


exports = module.exports = CodeIllustration;


const html = require(`../html`);
