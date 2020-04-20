const s = require(`../../documenting`).shortcuts;
const { cm, kw, lt } = s;


exports = module.exports = s.illustration( ...[
    `Обмеження механізму спеціальних ідентифікаторів.`,
    s.code(
        [ kw(`var`), ` @      = `, lt(`1`), `; `, cm(`// помилка`) ],
        [ kw(`var`), ` cl@ss  = `, lt(`2`), `; `, cm(`// теж помилка`) ],
        [ kw(`var`), ` class@ = `, lt(`3`), `; `, cm(`// і це теж помилка`) ],
    ),
]);
