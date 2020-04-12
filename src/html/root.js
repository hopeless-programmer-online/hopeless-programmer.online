class Root {
    constructor({ Elements }) {
        this.__elements = Elements;
    }

    get Elements() {
        return this.__elements;
    }
}


exports = module.exports = Root;
