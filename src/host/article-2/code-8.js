const s = require(`../../documenting`).shortcuts;
const { kw, lt, v } = s;


exports = module.exports = s.illustration( ...[
    `Оголошення змінної не конфліктує зі службовим словом.`,
    s.code(`qb`,
        [ v(`PRINT$`), ` = `, lt(`"text to be printed"`) ],
        [ kw(`PRINT`), ` `, v(`PRINT$`) ],
    ),
]);
