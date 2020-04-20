const s = require(`../../documenting`).shortcuts;
const { kw } = s;


exports = module.exports = s.illustration( ...[
    `Скорочення службових слів в JS.`,
    s.code(
        [ kw(`function`), ` f() {` ],
        [ `    ...` ],
        [ `}` ],
        [ `` ],
        [ kw(`var`), ` `, kw(`fn`), ` = `, kw(`function`), `;` ],
        [ `` ],
        [ kw(`fn`), ` g() {` ],
        [ `    ...` ],
        [ `}` ],
    ),
]);
