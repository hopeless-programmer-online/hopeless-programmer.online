const BasicElement = require(`./basic-element`);


class StandardElement extends BasicElement {
    constructor({ Name, Attributes, Elements }) {
        super({ Name, Attributes });

        this.__elements = Elements;
    }

    get Elements() {
        return this.__elements;
    }
}


exports = module.exports = StandardElement;
