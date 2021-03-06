const s = require(`../../server/documenting`).shortcuts;
const { cm, kw, a, v, c, f } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Локальні та глобальні ідентифікатори в LLVM починаються з префіксів `, s.lexeme(`%`), ` та `, s.lexeme(`@`), ` відповідно.`),
    s.code(`llvm`,
        [ kw(`define`), ` `, c(`i32`), ` `, f(`@mul_add`), `(`, c(`i32`), ` `, a(`%x`), `, `, c(`i32`), ` `, a(`%y`), `, `, c(`i32`), ` `, a(`%z`), `) { `, cm(`; глобальний ідентифікатор`) ],
        [ kw(`entry`), `:` ],
        [ `  `, v(`%tmp`), `  = `, f(`mul`), ` `, c(`i32`), ` `, a(`%x`), `, `, a(`%y`), `    `, cm(`; локальний ідентифікатор`) ],
        [ `  `, v(`%tmp2`), ` = `, f(`add`), ` `, c(`i32`), ` `, v(`%tmp`), `, `, a(`%z`), `  `, cm(`; ще один локальний ідентифікатор`) ],
        [ `  `, kw(`ret`), ` `, c(`i32`), ` `, v(`%tmp2`) ],
        [ `}` ],
    ),
]);
