const s = require(`../../server/documenting`).shortcuts;
const {
    py,
    kw,
    f,
    lt,
    v,
    cm,
    c,
} = s;

exports = module.exports = s.illustration(s.sentence(`Отримання багатьох результатів як `, py(c(`tuple`)), `. `), py(...[
    [ kw(`def`), ` `, f(`f`), `():` ],
    [ `    `, kw(`return`), ` `, lt(`1`), `, `, lt(`2`), `, `, lt(`3`), `` ],
    [ `` ],
    [ v(`x`), ` = `, f(`f`), `()` ],
    [ `` ],
    [ cm(`# (1, 2, 3)`) ],
    [ f(`print`), `(`, v(`x`), `)` ],
]));
