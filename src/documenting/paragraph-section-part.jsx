const SectionPart = require(`./section-part`);


class ParagraphSectionPart extends SectionPart {
    constructor({ Paragraph }) {
        super();

        this.__paragraph = Paragraph;
    }

    get Paragraph() {
        return this.__paragraph;
    }

    toHtml() {
        return this.Paragraph.toHtml();
    }
}


exports = module.exports = ParagraphSectionPart;


const html = require(`../html`);
