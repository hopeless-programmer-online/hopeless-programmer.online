class Section {
    constructor({ Parts = [] } = {}) {
        this.__parts = Parts;
    }

    get Parts() {
        return this.__parts;
    }
}


exports = module.exports = Section;
