class Code {
    constructor({ Lines = [] } = {}) {
        this.__lines = Lines;
    }

    get Lines() {
        return this.__lines;
    }

    toHtml() {
        return (
            <code class="code">
            </code>
        );
    }
}


exports = module.exports = Code;


const html = require(`../html`);
