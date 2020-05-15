const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Використання кваліфікатора const може створити ілюзію перевантаження за результатом. `),
    s.cpp(
        [ `class X {` ],
        [ `    int   f();` ],
        [ `    float f() const;` ],
        [ `};` ],
    ),
]);
