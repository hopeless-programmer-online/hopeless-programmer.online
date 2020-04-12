class Document {
    constructor({ Title, Sections }) {
        this.__title = Title;
        this.__sections = Sections;
    }

    get Title() {
        return this.__title;
    }
    get Sections() {
        return this.__sections;
    }
}


exports = module.exports = Document;
