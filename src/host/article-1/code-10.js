const s = require(`../../documenting`).shortcuts;
const { kw, lt, v, f, a, cm } = s;


exports = module.exports = s.illustration( ...[
    `Звернення до перекритих полів в С++.`,
    s.code(`c++`,
        [ `struct A` ],
        [ `{` ],
        [ `    int x = 1;` ],
        [ `};` ],
        [ `` ],
        [ `struct B: public A` ],
        [ `{` ],
        [ `    int x = 2;` ],
        [ `    void F()` ],
        [ `    {` ],
        [ `        print(A::x); // 1` ],
        [ `        print(x);    // 2` ],
        [ `    }` ],
        [ `};` ],
    ),
]);
