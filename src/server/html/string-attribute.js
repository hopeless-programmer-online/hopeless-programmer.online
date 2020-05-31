const Attribute = require(`./attribute`);


class StringAttribute extends Attribute {
    constructor({ String }) {
        super();

        this.__string = String;
    }

    get String() {
        return this.__string;
    }

    toString() {
        return JSON.stringify(this.String
            .replace(/"/g, `&quot;`)
            .replace(/'/g, `&#39;`),
        );
    }
}


exports = module.exports = StringAttribute;
