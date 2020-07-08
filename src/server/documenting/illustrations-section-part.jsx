const SectionPart = require(`./section-part`);


class IllustrationsSectionPart extends SectionPart {
    /**
     * @param  {Object}       object
     * @param  {Illustration} object.Illustrations
     * @throws {Error}
     */
    constructor({ Illustrations = new IllustrationsClass } = {}) {
        if (Illustrations instanceof IllustrationsClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Illustration}
         */
        this.__illustrations = Illustrations;
    }

    /**
     * @public
     * @type   {Illustrations}
     */
    get Illustrations() {
        return this.__illustrations;
    }

    /**
     * @protected
     * @override
     * @returns   {Array<html.Element>}
     */
    async _toHtml() {
        return await this.Illustrations.toHtml();
    }
}


exports = module.exports = IllustrationsSectionPart;


const html = require(`../html`);
const Illustrations = require(`./illustrations`);


const IllustrationsClass = Illustrations;
