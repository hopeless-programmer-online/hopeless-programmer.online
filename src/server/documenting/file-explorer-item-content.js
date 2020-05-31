const ExplorerItemContent = require(`./explorer-item-content`);


/**
 * @abstract
 */
class FileExplorerItemContent extends ExplorerItemContent {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === FileExplorerItemContent) {
            throw new Error(); // @todo
        }

        super();
    }
}


exports = module.exports = FileExplorerItemContent;
