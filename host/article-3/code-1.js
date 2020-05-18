const s = require(`../../documenting`).shortcuts;
const { kw, c, f, lt, cm, v } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Використання перевантажених за результатом функцій в представленні художника. `),
    s.cpp(
        [ c(`int`), `   `, f(`f`), `() {` ],
        [ `    `, kw(`return`), ` `, lt(`1`), `;` ],
        [ `}` ],
        [ c(`float`), ` `, f(`f`), `() {` ],
        [ `    `, kw(`return`), ` `, lt(`2.0`), `;` ],
        [ `}` ],
        [ `` ],
        [ c(`int`), `   `, v(`x`), ` = `, f(`f`), `();` ],
        [ c(`float`), ` `, v(`y`), ` = `, f(`f`), `();` ],
        [ `` ],
        [ f(`print`), `(`, v(`x`), `); `, cm(`// 1`) ],
        [ f(`print`), `(`, v(`y`), `); `, cm(`// 2`) ],
    ),
]);
