const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Галуження з використанням типу об'єкта.`),
    s.code(
        [ s.kw(`class`), ` `, s.c(`Number`), ` `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.kw(`get`), ` `, s.f(`Type`), `() {` ],
        [ `        `, s.kw(`return`), ` `, s.lt(`"number"`), `;` ],
        [ `    }` ],
        [ `}` ],
        [ `...` ],
        [ s.kw(`switch`), ` (`, s.v(`object`), `.`, s.v(`Type`), `) {` ],
        [ `    `, s.kw(`case`), ` `, s.lt(`"boolean"`), ` : `, s.kw(`return`), ` ... ;` ],
        [ `    `, s.kw(`case`), ` `, s.lt(`"number"`), `  : `, s.kw(`return`), ` ... ;` ],
        [ `    `, s.kw(`case`), ` `, s.lt(`"string"`), `  : `, s.kw(`return`), ` ... ;` ],
        [ `    ...` ],
        [ `}` ],
    ),
]);
