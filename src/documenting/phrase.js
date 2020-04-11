class Phrase {
    constructor() {
        if (new.target === Phrase) {
            throw new Error(); // @todo
        }
    }
}


exports = module.exports = Phrase;
