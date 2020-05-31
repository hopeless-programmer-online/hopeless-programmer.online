const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Ієрархія класів базових об'єктів.`),
    s.js(
        [ s.kw(`class`), ` `, s.c(`Object`), ` {}` ],
        [ s.kw(`class`), ` `, s.c(`Boolean`), ` `, s.kw(`extends`), ` `, s.c(`Object`), ` {}` ],
        [ s.kw(`class`), ` `, s.c(`Number`), `  `, s.kw(`extends`), ` `, s.c(`Object`), ` {}` ],
        [ s.kw(`class`), ` `, s.c(`String`), `  `, s.kw(`extends`), ` `, s.c(`Object`), ` {}` ],
        [ s.kw(`class`), ` `, s.c(`Array`), `   `, s.kw(`extends`), ` `, s.c(`Object`), ` {}` ],
    ),
]);
