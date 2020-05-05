const ListItemContent = require(`./list-item-content`);


class SentencesListItemContent extends ListItemContent {
    /**
     * @param {Object}    object
     * @param {Sentences} object.Sentences
     */
    constructor({ Sentences }) {
        if (Sentences instanceof SentencesClass); else {
            throw new Error(); // @todo
        }

        super();

        /**
         * @private
         * @type    {Sentences}
         */
        this.__sentences = Sentences;
    }

    /**
     * @public
     * @type   {Sentences}
     */
    get Sentences() {
        return this.__sentences;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return this.Sentences.toHtml();
    }
}


exports = module.exports = SentencesListItemContent;


const html = require(`../html`);
const Sentences = require(`./sentences`);


const SentencesClass = Sentences;

