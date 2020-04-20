const s = require(`../../documenting`).shortcuts;
const { kw, lt } = s;


exports = module.exports = s.illustration( ...[
    `Ідентифікатори "for", "auto", "if" та "else" є зарезервованими в С++ та використовуються в спеціальних конструкціях.`,
    s.code(
        [ kw(`for`), ` (`, kw(`auto`), ` &value : values)` ],
        [ `{` ],
        [ `    `, kw(`if`), ` (value > `, lt(`1.0`), `)` ],
        [ `    {` ],
        [ `        value = `, lt(`1.0`), `;` ],
        [ `    }` ],
        [ `    `, kw(`else`) ],
        [ `    {` ],
        [ `        value *= value;` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
