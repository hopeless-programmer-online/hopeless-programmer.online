const NamedElement = require(`./named-element`);


class BasicElement extends NamedElement {
    constructor({ Name, Attributes }) {
        super({ Name });

        this.__attributes = Attributes;
    }

    get Attributes() {
        return this.__attributes;
    }
    get Html5() {
        return new Root({
            Elements : new Elements(
                new DeclarationElement({
                    Name : `!DOCTYPE`,
                    Content : `html`,
                }),
                this,
            ),
        });
    }

    toString() {
        const attributes = this.Attributes.size > 0
            ? ` ${this.Attributes.toString()}`
            : ``;

        return `<${this.Name}${attributes}>`;
    }
}


exports = module.exports = BasicElement;


const Root = require(`./root`);
const Elements = require(`./elements`);
const DeclarationElement = require(`./declaration-element`);
