const IllustrationContent = require(`./illustration-content`);


class CodeIllustrationContent extends IllustrationContent {
    constructor({ Code }) {
        super();

        this.__code = Code;
    }

    get Code() {
        return this.__code;
    }

    toHtml() {
        return this.Code.toHtml();
    }
}


exports = module.exports = CodeIllustrationContent;
