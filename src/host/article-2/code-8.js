const s = require(`../../documenting`).shortcuts;
const { kw } = s;


exports = module.exports = s.illustration( ...[
    `Оголошення змінної не конфліктує зі службовим словом.`,
    s.code(
        [ `PRINT$ = "text to be printed"` ],
        [ kw(`PRINT`), ` PRINT$` ],
    ),
]);
