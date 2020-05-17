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
     * @returns   {Array<html.Element>}
     */
    _toHtml() {
        const id = `hp-id-explorer-${this.Explorer.Index}-item-${this.Index}`;

        return [
            <input
                id={id}
                name="selection"
                type="radio"
            />,
            <label for={id}>{``.padStart(this.Level, `-`) + this.Name}</label>,
            this.Content.toHtml(),
        ];
    }
}


exports = module.exports = FileExplorerItem;


const html = require(`../html`);
const Content = require(`./file-explorer-item-content`);


const ContentClass = Content;
