const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Ніяких проблем.`),
    s.cpp(
        [ `class Pie` ],
        [ `{` ],
        [ `public:` ],
        [ `    virtual ~Pie() = default;` ],
        [ `};` ],
        [ `` ],
        [ `class Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    virtual std::shared_ptr<Pie> Bake() = 0;` ],
        [ `};` ],
    ),
]);
