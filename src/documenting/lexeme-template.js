class LexemeTemplate {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === LexemeTemplate) {
            throw new Error; // @todo
        }
        if (this.Reduce !== LexemeTemplate.prototype.Reduce) {
            throw new Error; // @todo
        }
        if (this._Reduce === LexemeTemplate.prototype._Reduce) {
            throw new Error; // @todo
        }
    }

    /**
     * @protected
     * @abstract
     * @returns   {Lexeme}
     */
    _Reduce() {
        throw new Error; // @todo
    }

    /**
     * @public
     * @returns {Lexeme}
     * @throws  {Error}
     */
    Reduce() {
        const lexeme = this._Reduce();

        if (lexeme instanceof Lexeme); else {
            throw new Error; // @todo
        }

        return lexeme;
    }
}


exports = module.exports = LexemeTemplate;


const Lexeme = require(`./lexeme`);
