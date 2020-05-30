const s = require(`../../documenting`).shortcuts;
const { lt, v, cm, c } = s;


exports = module.exports = s.illustration( ...[
    `В C# спроба перекрити змінну приведе до помилки.`,
    s.code(`c#`,
        [ c(`int`), ` `, v(`x`), ` = `, lt(`5`), `;` ],
        [ `...` ],
        [ `{` ],
        [ `    `, c(`int`), ` `, v(`x`), ` = `, lt(`10`), `; `, cm(`// помилка`) ],
        [ `}` ],
    ),
]);
