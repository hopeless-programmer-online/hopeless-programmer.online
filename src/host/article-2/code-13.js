const s = require(`../../documenting`).shortcuts;
const { kw } = s;


exports = module.exports = s.illustration( ...[
    `Деталізація службових слів в Python.`,
    s.code(
        [ kw(`def`), ` f():` ],
        [ `    `, kw(`pass`) ],
        [ `` ],
        [ kw(`function`), ` = `, kw(`def`) ],
        [ `` ],
        [ kw(`function`), ` g():` ],
        [ `    `, kw(`pass`) ],
    ),
]);
