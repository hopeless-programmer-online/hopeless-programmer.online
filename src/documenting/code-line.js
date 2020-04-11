class CodeLine {
    constructor({ Lexemes = [] } = {}) {
        this.__lexemes = Lexemes;
    }

    get Lexemes() {
        return this.__lexemes;
    }
}


exports = module.exports = CodeLine;
