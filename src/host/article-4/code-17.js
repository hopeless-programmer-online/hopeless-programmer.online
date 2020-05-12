const s = require(`../../documenting`).shortcuts;
const { kw, cm, f, c, v, lt } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Тепер обробкою усіх нецікавих класів займається метод VisitOther.`),
    s.code(
        [ kw(`class`), ` `, c(`Visitor`), ` {` ],
        [ `    `, f(`VisitOther`), `(`, v(`object`), `); `, cm(`  // абстрактний`) ],
        [ `    `, f(`VisitObject`), `(`, v(`object`), `) {`, cm(` // віртуальний`) ],
        [ `        `, kw(`return`), ` `, kw(`this`), `.`, f(`VisitOther`), `(`, v(`object`), `);` ],
        [ `    }` ],
        [ `    `, f(`VisitNumber`), `(`, v(`number`), `) {`, cm(` // віртуальний`) ],
        [ `        `, kw(`return`), ` `, kw(`this`), `.`, f(`VisitOther`), `(`, v(`number`), `);` ],
        [ `    }` ],
        [ `    `, f(`VisitString`), `(`, v(`string`), `) {`, cm(` // віртуальний`) ],
        [ `        `, kw(`return`), ` `, kw(`this`), `.`, f(`VisitOther`), `(`, v(`string`), `);` ],
        [ `    }` ],
        [ `    ...` ],
        [ `}` ],
        [ `...` ],
        [ kw(`class`), ` `, c(`JSON`), ` `, kw(`extends`), ` `, c(`Visitor`), ` {` ],
        [ `    `, cm(`// числа`) ],
        [ `    `, f(`VisitNumber`), `(`, v(`number`), `) {` ],
        [ `        `, kw(`return`), ` `, lt(`"number"`), `;` ],
        [ `    }` ],
        [ `    `, cm(`// решта типів`) ],
        [ `    `, f(`VisitOther`), `() {` ],
        [ `        `, kw(`return`), ` `, lt(`""`), `;` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
