const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Заміна типу результату при заміщенні методу.`),
    s.cpp(
        [ `// "корицевий" пекар` ],
        [ `class CinnamonBaker:` ],
        [ `    public Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    // помилка std::shared_ptr<CinnamonPie> та` ],
        [ `    // std::shared_ptr<Pie> не є коваріантними` ],
        [ `    std::shared_ptr<CinnamonPie> Bake() override` ],
        [ `    {` ],
        [ `        return std::make_shared<CinnamonPie>();` ],
        [ `    }` ],
        [ `};` ],
    ),
]);
