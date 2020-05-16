const s = require(`../../documenting`).shortcuts;
const { f, c, cm } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`З коду не є очевидно яку саме функцію потрібно викликати. `),
    s.cpp(
        [ c(`int`), `   `, f(`f`), `();` ],
        [ c(`float`), ` `, f(`f`), `();` ],
        [ `` ],
        [ f(`f`), `(); `, cm(`// неоднозначність`) ],
    ),
]);
