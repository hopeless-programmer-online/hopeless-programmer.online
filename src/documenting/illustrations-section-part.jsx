const SectionPart = require(`./section-part`);


class IllustrationsSectionPart extends SectionPart {
    constructor({ Illustrations }) {
        super();

        this.__illustrations = Illustrations;
    }

    get Illustrations() {
        return this.__illustrations;
    }

    toHtml() {
        return (
            <div class="illustrations">
                {this.Illustrations.map(illustration => illustration.toHtml())}
            </div>
        );
    }
}


exports = module.exports = IllustrationsSectionPart;


const html = require(`../html`);
