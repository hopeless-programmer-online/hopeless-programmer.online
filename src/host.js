const hosting = require(`./hosting`);
const documenting = require(`./documenting`);


exports = module.exports = new hosting.Host({
    Routes : {
        "/" : new hosting.DocumentResource({
            Document : documenting.shortcuts.document(`document title`,
            ),
        }),
    },
});
