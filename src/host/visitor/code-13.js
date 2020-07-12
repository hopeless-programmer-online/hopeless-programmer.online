const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.paragraph(...[
        s.sentence(`Метод VisitNumber повертає значення замість того, щоб зберігати його. `),
        s.sentence(`П'ятірка виводиться лише з міркувань абстрагування від наповнення класу Number : )`),
    ]),
    s.js(
        [ s.kw(`class`), ` `, s.c(`Visitor`), ` {` ],
        [ `    `, s.f(`Visit`), `(`, s.v(`object`), `) {` ],
        [ `        `, s.kw(`return`), ` `, s.v(`object`), `.`, s.f(`Accept`), `(`, s.kw(`this`), `);` ],
        [ `    }` ],
        [ `    ...` ],
        [ `}` ],
        [ `...` ],
        [ s.kw(`class`), ` `, s.c(`Number`), ` `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`Accept`), `(`, s.v(`visitor`), `) {` ],
        [ `        `, s.kw(`return`), ` `, s.v(`visitor`), `.`, s.f(`VisitNumber`), `(`, s.kw(`this`), `);` ],
        [ `    }` ],
        [ `}` ],
        [ `...` ],
        [ s.kw(`class`), ` `, s.c(`JSON`), ` `, s.kw(`extends`), ` `, s.c(`Visitor`), ` {` ],
        [ `    `, s.f(`VisitNumber`), `(`, s.v(`number`), `) { `, s.cm(`// заміщений`) ],
        [ `        `, s.kw(`return`), ` `, s.lt(`\`5\``), `;` ],
        [ `    }` ],
        [ `    ...` ],
        [ `}` ],
        [ `...` ],
        [ s.kw(`let`), ` `, s.v(`json`), `   = `, s.kw(`new`), ` `, s.c(`JSON`), `();` ],
        [ s.kw(`let`), ` `, s.v(`object`), ` = `, s.kw(`new`), ` `, s.c(`Number`), `();` ],
        [ `` ],
        [ s.kw(`let`), ` `, s.v(`result`), ` = `, s.v(`json`), `.`, s.f(`Visit`), `(`, s.v(`object`), `); `, s.cm(`// \`5\``) ],
    ),
]);
