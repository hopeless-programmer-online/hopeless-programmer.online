class Document {
    /**
     * @param {Object} object
     * @param {Items}  object.Items
     */
    constructor({ Title, Items = new ItemsClass }) {
        if (Title instanceof Sentences); else {
            throw new Error; // @todo
        }
        if (Items instanceof ItemsClass); else {
            throw new Error; // @todo
        }

        /**
         * @private
         * @type    {Sentences}
         */
        this.__title = Title;
        /**
         * @private
         * @type    {Items}
         */
        this.__items = Items;
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
     * @type   {Items}
     */
    get Items() {
        return this.__items;
    }

    /**
     * @public
     * @returns {html.Element}
     */
    toHtml() {
        return (
            <article class="index">
                <header>
                    <h1>
                        {this.Title.toHtml()}
                    </h1>
                </header>
                <ul>
                    {this.Items.toHtml()}
                </ul>
            </article>
        );
    }
}


exports = module.exports = Document;


const html = require(`../html`);
const Sentences = require(`./sentences`);
const Items = require(`./index-items`);


const ItemsClass = Items;
