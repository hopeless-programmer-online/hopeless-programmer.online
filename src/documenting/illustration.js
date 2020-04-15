class Illustration {
    constructor({ Title, Description }) {
        this.__title = Title;
        this.__description = Description;
    }

    get Title() {
        return this.__title;
    }
    get Description() {
        return this.__description;
    }
}


exports = module.exports = Illustration;
