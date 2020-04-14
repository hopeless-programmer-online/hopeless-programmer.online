const Element = require(`./element`);


class TextElement extends Element {
    constructor({ Text }) {
        super();

        this.__text = Text;
    }

    get Text() {
        return this.__text;
    }

    toString() {
        return this.Text
            .replace(/&/g, `&amp;`)
            .replace(/</g, `&lt;`)
            .replace(/>/g, `&gt;`);
    }
}


exports = module.exports = TextElement;
