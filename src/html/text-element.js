const Element = require(`./element`);


class TextElement extends Element {
    constructor({ Text }) {
        super();

        this.__text = Text;
    }

    get Text() {
        return this.__text;
    }
}


exports = module.exports = TextElement;
