class Root {
    constructor({ Elements }) {
        this.__elements = Elements;
    }

    get Elements() {
        return this.__elements;
    }

    toString() {
        return `${this.Elements.toString()}\r\n`;
    }
}


exports = module.exports = Root;
