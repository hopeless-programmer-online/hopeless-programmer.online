const s = require(`../../documenting`).shortcuts;
const { lt, v, f, cm, c } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Звернення до глобального об'єкта в С++ за допомогою оператора `, s.lexeme(`::`), `.`),
    s.code(
        [ c(`int`), ` `, v(`x`), ` = `, lt(`5`), `;` ],
        [ `` ],
        [ c(`void`), ` `, f(`f`), `() {` ],
        [ `    `, c(`int`), ` `, v(`x`), ` = `, lt(`10`), `;` ],
        [ `    ` ],
        [ `    `, f(`print`), `(::`, v(`x`), `); `, cm(`// 5`) ],
        [ `}` ],
    ),
]);
