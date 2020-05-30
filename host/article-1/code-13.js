const s = require(`../../documenting`).shortcuts;
const { kw, lt, v, f, a, cm } = s;


exports = module.exports = s.illustration( ...[
    `Звернення до інструкції break зовнішнього циклу.`,
    s.code(`c++`,
        [ `for outer (int i = 0; i < 10; ++i)` ],
        [ `{` ],
        [ `    for inner (int j = 0; j < 10; ++j)` ],
        [ `    {` ],
        [ `        outer.break; // вихід з зовнішнього циклу` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
