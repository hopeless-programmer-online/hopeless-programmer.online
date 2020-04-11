class Document {
    constructor({ Title }) {
        this.__title = Title;
    }

    get Title() {
        return this.__title;
    }
}


exports = module.exports = Document;
