const s = require(`../../documenting`).shortcuts;
const { kw, lt, v, f, a, cm } = s;


exports = module.exports = s.illustration( ...[
    `Звернення до перекритих аргументів функції.`,
    s.code(`c++`,
        [ `void f(int x = 1)` ],
        [ `{` ],
        [ `    int x = 2;` ],
        [ `    ` ],
        [ `    print(x);   // 2` ],
        [ `    print(f.x); // 1` ],
        [ `}` ],
    ),
]);
