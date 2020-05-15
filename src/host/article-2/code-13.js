const s = require(`../../documenting`).shortcuts;
const { kw, f } = s;


exports = module.exports = s.illustration( ...[
    `Деталізація службових слів в Python.`,
    s.code(`py`,
        [ kw(`def`), ` `, f(`f`), `():` ],
        [ `    `, kw(`pass`) ],
        [ `` ],
        [ kw(`function`), ` = `, kw(`def`) ],
        [ `` ],
        [ kw(`function`), ` `, f(`g`), `():` ],
        [ `    `, kw(`pass`) ],
    ),
]);
