const NamedElement = require(`./named-element`);


class DeclarationElement extends NamedElement {
    constructor({ Name, Content }) {
        super({ Name });

        this.__content = Content;
    }

    get Content() {
        return this.__content;
    }
}


exports = module.exports = DeclarationElement;
