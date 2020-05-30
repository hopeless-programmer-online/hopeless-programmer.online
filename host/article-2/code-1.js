const s = require(`../../documenting`).shortcuts;
const { kw, lt, v } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Ідентифікатори `, kw(`for`), `, `, kw(`auto`), `, `, kw(`if`), ` та `, kw(`else`), ` є зарезервованими в С++ та використовуються в спеціальних конструкціях.`),
    s.cpp(
        [ kw(`for`), ` (`, kw(`auto`), ` &`, v(`value`), ` : `, v(`values`), `)` ],
        [ `{` ],
        [ `    `, kw(`if`), ` (`, v(`value`), ` > `, lt(`1.0`), `)` ],
        [ `    {` ],
        [ `        `, v(`value`), ` = `, lt(`1.0`), `;` ],
        [ `    }` ],
        [ `    `, kw(`else`) ],
        [ `    {` ],
        [ `        `, v(`value`), ` *= `, v(`value`), `;` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
