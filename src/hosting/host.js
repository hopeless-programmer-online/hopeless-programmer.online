class Host {
    /**
     * @param {Object}                       object
     * @param {{ [key: string] : Resource }} object.Routes
     */
    constructor({ Routes = {} } = {}) {
        if (Routes instanceof Object); else {
            throw new Error; // @todo
        }
        if (Object.values(Routes).every(resource => resource instanceof Resource)); else {
            throw new Error; // @todo
        }

        /**
         * @private
         * @type    {{ [key: string] : Resource }}
         */
        this.__routes = Routes;
    }

    /**
     * @public
     * @type    {{ [key: string] : Resource }}
     */
    get Routes() {
        return this.__routes;
    }

    /**
     * @param   {string}   route
     * @returns {Resource}
     * @throws  {Error}
     */
    Resolve(route) {
        const routes = this.Routes;

        if (route in routes); else {
            throw new NotFoundError({ Url : route });
        }

        const resource = routes[route];

        return resource;
    }
}


exports = module.exports = Host;


const Resource = require(`./resource`);
const NotFoundError = require(`./not-found-error`);
