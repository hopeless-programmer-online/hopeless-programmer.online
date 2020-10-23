const s = require(`../../server/documenting`).shortcuts;
const {
    cs,
    kw,
    f,
    lt,
    c,
    v,
} = s;

exports = module.exports = s.illustration(s.sentence(cs(kw(`out`)), ` аргументи в C#. `), cs(...[
    [ kw(`public`), ` `, kw(`class`), ` `, c(`Program`) ],
    [ `{` ],
    [ `    `, kw(`public`), ` `, kw(`static`), ` `, c(`void`), ` `, f(`f`), `(`, kw(`out`), ` `, c(`int`), ` `, v(`x`), `) {` ],
    [ `        `, v(`x`), ` = `, lt(`5`), `;` ],
    [ `    }` ],
    [ `    `, kw(`public`), ` `, kw(`static`), ` `, c(`void`), ` `, f(`Main`), `()` ],
    [ `    {` ],
    [ `        `, c(`int`), ` `, v(`x`), ` = `, lt(`10`), `;` ],
    [ `        ` ],
    [ `        `, f(`f`), `(`, kw(`out`), ` `, v(`x`), `);` ],
    [ `    }` ],
    [ `}` ],
]));

