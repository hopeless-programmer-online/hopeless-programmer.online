const s = require(`../../documenting`).shortcuts;
const { kw, a } = s;


exports = module.exports = s.illustration( ...[
    `Використання препроцесору в мові С.`,
    s.code(
        [ kw(`#if`), ` `, a(`__MY_HEADER__`) ],
        [ kw(`#define`), ` `, a(`__MY_HEADER__`) ],
        [ kw(`#endif`) ],
    ),
]);
