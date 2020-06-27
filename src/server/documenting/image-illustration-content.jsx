const IllustrationContent = require(`./illustration-content`);


class ImageIllustrationContent extends IllustrationContent {
    /**
     * @param {Object} object
     * @param {string} object.Url
     */
    constructor({ Url }) {
        if (typeof Url !== `string`) {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {string}
         */
        this.__url = Url;
    }

    /**
     * @public
     * @type   {string}
     */
    get Url() {
        return this.__url;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    async _toHtml() {
        return (
            <figure>
                <object data={this.Url} type="image/svg+xml" style="width: 600px;"></object>
                {/* <img alt="image" src={this.Url}/> */}
            </figure>
        );
    }
}


exports = module.exports = ImageIllustrationContent;


const html = require(`../html`);
