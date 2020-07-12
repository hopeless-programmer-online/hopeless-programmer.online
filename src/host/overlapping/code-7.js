const s = require(`../../server/documenting`).shortcuts;
const { lt, v, c, cm, f, cpp } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Оператор `, s.lexeme(`::`), ` не спрацює для змінної `, cpp(v(`х`)), ` зі значенням `, cpp(lt(`2`)), `.`),
    s.code(`c++`,
        [ c(`int`), ` `, v(`x`), ` = `, lt(`1`), `;` ],
        [ `` ],
        [ c(`void`), ` `, f(`f`), `()` ],
        [ `{` ],
        [ `    `, c(`int`), ` `, v(`x`), ` = `, lt(`2`), `;` ],
        [ `    ` ],
        [ `    {` ],
        [ `        `, c(`int`), ` `, v(`x`), ` = `, lt(`3`), `` ],
        [ `        ` ],
        [ `        `, f(`print`), `(`, v(`x`), `);   `, cm(`// 3`) ],
        [ `        `, f(`print`), `(::`, v(`x`), `); `, cm(`// 1`) ],
        [ `        `, f(`print`), `(???); `, cm(`// 2?`) ],
        [ `    }` ],
        [ `}` ],
    ),
]);
