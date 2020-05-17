const FileExplorerItemContent = require(`./file-explorer-item-content`);


class CodeFileExplorerItemContent extends FileExplorerItemContent {
    /**
     * @param {Object} object
     * @param {Code}   object.Code
     */
    constructor({ Code }) {
        if (Code instanceof CodeClass); else {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {Code}
         */
        this.__code = Code;
    }

    /**
     * @public
     * @type   {Code}
     */
    get Code() {
        return this.__code;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element | Array<html.Element>}
     */
    _toHtml() {
        return [
            <span>name</span>,
            this.Code.toHtml(),
        ];
    }
}


exports = module.exports = CodeFileExplorerItemContent;


const html = require(`../html`);
const Code = require(`./code`);


const CodeClass = Code;
