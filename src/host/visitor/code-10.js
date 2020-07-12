const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Відвідувані класи викликають відповідні їм методи з класу Visitor.`),
    s.js(
        [ s.kw(`class`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`Accept`), `(`, s.v(`visitor`), `); `, s.cm(`// абстрактний`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`Number`), ` `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`Accept`), `(`, s.v(`visitor`), `) { `, s.cm(`// реалізація`) ],
        [ `        `, s.v(`visitor`), `.`, s.f(`VisitNumber`), `(`, s.kw(`this`), `);` ],
        [ `    }` ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`String`), ` `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`Accept`), `(`, s.v(`visitor`), `) { `, s.cm(`// реалізація`) ],
        [ `        `, s.v(`visitor`), `.`, s.f(`VisitString`), `(`, s.kw(`this`), `);` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
