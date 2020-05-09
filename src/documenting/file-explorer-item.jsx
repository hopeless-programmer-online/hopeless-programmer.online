const ContentableExplorerItem = require(`./contentable-explorer-item`);


class FileExplorerItem extends ContentableExplorerItem {
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
            <label>
                <input name="selection" type="radio" />
                <span class="hp-class-radio" />
                {this.Name}
            </label>
        );
    }
}


exports = module.exports = FileExplorerItem;


const html = require(`../html`);
const Content = require(`./file-explorer-item-content`);


const ContentClass = Content;
