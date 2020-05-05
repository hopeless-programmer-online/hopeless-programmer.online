const s = require(`../../documenting`).shortcuts;
const { kw, lt, v, f, a, cm, p } = s;


exports = module.exports = s.illustration( ...[
    `Звернення через глобальний об'єкт в JavaScript.`,
    s.code(
        [ kw(`var`), ` `, v(`x`), ` = `, lt(`5`), `;` ],
        [ `` ],
        [ kw(`function`), ` `, f(`f`), `() {` ],
        [ `    `, kw(`var`), ` `, v(`x`), ` = `, lt(`10`), `;` ],
        [ `    ` ],
        [ `    `, v(`console`), `.`, p(`log`), `(`, v(`x`), `);        `, cm(`// 10`) ],
        [ `    `, v(`console`), `.`, p(`log`), `(`, v(`global`), `.`, p(`x`), `); `, cm(`// 5`) ],
        [ `}` ],
        [ `` ],
        [ f(`f`), `();` ],
    ),
]);
