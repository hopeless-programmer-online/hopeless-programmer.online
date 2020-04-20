const s = require(`../../documenting`).shortcuts;
const { kw } = s;


exports = module.exports = s.illustration( ...[
    `Використання препроцесору в мові С.`,
    s.code(
        [ kw(`#if`), ` __MY_HEADER__` ],
        [ kw(`#define`), ` __MY_HEADER__` ],
        [ kw(`#endif`) ],
    ),
]);
