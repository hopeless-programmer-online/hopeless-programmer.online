const s = require(`../../server/documenting`).shortcuts;
const { cm, c, f } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`Виклик функції, результат якої збігається з типом аргументу.`),
    s.cpp(
        [ c(`int`), `   `, f(`f`), `();` ],
        [ c(`float`), ` `, f(`f`), `();` ],
        [ `` ],
        [ c(`void`), `  `, f(`g`), `(`, c(`float`), `);` ],
        [ `` ],
        [ f(`g`), `(`, f(`f`), `()); `, cm(`// float f()`) ],
    ),
]);
