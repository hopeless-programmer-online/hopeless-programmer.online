const s = require(`../../documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Зі збільшенням кількості підтримуваних форматів росте і кількість методів.`),
    s.code(
        [ s.kw(`class`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// абстрактний`) ],
        [ `    `, s.f(`ToXML`), `();  `, s.cm(`// абстрактний`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`Boolean`), ` `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// реалізація`) ],
        [ `    `, s.f(`ToXML`), `();  `, s.cm(`// реалізація`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`Number`), `  `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// реалізація`) ],
        [ `    `, s.f(`ToXML`), `();  `, s.cm(`// реалізація`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`String`), `  `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// реалізація`) ],
        [ `    `, s.f(`ToXML`), `();  `, s.cm(`// реалізація`) ],
        [ `}` ],
        [ s.kw(`class`), ` `, s.c(`Array`), `   `, s.kw(`extends`), ` `, s.c(`Object`), ` {` ],
        [ `    `, s.f(`ToJSON`), `(); `, s.cm(`// реалізація`) ],
        [ `    `, s.f(`ToXML`), `();  `, s.cm(`// реалізація`) ],
        [ `}` ],
    ),
]);
