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
     * @type   {Buffer}
     */
    get Data() {
        const data = this._GetData();

        if (data instanceof Buffer); else {
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
     * @returns   {Buffer}
     */
    _GetData() {
        throw new Error; // @todo
    }
}


exports = module.exports = Resource;
