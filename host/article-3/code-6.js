const s = require(`../../documenting`).shortcuts;
const { cm, c, f } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Вибір функції без результату за замовчуванням.`),
    s.cpp(
        [ c(`void`), ` `, f(`f`), `();` ],
        [ c(`int`), `  `, f(`f`), `();` ],
        [ `` ],
        [ f(`f`), `(); `, cm(`// void f()`) ],
    ),
]);
