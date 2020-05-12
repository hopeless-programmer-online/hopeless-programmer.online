const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Ручне приведення до типу.`),
    s.code(
        [ s.kw(`if`), ` (`, s.v(`object`), ` `, s.kw(`instanceof`), ` `, s.c(`Boolean`), `) {` ],
        [ `    `, s.kw(`return`), ` ... ;` ],
        [ `}` ],
        [ s.kw(`else`), ` `, s.kw(`if`), ` (`, s.v(`object`), ` `, s.kw(`instanceof`), ` `, s.c(`Number`), `) {` ],
        [ `    `, s.kw(`return`), ` ... ;` ],
        [ `}` ],
        [ `...` ],
    ),
]);
