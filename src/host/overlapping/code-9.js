const s = require(`../../server/documenting`).shortcuts;
const { lt, v, c, cm, f } = s;


exports = module.exports = s.illustration( ...[
    `Звернення до послідовно оголошених об'єктів в межах однієї області.`,
    s.code(`c++`,
        [ c(`int`), ` `, v(`x`), ` = `, lt(`1`), `;` ],
        [ c(`int`), ` `, v(`x`), ` = `, lt(`2`), `;` ],
        [ c(`int`), ` `, v(`x`), ` = `, lt(`3`), `;` ],
        [ `` ],
        [ f(`print`), `(`, v(`x`), `);       `, cm(`// 3`) ],
        [ f(`print`), `(../`, v(`x`), `);    `, cm(`// 2`) ],
        [ f(`print`), `(../../`, v(`x`), `); `, cm(`// 1`) ],
    ),
]);
