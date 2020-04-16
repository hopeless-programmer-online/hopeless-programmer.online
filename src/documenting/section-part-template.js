/**
 * @abstract
 */
class SectionPartTemplate {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === SectionPartTemplate) {
            throw new Error; // @todo
        }
        if (this.Reduce !== SectionPartTemplate.prototype.Reduce) {
            throw new Error; // @todo
        }
        if (this._Reduce === SectionPartTemplate.prototype._Reduce) {
            throw new Error; // @todo
        }
    }

    /**
     * @protected
     * @abstract
     * @returns   {SectionPart}
     */
    _Reduce() {
        throw new Error; // @todo
    }

    /**
     * @public
     * @returns {SectionPart}
     * @throws  {Error}
     */
    Reduce() {
        const sectionPart = this._Reduce();

        if (sectionPart instanceof SectionPart); else {
            throw new Error; // @todo
        }

        return sectionPart;
    }
}


exports = module.exports = SectionPartTemplate;


const SectionPart = require(`./section-part`);
