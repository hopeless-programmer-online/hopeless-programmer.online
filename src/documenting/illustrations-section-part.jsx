const SectionPart = require(`./section-part`);


class IllustrationsSectionPart extends SectionPart {
    /**
     * @param  {Object}              object
     * @param  {Array<Illustration>} object.Illustrations
     * @throws {Error}
     */
    constructor({ Illustrations = [] } = {}) {
        if (Illustrations instanceof Array); else {
            throw new Error; // @todo
        }
        if (Illustrations.every(illustration => illustration instanceof Illustration)); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Array<Illustration>}
         */
        this.__illustrations = Illustrations;
    }

    /**
     * @public
     * @type   {Array<Sentence>}
     */
    get Illustrations() {
        return this.__illustrations;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return (
            <div class="illustrations">
                {this.Illustrations.map(illustration => illustration.toHtml())}
            </div>
        );
    }
}


exports = module.exports = IllustrationsSectionPart;


const html = require(`../html`);
const Illustration = require(`./illustration`);
