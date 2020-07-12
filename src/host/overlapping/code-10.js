const s = require(`../../server/documenting`).shortcuts;
const { kw, lt, v, c, cm, f } = s;


exports = module.exports = s.illustration( ...[
    `Звернення до перекритих полів в С++.`,
    s.code(`c++`,
        [ kw(`struct`), ` `, c(`A`) ],
        [ `{` ],
        [ `    `, c(`int`), ` `, v(`x`), ` = `, lt(`1`), `;` ],
        [ `};` ],
        [ `` ],
        [ kw(`struct`), ` `, c(`B`), `: `, kw(`public`), ` `, c(`A`) ],
        [ `{` ],
        [ `    `, c(`int`), ` `, v(`x`), ` = `, lt(`2`), `;` ],
        [ `    ` ],
        [ `    `, c(`void`), ` `, f(`F`), `()` ],
        [ `    {` ],
        [ `        `, f(`print`), `(`, c(`A`), `::`, v(`x`), `); `, cm(`// 1`) ],
        [ `        `, f(`print`), `(`, v(`x`), `);    `, cm(`// 2`) ],
        [ `    }` ],
        [ `};` ],
    ),
]);
