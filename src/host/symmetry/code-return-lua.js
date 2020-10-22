const s = require(`../../server/documenting`).shortcuts;
const {
    kw,
    f,
    lt,
    cm,
} = s;

exports = module.exports = s.illustration(``, s.lua(...[
    [ kw(`function`), ` `, f(`f`), `()` ],
    [ `    `, kw(`return`), ` `, lt(`1`), `, `, lt(`2`), `` ],
    [ kw(`end`) ],
    [ `` ],
    [ `x, y, z = `, f(`f`), `()` ],
    [ `` ],
    [ cm(`-- 1, 2, nil`) ],
    [ f(`print`), `(x, y, z)` ],
]));
