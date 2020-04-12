const BasicElement = require(`./basic-element`);


class StandardElement extends BasicElement {
    constructor({ Name, Attributes, Elements }) {
        super({ Name, Attributes });

        this.__elements = Elements;
    }

    get Elements() {
        return this.__elements;
    }

    toString() {
        const elements = this.Elements;
        let content = ``;

        content += this
            .Elements
            .toString()
            .replace(/\n/g, `\n${INDENTATION}`);

        if (elements.length > 0){
            if (elements[0] instanceof BasicElement) {
                content = `\r\n${INDENTATION}${content}`;
            }
            if (elements[elements.length - 1] instanceof BasicElement) {
                content = `${content}\r\n`;
            }
        }

        return `${super.toString()}${content}</${this.Name}>`;
    }
}


exports = module.exports = StandardElement;


const INDENTATION = `    `;
