const IllustrationContent = require(`./illustration-content`);


class ExplorerIllustrationContent extends IllustrationContent {
    /**
     * @param {Object} object
     * @param {Explorer}   object.Explorer
     */
    constructor({ Explorer }) {
        if (Explorer instanceof ExplorerClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Explorer}
         */
        this.__explorer = Explorer;
    }

    /**
     * @public
     * @type   {Explorer}
     */
    get Explorer() {
        return this.__explorer;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return this.Explorer.toHtml();
    }
}


exports = module.exports = ExplorerIllustrationContent;


const Explorer = require(`./explorer`);


const ExplorerClass = Explorer;
