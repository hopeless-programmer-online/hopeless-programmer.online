const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Використання кваліфікатора const може створити ілюзію перевантаження за результатом. `),
    s.code(
        [ `class X {` ],
        [ `    int   f();` ],
        [ `    float f() const;` ],
        [ `};` ],
    ),
]);
