const s = require(`../../documenting`).shortcuts;
const { cm, kw } = s;


exports = module.exports = s.illustration( ...[
    `Обмеження механізму спеціальних ідентифікаторів.`,
    s.code(
        [ kw(`var`), ` @      = 1; `, cm(`// помилка`) ],
        [ kw(`var`), ` cl@ss  = 2; `, cm(`// теж помилка`) ],
        [ kw(`var`), ` class@ = 3; `, cm(`// і це теж помилка`) ],
    ),
]);
