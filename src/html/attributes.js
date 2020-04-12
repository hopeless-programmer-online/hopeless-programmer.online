class Attributes extends Map {
    toString() {
        return Array
            .from(this)
            .map(([ name, attribute ]) => `${name}=${attribute.toString()}`)
            .join(` `);
    }
}


exports = module.exports = Attributes;
