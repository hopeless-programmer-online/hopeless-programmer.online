class SectionTemplate {
    /**
     * @param  {Object}            object
     * @param  {ParagraphTemplate} object.Title
     * @param  {number}            object.Index
     * @param  {Array<Part>}       object.Parts
     * @throws {Error}
     */
    constructor({ Title, Parts = [] }) {
        if (Title instanceof ParagraphTemplate) {
            throw new Error; // @todo
        }
        if (Parts instanceof Array) {
            throw new Error; // @todo
        }
        if (Parts.every(part => part instanceof Part)); else {
            throw new Error(); // @todo
        }

        /**
         * @private
         * @type    {ParagraphTemplate}
         */
        this.__title = Title;
        /**
         * @private
         * @type    {Array<Part>}
         */
        this.__parts = Parts;
    }

    /**
     * @public
     * @type   {ParagraphTemplate}
     */
    get Title() {
        return this.__title;
    }
    /**
     * @public
     * @type   {Array<Part>}
     */
    get Parts() {
        return this.__parts;
    }

    /**
     * @public
     * @param   {number}  index
     * @returns {Section}
     */
    Reduce(index) {
        if (!Number.isInteger(index) || index <= 0) {
            throw new Error; // @todo
        }

        const title = this.Title.Reduce();
        const parts = this.Parts.map(part => part.Reduce());

        return new Section({
            Title : title,
            Index : index,
            Parts : parts,
        });
    }
}


exports = module.exports = SectionTemplate;


const Section = require(`./section`);
const ParagraphTemplate = require(`./paragraph-template`);
const Part = require(`./section-part-template`);
