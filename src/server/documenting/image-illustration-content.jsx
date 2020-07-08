const IllustrationContent = require(`./illustration-content`);


class ImageIllustrationContent extends IllustrationContent {
    /**
     * @param {Object} object
     * @param {string} object.Url
     */
    constructor({ Url }) {
        if (typeof Url !== `string`) {
            throw new Error; // @todo
        }

        super();

        /**
         * @private
         * @type    {string}
         */
        this.__url = Url;
    }

    /**
     * @public
     * @type   {string}
     */
    get Url() {
        return this.__url;
    }

    /**
     * @protected
     * @override
     * @returns   {html.Element}
     */
    async _toHtml() {
        const url = this.Url;

        if (path.extname(url) === `.svg`) {
            const full = path.join(__dirname, `../../../`, url); // @todo: fix this hack
            const file = fs.readFileSync(full, `utf-8`);
            const node = await svgson.parse(file);

            if (hasExternals) {
                const { width, height } = node.attributes;
                const style = [
                    width  ? `width: ${width}`  : null,
                    height ? `height: ${height}` : null,
                ].filter(x => !!x).join(`; `);

                if (style) {
                    return (
                        <figure>
                            <object data={this.Url} type="image/svg+xml" style={style}></object>
                        </figure>
                    );
                }
            }
        }

        return (
            <figure>
                <img alt="image" src={this.Url}/>
            </figure>
        );
    }
}


exports = module.exports = ImageIllustrationContent;


const path = require(`path`);
const fs = require(`fs`);
const svgson = require(`svgson`);
const html = require(`../html`);


/**
 * @param   {svgson.INode} node
 * @returns {boolean}
 */
async function hasExternals(node) {
    if (node.name === `script`) {
        return true;
    }

    return node.children.some(hasExternals);
}
