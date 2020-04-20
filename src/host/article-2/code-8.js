const s = require(`../../documenting`).shortcuts;
const { kw, lt } = s;


exports = module.exports = s.illustration( ...[
    `Оголошення змінної не конфліктує зі службовим словом.`,
    s.code(
        [ `PRINT$ = `, lt(`"text to be printed"`) ],
        [ kw(`PRINT`), ` PRINT$` ],
    ),
]);
