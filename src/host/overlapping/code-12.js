const s = require(`../../server/documenting`).shortcuts;
const { kw, lt, v, c, f } = s;


exports = module.exports = s.illustration( ...[
    `Звернення до перекритої змінної циклу.`,
    s.code(`c++`,
        [ kw(`for`), ` `, v(`row`), ` (`, c(`int`), ` `, v(`index`), ` = `, lt(`0`), `; `, v(`index`), ` < `, lt(`10`), `; ++`, v(`index`), `)` ],
        [ `{` ],
        [ `    `, kw(`for`), ` `, v(`column`), ` (`, c(`int`), ` `, v(`index`), ` = `, lt(`0`), `; `, v(`index`), ` < `, lt(`10`), `; ++`, v(`index`), `)` ],
        [ `    {` ],
        [ `        `, f(`print`), `( `, v(`matrix`), `[`, v(`row`), `.`, v(`index`), `][`, v(`column`), `.`, v(`index`), `] );` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
