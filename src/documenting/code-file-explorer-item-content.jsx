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
        const id = `hp-id-explorer-${this.Item.Explorer.Index}-item-${this.Item.Index}`;
        const header = deduceHeader(this.Item.Name, false, this.Code.Language); // @todo

        return [
            <input
                id={id}
                name={`hp-explorer-${this.Item.Explorer.Index}-selection`}
                type="radio"
            />,
            <label for={id}>
                {``.padStart(this.Item.Level, `-`)}
                {header}
            </label>,
            header,
            <figure class="hp-class-code" data-hp-language={deduceAttribute(this.Code.Language)}>
                {this.Code.toHtml()}
            </figure>,
        ];
    }
}


exports = module.exports = CodeFileExplorerItemContent;


const html = require(`../html`);
const Code = require(`./code`);
const deduceAttribute = require(`./deduce-language-attribute`);
const deduceHeader = require(`./deduce-code-header`);


const CodeClass = Code;
