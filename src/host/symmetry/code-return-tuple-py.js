const s = require(`../../server/documenting`).shortcuts;
const {
    kw,
    f,
    lt,
    v,
    cm,
} = s;

exports = module.exports = s.illustration(``, s.py(...[
    [ kw(`def`), ` `, f(`f`), `():` ],
    [ `    `, kw(`return`), ` `, lt(`1`), `, `, lt(`2`), `, `, lt(`3`), `` ],
    [ `` ],
    [ v(`x`), ` = `, f(`f`), `()` ],
    [ `` ],
    [ cm(`# (1, 2, 3)`) ],
    [ f(`print`), `(`, v(`x`), `)` ],
]));
