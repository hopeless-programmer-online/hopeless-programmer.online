const s = require(`../../documenting`).shortcuts;
const { kw, lt, v, f, a, cm } = s;


exports = module.exports = s.illustration( ...[
    `Звернення в порядку оголошення. `,
    s.code(
        [ `int x = 1;` ],
        [ `` ],
        [ `{` ],
        [ `    int x = 2;` ],
        [ `    ` ],
        [ `    {` ],
        [ `        int x = 3` ],
        [ `        ` ],
        [ `        print(x);       // 3` ],
        [ `        print(../x);    // 2` ],
        [ `        print(../../x); // 1` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
