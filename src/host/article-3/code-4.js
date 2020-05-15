const s = require(`../../documenting`).shortcuts;
const { kw, cm, f, c } = s;


exports = module.exports = s.illustration( ...[
    s.sentence(`З коду не є очевидно з котрого з просторів імен потрібно викликати функцію. `),
    s.cpp(
        [ kw(`namespace`), ` `, c(`A`), ` {` ],
        [ `    `, c(`void`), ` `, f(`f`), `();` ],
        [ `}` ],
        [ kw(`namespace`), ` `, c(`B`), ` {` ],
        [ `    `, c(`void`), ` `, f(`f`), `();` ],
        [ `}` ],
        [ `` ],
        [ kw(`using`), ` `, kw(`namespace`), ` `, c(`A`), `;` ],
        [ kw(`using`), ` `, kw(`namespace`), ` `, c(`B`), `;` ],
        [ `` ],
        [ f(`f`), `();    `, cm(`// неоднозначність`) ],
        [ c(`A`), `::`, f(`f`), `(); `, cm(`// вирішення`) ],
    ),
]);
