const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Звичайни метод викликає віртуальний, який в свою чергу забезпечує поліморфізм.`),
    s.js(
        [ `class Pie` ],
        [ `{` ],
        [ `};` ],
        [ `class Baker` ],
        [ `{` ],
        [ `protected:` ],
        [ `    virtual std::shared_ptr<Pie> BakePie() = 0;` ],
        [ `public:` ],
        [ `    std::shared_ptr<Pie> Bake()` ],
        [ `    {` ],
        [ `        return BakePie();` ],
        [ `    }` ],
        [ `};` ],
    ),
]);
