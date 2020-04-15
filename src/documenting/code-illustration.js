const Illustration = require(`./illustration`);


class CodeIllustration extends Illustration {
    constructor({ Title, Description, Code }) {
        super({ Title, Description });

        this.__code = Code;
    }

    get Code() {
        return this.__code;
    }
}


exports = module.exports = CodeIllustration;
