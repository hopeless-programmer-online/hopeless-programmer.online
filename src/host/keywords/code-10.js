const s = require(`../../server/documenting`).shortcuts;
const { kw } = s;


exports = module.exports = s.illustration( ...[
    `Теґи в html.`,
    s.code(`html`,
        [ kw(`<`), kw(`div`), kw(`>`) ],
        [ `    `, kw(`<`), kw(`b`), kw(`>`), `Hello, world!`, kw(`</`), kw(`b`), kw(`>`) ],
        [ kw(`</`), kw(`div`), kw(`>`) ],
    ),
]);
