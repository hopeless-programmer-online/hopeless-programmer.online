const s = require(`../../server/documenting`).shortcuts;
const { cm, kw, lt, v } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Використання символу `, s.lexeme(`@`), ` в C#.`),
    s.cs(
        [ kw(`var`), ` `, v(`class`), `     = `, lt(`1`), `; `, cm(`// помилка`) ],
        [ kw(`var`), ` `, v(`@class`), `    = `, lt(`2`), `; `, cm(`// ok`) ],
        [ kw(`var`), ` `, v(`_class`), `    = `, lt(`3`), `; `, cm(`// теж ok`) ],
        [ kw(`var`), ` `, v(`the_class`), ` = `, lt(`3`), `; `, cm(`// і це теж ok`) ],
    ),
]);
