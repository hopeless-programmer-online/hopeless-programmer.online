const Attribute = require(`./attribute`);


class StringAttribute extends Attribute {
    constructor({ String }) {
        super();

        this.__string = String;
    }

    get String() {
        return this.__string;
    }
}


exports = module.exports = StringAttribute;
