const s = require(`../../documenting`).shortcuts;
const { cm, kw, lt } = s;


exports = module.exports = s.illustration( ...[
    `Використання символу @ в C#.`,
    s.code(
        [ kw(`var`), ` class     = `, lt(`1`), `; `, cm(`// помилка`) ],
        [ kw(`var`), ` @class    = `, lt(`2`), `; `, cm(`// ok`) ],
        [ kw(`var`), ` _class    = `, lt(`3`), `; `, cm(`// теж ok`) ],
        [ kw(`var`), ` the_class = `, lt(`3`), `; `, cm(`// і це теж ok`) ],
    ),
]);
