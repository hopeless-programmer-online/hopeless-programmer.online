const SectionPart = require(`./section-part`);


class ListSectionPart extends SectionPart {
    /**
     * @param {Object} object
     * @param {List}   object.List
     */
    constructor({ List }) {
        if (List instanceof ListClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {List}
         */
        this.__list = List;
    }

    /**
     * @public
     * @type   {List}
     */
    get List() {
        return this.__list;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    async _toHtml() {
        return this.List.toHtml();
    }
}


exports = module.exports = ListSectionPart;


const html = require(`../html`);
const List = require(`./list`);


const ListClass = List;
