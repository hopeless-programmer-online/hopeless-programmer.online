const s = require(`../../documenting`).shortcuts;
const { kw, c, v, lt, cm, f } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Проблеми при опрацьовуванні класів, які ми не хочемо підтримувати.`),
    s.code(
        [ kw(`class`), ` `, c(`JSON`), ` `, kw(`extends`), ` `, c(`Visitor`), ` {` ],
        [ `    `, cm(`// числа`) ],
        [ `    `, f(`VisitNumber`), `(`, v(`number`), `) {` ],
        [ `        `, kw(`return`), ` `, lt(`"number"`), `;` ],
        [ `    }` ],
        [ `    `, cm(`// решта типів`) ],
        [ `    `, f(`VisitRecord`), `() {` ],
        [ `        `, kw(`return`), ` `, lt(`""`), `;` ],
        [ `    }` ],
        [ `    `, f(`VisitBoolean`), `() {` ],
        [ `        `, kw(`return`), ` `, lt(`""`), `;` ],
        [ `    }` ],
        [ `    `, f(`VisitString`), `() {` ],
        [ `        `, kw(`return`), ` `, lt(`""`), `;` ],
        [ `    }` ],
        [ `    `, f(`VisitObject`), `() {` ],
        [ `        `, kw(`return`), ` `, lt(`""`), `;` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
