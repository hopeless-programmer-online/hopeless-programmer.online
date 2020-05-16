const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Легше зіставити VisitNumber з Visit, а не з Accept.`),
    s.js(
        [ s.kw(`class`), ` `, s.c(`Visitor`), ` {` ],
        [ `    `, s.f(`Visit`), `(`, s.v(`object`), `) {` ],
        [ `        `, s.v(`object`), `.`, s.c(`Accept`), `(`, s.kw(`this`), `);` ],
        [ `    }` ],
        [ `    ...` ],
        [ `}` ],
        [ `...` ],
        [ s.kw(`class`), ` `, s.c(`JSON`), ` `, s.kw(`extends`), ` `, s.c(`Visitor`), ` {` ],
        [ `    ...` ],
        [ `}` ],
        [ `...` ],
        [ s.kw(`let`), ` `, s.v(`json`), `   = `, s.kw(`new`), ` `, s.c(`JSON`), `();` ],
        [ s.kw(`let`), ` `, s.v(`object`), ` = `, s.kw(`new`), ` `, s.c(`Number`), `();` ],
        [ `` ],
        [ s.v(`json`), `.`, s.c(`Visit`), `(`, s.v(`object`), `); `, s.cm(`// json.VisitNumber(object)`) ],
    ),
]);
