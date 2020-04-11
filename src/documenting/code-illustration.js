const Illustration = require(`./illustration`);


class CodeIllustration extends Illustration {
    constructor({ Code }) {
        super();

        this.__code = Code;
    }

    get Code() {
        return this.__code;
    }
}


exports = module.exports = CodeIllustration;
