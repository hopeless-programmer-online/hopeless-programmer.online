const s = require(`../../documenting`).shortcuts;
const { cm, kw } = s;


exports = module.exports = s.illustration( ...[
    `Локальні та глобальні ідентифікатори в LLVM починаються з префіксів % та @ відповідно.`,
    s.code(
        [ kw(`define`), ` i32 @mul_add(i32 %x, i32 %y, i32 %z) { `, cm(`; глобальний ідентифікатор`) ],
        [ kw(`entry`), `:` ],
        [ `  %tmp  = mul i32 %x, %y    `, cm(`; локальний ідентифікатор`) ],
        [ `  %tmp2 = add i32 %tmp, %z  `, cm(`; ще один локальний ідентифікатор`) ],
        [ `  `, kw(`ret`), ` i32 %tmp2` ],
        [ `}` ],
    ),
]);
