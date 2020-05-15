const s = require(`../../documenting`).shortcuts;
const { cm, kw, lt, v } = s;


exports = module.exports = s.illustration( ...[
    `Обмеження механізму спеціальних ідентифікаторів.`,
    s.cs(
        [ kw(`var`), ` `, v(`@`), `      = `, lt(`1`), `; `, cm(`// помилка`) ],
        [ kw(`var`), ` `, v(`cl@ss`), `  = `, lt(`2`), `; `, cm(`// теж помилка`) ],
        [ kw(`var`), ` `, v(`class@`), ` = `, lt(`3`), `; `, cm(`// і це теж помилка`) ],
    ),
]);
