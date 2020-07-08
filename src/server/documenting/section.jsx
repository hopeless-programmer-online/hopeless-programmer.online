class Section {
    /**
     * @param  {Object}      object
     * @param  {Paragraph}   object.Title
     * @param  {?number}     object.Index
     * @param  {Array<Part>} object.Parts
     * @throws {Error}
     */
    constructor({ Title, Index = null, Parts = [] }) {
        if (Title instanceof Sentences); else {
            throw new Error; // @todo
        }
        if ((Number.isInteger(Index) && Index > 0) || Index === null); else {
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
         * @type    {Sentences}
         */
        this.__title = Title;
        /**
         * @private
         * @type    {?number}
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
     * @type   {Sentences}
     */
    get Title() {
        return this.__title;
    }
    /**
     * @public
     * @type   {number}
     */
    get Index() {
        const index = this.__index;

        if (index === null) {
            throw new Error; // @todo
        }

        return index;
    }
    /**
     * To use only inside document.
     *
     * @private
     * @type    {?number}
     */
    get __Index() {
        return this.__index;
    }
    /**
     * To use only inside document.
     *
     * @private
     * @type    {number}
     */
    set __Index(index) {
        if (Number.isInteger(index) && index > 0); else {
            throw new Error; // @todo
        }
        if (this.__index !== null) {
            throw new Error; // @todo
        }

        this.__index = index;
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
     * @type   {Phrases}
     */
    get Phrases() {
        return this.Sentences.Phrases;
    }
    /**
     * @public
     * @type   {Sentences}
     */
    get Sentences() {
        const sentences = this.Parts
            .reduce(
                (sentences, part) => new Sentences(...sentences, ...part.Sentences),
                new Sentences,
            );

        return sentences;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    async toHtml() {
        const id = `hp-id-section-${this.Index}`;

        return (
            <section id={id}>
                <h2>
                    <a href={`#${id}`}>§</a>
                    {this.Title.toHtml()}
                </h2>
                {await Promise.all(this.Parts.map(async part => await part.toHtml()))}
            </section>
        );
    }
}


exports = module.exports = Section;


const html = require(`../html`);
const Sentences = require(`./sentences`);
const Part = require(`./section-part`);
