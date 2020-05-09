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
     * @returns   {html.Element}
     */
    _toHtml() {
        return this.Code.toHtml();
    }
}


exports = module.exports = CodeFileExplorerItemContent;


const Code = require(`./code`);


const CodeClass = Code;
