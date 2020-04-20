const s = require(`../../documenting`).shortcuts;
const { kw, lt } = s;


exports = module.exports = s.illustration( ...[
    `Робота зі службовими словами як з ідентифікаторами в С++.`,
    s.code(
        [ kw(`using`), ` `, kw(`@if`), `   = `, kw(`if`), `;` ],
        [ kw(`using`), ` `, kw(`@else`), ` = `, kw(`else`), `;` ],
        [ kw(`using`), ` `, kw(`@for`), `  = `, kw(`for`), `;` ],
        [ kw(`using`), ` `, kw(`@auto`), ` = `, kw(`auto`), `;` ],
        [ `` ],
        [ kw(`@for`), ` (`, kw(`@auto`), ` &value : values)` ],
        [ `{` ],
        [ `    `, kw(`@if`), ` (value > `, lt(`1.0`), `)` ],
        [ `    {` ],
        [ `        value = `, lt(`1.0`), `;` ],
        [ `    }` ],
        [ `    `, kw(`@else`) ],
        [ `    {` ],
        [ `        value *= value;` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
