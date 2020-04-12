const NamedElement = require(`./named-element`);


class DeclarationElement extends NamedElement {
    constructor({ Name, Content }) {
        super({ Name });

        this.__content = Content;
    }

    get Content() {
        return this.__content;
    }

    toString() {
        const content = this.Content.length > 0
            ? ` ${this.Content}`
            : ``;

        return `<${this.Name}${content}>`;
    }
}


exports = module.exports = DeclarationElement;
