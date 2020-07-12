const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Галуження з використанням конструктора.`),
    s.js(
        [ s.kw(`switch`), ` (`, s.v(`object`), `.`, s.kw(`constructor`), `) {` ],
        [ `    `, s.kw(`case`), ` `, s.c(`Boolean`), ` : `, s.kw(`return`), ` ... ;` ],
        [ `    `, s.kw(`case`), ` `, s.c(`Number`), `  : `, s.kw(`return`), ` ... ;` ],
        [ `    `, s.kw(`case`), ` `, s.c(`String`), `  : `, s.kw(`return`), ` ... ;` ],
        [ `    ...` ],
        [ `}` ],
    ),
]);
