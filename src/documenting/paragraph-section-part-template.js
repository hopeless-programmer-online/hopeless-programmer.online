const SectionPartTemplate = require(`./section-part-template`);


class ParagraphSectionPartTemplate extends SectionPartTemplate {
    /**
     * @param  {Object}    object
     * @param  {Paragraph} object.Paragraph
     * @throws {Error}
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
     * @protected
     * @override
     * @returns   {ParagraphSectionPart}
     */
    _Reduce() {
        return new ParagraphSectionPart({
            Paragraph : this.Paragraph.Reduce(),
        });
    }
}


exports = module.exports = ParagraphSectionPartTemplate;


const ParagraphSectionPart = require(`./paragraph-section-part`);
const Paragraph = require(`./paragraph-template`);


const ParagraphClass = Paragraph;
