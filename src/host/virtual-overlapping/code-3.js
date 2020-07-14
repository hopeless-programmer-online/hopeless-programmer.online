const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Пироги та кондитери.`),
    s.js(
        [ `class Pie` ],
        [ `{` ],
        [ `public:` ],
        [ `    virtual ~Pie() = default;` ],
        [ `};` ],
        [ `` ],
        [ `class Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    virtual Pie* Bake() = 0;` ],
        [ `};` ],
    ),
]);
