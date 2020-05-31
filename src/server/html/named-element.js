const Element = require(`./element`);


class NamedElement extends Element {
    constructor({ Name }) {
        super();

        this.__name = Name;
    }

    get Name() {
        return this.__name;
    }
}


exports = module.exports = NamedElement;
