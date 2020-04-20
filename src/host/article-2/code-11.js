const s = require(`../../documenting`).shortcuts;
const { kw, f } = s;


exports = module.exports = s.illustration( ...[
    `Скорочення службових слів в JS.`,
    s.code(
        [ kw(`function`), ` `, f(`f`), `() {` ],
        [ `    ...` ],
        [ `}` ],
        [ `` ],
        [ kw(`var`), ` `, kw(`fn`), ` = `, kw(`function`), `;` ],
        [ `` ],
        [ kw(`fn`), ` `, f(`g`), `() {` ],
        [ `    ...` ],
        [ `}` ],
    ),
]);
