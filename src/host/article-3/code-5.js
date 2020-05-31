const s = require(`../../documenting`).shortcuts;
const { kw, cm, f, c, v } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Явне приведення перевантаженої функції до певної сигнатури. `),
    s.cpp(
        [ c(`void`), ` `, f(`f`), `();` ],
        [ c(`void`), ` `, f(`f`), `();` ],
        [ `` ],
        [ kw(`auto`), ` `, v(`g`), ` = f;                              `, cm(`// неоднозначність`) ],
        [ kw(`auto`), ` `, v(`h`), ` = `, kw(`static_cast`), `<`, c(`void`), `(*)(`, c(`float`), `)>(`, f(`f`), `); `, cm(`// вирішення`) ],
    ),
]);
