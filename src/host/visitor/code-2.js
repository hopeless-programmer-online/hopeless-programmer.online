const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Похідні класи реалізують `, s.link(`абстрактний метод`, `https://uk.wikipedia.org/wiki/%D0%90%D0%B1%D1%81%D1%82%D1%80%D0%B0%D0%BA%D1%82%D0%BD%D0%B8%D0%B9_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4`), ` з базового класу.`),
    s.js(
        [ s.kw(`class`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// абстрактний`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`Boolean`), ` `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// реалізація`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`Number`), `  `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// реалізація`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`String`), `  `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// реалізація`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`Array`), `   `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// реалізація`) ],
        [ `}` ],
        [ `` ],
        [ s.kw(`const`), ` `, s.v(`number`), ` = `, s.kw(`new`), ` `, s.c(`Number`), `();` ],
        [ s.v(`number`), `.`, s.f(`ToJSON`), `();` ],
    ),
]);
