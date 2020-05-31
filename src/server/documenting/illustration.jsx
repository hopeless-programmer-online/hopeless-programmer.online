class Illustration {
    /**
     * @param  {Object}     object
     * @param  {?Sentences} object.Title
     * @param  {Paragraph}  object.Description
     * @param  {?number}    object.Index
     * @param  {Content}    object.Content
     * @throws {Error}
     */
    constructor({ Title = null, Description, Index = null, Content }) {
        if (Title instanceof Sentences || Title === null); else {
            throw new Error; // @todo
        }
        if (Description instanceof Paragraph); else {
            throw new Error; // @todo
        }
        if ((Number.isInteger(Index) && Index > 0) || Index === null); else {
            throw new Error; // @todo
        }
        if (Content instanceof ContentClass); else {
            throw new Error; // @todo
        }

        /**
         * @private
         * @type    {?Sentences}
         */
        this.__title = Title;
        /**
         * @private
         * @type    {Paragraph}
         */
        this.__description = Description;
        /**
         * @private
         * @type    {?number}
         */
        this.__index = Index;
        /**
         * @private
         * @type    {Content}
         */
        this.__content = Content;
    }

    /**
     * @public
     * @type   {Sentences}
     */
    get Title() {
        const title = this.__title;

        if (title === null) {
            throw new Error; // @todo
        }

        return title;
    }
    /**
     * @public
     * @type   {Sentences}
     */
    get __Title() {
        return this.__title;
    }
    /**
     * @public
     * @type   {Sentences}
     */
    set __Title(title) {
        if (title instanceof Sentences); else {
            throw new Error; // @todo
        }
        if (this.__title !== null) {
            throw new Error; // @todo
        }

        this.__title = title;
    }
    /**
     * @public
     * @type   {Paragraph}
     */
    get Description() {
        return this.__description;
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
     * @private
     * @type    {number}
     */
    get __Index() {
        return this.__index;
    }
    /**
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
     * @type   {Content}
     */
    get Content() {
        return this.__content;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        const id = `hp-id-illustration-${this.Index}`;

        return (
            <figure id={id}>
                {this.Content.toHtml()}
                <figcaption>
                    <h3>
                        {this.Title.toHtml()}
                        <a href={`#${id}`}>§</a>
                    </h3>
                    {this.Description.toHtml()}
                </figcaption>
            </figure>
        );
    }
}


exports = module.exports = Illustration;


const html = require(`../html`);
const Sentences = require(`./sentences`);
const Paragraph = require(`./paragraph`);
const Content = require(`./illustration-content`);


const ContentClass = Content;
