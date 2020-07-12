const s = require(`../../server/documenting`).shortcuts;
const { kw, lt, v, c, cm, cpp } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Звернення до інструкції `, cpp(kw(`break`)), ` зовнішнього циклу.`),
    s.code(`c++`,
        [ kw(`for`), ` `, v(`outer`), ` (`, c(`int`), ` `, v(`i`), ` = `, lt(`0`), `; `, v(`i`), ` < `, lt(`10`), `; ++`, v(`i`), `)` ],
        [ `{` ],
        [ `    `, kw(`for`), ` `, v(`inner`), ` (`, c(`int`), ` `, v(`j`), ` = `, lt(`0`), `; `, v(`j`), ` < `, lt(`10`), `; ++`, v(`j`), `)` ],
        [ `    {` ],
        [ `        `, v(`outer`), `.`, kw(`break`), `; `, cm(`// вихід з зовнішнього циклу`) ],
        [ `    }` ],
        [ `}` ],
    ),
]);
