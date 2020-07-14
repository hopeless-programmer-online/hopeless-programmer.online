const s = require(`../../server/documenting`).shortcuts;


exports = module.exports = s.illustration( ...[
    s.sentence(`Заміна типу результату при заміщенні методу.`),
    s.cpp(
        [ `// "корицевий" пекар` ],
        [ `class CinnamonBaker:` ],
        [ `    public Baker` ],
        [ `{` ],
        [ `public:` ],
        [ `    // повертаємо CinnamonPie* замість Pie*` ],
        [ `    CinnamonPie* Bake() override` ],
        [ `    {` ],
        [ `        return new CinnamonPie();` ],
        [ `    }` ],
        [ `};` ],
    ),
]);
