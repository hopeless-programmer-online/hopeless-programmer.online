const s = require(`../../documenting`).shortcuts;
const { kw, lt, v, f, a, cm } = s;


exports = module.exports = s.illustration( ...[
    `Звернення до перекритої змінної циклу.`,
    s.code(`c++`,
        [ `for row (int index = 0; index < 10; ++index)` ],
        [ `{` ],
        [ `    for column (int index = 0; index < 10; ++index)` ],
        [ `    {` ],
        [ `        print( matrix[row.index][column.index] );` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
