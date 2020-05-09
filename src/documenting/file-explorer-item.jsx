const ExplorerItem = require(`./explorer-item`);


class FileExplorerItem extends ExplorerItem {
    /**
     * @param {Object}  object
     * @param {string}  object.Name
     * @param {Content} object.Content
     */
    constructor({ Name, Content }) {
        if (Content instanceof ContentClass); else {
            throw new Error; // @todo
        }

        super({ Name, Content });
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    _toHtml() {
        return (
            <span>
                <input name="selection" type="radio" />
                <label>{this.Name}</label>
            </span>
        );
    }
}


exports = module.exports = FileExplorerItem;


const html = require(`../html`);
const Content = require(`./file-explorer-item-content`);


const ContentClass = Content;
