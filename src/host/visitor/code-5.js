const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Логіку перетворення можна винести в окремі класи.`),
    s.js(
        [ s.kw(`class`), ` `, s.c(`Object`), ` {}` ],
        [ s.kw(`class`), ` `, s.c(`Boolean`), ` `, s.kw(`extends`), ` `, s.c(`Object`), ` {}` ],
        [ s.kw(`class`), ` `, s.c(`Number`), `  `, s.kw(`extends`), ` `, s.c(`Object`), ` {}` ],
        [ s.kw(`class`), ` `, s.c(`String`), `  `, s.kw(`extends`), ` `, s.c(`Object`), ` {}` ],
        [ s.kw(`class`), ` `, s.c(`Array`), `   `, s.kw(`extends`), ` `, s.c(`Object`), ` {}` ],
        [ `` ],
        [ s.kw(`class`), ` `, s.c(`JSON`), ` {` ],
        [ `    `, s.f(`To`), `(`, s.v(`entity`), `);` ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`XML`), ` {` ],
        [ `    `, s.f(`To`), `(`, s.v(`entity`), `);` ],
        [ `}` ],
    ),
]);
