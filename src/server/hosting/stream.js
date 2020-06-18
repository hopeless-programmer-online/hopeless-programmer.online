/**
 * @todo add errors handling
 */
class Stream {
    /**
     * @param   {fs.ReadStream} reader
     * @returns {Stream}
     */
    static FromFileReadStream(reader) {
        const stream = new Stream;

        reader.on(`data`, chunk => stream.Push(chunk));
        reader.on(`end`, chunk => stream.End(chunk));

        return stream;
    }

    constructor() {
        this.__chunks = [];
        this.__emitter = new events.EventEmitter;
        this.__done = false;
    }

    async *[Symbol.asyncIterator]() {
        let   chunks  = this.__chunks.slice();
        let   done    = this.__done;
        let   next    = nop;

        const emitter = this.__emitter;
        const push    = chunk => {
            chunks.push(chunk);
            next();
        };
        const end     = chunk => {
            chunks.push(chunk);
            done = true;
            next();
        };

        emitter.on(`push`, push);
        emitter.on(`end`, end);

        while (true) {
            while (chunks.length > 0) {
                const chunk = chunks.shift();

                // console.log(chunk);

                if (chunk != null) yield chunk;
            }

            if (done) break;

            const promise = new Promise(resolve => {
                next = () => {
                    next = nop;
                    resolve();
                };
            });

            await promise;
        }

        emitter.removeListener(`push`, push);
        emitter.removeListener(`end`, end);
    }

    get Done() {
        return this.__done;
    }

    Push(chunk) {
        if (this.Done) {
            throw new Error; // @todo
        }

        this.__chunks.push(chunk);
        this.__emitter.emit(`push`, chunk);
    }
    End(chunk) {
        if (this.Done) {
            throw new Error; // @todo
        }

        this.__done = true;

        this.__chunks.push(chunk);
        this.__emitter.emit(`end`, chunk);
    }
    /**
     * @param {streaming.Writable} writable
     */
    async Pipe(writable) {
        for await (const chunk of this) {
            writable.write(chunk);
        }

        writable.end();
    }
}


exports = module.exports = Stream;


const events = require(`events`);


const nop = () => {};


const fs = require(`fs`);
const streaming = require(`stream`);
