const Resource = require(`./resource`);
const FileResource = require(`./file-resource`);


/**
 * @todo move cache control elsewhere
 */
class CachedResource extends Resource {
    /**
     * @param {Object}       object
     * @param {FileResource} object.Target
     */
    constructor({ Target }) {
        if (Target instanceof Resource); else {
            throw new Error(`Target (${typeof Target} ${Target}) is not Resource.`);
        }

        super({ Path : Target.Path });

        /**
         * @private
         * @type    {Resource}
         */
        this.__target = Target;
        /**
         * @private
         * @type    {Stream | null}
         */
        this.__stream = null;

        if (Target instanceof FileResource) {
            let time = null;

            // watch for file changes
            fs.watch(Target.Path).on(`change`, () => {
                setTimeout(() => {
                    const stat = fs.statSync(Target.Path);

                    // console.log(dates, stat.mtimeMs);

                    // skip if file already performed
                    if (time === stat.mtimeMs) {
                        // console.log(`skip ${Target.Path}`);

                        return;
                    }

                    // console.log(`update ${Target.Path}`);

                    time = stat.mtimeMs;

                    this.Reload();
                }, 10); // delay for small amount of time to prevent multiple refresh
            });
        }
    }

    /**
     * @public
     * @type   {Resource}
     */
    get Target() {
        return this.__target;
    }

    /**
     * @protected
     * @override
     * @type      {{ [key: string] : string }}
     */
    _GetHeaders() {
        return this.Target.Headers;
    }
    /**
     * @protected
     * @async
     * @override
     * @returns   {Stream}
     */
    async _GetData() {
        await this.Refresh();

        return this.__stream;
    }

    Reset() {
        this.__stream = null;
    }
    async Refresh() {
        if (this.__stream === null) {
            await this.Reload();
        }
    }
    async Reload() {
        // console.log(`reload`);

        this.__stream = await this.Target.Data;
    }
}


exports = module.exports = CachedResource;


const fs = require(`fs`);
const Stream = require(`./stream`);
