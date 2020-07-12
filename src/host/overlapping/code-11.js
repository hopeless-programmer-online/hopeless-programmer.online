const s = require(`../../server/documenting`).shortcuts;
const { lt, v, c, cm, f } = s;


exports = module.exports = s.illustration( ...[
    `Звернення до перекритих аргументів функції.`,
    s.code(`c++`,
        [ c(`void`), ` `, f(`f`), `(`, c(`int`), ` `, v(`x`), ` = `, lt(`1`), `)` ],
        [ `{` ],
        [ `    `, c(`int`), ` `, v(`x`), ` = `, lt(`2`), `;` ],
        [ `    ` ],
        [ `    `, f(`print`), `(`, v(`x`), `);   `, cm(`// 2`) ],
        [ `    `, f(`print`), `(`, f(`f`), `.`, v(`x`), `); `, cm(`// 1`) ],
        [ `}` ],
    ),
]);
