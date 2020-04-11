class Code {
    constructor({ Lines = [] } = {}) {
        this.__lines = Lines;
    }

    get Lines() {
        return this.__lines;
    }
}


exports = module.exports = Code;
