const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Використання перевантажених за результатом функцій в представленні художника. `),
    s.cpp(
        [ `int   f() {` ],
        [ `    return 1;` ],
        [ `}` ],
        [ `float f() {` ],
        [ `    return 2.0;` ],
        [ `}` ],
        [ `` ],
        [ `int   x = f();` ],
        [ `float y = f();` ],
        [ `` ],
        [ `print(x); // 1` ],
        [ `print(y); // 2` ],
    ),
]);
