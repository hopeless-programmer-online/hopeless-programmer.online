class NotFoundError extends Error {
    /**
     * @param  {Object} object
     * @param  {string} object.Url
     * @throws {Error}
     */
    constructor({ Url }) {
        // @todo: replace with URL class
        if (typeof Url !== `string`) {
            throw new Error; // @todo
        }

        super(`Resource at ${JSON.stringify(Url)} was not found.`);

        /**
         * @private
         * @type    {string}
         */
        this.__url = Url;
    }

    /**
     * @public
     * @type   {string}
     */
    get Url() {
        return this.__url;
    }
}


exports = module.exports = NotFoundError;
