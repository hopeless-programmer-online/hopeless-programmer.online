const s = require(`../../server/documenting`).shortcuts;
const { kw, a } = s;


exports = module.exports = s.illustration( ...[
    `Використання препроцесору в мові С.`,
    s.code(`c`,
        [ kw(`#if`), ` `, a(`__MY_HEADER__`) ],
        [ kw(`#define`), ` `, a(`__MY_HEADER__`) ],
        [ kw(`#endif`) ],
    ),
]);
