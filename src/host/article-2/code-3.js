const s = require(`../../documenting`).shortcuts;
const { cm, kw } = s;


exports = module.exports = s.illustration( ...[
    `Використання символу @ в C#.`,
    s.code(
        [ kw(`var`), ` class     = 1; `, cm(`// помилка`) ],
        [ kw(`var`), ` @class    = 2; `, cm(`// ok`) ],
        [ kw(`var`), ` _class    = 3; `, cm(`// теж ok`) ],
        [ kw(`var`), ` the_class = 3; `, cm(`// і це теж ok`) ],
    ),
]);
