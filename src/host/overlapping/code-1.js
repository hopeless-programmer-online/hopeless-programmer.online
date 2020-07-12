const s = require(`../../server/documenting`).shortcuts;
const { kw, lt, v, f, a, cm } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Змінна перекриває доступ до аргумента.`),
    s.js(
        [ kw(`function`), ` `, f(`f`), `(`, a(`x`), ` = `, lt(`1`), `) {` ],
        [ `    `, kw(`var`), ` `, v(`x`), ` = `, lt(`2`), `;` ],
        [ `    ` ],
        [ `    `, f(`print`), `(`, v(`x`), `);   `, cm(`// 2`) ],
        [ `    `, f(`print`), `(`, a(`???`), `); `, cm(`// як нам отримати х = 1?`) ],
        [ `}` ],
    ),
]);
