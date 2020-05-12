const s = require(`../../documenting`).shortcuts;
const { kw, f, c, v, cm } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Тепер корові не обов'язково займатись диспетчеризацією.`),
    s.code(
        [ kw(`class`), ` `, c(`Visitor`), ` {` ],
        [ `    `, f(`VisitObject`), `(`, v(`object`), `, ...`, v(`others`), `) { `, cm(`// абстрактний`) ],
        [ `    ...` ],
        [ `}` ],
        [ `...` ],
        [ kw(`class`), ` `, c(`Object`), ` {` ],
        [ `    `, f(`Accept`), `(`, v(`visitor`), `, ...`, v(`others`), `) { `, cm(`// віртуальний`) ],
        [ `        `, kw(`return`), ` `, v(`visitor`), `.`, f(`VisitObject`), `(`, kw(`this`), `, ...`, v(`others`), `);` ],
        [ `    }` ],
        [ `}` ],
        [ kw(`class`), ` `, c(`Number`), ` `, kw(`extends`), ` `, c(`Object`), ` {` ],
        [ `    `, f(`Accept`), `(`, v(`visitor`), `, ...`, v(`others`), `) { `, cm(`// заміщений`) ],
        [ `        `, kw(`return`), ` `, v(`visitor`), `.`, f(`VisitNumber`), `(`, kw(`this`), `, ...`, v(`others`), `);` ],
        [ `    }` ],
        [ `}` ],
        [ `...` ],
        [ kw(`class`), ` `, c(`Cow`), ` `, kw(`extends`), ` `, c(`Object`), ` {` ],
        [ `    `, cm(`// нічого не заміщуємо!`) ],
        [ `}` ],
        [ `` ],
        [ kw(`let`), ` `, v(`visitor`), `  = `, kw(`new`), ` `, c(`Visitor`), `();` ],
        [ kw(`let`), ` `, v(`cow`), `      = `, kw(`new`), ` `, c(`Cow`), `();` ],
        [ `` ],
        [ v(`visitor`), `.`, f(`Visit`), `(`, v(`cow`), `); `, cm(`// Visitor.VisitObject`) ],
    ),
]);
