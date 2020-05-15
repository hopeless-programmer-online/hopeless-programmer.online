const s = require(`../../documenting`).shortcuts;
const { f, c, kw } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Використання кваліфікатора const може створити ілюзію перевантаження за результатом. `),
    s.cpp(
        [ kw(`class`), ` `, c(`X`), ` {` ],
        [ `    `, c(`int`), `   `, f(`f`), `();` ],
        [ `    `, c(`float`), ` `, f(`f`), `() `, kw(`const`), `;` ],
        [ `};` ],
    ),
]);
