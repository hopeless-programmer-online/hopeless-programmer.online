const s = require(`../../server/documenting`).shortcuts;
const { kw, v, f, a, cm, c, p } = s;


exports = module.exports = s.illustration( ...[
    `Зворотне перекриття поля класу аргументом в C#.`,
    s.code(`c#`,
        [ kw(`class`), ` `, c(`X`), ` {` ],
        [ `    `, c(`int`), ` `, v(`x`), `;` ],
        [ `    ` ],
        [ `    `, kw(`public`), ` `, c(`void`), ` `, f(`F`), `(`, c(`int`), ` `, a(`x`), `)` ],
        [ `    {` ],
        [ `        `, f(`print`), `(`, v(`x`), `);      `, cm(`// аргумент`) ],
        [ `        `, f(`print`), `(`, kw(`this`), `.`, p(`x`), `); `, cm(`// поле класу`) ],
        [ `    }` ],
        [ `}` ],
    ),
]);
