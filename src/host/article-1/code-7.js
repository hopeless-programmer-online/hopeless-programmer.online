const s = require(`../../documenting`).shortcuts;
const { kw, lt, v, f, a, cm } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Оператор `, s.lexeme(`::`), ` не спрацює для змінної `, v(`х`), ` зі значенням `, lt(`2`), `.`),
    s.code(`c++`,
        [ `int x = 1;` ],
        [ `` ],
        [ `void f()` ],
        [ `{` ],
        [ `    int x = 2;` ],
        [ `    ` ],
        [ `    {` ],
        [ `        int x = 3` ],
        [ `        ` ],
        [ `        print(x);   // 3` ],
        [ `        print(::x); // 1` ],
        [ `        print(???); // 2?` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
