const s = require(`../../documenting`).shortcuts;
const { kw, lt, v, f, cm } = s;


exports = module.exports = s.illustration( ...[
    `Робота з глобальною змінною в Python.`,
    s.code(`py`,
        [ v(`x`), ` = `, lt(`5`) ],
        [ `` ],
        [ kw(`def`), ` `, f(`f`), `():` ],
        [ `  `, kw(`global`), ` `, v(`x`) ],
        [ `  ` ],
        [ `  `, v(`x`), ` = `, lt(`10`) ],
        [ `` ],
        [ f(`f`), `()` ],
        [ `` ],
        [ f(`print`), `(`, v(`x`), `) `, cm(`# 10`) ],
    ),
]);
