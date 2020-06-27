const SectionPart = require(`./section-part`);


class ParagraphSectionPart extends SectionPart {
    /**
     * @param {Object}    object
     * @param {Paragraph} object.Paragraph
     */
    constructor({ Paragraph }) {
        if (Paragraph instanceof ParagraphClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Paragraph}
         */
        this.__paragraph = Paragraph;
    }

    /**
     * @public
     * @type   {Paragraph}
     */
    get Paragraph() {
        return this.__paragraph;
    }
    /**
     * @public
     * @override
     * @type     {Sentences}
     */
    get Sentences() {
        return this.Paragraph.Sentences;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    async _toHtml() {
        return this.Paragraph.toHtml();
    }
}


exports = module.exports = ParagraphSectionPart;


const html = require(`../html`);
const Paragraph = require(`./paragraph`);
const Sentences = require(`./sentences`);


const ParagraphClass = Paragraph;
