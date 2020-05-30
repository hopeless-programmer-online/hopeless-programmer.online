const ExplorerItem = require(`./explorer-item`);


class DirectoryExplorerItem extends ExplorerItem {
    /**
     * @param {Object} object
     * @param {string} object.Name
     * @param {Items}  object.Items
     */
    constructor({ Name, Items }) {
        if (Items instanceof ItemsClass); else {
            throw new Error; // @todo
        }

        super({ Name });

        /**
         * @private
         * @type    {Items}
         */
        this.__items = Items;
    }

    /**
     * @private
     * @type    {string}
     */
    set __Index(index) {
        super.__Index = index;

        this.Items.forEach((item, childIndex) => {
            item.__Index = `${index}-${childIndex}`;
        });
    }
    /**
     * @private
     * @type    {Explorer}
     */
    set __Explorer(explorer) {
        super.__Explorer = explorer;

        for (const item of this.Items) {
            item.__Explorer = explorer;
        }
    }
    /**
     * @private
     * @type    {number}
     */
    set __Level(level) {
        super.__Level = level;

        for (const item of this.Items) {
            item.__Level = level + 1;
        }
    }

    /**
     * @public
     * @type   {Items}
     */
    get Items() {
        return this.__items;
    }

    /**
     * @protected
     * @override
     * @returns   {Array<html.Element>}
     */
    _toHtml() {
        const icon = `folder`;

        return [
            <label>
                {``.padStart(this.Level, `-`)}
                <figcaption class="hp-class-code-header">
                    <img alt={icon} src={`./media/icons/${icon}.svg`} />
                </figcaption>
                {this.Name}
            </label>,
            this.Items.toHtml(),
        ];
    }
}


exports = module.exports = DirectoryExplorerItem;


const html = require(`../html`);
const Explorer = require(`./explorer`);
const Items = require(`./explorer-items`);


const ItemsClass = Items;
