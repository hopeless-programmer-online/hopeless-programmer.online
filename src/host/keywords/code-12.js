const s = require(`../../server/documenting`).shortcuts;
const { kw, lt, v } = s;


exports = module.exports = s.illustration( ...[
    `Робота зі службовими словами як з ідентифікаторами в С++.`,
    s.cpp(
        [ kw(`using`), ` `, kw(`@if`), `   = `, kw(`if`), `;` ],
        [ kw(`using`), ` `, kw(`@else`), ` = `, kw(`else`), `;` ],
        [ kw(`using`), ` `, kw(`@for`), `  = `, kw(`for`), `;` ],
        [ kw(`using`), ` `, kw(`@auto`), ` = `, kw(`auto`), `;` ],
        [ `` ],
        [ kw(`@for`), ` (`, kw(`@auto`), ` &`, v(`value`), ` : `, v(`values`), `)` ],
        [ `{` ],
        [ `    `, kw(`@if`), ` (`, v(`value`), ` > `, lt(`1.0`), `)` ],
        [ `    {` ],
        [ `        `, v(`value`), ` = `, lt(`1.0`), `;` ],
        [ `    }` ],
        [ `    `, kw(`@else`) ],
        [ `    {` ],
        [ `        `, v(`value`), ` *= `, v(`value`), `;` ],
        [ `    }` ],
        [ `}` ],
    ),
]);
