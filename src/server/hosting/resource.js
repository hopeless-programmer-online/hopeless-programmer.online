/**
 * @typedef {{ [key: string] : string }} Headers
 */


/**
 * @abstract
 */
class Resource {
    /**
     * @throws {Error}
     */
    constructor() {
        if (new.target === Resource) {
            throw new Error(); // @todo
        }
        // @todo: assert get Headers
        if (this._GetHeaders === Resource.prototype._GetHeaders) {
            throw new Error; // @todo
        }
        // @todo: assert get Data
        if (this._GetData === Resource.prototype._GetData) {
            throw new Error; // @todo
        }
    }

    /**
     * @public
     * @type   {Headers}
     */
    get Headers() {
        const headers = this._GetHeaders();

        if (headers instanceof Object); else {
            throw new Error; // @todo
        }
        if (Object.values(headers).every(header => typeof header === `string`)); else {
            throw new Error; // @todo
        }

        return headers;
    }
    /**
     * @public
     * @async
     * @type   {Promise<Stream>}
     */
    get Data() {
        return this.__GetData();
    }

    /**
     * @private
     * @async
     * @returns {Promise<stream.Readable>}
     */
    async __GetData() {
        const data = await this._GetData();

        if (data instanceof stream.Readable); else {
            throw new Error; // @todo
        }

        return data;
    }

    /**
     * @protected
     * @abstract
     * @returns   {Headers}
     */
    _GetHeaders() {
        throw new Error; // @todo
    }
    /**
     * @protected
     * @abstract
     * @returns   {Promise<stream.Readable>}
     */
    async _GetData() {
        throw new Error; // @todo
    }
}


exports = module.exports = Resource;

const stream = require(`stream`);
