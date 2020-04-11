class Section {
    constructor({ Title, Parts = [] }) {
        this.__title = Title;
        this.__parts = Parts;
    }

    get Title() {
        return this.__title;
    }
    get Parts() {
        return this.__parts;
    }
}


exports = module.exports = Section;
