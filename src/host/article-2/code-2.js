const s = require(`../../documenting`).shortcuts;
const { cm, kw, c, f } = s;


exports = module.exports = s.illustration( ...[
    `Боротьба за зворотню сумісність в С++.`,
    s.cpp(
        [ `[[`, kw(`deprecated`), `]]` ],
        [ c(`void`), ` `, f(`f`), `() `, cm(`// застаріла функція`) ],
        [ `{` ],
        [ `}` ],
        [ `` ],
        [ kw(`deprecated`), ` `, cm(`// чому не так?`) ],
        [ c(`void`), ` `, f(`g`), `()   `, cm(`// застаріла функція`) ],
        [ `{` ],
        [ `}` ],
    ),
]);
