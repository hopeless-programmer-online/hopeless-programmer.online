const s = require(`../../documenting`).shortcuts;
const { kw, lt, v } = s;


exports = module.exports = s.illustration( ...[
    `Ідентифікатори "for", "auto", "if" та "else" є зарезервованими в С++ та використовуються в спеціальних конструкціях.`,
    s.code(
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
