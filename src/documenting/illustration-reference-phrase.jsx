const ReferencePhrase = require(`./phrase`);


class IllustrationReferencePhrase extends ReferencePhrase {
    /**
     * @param {Object}       object
     * @param {Illustration} object.Illustration
     */
    constructor({ Illustration }) {
        if (Illustration instanceof IllustrationClass); else {
            throw new Error(); // @todo
        }

        super();

        /**
         * @private
         * @type    {Illustration}
         */
        this.__illustration = Illustration;
    }

    /**
     * @public
     * @type   {Illustration}
     */
    get Illustration() {
        return this.__illustration;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        const illustration = this.Illustration;

        return <span class="illustration-reference-phrase">(див. <a class="link" href={`#hp-id-illustration-${illustration.Index}`}>{illustration.Title.Text}</a>)</span>;
    }
}


exports = module.exports = IllustrationReferencePhrase;


const html = require(`../html`);


const Illustration = require(`./illustration`);


const IllustrationClass = Illustration;
