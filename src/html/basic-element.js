const NamedElement = require(`./named-element`);


class BasicElement extends NamedElement {
    constructor({ Name, Attributes }) {
        super({ Name });

        this.__attributes = Attributes;
    }

    get Attributes() {
        return this.__attributes;
    }
}


exports = module.exports = BasicElement;
