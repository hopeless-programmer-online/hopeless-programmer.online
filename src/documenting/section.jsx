class Section {
    /**
     * @param  {Object}      object
     * @param  {Paragraph}   object.Title
     * @param  {number}      object.Index
     * @param  {Array<Part>} object.Parts
     * @throws {Error}
     */
    constructor({ Title, Index, Parts = [] }) {
        if (Title instanceof Paragraph); else {
            throw new Error; // @todo
        }
        if (!Number.isInteger(Index) || Index <= 0) {
            throw new Error; // @todo
        }
        if (Parts instanceof Array); else {
            throw new Error; // @todo
        }
        if (Parts.every(part => part instanceof Part)); else {
            throw new Error; // @todo
        }

        /**
         * @private
         * @type    {Paragraph}
         */
        this.__title = Title;
        /**
         * @private
         * @type    {number}
         */
        this.__index = Index;
        /**
         * @private
         * @type    {Array<Part>}
         */
        this.__parts = Parts;
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
     * @type   {number}
     */
    get Index() {
        return this.__index;
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
     * @returns {html.Element}
     */
    toHtml() {
        const id = `section-${this.Index}`;

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
const Paragraph = require(`./paragraph`);
const Part = require(`./section-part`);
