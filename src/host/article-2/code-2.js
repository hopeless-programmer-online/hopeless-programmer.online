const s = require(`../../documenting`).shortcuts;
const { cm, kw } = s;


exports = module.exports = s.illustration( ...[
    ` Боротьба за зворотню сумісність в С++.`,
    s.code(
        [ kw(`[[deprecated]]`) ],
        [ `void f() `, cm(`// застаріла функція`) ],
        [ `{` ],
        [ `}` ],
        [ `` ],
        [ kw(`deprecated`), ` `, cm(`// чому не так?`) ],
        [ `void g()   `, cm(`// застаріла функція`) ],
        [ `{` ],
        [ `}` ],
    ),
]);
