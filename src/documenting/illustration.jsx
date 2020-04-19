class Illustration {
    /**
     * @param  {Object}     object
     * @param  {?Paragraph} object.Title
     * @param  {Paragraph}  object.Description
     * @param  {?number}    object.Index
     * @param  {Content}    object.Content
     * @throws {Error}
     */
    constructor({ Title = null, Description, Index = null, Content }) {
        if (Title instanceof Paragraph || Title === null); else {
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
         * @type    {?Paragraph}
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
     * @type   {Paragraph}
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
     * @type   {Paragraph}
     */
    set __Title(title) {
        if (title instanceof Paragraph); else {
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
const Paragraph = require(`./paragraph`);
const Content = require(`./illustration-content`);


const ContentClass = Content;
