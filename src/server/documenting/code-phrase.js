const Phrase = require(`./phrase`);


class CodePhrase extends Phrase {
    /**
     * @param {Object}    object
     * @param {CodeClass} object.Code
     */
    constructor({ Code }) {
        if (Code instanceof CodeClass); else {
            throw new Error(); // @todo
        }

        super();

        /**
         * @private
         * @type    {CodeClass}
         */
        this.__code = Code;
    }

    /**
     * @public
     * @type   {CodeClass}
     */
    get Code() {
        return this.__code;
    }
}


exports = module.exports = CodePhrase;


const CodeClass = require(`./code`);
