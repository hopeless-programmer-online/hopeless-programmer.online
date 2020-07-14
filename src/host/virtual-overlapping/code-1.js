const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Фабрика. `),
    s.js(
        [ `class Product` ],
        [ `{` ],
        [ `public:` ],
        [ `    virtual ~Product() = default;` ],
        [ `};` ],
        [ `` ],
        [ `class Factory` ],
        [ `{` ],
        [ `public:` ],
        [ `    virtual Product* Create() = 0;` ],
        [ `};` ],
    ),
]);
