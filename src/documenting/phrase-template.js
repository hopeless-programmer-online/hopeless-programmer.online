class PhraseTemplate {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === PhraseTemplate) {
            throw new Error; // @todo
        }
        if (this.Reduce !== PhraseTemplate.prototype.Reduce) {
            throw new Error; // @todo
        }
        if (this._Reduce === PhraseTemplate.prototype._Reduce) {
            throw new Error; // @todo
        }
    }

    /**
     * @protected
     * @abstract
     * @returns   {Phrase}
     */
    _Reduce() {
        throw new Error; // @todo
    }

    /**
     * @public
     * @returns {Phrase}
     * @throws  {Error}
     */
    Reduce() {
        const phrase = this._Reduce();

        if (phrase instanceof Phrase); else {
            throw new Error; // @todo
        }

        return phrase;
    }
}


exports = module.exports = PhraseTemplate;


const Phrase = require(`./phrase`);
